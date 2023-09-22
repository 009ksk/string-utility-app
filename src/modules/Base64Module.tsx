export const encodeBase64 = (text: string) => {
    try {
        const encoded = new TextEncoder().encode(text);
        const encodedArray = Array.from(encoded);
        return btoa(String.fromCharCode.apply(null, encodedArray));
    }
    catch (error) {
        console.error(error);
        return '';
    }
}

export const decodeBase64 = (base64: string): string => {
    try{
        return new TextDecoder('utf-8').decode(Uint8Array.from(atob(base64), c => c.charCodeAt(0)));
    }
    catch(error){
        console.error(error);
        return '';
    }
}