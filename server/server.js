Meteor.startup(function() {
	// read environment variables from Meteor.settings
	if(Meteor.settings && Meteor.settings.env && _.isObject(Meteor.settings.env)) {
		for(var variableName in Meteor.settings.env) {
			process.env[variableName] = Meteor.settings.env[variableName];
		}
	}

	
});

Meteor.methods({
	"sendMail": function(options) {
		this.unblock();

		Email.send(options);
	},
'file-upload': function (fileInfo, fileData) {
      console.log("received file " + fileInfo.name + " data: " + fileData);
      fs.writeFile(fileInfo.name, fileData);
   }
});
