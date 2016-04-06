Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

var freeRoutes = [
	"home",
        "about",
        "pdf"

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
	this.route("about", {path: "/about", controller:"AboutController"});
	this.route("pdf",{path:"/pdf/:id",controller:"PdfController"});

        this.route("adminhome", {path: "/admin_page/admin_home", controller:  "AdminHomeController"});
        this.route("addpdf", {path: "/admin_page/add_pdf", controller: "AddPdfController"});
        this.route("addvideo", {path: "/admin_page/add_video", controller: "AddVideoController"});
        this.route("updatepdf", {path: "/admin_page/update_pdf", controller: "UpdatePdfController"});
        this.route("updatevideo", {path: "/admin_page/update_video", controller: "UpdateVideoController"});
});
