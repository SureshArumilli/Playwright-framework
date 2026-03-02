import { APIRequestContext } from "@playwright/test";
import CommonUtils from "../utils/commonutils";
import apiPathData from "../data/api-data/api-path-data.json"

export default class CommomApiutills {
    private request: APIRequestContext;
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    public encryptData(data: string): string {
        const commonUtilsObj = new CommonUtils();
        return commonUtilsObj.encryptData(data);
    }

    public async createToken() {
        const commonUtilsObj = new CommonUtils();

        const apiUserName = commonUtilsObj.decryptData(process.env.API_USER_NAME!);
        const apiPassword = commonUtilsObj.decryptData(process.env.API_PASSWORD!);

        const createTokenResp = await this.request.post(apiPathData.auth_path, {
            data: {
                "username": apiUserName,
                "password": apiPassword
            }
        })

        const createTokenJsonResponse = await createTokenResp.json();
        return createTokenJsonResponse.token;
    }
}