import Crypto from 'crypto-js';

/** ハッシュを生成するメソッド
 *  @param text
 *  @returns
 */
export const generateSHA256 = (text: string): string => {
    try {
        return Crypto.SHA256(text).toString();
    }
    catch (error) {
        console.log(error)
        return ''
    }
}

export const generateSHA512 = (text: string): string => {
    try {
        return Crypto.SHA512(text).toString();
    }
    catch (error) {
        console.log(error)
        return ''
    }
}
