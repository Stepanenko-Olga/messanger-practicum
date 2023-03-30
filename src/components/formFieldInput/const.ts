export const validationMasks = {
    NAME: /^[A-ZА-Я]{1}[a-zа-я\-ъ]{0,254}$/,
    LOGIN: /^[A-Za-z1-9\-_]{2,19}$/,
    EMAIL: /^\S+@\S+$/,
    PASSWORD: /.*[A-ZА-Я1-9].*[A-ZА-Я1-9].*/,
    PHONE: /^\+?\d{9,14}$/,
    REQUIRED: /[^\s]/,
}
