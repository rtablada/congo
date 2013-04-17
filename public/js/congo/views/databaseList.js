
define(['backbone', 'congo/views/database'], function(Backbone, DatabaseView) {
  var DatabaseListView;
  DatabaseListView = Backbone.View.extend({
    tagName: "table",
    className: "table table-striped",
    render: function() {
      var i, itemView, items, _i;
      items = [];
      for (i = _i = 0; _i < 5; i = ++_i) {
        itemView = new DatabaseView();
        items.push(itemView.render().el);
      }
      this.$el.html(items);
      $("#database-list").html(this.el);
      return this;
    }
  });
  return DatabaseListView;
});
