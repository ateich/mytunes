// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults:{
    playCount: 0,
    votes: 0,
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.set('playCount', (this.get('playCount') + 1));
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  upvote: function(){
    this.set('votes', (this.get('votes') + 1));
    this.trigger('upvote', this);
  },
  downvote: function(){
    this.set('votes', (this.get('votes') - 1));
    this.trigger('downvote', this);
  },
});
