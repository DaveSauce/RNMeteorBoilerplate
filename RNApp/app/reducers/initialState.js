/* jshint esversion:6 */

const initialState = function ( state, action ){ // jshint ignore:line

	switch ( action.type ){

		case 'justSomeStuff':
			return Object.assign({}, state, {
				email: "default"
			});

		default:
			return state;
	}
};

export default initialState;
