# ESAPI


## Project Description

This project is an E-commerce API built with Express.js and Sequelize. It provides CRUD functionality for categories, products, tags, and product-tag associations. The API uses a MySQL database for data storage.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Testing with Insomnia Core](#testing-with-insomnia-core)
- [Troubleshooting](#troubleshooting)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASS=your_database_password
DB_HOST=your_database_host
DB_PORT=your_database_port
PORT=4000
```

## Database Setup

1. Create the database and tables:
    ```sh
    node seeders/seed.js
    ```

2. Seed the database with test data:
    ```sh
    node seeders/seed.js
    ```

## Running the Server

Start the server using the following command:
```sh
node app.js
```
The server will run on port 4000 or the port specified in your `.env` file.

## API Endpoints

### Categories
- **GET** `/api/categories` - Get all categories
- **GET** `/api/categories/:id` - Get a single category by ID
- **POST** `/api/categories` - Create a new category
- **PUT** `/api/categories/:id` - Update a category by ID
- **DELETE** `/api/categories/:id` - Delete a category by ID

### Products
- **GET** `/api/products` - Get all products
- **GET** `/api/products/:id` - Get a single product by ID
- **POST** `/api/products` - Create a new product
- **PUT** `/api/products/:id` - Update a product by ID
- **DELETE** `/api/products/:id` - Delete a product by ID

### Tags
- **GET** `/api/tags` - Get all tags
- **GET** `/api/tags/:id` - Get a single tag by ID
- **POST** `/api/tags` - Create a new tag
- **PUT** `/api/tags/:id` - Update a tag by ID
- **DELETE** `/api/tags/:id` - Delete a tag by ID

### Product Tags
- **GET** `/api/productTags` - Get all product-tag associations
- **GET** `/api/productTags/:id` - Get a single product-tag association by ID
- **POST** `/api/productTags` - Create a new product-tag association
- **PUT** `/api/productTags/:id` - Update a product-tag association by ID
- **DELETE** `/api/productTags/:id` - Delete a product-tag association by ID

## Testing with Insomnia Core

1. **Create a New Request Collection:**
   - Name it something like "E-commerce API".

2. **Add Requests to the Collection:**
   - For each type of request (GET, POST, PUT, DELETE), add a new request to the collection.
   - Set the appropriate method and URL.
   - For POST and PUT requests, add the JSON body.

### Example Requests

#### GET Requests
- **Get All Categories:** `GET http://localhost:4000/api/categories`
- **Get All Products:** `GET http://localhost:4000/api/products`
- **Get All Tags:** `GET http://localhost:4000/api/tags`
- **Get Single Category:** `GET http://localhost:4000/api/categories/1`
- **Get Single Product:** `GET http://localhost:4000/api/products/1`
- **Get Single Tag:** `GET http://localhost:4000/api/tags/1`

#### POST Requests
- **Create Category:**
  - **URL:** `POST http://localhost:4000/api/categories`
  - **Body:**
    ```json
    {
      "category_name": "New Category"
    }
    ```

- **Create Product:**
  - **URL:** `POST http://localhost:4000/api/products`
  - **Body:**
    ```json
    {
      "product_name": "New Product",
      "price": 29.99,
      "stock": 15,
      "category_id": 1
    }
    ```

- **Create Tag:**
  - **URL:** `POST http://localhost:4000/api/tags`
  - **Body:**
    ```json
    {
      "tag_name": "New Tag"
    }
    ```

#### PUT Requests
- **Update Category:**
  - **URL:** `PUT http://localhost:4000/api/categories/1`
  - **Body:**
    ```json
    {
      "category_name": "Updated Category"
    }
    ```

- **Update Product:**
  - **URL:** `PUT http://localhost:4000/api/products/1`
  - **Body:**
    ```json
    {
      "product_name": "Updated Product",
      "price": 39.99,
      "stock": 25,
      "category_id": 1
    }
    ```

- **Update Tag:**
  - **URL:** `PUT http://localhost:4000/api/tags/1`
  - **Body:**
    ```json
    {
      "tag_name": "Updated Tag"
    }
    ```

#### DELETE Requests
- **Delete Category:** `DELETE http://localhost:4000/api/categories/1`
- **Delete Product:** `DELETE http://localhost:4000/api/products/1`
- **Delete Tag:** `DELETE http://localhost:4000/api/tags/1`

## Troubleshooting

- Ensure your `.env` file is correctly configured.
- Verify that your database is running and accessible.
- Check the server logs for any errors or issues.
- Ensure you are using the correct HTTP methods and URLs in your requests.

For any issues, please refer to the documentation or seek help from the community.