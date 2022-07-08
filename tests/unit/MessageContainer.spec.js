import MessageContainer from "@/components/MessageContainer.vue";
import { mount } from "@vue/test-utils";

describe("MessageContainer", () => {
  it("Wraps MessageDisplay component", () => {
    const text = "Hello";
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: `<span data-test-id='message'>${text}</span>`,
          },
        },
      },
    });

    const stubMessage = wrapper.find('[data-test-id="message"]').text();
    expect(stubMessage).toEqual(text);
  });
});
