import { test, expect } from "../../fixtures/hooks-fixture";
import loginModuleData from "../../data/ui-data/login-module-data.json";
import CommonUtils from "../../utils/commonutils";
import { LeftNavigationPage } from "../../pages/LeftNavigationPage";


test.use({
    storageState: {
        cookies: [],
        origins: []
    },
    deviceScaleFactor: undefined
})

test('[Login] verify that the user cannot log in with an invalid password', {
    tag: ['@UI', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'https://dev.azure.com/wishinifinite/edit-01'
    }

}, async ({ gotoUrl, loginpage, commonUtils }) => {

    const username = commonUtils.decryptData(process.env.USER_NAME!);
    await loginpage.loginOrangeHrm(username, loginModuleData.Wrong_PassWord);

    // await expect(loginpage.invalidCredintialsErrorPopup).toHaveText(loginModuleData.invalid_Credentials_text);
    await expect(loginpage.invalidCredintialsErrorPopup).toHaveText(loginModuleData.wrong_invalid_Credentials_text);
    await expect(loginpage.userNameInput).toBeVisible();
})

test.describe('Invalid Login Test', {
    tag: '@Invalid Login',
    annotation: {
        type: 'Story Link',
        description: 'https://dev.azure.com/wishinifinite/edit'
    }

}, () => {

    test('[Login] verfiy that the user cannot log in with an invalid username', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description: 'https://dev.azure.com/wishinifinite/edit-02'
        }
    }, async ({ gotoUrl, loginpage, commonUtils }) => {

        const password = commonUtils.decryptData(process.env.PASSWORD!);
        await loginpage.loginOrangeHrm(loginModuleData.Wrong_UserName, password);
        // await loginpage.waitForTimeOut(2000)
        await expect(loginpage.invalidCredintialsErrorPopup).toHaveText(loginModuleData.invalid_Credentials_text);
        await expect(loginpage.userNameInput).toBeVisible();
    })


    test('[Login] verfiy that the user cannot log in with an invalid username and password', {

        tag: ['@UI', '@UAT', '@DEV'],
        annotation: {
            type: 'Test Case Link',
            description: 'https://dev.azure.com/wishinifinite/edit-03'
        }
    }, async ({ gotoUrl, loginpage }) => {

        await loginpage.loginOrangeHrm(loginModuleData.Wrong_UserName, loginModuleData.Wrong_PassWord);
        // await loginpage.waitForTimeOut(2000)
        await expect(loginpage.invalidCredintialsErrorPopup).toHaveText(loginModuleData.invalid_Credentials_text);
        await expect(loginpage.userNameInput).toBeVisible();
    })

})


test('[Login] Verify that the user login in with valid Credensials', {
    tag: ['@VISUAL', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'https://dev.azure.com/wishinifinite/edit/Visual'
    }
}, async ({ gotoUrl, loginpage, commonUtils, leftNavigationPage }) => {
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginpage.loginOrangeHrm(username, password);

    await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot('OrangeHrmBrandLogo.png');
    await expect(leftNavigationPage.leftNavigation).toHaveScreenshot('LeftNavPanel.png');


})

