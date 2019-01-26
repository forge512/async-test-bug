import { Model, attr } from "ember-orbit";

export default Model.extend({
  title: attr("string"),
  body: attr("string")
});
