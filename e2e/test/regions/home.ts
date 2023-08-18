import { Page } from "@playwright/test"
import Credentials from "./credentials"
import { goodPassword, goodUser, handle } from '../fixture/fixture'

export default class Home{
  private page:Page

  public static async get(page:Page):Promise<Home>{
    const region =new Home(page)
    await region.navigate()
    return region
  }

  private constructor(page:Page){
    this.page = page
  }

  private async navigate(){
    const credentials = await Credentials.get(this.page)
    await credentials.login(goodUser,goodPassword)
  }

  public async logout(){
    await this.userMenu().click()
    await this.page.getByText('Perdre la identitat').click()
  }

  public userMenu() {
    return this.page.getByLabel(handle)
  }
}