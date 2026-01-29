# NextAuth.js (Auth.js v5) Implementation Walkthrough

I have integrated Google Authentication into your project using NextAuth.js.

## Changes Made

### 1. Authentication Configuration

- Added [auth.js](file:///c:/Users/home/Github/work/trung87.link/src/auth.js) to manage the NextAuth logic and Google Provider.
- Created the API route at [route.js](file:///c:/Users/home/Github/work/trung87.link/src/app/api/auth/[...nextauth]/route.js) to handle sign-in/callback requests.

### 2. UI Components

- Created a new [AuthButton.jsx](file:///c:/Users/home/Github/work/trung87.link/src/components/AuthButton.jsx) component that displays the user's name/email when logged in and a "Login with Google" button when logged out.
- Integrated the `AuthButton` into the main [layout.jsx](file:///c:/Users/home/Github/work/trung87.link/src/app/layout.jsx) Navbar.

### 3. Middleware & Security

- Added [middleware.js](file:///c:/Users/home/Github/work/trung87.link/src/middleware.js) to allow authentication checks on protected routes.
- Generated and saved an `AUTH_SECRET` in your [.env.local](file:///c:/Users/home/Github/work/trung87.link/.env.local).

## What's Next?

To make the "Login with Google" button work, you need to:

1.  Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2.  Create a new project (if you haven't).
3.  Configure the "OAuth consent screen".
4.  Create "OAuth 2.0 Client IDs":
    - **Application type**: Web application.
    - **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google` (for local test) and `https://trung87.link/api/auth/callback/google` (for production).
5.  Copy the **Client ID** and **Client Secret** into your [.env.local](file:///c:/Users/home/Github/work/trung87.link/.env.local) at:
    - `AUTH_GOOGLE_ID`
    - `AUTH_GOOGLE_SECRET`
6.  Restart your local server (`pnpm dev`).
