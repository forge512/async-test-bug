import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { task } from "ember-concurrency";

export default Component.extend({
  store: service(),

  createPostsTask: task(function*() {
    let p1 = this.store.createRecord("post", {
      title: `Title 1`,
      body: `body 1`
    });
    yield p1.save();

    let p2 = this.store.createRecord("post", {
      title: `Title 2`,
      body: `body 2`
    });
    yield p2.save();

    let p3 = this.store.createRecord("post", {
      title: `Title 3`,
      body: `body 3`
    });
    yield p3.save();

    let p4 = this.store.createRecord("post", {
      title: `Title 4`,
      body: `body 4`
    });
    yield p4.save();
  }).drop()
});
