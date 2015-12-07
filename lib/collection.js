Images = new Mongo.Collection("images");

// set up security on Images collection
Images.allow({
	insert:function(userId, doc){
		console.log("testing security on image insert");
		console.log(doc);
		console.log(userId);
		    if (Meteor.isServer){ 
      console.log("insert on server"); 
    } 
    if (Meteor.isClient){ 
      console.log("insert on client"); 
    } 
		if (Meteor.user()){
			console.log(doc.createdBy == userId);
			return (doc.createdBy == userId);
		} 
	},
	remove:function(userId, doc){
                console.log("testing security on image insert");
		if (Meteor.user()){
			 console.log(doc.createdBy == userId);
                        return doc.createdBy == userId;
                }
        }
});
