export default class Stash{
  private static readonly tokenKey:string='JWTTKN'
  private static readonly handleKey:string='Handle'
  
  public static saveToken(token:string):void{
    localStorage.setItem(this.tokenKey,token)
  }

  public static retrieveToken():string{
    return localStorage.getItem(this.tokenKey) || ''
  }

  public static saveHandle(handle:string):void{
    localStorage.setItem(this.handleKey,handle)
  }

  public static retrieveHandle():string{
    return localStorage.getItem(this.handleKey) || ''
  }


}