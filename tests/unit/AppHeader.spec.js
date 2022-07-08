import AppHeader from "@/components/AppHeader.vue";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  it("If user not logged in, button is not visible", () => {
    const wrapper = mount(AppHeader);

    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  it("If user logged in, button is visible", async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: true });

    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
