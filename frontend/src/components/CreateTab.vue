<template>
  <md-field md-inline>
    <label>Añadir Etiqueta</label>
    <md-input
      v-model="name_input"
      @keyup.enter.native="create_tab()"
    ></md-input>
  </md-field>
</template>

<script>
export default {
  name: "CreateTab",
  data: () => ({
    name_input: ""
  }),
  methods: {
    create_tab: function() {
      if (this.name_input !== "") {
        const tab_ = {
          name: this.name_input,
          color: "#" + ((Math.random() * 0xffffff) << 0).toString(16)
        };
        this.$store.commit("CREATE_TAB", tab_);
        console.log(this.$store.getters.getAllTabs);
        this.name_input = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
