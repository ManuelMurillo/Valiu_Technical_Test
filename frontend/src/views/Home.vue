<template>
  <div class="home">
    <md-card>
      <md-card-header>
        <div class="md-title right">Etiquetas</div>
      </md-card-header>

      <md-card-content>
        <AllTabs />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
// @ is an alias to /src

import AllTabs from "@/components/AllTabs.vue";
import socket from "../services";
import store from "../store";

socket.on("Tabs", data => {
  console.log(data);
  store.commit("SET_TABS", data);
  //socket.emit("my other event", { my: "data" });
});

export default {
  name: "Home",
  components: {
    AllTabs
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.right {
  padding: 16px;
}
</style>
