provider "google" {
  project = var.project
  region  = var.region
}



resource "google_cloud_run_service" "my-service" {
  name     = var.service
  location = var.region
  template {
    spec {
      containers {
        image = "gcr.io/${var.project}/${var.service}:latest"
        env {
          name  = "PG_USER"
          value = var.pg_user
        }
        env {
          name  = "PG_PASSWORD"
          value = var.pg_password
        }
        env {
          name  = "PG_DB_NAME"
          value = var.pg_db_name
        }
        env {
          name  = "PG_HOST"
          value = var.pg_host
        }
        env {
          name  = "VERSION"
          value = var.app_version
        }
      }

    }
  }
}
