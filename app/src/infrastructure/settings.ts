export default class Settings{
  
  public static baseUrl():string{
    return 'http://consensus-api:3000'
  }

  public static appName():string{
    return 'CONSENSUS'
  }

  public static loginPath():string{
    return '/login'
  }
}