resource "aws_cloudfront_origin_access_identity" "www_distribution" {
}

data "aws_iam_policy_document" "www_distribution" {
  statement {
    actions = ["s3:GetObject"]
    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.www_distribution.iam_arn}"]
    }
    resources = ["${aws_s3_bucket.frontend.arn}/*"]
  }
}

resource "aws_s3_bucket_policy" "web_distribution" {
  bucket = aws_s3_bucket.frontend.id
  policy = data.aws_iam_policy_document.www_distribution.json
}
resource "aws_cloudfront_distribution" "www_distribution" {
  origin {
    domain_name = aws_s3_bucket.frontend.bucket_regional_domain_name
    origin_id   = var.www_domain_name
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.www_distribution.cloudfront_access_identity_path
    }
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = var.www_domain_name
    min_ttl                = 20
    default_ttl            = 3600
    max_ttl                = 86400

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  aliases = ["${var.www_domain_name}"]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.certificate.arn
    ssl_support_method  = "sni-only"
  }
}
