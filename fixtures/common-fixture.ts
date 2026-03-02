import { test as baseTest } from './pom-fixture';
import CommonUtils from "../utils/commonutils"
import CommomApiutills from "../utils/commonApiutils"


type CommonFixtureType = {
    commonUtils: CommonUtils,
    commonApiUtils: CommomApiutills
}

export const test = baseTest.extend<CommonFixtureType>({
    commonUtils: async ({ }, use) => {
        const commonUtils = new CommonUtils();
        await use(commonUtils);
    },

    commonApiUtils: async ({ request }, use) => {
        const commonApiUtils = new CommomApiutills(request);
        await use(commonApiUtils);

    }

})