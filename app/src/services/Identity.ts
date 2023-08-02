import Stash from "../infrastructure/stash"

class Identity{
  public static isIdentified():boolean{
    const token = Stash.retrieveToken()
    return token != ''
  }

  public static async check(login:string,password:string):Promise<string>{
    return Promise.resolve("")
  }
}

export default Identity