
import { expect } from '@playwright/test';
import { test } from '../fixtures/hooks-fixture'

/* test('Login Test', async ({ loginpage, commonUtils }) => {

  console.log(process.env.BASE_URL);
   console.log(process.env.USER_NAME);
   console.log(process.env.PASSWORD); 

  const CommonUtilsObj = new CommonUtils();
  CommonUtilsObj.encryptData('admin123'); 

  const encryptDataUsername = commonUtils.decryptData(process.env.USER_NAME!);
  const encryptDataPassword = commonUtils.decryptData(process.env.PASSWORD!);


  await loginpage.gotoOrangeHrm();
  await loginpage.loginOrangeHrm(encryptDataUsername, encryptDataPassword)
}); */
/* test.beforeEach('BeforeEach Hook', async ({ loginpage }) => {

  await loginpage.gotoOrangeHrm();
})

test.afterEach('AfterEach Hook', async ({ userPage }) => {

  if (await userPage.userMenuButton.isVisible()) {
    await userPage.logout();
  } 

    
}) */

test("Login Test1", async ({ page ,gotoUrl,logOut}) => {

  console.log(await page.title());
})

test("Login Test2", async ({ page,gotoUrl,logOut }) => {

  await expect(page).toHaveTitle('OrangeHRM')
})
