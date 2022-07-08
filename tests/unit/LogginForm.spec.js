import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  const emitName = "formSubmitted";
  const name = "Edward A";
  const payload = { name };

  it(`When form submit, component make emit "${emitName}"`, () => {
    const wrapper = mount(LoginForm);
    wrapper.find("form").trigger("submit");
    const emitted = wrapper.emitted(emitName);

    expect(emitted).toBeTruthy();
  });

  it(`When form submit, payload sends correctly`, () => {
    const wrapper = mount(LoginForm);
    wrapper.find('input[type="text"]').setValue(name);
    wrapper.find("form").trigger("submit");

    expect(wrapper.emitted(emitName)[0][0]).toEqual(payload);
  });
});
