Meteor.startup(function(){
	if (Images.find().count() == 0){
		Images.insert(
		{
               	img_src:"img/laptops.jpg",
           	img_alt:"some laptops on a table"
       		}
		);
	for (var i=1; i<23;i++){
	    Images.insert(
		        {
		        img_src:"img/img_"+i+".jpg",
		        img_alt:"Image number "+i
		        }
			);
		}
	} // end of if no images
	console.log("startup.js says : " + Images.find().count());
});

