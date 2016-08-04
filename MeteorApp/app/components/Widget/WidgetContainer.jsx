/* jshint esversion: 6 */

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Widget from './Widget.jsx';
import Items from '/imports/api/items.js';

// setup details and other examples at: https://guide.meteor.com/react.html
export default WidgetContainer = createContainer( () => {
  const handle = Meteor.subscribe( 'items' );
  const loading = !handle.ready();
  const exists = !loading;
  return {
    loading,
    exists,
    count: exists ? Items.find().fetch().length : []
  };
}, Widget);
