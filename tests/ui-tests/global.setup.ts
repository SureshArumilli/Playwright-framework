import { expect } from '@playwright/test';
import { test } from '../../fixtures/common-fixture';


test('Global setup for Auto Login', async ({ page, commonUtils, loginpage, dashboardPage }) => {

   
    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassWord = commonUtils.decryptData(process.env.PASSWORD!);

    await loginpage.gotoOrangeHrm();
    await loginpage.loginOrangeHrm(decryptedUserName, decryptedPassWord);

    await page.waitForURL(process.env.BASE_URL + '/web/index.php/dashboard/index');
    await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');

    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    });
});