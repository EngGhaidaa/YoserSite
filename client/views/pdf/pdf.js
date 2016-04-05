Template.pdf.helpers
({

	thispdf: function(){
		return Pdfs.findOne({_id: Router.current().params.id});
			}
 });
