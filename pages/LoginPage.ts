import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly invalidCredintialsErrorPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidCredintialsErrorPopup = page.locator('.oxd-alert-content-text');
    }

    /**
     * To open url into browser
     */
    async gotoOrangeHrm() {
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`, {
            waitUntil: 'domcontentloaded'
        });
    }

    /**
     * To login in to OrangeHrm Application
     * @param userName 
     * @param passWord 
     */

    async loginOrangeHrm(userName: string, passWord: string) {
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(passWord);
        await this.loginButton.click();
    }

  
} 
