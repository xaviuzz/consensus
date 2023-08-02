export default class Stash{
  private static readonly tokenKey:string='JWTTKN'
  
  public static saveToken(token:string):void{
    localStorage.setItem(this.tokenKey,token)
  }

  public static retrieveToken():string{
    return localStorage.getItem(this.tokenKey) || ''
  }

}