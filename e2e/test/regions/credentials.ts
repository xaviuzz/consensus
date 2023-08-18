import { Page } from "@playwright/test"

export default class Credentials{
  private baseURL: string = 'http://localhost:4000/'
  private page:Page

  public static async get(page:Page):Promise<Credentials>{
    const login =new Credentials(page)
    await login.navigate()
    return login
  }

  private constructor(page:Page){
    this.page = page
  }

  private async navigate(){
    this.page.goto(this.baseURL)
    const header = this.page.getByRole('banner').getByRole('heading',{level: 1})
    await header.click()
  }

  public async login(login:string,password:string) {
    await this.page.getByPlaceholder(/login/).fill(login)
    await this.page.getByPlaceholder(/contrasenya/).fill(password)
    await this.page.getByRole('button', { name: 'Identificat' }).click()
    await this.page.getByText('Agora').click()
  }
}