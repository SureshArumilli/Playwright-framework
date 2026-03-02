import { test, expect } from '../../fixtures/hooks-fixture'
import pimModule from '../../data/ui-data/pim-module-data.json'

test('[PIM] Verify that new employee is successfully create under the PIM module', {
    tag: ['@UI', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: 'https://dev.azure.com/wishinifinite/edit-03'
    }
}, async ({ gotoUrl, leftNavigationPage, pimPage }) => {

    await test.step('open PIM Module', async () => {
        await leftNavigationPage.openPimModule();
    })

    await test.step('Add Employee in PIM Module', async () => {

        await pimPage.addEmployee(pimModule.firstName, pimModule.lastName, pimModule.lastName);
        await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimModule.firstName} ${pimModule.lastName}`)
    })

})