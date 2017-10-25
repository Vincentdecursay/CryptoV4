angular.
module('tableau').
component('tableaucomp', {
  templateUrl: 'tableau/tab.template.html',
  controller: function CryController($http) {

      this.list = [];

    this.createCrypto = function() {
      this.list.push({name:this.name, price:this.price, quantity:this.quantity,etat:this.etat });
      this.name = "";
      this.price = "";
      this.quantity = "";
      this.etat = "1"; 
};

    this.deldefCrypto = function(key) {
    this.list.splice(key,1);

    };



    var self = this;
    self.orderProp = 'age';

    $http.get('monnaie/monnaie.json').then(function(response) {
      self.list = response.data;
    });
  }
});
