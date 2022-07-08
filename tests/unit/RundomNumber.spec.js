import RandomNumber from "@/components/RandomNumber.vue";
import { mount } from "@vue/test-utils";

describe("RandomNumber", () => {
  const defaultMin = 0;
  const defaultMax = 10;
  const newMin = 100;
  const newMax = 200;

  it("By default, number is 0", () => {
    const wrapper = mount(RandomNumber);
    const number = parseInt(wrapper.find("span").text());

    expect(number).toBe(0);
  });

  it(`By default generate number after click button and it in range from ${defaultMin} to ${defaultMax}`, async () => {
    const wrapper = mount(RandomNumber);
    await wrapper.find("button").trigger("click");
    const number = parseInt(wrapper.find("span").text());

    expect(number).toBeGreaterThan(defaultMin);
    expect(number).toBeLessThan(defaultMax);
  });

  it("When props are not default, generate number in needed range", async () => {
    const wrapper = mount(RandomNumber, {
      props: { min: newMin, max: newMax },
    });
    await wrapper.find("button").trigger("click");
    const number = parseInt(wrapper.find("span").text());

    expect(number).toBeGreaterThan(newMin);
    expect(number).toBeLessThan(newMax);
  });
});
