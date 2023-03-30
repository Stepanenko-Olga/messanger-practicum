import { FormField } from "../components/formField";
import { FormFieldInput } from "../components/formFieldInput";
import { validationMasks } from "../components/formFieldInput/const";

import Block from "./Block";

export const submitValidation = (props: Record<string, Block | Block[]>) => { 
  let fields: FormField[] = [];
  let isValid: boolean = true;
  Object.values(props).forEach((child) => {
    if (child instanceof FormField)
      fields.push(child);
  });
  Object.values(fields).forEach((field) => {
    isValid = isValid && checkValidation(field);
  });
  return isValid;
}



function checkValidation(field: FormField) {
  switch ((field.children.input as FormFieldInput).validationType) {
    case "login": validationMasks.LOGIN.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Введите от 3 до 20 символов на латинице или цифр" });
      return validationMasks.LOGIN.test((field.children.input as FormFieldInput).value);

    case "password": validationMasks.PASSWORD.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Введите от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру" });
      return validationMasks.PASSWORD.test((field.children.input as FormFieldInput).value);

    case "name": validationMasks.NAME.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Первая буква должна быть заглавной, без пробелов, цифр, спецсимволов (допустим только дефис)" });
      return validationMasks.NAME.test((field.children.input as FormFieldInput).value);

    case "email": validationMasks.EMAIL.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Укажите email латиницей, можно включать цифры и спецсимволы, обязательно должна быть @" });
      return validationMasks.EMAIL.test((field.children.input as FormFieldInput).value);

    case "phone": validationMasks.PHONE.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Введите от 10 до 15 цифр" });
      return validationMasks.PHONE.test((field.children.input as FormFieldInput).value);

    case "message": validationMasks.REQUIRED.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Поле обязательно к заполнению" });
      return validationMasks.REQUIRED.test((field.children.input as FormFieldInput).value);
  }
  return true;
}


