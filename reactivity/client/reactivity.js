Meteor.startup(function(){


    Friends.find().observe({
        added : function(doc){

            console.log(doc.name);

        }
    });


});