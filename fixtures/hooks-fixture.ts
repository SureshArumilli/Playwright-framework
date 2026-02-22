import {test as baseTest} from './common-fixture';

type HooksFixturetype = {
    gotoUrl: void;
    logOut: void;
}

 export const test = baseTest.extend<HooksFixturetype>({

    gotoUrl: async({loginpage},use)=>{

        await loginpage.gotoOrangeHrm();
        await use();  //BeforeEach hook
    },

    logOut: async({userPage},use)=>{

        await use();  //AfterEach hook
         if (await userPage.userMenuButton.isVisible()) {
          await userPage.logout();
      } 
    }
 })

 export {expect} from "@playwright/test";