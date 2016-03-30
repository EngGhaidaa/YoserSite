// Define the schema
vedio = new SimpleSchema({
    title: {
        type: String,
        label: "عنوان الدرس",
        max: 200
    },
    author: {
        type: String,
        label: "اسم الكاتب",
         defaultValue:"المهندس أحمد"
    },
    lastCheckedOut: {
        type: Date,
        label: "آخر تعديل",
        optional: true
    },
    summary: {
        type: String,
        label: "حول الفيديو",
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
        label:"رابط الفيديو",
        autoform:
         {
            afFieldInput:
                  { 
                 type:"url"
                    }        
       }
}
});


Vedios = new Mongo.Collection("vedios");
Vedios.attachSchema(vedio);




Vedios.allow({

  insert: function (doc) {
    return true;
  }

});





