/* jshint esversion: 6 */

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Items = new Mongo.Collection( 'items' );

Meteor.methods({
  'Items.addOne': ({ name }) => { // jshint ignore:line
    return Items.insert({ name });
  }
})

Meteor.publish( 'items', () => {
  return Items.find();
});

export default Items;
