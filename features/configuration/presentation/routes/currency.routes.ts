import { Router } from "express";
import { getCurrency, postCurrency, putCurrency, deleteCurrency } from "../../domain/controllers/currency.controller";

const router = Router();

router.get('/:id', getCurrency);
router.get('/', getCurrency);
router.post('/', postCurrency);
router.put('/:id', putCurrency);
router.delete('/:id', deleteCurrency);

export default router;