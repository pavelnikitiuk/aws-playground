locals {
  mime_types = jsondecode(file("./mime.json"))


  website_files = fileset(var.public_root, "**")

  file_hashes = {
    for filename in local.website_files :
    filename => filemd5("${var.public_root}/${filename}")
  }

}
