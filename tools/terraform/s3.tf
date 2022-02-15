resource "aws_s3_bucket" "frontend" {
  bucket = var.www_domain_name
  acl    = "public-read"
  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"AddPerm",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${var.www_domain_name}/*"]
    }
  ]
}
POLICY

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
  for_each     = fileset("../../public/", "**/*")
  bucket       = aws_s3_bucket.frontend.id
  key          = each.value
  source       = "../../public/${each.value}"
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
}


# invalidation  
resource "null_resource" "invalidate_cache" {
  triggers = local.file_hashes

  provisioner "local-exec" {
    command = "aws cloudfront create-invalidation --distribution-id=${aws_cloudfront_distribution.www_distribution.id} --paths=/*"
  }
}
