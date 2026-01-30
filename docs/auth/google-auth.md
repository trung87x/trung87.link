# Google Authentication Guide

## 1. Configuration (Setup)

### Environment Variables

| Variable             | Usage              | Source                    |
| :------------------- | :----------------- | :------------------------ |
| `AUTH_GOOGLE_ID`     | Client identifier  | Google Cloud Console      |
| `AUTH_GOOGLE_SECRET` | Secret key         | Google Cloud Console      |
| `AUTH_SECRET`        | Session Encryption | `openssl rand -base64 33` |

### Google Cloud Console

- **Authorized JavaScript origins**: `https://trung87.link`, `http://localhost:3000`
- **Authorized redirect URIs**:
  - `https://trung87.link/api/auth/callback/google`
  - `http://localhost:3000/api/auth/callback/google`

## 2. Architecture (Flow)

NextAuth (Auth.js) handles the server-side OAuth 2.0 flow:

1. User triggers `/api/auth/signin/google`.
2. Provider redirects to Google Consent.
3. Callback received at `/api/auth/callback/google`.
4. Session created & stored in `authjs.session-token` cookie.

## 3. Actionable Code (Files)

- **Configuration Hub**: `src/utils/auth/index.js` (Defines providers and callbacks).
- **Client Components**: Use `signIn()` and `signOut()` from `next-auth/react`.
- **Server Components**: Use `await auth()` to get the current session.
- **Middleware**: Used to protect routes (if implemented).

> [!TIP]
> To add a new provider (e.g., GitHub), update `src/utils/auth/index.js` and add the required env variables.
