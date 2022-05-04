export const undash = (text: string) => text.replace(/-/g, '');

export const keyContains = (text: string) => (keyValue: [string, any]) => keyValue[0].toLowerCase().includes(text.toLowerCase())
