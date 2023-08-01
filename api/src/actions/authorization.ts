import Tokenizer from "../infrastructure/tokenizer"
import users from "../users/data"

export default class Authorization {

  public static login(login: string, password: string): string {
    if (!this.isAuthorized(login, password)) return ''
    return Tokenizer.generate({login, password})
  }

  private static isAuthorized(login: string, password: string): boolean {
    const found = users.find((user) => {
      const sameUser: boolean = user.login == login
      const samePassword: boolean = user.password == password
      return sameUser && samePassword
    })
    return Boolean(found)
  }

}