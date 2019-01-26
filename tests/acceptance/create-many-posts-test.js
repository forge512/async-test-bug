import { module, test } from "qunit";
import { click, visit } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | create many posts", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("it makes the posts", async function(assert) {
    server.timing = 400;
    await visit("/");

    await click("button");
    assert.dom(".post").exists({ count: 4 });
  });
});
