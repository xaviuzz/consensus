import Stash from "../infrastructure/stash"

class Identity{

  private static readonly BASE_URL = 'http://localhost:3000'

  public static isIdentified():boolean{
    const token = Stash.retrieveToken()
    return token != ''
  }

  public static async check(login:string,password:string):Promise<string>{
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({message: {login,password}})
    }
    const response: Response = await fetch( this.BASE_URL + '/login', options)
    const parsed = await response.json()
    return parsed.message.token
  }
}

export default Identity