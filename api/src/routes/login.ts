import { Request, Response, Router } from "express"
import Authorization from "../actions/authorization"

const LoginRouter = Router()

LoginRouter.post('/login', (request: Request, response: Response) => {
  const userName: string = request.body.userName
  const password: string = request.body.password

  const token: string = Authorization.login(userName, password)
  response.send({ token })
})



export default LoginRouter