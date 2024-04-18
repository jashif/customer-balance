# Customer balance Application

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
## API Endpoints

- `POST /api/events/:retailUnitCode/:customerId`: creates a balance event.
- `GET /api/events/:retailUnitCode/:customerId/:reason/:period`: Get a customer's balance for a given reason and period.

## Project Structure and Discussion

### 1. Project Structure

The project is organized into several packages:

- `api`: Contains the api/controller implementation.
- `routes`: Contains the api routes.
- `core`: Contains the business logic.
