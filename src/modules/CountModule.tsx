export const CountString = (text: string): number => {
    try {
        return text.length;
    }
    catch (error) {
        console.log(error);
        return 0
    }
}