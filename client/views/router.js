Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

var freeRoutes = [
	"home",
        "about"
];

Router.onBeforeAction(function() {
	// loading indicator here
	if(!this.ready()) {
		$("body").addClass("wait");
		this.render("loading");
	} else {
		$("body").removeClass("wait");
		this.next();
	}
});

Router.map(function () {
	this.route("about", {path: "/admin_page/add_pdf", controller: "PdfController"});
        //this.route("about", {path: "/admin_page/add_vedio", controller: "VedioController"}); 
	this.route("home", {path: "/", controller: "HomeController"});
});
