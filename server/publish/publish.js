Meteor.publish('pdfs',function(){ 
             return Pdfs.find();
}),
Meteor.publish('pdfdetail',function(id){
return Pdfs.find({_id:id});

});

