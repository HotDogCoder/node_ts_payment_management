import { Request, Response } from "express";

export const getPayment = (req: Request, res: Response) => {
    const {id} = req.params;
    res.json({
        id: id,
        msg: 'getPayment'
    });
}

export const postPayment = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        msg: "postPayment",
        body
    })
}