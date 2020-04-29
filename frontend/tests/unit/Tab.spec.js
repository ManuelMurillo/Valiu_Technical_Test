import { shallowMount } from "@vue/test-utils";
import Tab from "@/components/Tab.vue";

describe("Tab.vue", () => {
  it("renders tab when passed", () => {
    const tab_ = {
      name: "Prueba",
      color: "#345612"
    };
    const index_ = 0;
    const wrapper = shallowMount(Tab, {
      propsData: {
        tab_,
        index_
      }
    });
    // expect(wrapper.text()).toMatch(msg);
  });
});
