<template>
  <div>
    <md-list>
      <md-list-item>
        <CreateTab />
      </md-list-item>
      <Tab
        v-for="(item, index) in read"
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
  components: {
    Tab,
    CreateTab
  },
  props: {
    tabs: Array
  },
  data: () => ({
    tabs_: []
  }),
  computed: {
    read: function() {
      console.log(this.$store.getters.getAllTabs);
      return this.$store.getters.getAllTabs;
    }
  },

  methods: {}
};
</script>

<style lang="scss" scoped></style>
