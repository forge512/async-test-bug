export default function() {
  this.pretender.prepareHeaders = function(headers) {
    headers["Content-Type"] = "application/vnd.api+json";
    return headers;
  };
  this.logging = true;

  this.resource("posts");
}
