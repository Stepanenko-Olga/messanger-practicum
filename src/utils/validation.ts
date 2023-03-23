import { FormField } from "../components/formField";
import { FormFieldInput } from "../components/formFieldInput";
import { validationMasks } from "../components/formFieldInput/const";

import Block from "./Block";

export const submitValidation = (props: Record<string, Block | Block[]>) => {
  let fields: FormField[] = [];
  Object.values(props).forEach((child) => {
    if (child instanceof FormField)
      fields.push(child);
  });
  Object.values(fields).forEach((field) => {
    checkValidation(field)
  });
}


function checkValidation(field: FormField) {
  switch ((field.children.input as FormFieldInput).validationType) {
    case "login": validationMasks.LOGIN.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Введите от 3 до 20 символов на латинице или цифр" }); break;

    case "password": validationMasks.PASSWORD.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Введите от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру" }); break;

    case "name": validationMasks.NAME.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Первая буква должна быть заглавной, без пробелов, цифр, спецсимволов (допустим только дефис)" }); break;

    case "email": validationMasks.EMAIL.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Укажите email латиницей, можно включать цифры и спецсимволы, обязательно должна быть @" }); break;

    case "phone": validationMasks.PHONE.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Введите от 10 до 15 цифр" }); break;

    case "message": validationMasks.REQUIRED.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Поле обязательно к заполнению" }); break;
  }
}


