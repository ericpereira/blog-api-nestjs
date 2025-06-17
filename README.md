# Blog API

## Description
A simple RESTful API for managing blog posts and comments using NestJS, TypeORM, PostgreSQL, Docker, and Swagger for documentation.



## How to run with Docker

```bash
docker-compose up --build
```
This command will build the Docker image based on your Dockerfile and start both the API and the PostgreSQL database using Docker Compose.

Access Swagger UI: `http://localhost:3000/api`

## Endpoints

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `POST /api/posts/:id/comments`

## Next steps (if more time available)
- JWT authentication to protect creation endpoints
- Pagination and filters for posts
- Unit and integration tests
