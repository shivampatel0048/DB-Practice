# WikiDB Express.js Application

This is a simple Express.js application that serves as a basic example of how to create a RESTful API for managing articles in a MongoDB database. The application allows you to perform CRUD (Create, Read, Update, Delete) operations on articles.

## Prerequisites

Before running the application, make sure you have the following installed on your system:

- Node.js
- MongoDB

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Install the required Node.js packages:

   ```bash
   npm install
   ```

3. Start the MongoDB server on your local machine. You can do this by running:

   ```bash
   mongod
   ```

4. Start the Express.js server:

   ```bash
   npm start
   ```

The server should now be running on port 3000.

## API Endpoints

### 1. Retrieve all articles

- **Endpoint:** `/articles`
- **HTTP Method:** GET
- **Description:** Retrieves all articles stored in the database.

### 2. Create a new article

- **Endpoint:** `/articles`
- **HTTP Method:** POST
- **Description:** Creates a new article with the provided title and content.

### 3. Delete all articles

- **Endpoint:** `/articles`
- **HTTP Method:** DELETE
- **Description:** Deletes all articles in the database.

### 4. Retrieve a specific article

- **Endpoint:** `/articles/:articleTitle`
- **HTTP Method:** GET
- **Description:** Retrieves a specific article based on the provided `articleTitle`.

### 5. Update a specific article (PUT)

- **Endpoint:** `/articles/:articleTitle`
- **HTTP Method:** PUT
- **Description:** Updates a specific article based on the provided `articleTitle`. You need to provide new title and content in the request body.

### 6. Update a specific article (PATCH)

- **Endpoint:** `/articles/:articleTitle`
- **HTTP Method:** PATCH
- **Description:** Partially updates a specific article based on the provided `articleTitle`. You can provide any fields you want to update in the request body.

### 7. Delete a specific article

- **Endpoint:** `/articles/:articleTitle`
- **HTTP Method:** DELETE
- **Description:** Deletes a specific article based on the provided `articleTitle`.

## Example Usage

Here are some example requests you can make using tools like Postman or cURL to interact with the API:

- **Create a new article:**

  ```
  POST http://localhost:3000/articles
  {
      "title": "Sample Article",
      "content": "This is some sample content."
  }
  ```

- **Retrieve all articles:**

  ```
  GET http://localhost:3000/articles
  ```

- **Retrieve a specific article:**

  ```
  GET http://localhost:3000/articles/Sample%20Article
  ```

- **Update a specific article (PATCH):**

  ```
  PATCH http://localhost:3000/articles/Sample%20Article
  {
      "content": "Updated content."
  }
  ```

- **Delete a specific article:**

  ```
  DELETE http://localhost:3000/articles/Sample%20Article
  ```

## Contributors

@shivampatel0048
