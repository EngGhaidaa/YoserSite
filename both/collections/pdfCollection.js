// Define the schema
pdf = new SimpleSchema({
    title: {
        type: String,
        label: "اسم الملف",
        max: 200
    },
    author: {
        type: String,
        label: "اسم الكاتب"
    },
    lastCheckedOut: {
        type: Date,
        label: "آخر تعديل",
        optional: true
    },
    summary: {
        type: String,
        label: "حول الدرس",
        optional: true,
        max: 1000
    },
    views:{
        type:Number,
        label:"عدد المشاهدات",
        optional:true
    },
    link:{
        type:String,
        label:"رابط الدرس",
        
       },

     typeTest: {
       	type: String,
       	optional:true,
       	autoform: {
       		afFieldInput: {
       		type: "url"
       	}
       } 
       }

});


Pdfs = new Mongo.Collection("pdfs");
Pdfs.attachSchema(pdf);
Pdfs.allow

({
	insert: function (doc)
{
	return true;
}
});







