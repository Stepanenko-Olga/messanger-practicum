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
      : (field.children.error as Block).setProps({ title: "Логин должен содержать от 3 до 20 символов, латиница, может содержать цифры" }); break;

    case "password": validationMasks.PASSWORD.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Поле должно содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра" }); break;

    case "name": validationMasks.NAME.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Поле необходимо указать латиницей или кириллицей, первая буква должна быть заглавной, без пробелов, цифр, спецсимволов (допустим только дефис)" }); break;

    case "email": validationMasks.EMAIL.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Email должен быть указан латиницей, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@)" }); break;

    case "phone": validationMasks.PHONE.test((field.children.input as FormFieldInput).value)
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Поле  должно содрежать от 10 до 15 символов, состоит из цифр" }); break;

    case "message": (field.children.input as FormFieldInput).value
      ? (field.children.error as Block).setProps({ title: undefined })
      : (field.children.error as Block).setProps({ title: "Поле обязательно к заполнению" }); break;
  }
}


