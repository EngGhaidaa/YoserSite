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
            this.route("home", {path: "/", controller: "HomeController"}); 
            this.route("about", {path: "/", controller: "AboutController"}); 
	    this.route("addpdf", {path: "/admin_page/add_pdf", controller: "AddPdfController"});
            this.route("addvedio", {path: "/admin_page/add_vedio", controller: "AddVedioController"});
            this.route("updatepdf", {path: "/admin_page/update_pdf", controller: "UpdatePdfController"});
            this.route("updatevedio", {path: "/admin_page/update_vedio", controller: "UpdateVedioController"});
            this.route("adminhome", {path: "/admin_page/admin_home", controller: "AdminHomeController"});
           
 
	
});
