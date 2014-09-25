// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.playLogic, this);
    this.on('ended', this.removeEnded, this);
    this.on('dequeue', this.dequeue, this);
  },

  playLogic: function(item){
    // debugger;
    if(this.length === 1){
      this.playFirst(item);
    }
  },

  playFirst: function(item){
    this.at(0).play();
    console.log('AHHH');
  },

  removeEnded: function(){
    this.remove(this.at(0));
    if(this.length > 0){
      //play first item
      this.playFirst(this.at(0));
    }
  },

  dequeue : function(item){
    this.remove(item);
  },

});
