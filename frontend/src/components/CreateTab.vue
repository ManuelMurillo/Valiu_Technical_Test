<template>
  <md-field>
    <label class="md-title">Añadir Etiqueta</label>
    <md-input v-model="name_input"></md-input>
    <md-button
      class="md-icon-button"
      :disabled="!name_input"
      @click="create_tab()"
    >
      <md-icon>add</md-icon>
    </md-button>
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
      this.tab_ = {
        name: this.name_input,
        color: "#" + ((Math.random() * 0xffffff) << 0).toString(16)
      };
      this.$store.commit("CREATE_TAB", this.tab_);
      console.log(this.$store.getters.getAllTabs);
      this.name_input = null;
    }
  }
};
</script>

<style lang="scss" scoped></style>
