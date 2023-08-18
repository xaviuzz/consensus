import Stash from '../infrastructure/stash'

type IdentityData={
  handle: string
}

class Identity{

  private static readonly BASE_URL = 'http://localhost:3000'
  

  public static isIdentified():boolean{
    const token = Stash.retrieveToken()
    return token != ''
  }

  public static data():IdentityData{
    return {
      handle: Stash.retrieveHandle()
    }
  }

  public static async check(login:string,password:string):Promise<string>{
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message: {login,password}})
    }
    const response: Response = await fetch( this.BASE_URL + '/login', options)
    const parsed = await response.json()
    const token = parsed.message.token.trim()
    if(token) {
      Stash.saveToken(token)
    }
    return token
  }

}

export default Identity