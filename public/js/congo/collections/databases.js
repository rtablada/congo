
define(['backbone', 'congo/models/database'], function(Backbone, DatabaseModel) {
  var DatabaseCollection;
  return DatabaseCollection = Backbone.Collection.extend({
    model: DatabaseModel,
    url: "/mongo-api/dbs"
  });
});
