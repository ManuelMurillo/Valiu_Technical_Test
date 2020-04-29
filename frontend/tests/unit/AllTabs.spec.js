import { shallowMount } from "@vue/test-utils";
import AllTabs from "@/components/AllTabs.vue";

describe("Tab.vue", () => {
  it("renders tabs when passed", () => {
    const tabs = [
      {
        name: "Prueba",
        color: "#345612"
      }
    ];
    const wrapper = shallowMount(AllTabs, {
      propsData: {
        tabs
      }
    });
  });
});
