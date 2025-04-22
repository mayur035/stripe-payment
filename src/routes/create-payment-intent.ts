import { NextFunction, Request, Response, Router } from "express";
import { stripe } from "../util/stripe";

const router = Router();

router.post("/create-payment-intent", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { amount, currency, connectedAccountId, applicationFeeAmount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount,
        currency,
        application_fee_amount: applicationFeeAmount,
        automatic_payment_methods: { enabled: true, allow_redirects: "never" },
      },
      {
        stripeAccount: connectedAccountId,
      }
    );
    res.send({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    throw error;
  }
});

export default router;
