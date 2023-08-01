import { NextFunction, Request, Response } from "express"
import { i18n } from "i18next"

const changer = (request: Request, response: Response, next: NextFunction)=> {
  if(!request.body.message)return next()
  if(!request.body.message.locale)return next()

  const locale: string = request.body.message.locale
  const translator: i18n = request.i18n
  translator.changeLanguage(locale)
  next()
}

export default changer