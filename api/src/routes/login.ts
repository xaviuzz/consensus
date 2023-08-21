import { Request, Response, Router } from "express"
import Authorization from "../actions/authorization"

const LoginRouter = Router()

LoginRouter.post('/login', (request: Request, response: Response) => {
  const data = request.body.data
  if (!data)return response.send({})
  const login: string = data.login
  const password: string = data.password

  const token: string = Authorization.login(login, password)
  response.send({ data:{token} })
})



export default LoginRouter