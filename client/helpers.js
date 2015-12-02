Session.set("imageLimit", 8);
//      Template.registerHelper('selectedImageId',function(input){
//              return Session.get("selectedImageId");
//  });
//      Template.images.helpers({images:img_data});
Template.images.helpers({
  images: function() {
	var userF = Session.get("userFilter");
    if (userF) {
	if (userF == "anonymous"){
		return Images.find({
	        createdBy: undefined
	      }, {
	        sort: {
	          createdOn: -1,
	          rating: -1
	        }
	      });
	} else {
	return Images.find({
        createdBy: Session.get("userFilter")
      }, {
        sort: {
          createdOn: -1,
          rating: -1
        }
      });
}
    } else {
      return Images.find({}, {
        sort: {
          createdOn: -1,
          rating: -1
        },
        limit: Session.get("imageLimit")
      });
    }
  },
  getFilterUser: function() {
    if (Session.get("userFilter")) {
	if (Session.get("userFilter")!="anonymous") {
      var user = Meteor.users.findOne({
        _id: Session.get("userFilter")
      });
      return user.username;
	} else {
		return "anonymous";
	}
    }
  },
  getUser: function(user_id) {
    var user = Meteor.users.findOne({
      _id: user_id
    });
    if (user) {
      return user.username;
    } else {
      return "anonymous";
    }
  },
  filtering_images: function() {
    if (Session.get("userFilter")) {
      return true;
    } else {
      return false;
    }
  },
  imageOwner: function() {
  if (Meteor.user()) {
//	return true;	
//	console.log(Meteor.userId());
//	console.log(this.createdBy);
	return (Meteor.userId() == this.createdBy);
	}
  }

});
Template.body.helpers({
  username: function() {
    if (Meteor.user()) {
      console.log(Meteor.user().emails[0].address);
      //return Meteor.user().emails[0].address;
      return Meteor.user().username;
    } else {
      return "anonymous internet user";
    }
  }
});
Template.image_popup.helpers({
  image: function() {
    return Images.findOne(Session.get("selectedImageId"));
  }
});
