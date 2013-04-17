
define(['backbone'], function(Backbone) {
  var DatabaseModel;
  DatabaseModel = Backbone.Model.extend({
    url: function() {
      return "/mongo-api/dbs/" + this.id;
    },
    idAttribute: "name"
  });
  return DatabaseModel;
});
