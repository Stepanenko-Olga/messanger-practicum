export const validationMasks = {
NAME: /^[A-ZА-Я]{1}[a-zа-я\-ъ]{0,254}$/,
LOGIN: /^[A-Za-z1-9\-_]{2,19}$/,
EMAIL: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
PASSWORD: /.*[A-ZА-Я1-9].*[A-ZА-Я1-9].*/,
PHONE:  /^\+?\d{9,14}$/
}
