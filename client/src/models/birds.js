var Birds = function() {}

Birds.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  all: function(callback){
    this.makeRequest('http://localhost:3000/birds', function(){
      if (this.status !== 200) return;
        var jsonString = this.responseText //this is makeRequest
        var result = JSON.parse(jsonString);

        callback(result);
    });
  }

}

module.exports = Birds;