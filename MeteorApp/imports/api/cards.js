/* jshint esversion: 6 */

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Class } from 'meteor/jagi:astronomy';

const Cards = new Mongo.Collection( 'cards' );

const Card = Class.create({
  name: 'Card',
  collection: Cards,
  fields:  {
    title: String,
    userId: String,
    dateCreated: Date,
    lastViewed: Date,
    importanceScore: Number,
    text: String,
    categories: Object
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    },
    slug: {
      fieldName: 'title',
      methodName: null,
      slugFieldname: 'slug',
      canUpdate: true,
      unique: true,
      separator: '-'
    },
    softremove: {
      removedFieldName: 'archived',
      hasRemovedAtField: true,
      removedAtFieldName: 'archivedAt'
    }
  }
});


if (Meteor.isServer) {
  Meteor.publish( 'cards', () => {
    return Cards.find();
  });
}

export { Card, Cards };
