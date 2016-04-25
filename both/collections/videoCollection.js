video= new SimpleSchema({
    title:
    {
        type: String,
        label: "اسم الفيديو",
        max: 200
    },
    //author: {
    //    type: String,

    //label: "اسم الكاتب",
    //  defaultValue:"المهندس أحمد"
    //},
    summary:
    {
        type: String,
        label: "اسم المعد",
        optional: true,
        max: 1000
    },
    views:
    {
        type:Number,
        label:"عدد المشاهدات",
        optional:true
    },
    link:
    {
        type:String,
        label:"رابط الفيديو",
        autoform:
        {
            afFieldInput:
            {
                type: "url"
            }
        }
    }

});
Videos = new Mongo.Collection("videos");
Videos.attachSchema(video);
Videos.allow
({
    insert : function (doc)
    {
        return true;
    },

     update: function ( doc, fields, modifier) {
       return true;
    },

    remove: function ( doc) {
      return true;
     }

});