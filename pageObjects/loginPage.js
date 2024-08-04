class LoginPage
{

    constructor(page)
    {
        this.userName = page.locator("#user-name");

        this.password =  page.locator("#password");
      this.loginButton = page.locator("#login-button");
    }


   async loginApp(userNameValue,passWordValue)
    {
       await this.userName.fill(userNameValue);
await this.password.fill(passWordValue)
await this.loginButton.click();

    }
}

module.exports = {LoginPage};