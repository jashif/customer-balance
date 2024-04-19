# Customer balance Application
[Docs](https://customer-balance-ti2qwthvqa-ey.a.run.app/api-docs/)

## Overview

This project is a simple REST-based NodeJS api with a add balance event and get balances functionality. It allows system to save a balance event, and get the current balances of a customer based on reason for a period.

## Getting Started

### Prerequisites

- NodeJS 18 or higher

### Installation

1. Clone the repository:

   ```
   git clone git@github.com:jashif/customer-balance.git

   ```

2. Navigate to the project directory:
3. Download and install the project dependencies:

### Running the Application

Run the application using:

```bash
yarn install
yarn start:server
```
### Running the Application Using Task file

Taskfile is a simple task runner that allows you to define and run tasks with shell commands. It is a simple way to define tasks in a single file and run them with a simple command.
more reference [Taskfile](https://taskfile.dev/#/)

Run the application using:

```bash
task install
task start PG_USER={{PG_USER}} PG_PASSWORD={{PG_PASSWORD}} PG_HOST={{PG_HOST}} PG_DB_NAME={{PG_DB_NAME}}
```

## API Endpoints

- `POST /api/events/:retailUnitCode/:customerId`: creates a balance event.
- `GET /api/events/:retailUnitCode/:customerId/:reason/:period`: Get a customer's balance for a given reason and period.

## Project Structure and Discussion

### 1. Project Structure

The project is organized into several packages:

- `services`: contains microservices.
  - `api`: Contains the api/controller implementation.
  - `utils`: Contains the utilities.
  - `core`: Contains the business logic.
  - `infra`: contains the data layer.
- `utils`: contains project utilities.
