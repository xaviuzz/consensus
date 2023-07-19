import Settings from "./settings"
import jwt, { JwtPayload } from "jsonwebtoken"

export default class Tokenizer {
  public static generate(data: object): string {
    const token: string = jwt.sign(data, Settings.jwtSecret())
    return token
  }

  public static verify(token:string):JwtPayload{
    const payload: JwtPayload = jwt.verify(token!, Settings.jwtSecret()) as JwtPayload
    return payload
  }

}