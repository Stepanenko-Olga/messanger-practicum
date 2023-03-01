import { FormField } from "../components/formField";
import { FormFieldInput } from "../components/formFieldInput";
import { validationMasks } from "../components/formFieldInput/const";

import Block from "./Block";

export const submitValidation = (props: Record<string, Block>) => {
    let fields: FormField[] = [];        
    Object.values(props).forEach((child) => {
      if (child instanceof FormField) 
      fields.push(child);
    });
    Object.values(fields).forEach((field) =>{     
      checkValidation(field)
    });       
  }


  function checkValidation(field: FormField) {  
    switch((field.children.input as FormFieldInput).validationType) {
      case "login": validationMasks.LOGIN.test((field.children.input as FormFieldInput).value) 
      ? field.children.error.setProps({title: undefined}) 
      : field.children.error.setProps({title: "Поле содержит недопустимые символы"}); break;

      case "password": validationMasks.PASSWORD.test((field.children.input as FormFieldInput).value) 
      ? field.children.error.setProps({title: undefined}) 
      : field.children.error.setProps({title: "Поле содержит недопустимые символы"}); break;

      case "name": validationMasks.NAME.test((field.children.input as FormFieldInput).value) 
      ? field.children.error.setProps({title: undefined}) :
       field.children.error.setProps({title: "Поле содержит недопустимые символы"}); break;

      case "email": validationMasks.EMAIL.test((field.children.input as FormFieldInput).value) 
      ? field.children.error.setProps({title: undefined}) 
      : field.children.error.setProps({title: "Поле содержит недопустимые символы"}); break;

      case "phone": validationMasks.PHONE.test((field.children.input as FormFieldInput).value) 
      ? field.children.error.setProps({title: undefined}) 
      : field.children.error.setProps({title: "Поле содержит недопустимые символы"}); break;
    }       
  }

  
