this.PdfController = RouteController.extend({
	template: "pdf",

	yieldTemplate: {
	  /*YIELD_TEMPLATES*/

	},
		action: function () {

	            this.render('pdf');

	},

		waitOne: function () {
	  return Meteor.subscribe('pdfdetail', this.params.id);
	}
		});
