import MessageDisplay from "@/components/MessageDisplay.vue";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";

import { getMessage } from "@/services/axios";

jest.mock("@/services/axios");
beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisplay", () => {
  it("Calls getMessage once and displays message", async () => {
    const successMessage = "Success message";
    getMessage.mockResolvedValueOnce({ text: successMessage });
    const wrapper = mount(MessageDisplay);

    await flushPromises();

    expect(getMessage).toBeCalledTimes(1);
    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toBe(successMessage);
  });
  it("Displays an error when getMessage call fails", async () => {
    const errorMessage = "Oops! Something went wrong.";
    getMessage.mockRejectedValueOnce(errorMessage);
    const wrapper = mount(MessageDisplay);

    await flushPromises();

    expect(getMessage).toBeCalledTimes(1);
    const message = wrapper.find('[data-testid="message-error"]').text();
    expect(message).toBe(errorMessage);
  });
});
