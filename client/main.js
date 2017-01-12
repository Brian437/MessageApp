Message = new Mongo.Collection('message');

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

Template.hello.onCreated(function helloOnCreated() 
{
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers
({
  counter()
  {
    return Template.instance().counter.get();
  },
});

Template.body.helpers
({
  messages: function()
  {
    return Message.find();
  }
  
})

Template.body.events
  ({
    'submit .new-message': function(event)
    {
      //alert("test");
      var newMessage=event.target.newMessageTextArea.value;
      var poster=event.target.poster.value;
      //alert(newMessage);
      //alert(poster);

      Message.insert({
        message:newMessage,
        poster:poster,
        date: new Date()
      })
      event.target.newMessageTextArea.value="";
      return false; //This line will prevent the page from refreshing on submit
    }
  })

Template.view_messages.events
({
  'click .deleteMessage': function()
  {
  
    var confirmDelete=confirm("Are you sure you want to delete this");
    if(confirmDelete)
    {
      //I wasn't able to get the delete working from the server side
      //Meteor.call('DeleteMessage',this._id);
      DeleteMessage(this._id);
    }
  }
})

Template.hello.events
({
  'click button'(event, instance)
  {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
