// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  //This is an event listener that listens for a click
  //anywhere on the library entry template showed above
  //We probably need to break this down and make it more
  //specific (clicking on the artist or title, for example)
  events: {
    'click': function() {
      // console.log(this);
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
