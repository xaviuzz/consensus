import { Request, Response, Router } from "express"
import Authorization from "../actions/authorization"
import Message from "../infrastructure/message"

const LoginRouter = Router()

LoginRouter.post('/login', (request: Request, response: Response) => {
  const data = Message.dataFrom(request)
  if (!data)return response.send({})

  const login: string = data.login
  const password: string = data.password
  const token: string = Authorization.login(login, password)

  const output = new Message({token}) 
  response.send(output)
})



export default LoginRouter