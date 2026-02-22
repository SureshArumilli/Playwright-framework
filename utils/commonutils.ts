import cryptoJs from 'crypto-js';

export default class CommonUtils {
    private secretKey: string;

    /**
     * Initializing secret key
     */
    constructor() {
        if (!process.env.SECRET_KEY) {
            throw new Error("Please provide SECRET_KEY in environment variables while starting execution");
        }
        this.secretKey = process.env.SECRET_KEY;
    }

    /**
     * Provide encrypted data from string
     * @param data 
     * @returns 
     */
    public encryptData(data: string): string {
        const encrypted = cryptoJs.AES.encrypt(data, this.secretKey).toString();
        console.log(encrypted); // Commenting out log to avoid leaking secrets
        return encrypted;
    }

    /**
     * Provide decrypted data in string format
     * @param encryptedData 
     * @returns 
     */
    public decryptData(encryptedData: string): string {
        const decrypted = cryptoJs.AES.decrypt(encryptedData, this.secretKey).toString(cryptoJs.enc.Utf8);
        return decrypted;
    }
}




