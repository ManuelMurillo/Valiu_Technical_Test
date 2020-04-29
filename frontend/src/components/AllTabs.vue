<template>
  <div>
    <md-list>
      <md-list-item>
        <CreateTab />
      </md-list-item>
      <Tab
        v-for="(item, index) in tabs"
        :key="index"
        :tab_="item"
        :index_="index"
      />
    </md-list>
  </div>
</template>

<script>
import Tab from "@/components/Tab.vue";
import CreateTab from "@/components/CreateTab.vue";

export default {
  name: "AllTabs",
  props: {
    tabs: Array
  },
  components: {
    Tab,
    CreateTab
  }
};
</script>

<style lang="scss" scoped></style>
