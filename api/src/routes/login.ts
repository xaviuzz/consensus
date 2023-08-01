import { Request, Response, Router } from "express"
import Authorization from "../actions/authorization"

const LoginRouter = Router()

LoginRouter.post('/login', (request: Request, response: Response) => {
  if (!request.body.message)return response.send({})
  const login: string = request.body.message.login
  const password: string = request.body.message.password

  const token: string = Authorization.login(login, password)
  response.send({ message:{token} })
})



export default LoginRouter