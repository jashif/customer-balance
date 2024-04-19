
variable "project" {
  type    = string
  default = "customer-balance-420809"
}
variable "region" {
  type    = string
  default = "europe-west3"
}
variable "service" {
  type    = string
  default = "customer-balance"
}
variable "app_version" {
  type    = string
  default = "2"
}

variable "pg_password" {
  type = string
}

variable "pg_user" {
  type = string
}

variable "pg_db_name" {
  type = string
}

variable "pg_host" {
  type = string
}
