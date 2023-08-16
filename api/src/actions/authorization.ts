import Tokenizer from "../infrastructure/tokenizer"
import users from "../users/data"

export default class Authorization {

  public static login(login: string, password: string): string {
    if (!this.isAuthorized(login, password)) return ''
    const payload = this.getHandle(login)
    return Tokenizer.generate({payload})
  }

  private static getHandle(login: string) {
    const found = users.find((user) => user.login == login)
    return found?.handle
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