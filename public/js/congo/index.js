
define(['backbone', 'congo/nav', 'congo/views/databaseList', 'congo/collections/databases'], function(Backbone, BreadcrumbView, DatabaseListView, DatabaseCollection) {
  var Congo;
  Congo = {
    init: function() {
      var crumbView, listView;
      crumbView = new Congo.BreadcrumbView({
        el: "#breadcrumbs"
      });
      crumbView.render();
      listView = new Congo.DatabaseListView;
      return listView.render();
    }
  };
  Congo.BreadcrumbView = BreadcrumbView;
  Congo.DatabaseListView = DatabaseListView;
  Congo.DatabaseCollection = DatabaseCollection;
  return Congo;
});
