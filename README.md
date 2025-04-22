# Stripe Basic Payment with Split Functionality

This repository demonstrates a basic implementation of Stripe payments with support for split payments using connected accounts.

## Features

- Create a Stripe Payment Intent for a connected account
- Split payments using `application_fee_amount`
- Confirm the Payment Intent

## Requirements

- Node.js
- Stripe account with at least one connected account
- Stripe API keys (Secret key)

## API Endpoints

### 1. Create Payment Intent

**URL:** `POST http://localhost:3000/create-payment-intent`

**Request Body:**

```json
{
  "amount": 5000,
  "currency": "usd",
  "connectedAccountId": "acct_XXXXXXXXXXXX",
  "applicationFeeAmount": 500
}
```

- amount: Total amount to charge (in the smallest currency unit, e.g., cents)

- currency: Currency code (e.g., usd)

- connectedAccountId: The ID of the Stripe connected account

- applicationFeeAmount: The fee your platform will take (in cents)


**Response :**

```json
{
  "clientSecret": "pi_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "paymentIntentId": "pi_XXXXXXXXXXXXXXXXXXX"
}
```


### 2. Confirm Payment Intent

**URL:** `POST http://localhost:3000/create-payment-confirm`

**Request Body:**

```json
{
  "paymentIntentId": "pi_XXXXXXXXXXXXXXXXXXXX",
  "connectedAccountId": "acct_XXXXXXXXXX"
}
```

- paymentIntentId: The ID of the Payment Intent to confirm

- connectedAccountId: The connected account associated with the Payment Intent


**Response :**

```json
{
  "status": "succeeded"
}
```

> ⚠️ **Work in Progress:** This project is currently under development. Features may change and not all functionality is fully implemented.
