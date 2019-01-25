import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { all } from "rsvp";
import { task } from "ember-concurrency";

export default Component.extend({
  store: service(),

  createPostsTask: task(function*() {
    let posts = [1, 2, 3, 4].map(i =>
      this.store.createRecord("post", {
        title: `Title ${i}`,
        body: `body ${i}`
      })
    );

    yield all(posts.map(post => post.save()));
  }).drop()
});
