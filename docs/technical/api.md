# API Documentation

## Overview

The project uses Next.js Route Handlers for API development. Swagger (OpenAPI) is integrated for discovery and testing.

## Standards

- **Endpoint Protection**: Private endpoints use `auth()` from NextAuth.
- **Response Format**: Consistent JSON responses.
- **Error Handling**: 4xx for client errors, 5xx for server errors with helpful `details` in development.

## Swagger

You can access the API documentation UI at:

- Local: `http://localhost:3000/api-docs` (if implemented/available)
- Production: `https://trung87.link/api-docs`

## Key API Routes

- `/api/auth/*`: NextAuth handlers.
- `/api/payment/create`: Generates PayOS checkout links.
- `/api/payment/verify`: Manual payment verification.
- `/api/webhook/payos`: Automatic payment callbacks.
