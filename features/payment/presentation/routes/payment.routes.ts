import { Router } from "express";
import { getPayment, postPayment } from "../../domain/controllers/payment.controller";

const router = Router();

router.get('/:id', getPayment);
router.post('/', getPayment);

export default router;