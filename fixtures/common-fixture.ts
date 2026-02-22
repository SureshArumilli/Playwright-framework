import { test as baseTest } from './pom-fixture';
import CommonUtils from "../utils/commonutils"

type CommonFixtureType = {
    commonUtils: CommonUtils
}

export const test = baseTest.extend<CommonFixtureType>({
    commonUtils: async ({ }, use) => {
        const commonUtils = new CommonUtils();
        await use(commonUtils);
    }
})