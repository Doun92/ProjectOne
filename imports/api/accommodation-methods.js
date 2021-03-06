import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

if (Meteor.isServer) {
    Meteor.publish('accommodations', function () {
      if (this.userId) {
        return Accommodation.find({ host_id: this.userId }, {
          fields: { 
            _id : 1,
            address : 1,
            locNumber : 1,
            zipCode : 1,
            location : 1, 
            availablePlaces : 1,
            availability : 1,
            host_id : 1
          }
        });
      } else {
        this.ready();
      }
    });
  }

//Collection pour les logements
export const Accommodation = new Mongo.Collection('accommodations');
