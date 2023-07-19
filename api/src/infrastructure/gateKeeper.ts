import { NextFunction, Request, Response } from "express"
import Tokenizer from "./tokenizer"
import { JwtPayload } from "jsonwebtoken"

const keeper = (request: Request, response: Response, next:NextFunction)=> {
  const authHeader = request.headers.authorization
  const {t}=request.i18n

  if (!authHeader) {
    return response.status(401).json({ error: t('not.authorized') })
  }

  const token = authHeader?.split(" ")[1]
  try {
    const payload:JwtPayload = Tokenizer.verify(token!) 
    request.body= {...request.body , token: payload}
  } catch (error) {
    return response.status(401).json({ error: t('not.authorized')})
  }
  next()
}

export default keeper