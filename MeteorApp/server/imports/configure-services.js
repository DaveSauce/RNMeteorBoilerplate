/* jshint esversion: 6 */
// This configures multiple oAuth accounts
// Not currently used

const services = Meteor.settings.private.oAuth;

const configure = () => {
  if ( services ) {
    for( let service in services ) {
      ServiceConfiguration.configurations.upsert( { service: service }, {
        $set: services[ service ]
      });
    }
  }
};

export default configure;
