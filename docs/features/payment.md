# PayOS Integration Guide

## 1. Configuration (Setup)

### Environment Variables

| Variable                    | Usage                                          | Source             |
| :-------------------------- | :--------------------------------------------- | :----------------- |
| `PAYOS_CLIENT_ID`           | API Client identifier                          | PayOS Dashboard    |
| `PAYOS_API_KEY`             | Transaction signing key                        | PayOS Dashboard    |
| `PAYOS_CHECKSUM_KEY`        | Data verification key                          | PayOS Dashboard    |
| `SUPABASE_SERVICE_ROLE_KEY` | **Critical**: Admin key for Webhook DB updates | Supabase Dashboard |

### Webhook URL

Must be configured in PayOS Dashboard:

- `https://trung87.link/api/webhook/payos`

## 2. Architecture (Flow)

The payment loop ensures data integrity even if the user closes the browser:

1. **Request**: `POST /api/payment/create` -> Saves `pending` enrollment in DB (Supabase).
2. **Provider**: PayOS receives request -> Returns Checkout URL.
3. **User**: Completes payment on PayOS UI.
4. **Trigger**: PayOS sends Webhook to `/api/webhook/payos`.
5. **Update**: Webhook uses `Service Role Key` to update enrollment to `paid`.

## 3. Actionable Code (Maintenance)

### Key Files

- **Payment API**: `src/app/api/payment/create/route.js`
- **Verification API**: `src/app/api/payment/verify/route.js`
- **Webhook Handler**: `src/app/api/webhook/payos/route.js`
- **PayOS Util**: `src/utils/payos/index.js`

### Debugging & Fixes

- **Error**: `Payment initialization failed` -> Check if all 3 PAYOS env vars are in Vercel.
- **Error**: Payment successful but user still "Unpaid" -> Check Webhook logs on PayOS Dashboard; ensure `SUPABASE_SERVICE_ROLE_KEY` is correct.
- **Manual Check**: Run `node scripts/payment/test-payment-logic.js` to simulate the flow.
