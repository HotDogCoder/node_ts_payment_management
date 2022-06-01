import { Request, Response } from "express";
import Currency from "../../application/models/currency.model";

export const getCurrency = async (req: Request, res: Response) => {
    const {
        id
    } = req.params;

    const {
        page,
        pageSize
    } = req.query;

    var currencies = null;

    if(id){
        currencies = await Currency.findByPk(id);
    } else {
        currencies = await Currency.findAll();
    }

    res.json({
        id: id,
        msg: 'getCurrency',
        data: currencies
    });
}

export const postCurrency = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const exist = await Currency.findOne(
            {
                where: {
                    shortDescription: body.shortDescription
                }
            }
        )

        if(exist){
            res.status(400).json(
                {
                    error: 'Ya se tiene esta moneda agregada'
                }
            )
        } else {
            const currency = Currency.build(body);
            await currency.save();
            res.json({
                msg: "postCurrency",
                currency
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error en postCurrency',
            error: error
        })
    }
}

export const putCurrency = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const currency = await Currency.findByPk(id);
        if(!currency){
            res.status(404).json(
                {
                    error: 'no existe una moneda con ese el id ' + id
                }
            )
        } else {
            await currency.update(body);
            await currency.save();
            res.json({
                msg: "putCurrency",
                currency
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "Error en putCurrency",
            error: error
        })
    }
}

export const deleteCurrency = async (req: Request, res: Response) => {
    const { body } = req;

    const { id } = req.params;

    try {
        const currency = await Currency.findByPk(id);
        if(currency) {
            if(body.flag) {
                await currency.destroy();
            } else {
                await currency.update({status: 0})
            }

            res.json({
                msg: `Moneda ${body.flag ? 'eliminada':'anulada'}`,
                currency
            })
        } else {
            res.status(404).json({
                msg: 'No hay una moneda con ese id'
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error en deleteCurrency',
            error
        })
    }
}