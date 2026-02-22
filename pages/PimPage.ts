import { Locator, Page } from "@playwright/test";

export class PimPage{
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstName: Locator;
    readonly middleName: Locator;
    readonly lastName: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeNameHeading: Locator;


    constructor(page: Page)
    {
        this.page = page;
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.middleName = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name');
    }

    async addEmployee(firstName: string,middleName: string,lastName: string)
    {
        await this.addButton.click();
        await this.firstName.fill(firstName);
        await this.middleName.fill(middleName);
        await this.lastName.fill(lastName);
        await this.saveButton.click();
    }
}