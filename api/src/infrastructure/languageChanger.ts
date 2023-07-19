import { NextFunction, Request, Response } from "express"
import { i18n } from "i18next"

const changer = (request: Request, response: Response, next: NextFunction)=> {
  const locale: string = request.body.locale
  if(locale){
    const translator: i18n = request.i18n
    translator.changeLanguage(locale)
  }

  next()
}

export default changer