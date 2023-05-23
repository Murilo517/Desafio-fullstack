import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const validadeDataMiddleware =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validadedData = schema.parse(req.body);
    req.body = validadedData;

    return next();
  };

export { validadeDataMiddleware };
