const mongoose = require("mongoose");
const Schemma = mongoose.Schema;

const TabSchemma = new Schemma(
  {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// const TabsSchemma = new Schemma({
//   Tabs: [TabSchemma]
// });

var Tabs = mongoose.model("Actividad", TabSchemma);

module.exports = Tabs;
