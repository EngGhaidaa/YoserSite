Template.addpdf.events({
});
AutoForm.hooks({
	insertPdfForm :{
	  onSuccess: function (){
             sAlert.success('تم الإضافة بنجاح', {
		effect: 'genie', position: 'top-right',
		timeout: '1000', onRouteClose: false,
		stack: false, offset: '80px',
	   });
	}
    }
 });

//"change .file-upload-input": function(event, template){
  // var func = this;
//   var file = event.currentTarget.files[0];
  // var reader = new FileReader();
//   reader.onload = function(fileLoadEvent) {
  //    Meteor.call('file-upload', file, reader.result);
//   };
  // reader.readAsBinaryString(file);
//}
//});
