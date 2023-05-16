import Block from "../../utils/Block/Block";
import { FormField } from "../formField";
import { validationMasks } from "../formFieldInput/const";
const { expect } = require('chai');


describe('FormField', () => {

  it('should render', () => {
    new FormField({
      name: "test",
      type: "text",
      validationType: "name"
    })
  });

  it('should be element', () => {
    const field = new FormField({
      name: "test",
      type: "text",
      validationType: "name"
    });
    const element = field.element;
    expect(element).to.be.instanceOf(window.HTMLElement)
  })

  it('should be invalid', () => {
    const field = new FormField({
      name: "test",
      type: "text",
      validationType: "name",
      value: "111",
    });
    field.validate(validationMasks.NAME, "Ошибка");
    expect((field.children.error as Block).getContent()?.textContent).to.eq("Ошибка\n");
  })

  it('should be valid', () => {
    const field = new FormField({
      name: "test",
      type: "text",
      validationType: "phone",
      value: "89203300303",
    });
    field.validate(validationMasks.PHONE, "Ошибка");
    expect((field.children.error as Block).getContent()?.textContent).not.to.eq("Ошибка\n");
  })





});
