resource "aws_s3_bucket" "frontend" {
  bucket = var.www_domain_name
  acl    = "private"
  versioning {
    enabled = true
  }
  website {
    index_document = "index.html"
    error_document = "404.html"
  }
  tags = {
    "Name"        = "Frontend bucket"
    "Environment" = "Dev"
  }
}

resource "aws_s3_bucket_object" "object" {
  for_each      = fileset("../../public/", "**/*")
  bucket        = aws_s3_bucket.frontend.id
  key           = each.value
  cache_control = regex("\\.[^.]+$", each.value) == ".html" ? "no-cache" : null
  source        = "../../public/${each.value}"
  content_type  = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
  etag          = filemd5("../../public/${each.value}")
}


# invalidation  
resource "null_resource" "invalidate_cache" {
  provisioner "local-exec" {
    command = "aws cloudfront create-invalidation --distribution-id=${aws_cloudfront_distribution.www_distribution.id} --paths=/*"
  }
}
