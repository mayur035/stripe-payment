import { NextFunction, Request, Response, Router } from "express";
import { stripe } from "../util/stripe";

const router = Router();

router.post("create-checkout-session", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      }],
      mode: 'payment',
      ui_mode: 'embedded',
      return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
    })

    res.send({clientSecret: session.client_secret});
  } catch (error) {
    throw error;
  }
});
