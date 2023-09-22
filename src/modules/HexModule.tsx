export const encodeHex = (text: string): string => {
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        return Array.from(data).map(byte => byte.toString(16).padStart(2, '0')).join('');
    }
    catch (error) {
        console.error(error);
        return '';
    }
}


export const decodeHex = (hex: string): string => {
    try {
        if (hex.length % 2 !== 0)
            return ''
        
        const hexPairs = hex.match(/.{1,2}/g);

        if (!hexPairs)
            return ''

        const bytes = hexPairs.map((hexPair) => {
            if(isHexString(hexPair) === false)
                throw new Error('invalid hex pair.');
            return parseInt(hexPair, 16);
        });
        const decoder = new TextDecoder();
        return decoder.decode(new Uint8Array(bytes));
    }
    catch (error) {
        console.error(error);
        return '';
    }
}

const isHexString = (str: string): boolean => {
    const hexPattern = /^[0-9A-Fa-f]+$/;
    if (str.length !== 2)
        return false;
    return hexPattern.test(str);
}