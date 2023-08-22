import { NextFunction, Request, Response } from "express"
import Tokenizer from "./tokenizer"
import { JwtPayload } from "jsonwebtoken"
import Message from "./message"

const keeper = (request: Request, response: Response, next:NextFunction)=> {
  const authHeader = request.headers.authorization
  const {t}=request.i18n
  const output:Message = new Message({ error: t('not.authorized')})

  if (!authHeader) {
    return response.status(401).json(output)
  }

  const token = authHeader?.split(" ")[1]
  try {
    const payload:JwtPayload = Tokenizer.verify(token!) 
    request.body= {...request.body , token: payload}
  } catch (error) {
    return response.status(401).json(output)
  }
  next()
}

export default keeper