terraform {
  backend "s3" {
    bucket = "terraform-20211104180057093400000002"
    key    = "tf"
    region = "eu-west-1"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "eu-west-1"
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

resource "aws_s3_bucket" "b" {
  acl = "private"

  tags = {
    Name        = "TF bucket"
    Environment = "Dev"
  }
}

resource "aws_acm_certificate" "certificate" {
  provider                  = aws.us-east-1
  domain_name               = "*.${var.root_domain_name}"
  validation_method         = "EMAIL"
  subject_alternative_names = ["${var.root_domain_name}"]

  lifecycle {
    create_before_destroy = true
  }
}
