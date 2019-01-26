import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { task, all } from "ember-concurrency";

export default Component.extend({
  store: service(),

  init() {
    this._super(...arguments);
    this.set("forkedStore", this.store.fork());
  },

  createPostsTask: task(function*() {
    let posts = yield all(
      [1, 2, 3, 4].map(i =>
        this.forkedStore.addRecord({
          type: "post",
          title: `Title ${i}`,
          body: `body ${i}`
        })
      )
    );

    yield this.store.merge(this.forkedStore);

    this.set("forkedStore", this.store.fork());
    this.set("posts", posts);
  }).drop()
});
