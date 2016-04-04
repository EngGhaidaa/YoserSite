this.PdfController = RouteController.extend({
    template: "pdf",

    yieldTemplates: {
        /*YIELD_TEMPLATES*/
    },
    action: function () {

        this.render('pdf');
    },
    waitOn: function () {
        return Meteor.subscribe('pdfdetail', this.params.id);
    }
});
