$(function() {

	var ViewModel = function() {
		var self = this;
		self.username = ko.observable();
		self.password = ko.observable();
		self.passhash = ko.computed(function() {
        	return md5(self.password());
    	});

		// self.doLogin=function() {
		// 	$.ajax({
		// 		  type: "POST",
		// 		  url: "/api/post/login",
		// 		  dataType: "json",
		// 		  data:{
		// 		  	"username": ""+self.username(),
		// 		  	"password": ""+self.passhash()
		// 		  },
		// 		  success: function(json) {
		// 		       console.log("token: "+json['token']);
		// 		    },
		// 		  error: function(e) {
		// 		       console.log(e);
  //   				}
		// 		});
		// };
	};

	ko.applyBindings(new ViewModel())
	
})