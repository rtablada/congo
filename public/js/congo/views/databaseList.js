
define(['backbone', 'congo/views/database'], function(Backbone, DatabaseView) {
  var DatabaseListView;
  DatabaseListView = Backbone.View.extend({
    initialize: function() {
      this.collection.bind('reset', this.render, this);
      this.collection.bind('add', this.render, this);
      return this.collection.bind('remove', this.render, this);
    },
    tagName: "table",
    className: "table table-striped",
    render: function() {
      var items;
      items = [];
      this.collection.each(function(item) {
        var itemView;
        itemView = new DatabaseView({
          model: item
        });
        return items.push(itemView.render().el);
      });
      this.$el.html(items);
      $("#database-list").html(this.el);
      return this;
    }
  });
  return DatabaseListView;
});
