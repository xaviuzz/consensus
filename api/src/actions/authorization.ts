import Tokenizer from "../infrastructure/tokenizer"
import users from "../users/data"

export default class Authorization {

  public static login(userName: string, password: string): string {
    if (!this.isAuthorized(userName, password)) return ''
    return Tokenizer.generate({userName, password})
  }

  private static isAuthorized(userName: string, password: string): boolean {
    const found = users.find((user) => {
      const sameUser: boolean = user.userName == userName
      const samePassword: boolean = user.password == password
      return sameUser && samePassword
    })
    return Boolean(found)
  }

}