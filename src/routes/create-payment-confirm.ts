import { NextFunction, Request, Response, Router } from "express";
import { stripe } from "../util/stripe";

const router = Router();

router.post("/create-payment-confirm", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { paymentIntentId, paymentMethod, connectedAccountId } = req.body;

    const paymentConfirmed = await stripe.paymentIntents.confirm(
      paymentIntentId,
      {
        payment_method: "pm_card_visa",
      },
      {
        stripeAccount: connectedAccountId,
      }
    );
    res.send({
      status: paymentConfirmed.status,
    });
  } catch (error) {
    throw error;
  }
});

export default router;
