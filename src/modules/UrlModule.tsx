export const encodeUrl = (text: string) => {
    try {
        return encodeURIComponent(text);
    }
    catch (error) {
        console.error(error);
        return '';
    }
}

export const decodeUrl = (text: string) => {
    try {
        return decodeURIComponent(text);
    }
    catch (error) {
        console.error(error);
        return '';
    }
}