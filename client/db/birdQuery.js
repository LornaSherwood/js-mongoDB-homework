var MongoClient = require('mongodb').MongoClient;

var BirdQuery = function(){
  this.url = 'mongodb://localhost:27017/birds_site';
};

BirdQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if (db) {
        var collection = db.collection('birds');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        }); 
      };
    });
  }
}

module.exports = BirdQuery;