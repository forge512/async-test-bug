import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  dataCoordinator: service(),

  beforeModel() {
    this.dataCoordinator.activate();
  }
});
