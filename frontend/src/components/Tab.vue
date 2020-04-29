<template>
  <md-list-item>
    <md-icon v-bind:style="{ color: tab_.color }" id="tagg"
      >fiber_manual_record</md-icon
    >
    <span v-show="!edit_value" class="md-list-item-text">{{ tab_.name }}</span>
    <md-field v-show="edit_value">
      <md-input v-model="name_input"></md-input>
      <md-button v-show="edit_value" @click="edit_tab()">
        Actualizar
      </md-button>
      <md-button v-show="edit_value" @click="edit()">
        Cancelar
      </md-button>
    </md-field>
    <md-button v-show="!edit_value" @click="edit()">
      Editar
    </md-button>
    <md-button v-show="!edit_value" @click="delete_tab()">
      Borrar
    </md-button>
  </md-list-item>
</template>
<script>
export default {
  name: "Tab",
  props: {
    index_: {},
    tab_: {}
  },
  data: () => ({
    name_input: "",
    edit_value: false
  }),
  //   computed: {
  //     tab: function() {
  //       return this.$store.getters.getTabById(this.index_);
  //     }
  //   },
  methods: {
    edit: function() {
      this.name_input = this.tab_.name;
      this.edit_value = !this.edit_value;
    },
    edit_tab: function() {
      this.tab_.name = this.name_input;
      //   this.name_input_edit = null;
      this.edit_value = false;
      this.$store.commit("EDIT_TAB", this.tab_, this.index_);
    },
    delete_tab: function() {
      this.$store.commit("DELETE_TAB", this.index_);
    }
  }
};
</script>
