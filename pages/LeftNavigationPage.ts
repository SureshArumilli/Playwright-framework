import { Locator, Page } from "@playwright/test";

export class LeftNavigationPage {
    readonly page: Page;
    readonly pimLink: Locator;
    readonly orangeHrmLogo: Locator;
    readonly leftNavigation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.orangeHrmLogo = page.getByRole('link', { name: 'client brand banner' });
        this.leftNavigation = page.locator('.oxd-sidepanel-body');
    }

    /**
     * click the PimModule
     */

    async openPimModule() {
        await this.pimLink.click();
    }
}