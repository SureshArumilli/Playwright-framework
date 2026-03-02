import { expect } from '@playwright/test';
import { test } from '../fixtures/common-fixture'

test('Login Test', async ({ loginpage, commonApiUtils, commonUtils }) => {

    const apiUserName = commonUtils.decryptData(process.env.API_USER_NAME!);
    const apiPassword = commonUtils.decryptData(process.env.API_PASSWORD!);

    console.log(process.env.API_BASE_URL);
    console.log(apiUserName);
    console.log(apiPassword);

    commonApiUtils.encryptData('admin');

})