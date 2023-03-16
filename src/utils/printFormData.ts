import { FormField } from "../components/formField";
import { FormFieldInput } from "../components/formFieldInput";
import Block from "./Block";

export const printValues = (props: Record<string, Block | Block[]>) => {
  let fields: FormField[] = [];
  let inputs: FormFieldInput[] = [];
  const formData: Record<string, string>[][] = [];
  Object.values(props).forEach((child) => {
    if (child instanceof FormField)
      fields.push(child);
  });
  Object.values(fields).forEach((field) => {
    Object.values(field.children).forEach((child) => {
      if (child instanceof FormFieldInput) inputs.push(child);
    })
  });
  for (var i = 0; i < inputs.length; i++) {
    let form: Record<string, string>[] = [];
    form = [inputs[i].name, inputs[i].value];
    formData.push(form);
  }
  return(formData);

}
