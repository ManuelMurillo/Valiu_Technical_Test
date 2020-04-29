import { shallowMount } from "@vue/test-utils";
import CreateTab from "@/components/CreateTab.vue";

import store from "../../src/store";

describe("CreateTab.vue", () => {
  it("Create new tab", () => {
    const wrapper = shallowMount(CreateTab, store);
    expect(wrapper);
  });
});
