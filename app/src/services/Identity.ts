class Identity{
  public static isIdentified():boolean{
    return false
  }

  public static async check(login:string,password:string):Promise<string>{
    return Promise.resolve("")
  }
}

export default Identity