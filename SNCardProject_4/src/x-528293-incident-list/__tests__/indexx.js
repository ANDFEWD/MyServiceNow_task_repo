import { createCustomElement, actionTypes } from "@servicenow/ui-core";
const { COMPONENT_BOOTSTRAPPED } = actionTypes;
import snabbdom from "@servicenow/ui-renderer-snabbdom";
// import "@servicenow/now-template-card";
import styles from "./styles.scss";
import { createHttpEffect } from "@servicenow/ui-effect-http";

// const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'

// const fetchUserEffect = createHttpEffect('api/users/:id', {
//      method: 'GET'
//      headers: {},
//      pathParams: ['id']
//      dataParam: 'data',
//      successActionType: USER_FETCH_SUCCESS
// });



const view = (state, { updateState }) => {
	// const {
	// 	number = "Loading number",
	// 	short_description = "Loading short description",
	// } = state;
	
	return (
		<div>
		
			<h2>Latest Incident</h2>
			<p>
				{number} - {short_description}
			</p>
		</div>
	);
};

createCustomElement("x-528293-incident-list", {
	actionHandlers: {
	
		[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
			const { dispatch } = coeffects;

			dispatch("FETCH_LATEST_INCIDENT", {
				sysparm_limit: "10",
				sysparm_query: "ORDERBYDESCnumber",
				
			});
		},
		FETCH_LATEST_INCIDENT: createHttpEffect("https://dev90098.service-now.com/api/now/table/incident?sysparm_display_value=true.", {
			method: "GET",
			queryParams: ["sysparm_limit", "sysparm_query"],
			successActionType: 'FETCH_LATEST_INCIDENT_SUCCESS'
			
		}),
		FETCH_LATEST_INCIDENT_SUCCESS: (coeffects) => {
			
			const { action, updateState } = coeffects;
			const { result } = action.payload;
			// console.log(result);
			const { number, short_description } = result[0];

			updateState({ number, short_description });
		},
	},
	renderer: { type: snabbdom },
	view,
	styles,
});

// Register with component action handlers:
// {
//     actionHandlers: {
//         'USER_FETCHED': fetchUserEffect,
//         [USER_FETCH_SUCCESS]: ({action, updateState}) => {...}
//     }
// }


////////////////////////////////////////////////////////////////////////////////

// import {createCustomElement} from '@servicenow/ui-core';
// import snabbdom from '@servicenow/ui-renderer-snabbdom';
// import styles from './styles.scss';
// import checklistActions from './actions';

// const view = (state, { updateState }) => {
// 	// const {
// 	// 	number = "Loading number",
// 	// 	short_description = "Loading short description",
// 	// } = state;
	
// 	return (
// 		<div>
// 			<h4> ${result}</h4>
// {/* 		
// 			<h2>Latest Incident</h2>
// 			<p>
// 				{number} - {short_description}
// 			</p> */}
// 		</div>
// 	);
// };


// createCustomElement('x-528293-incident-list', {
// 	renderer: { type: snabbdom },
// 	view,
// 	styles,
// 	...checklistActions,
	
// });


import { createCustomElement, actionTypes } from "@servicenow/ui-core";
const { COMPONENT_BOOTSTRAPPED } = actionTypes;
import { createHttpEffect } from "@servicenow/ui-effect-http";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
// import "@servicenow/now-template-card";

const view = (state, { updateState }) => {
	// const {
	// 	number = 'Loading number',
	// 	short_description = 'Loading short description',
	// } = state;
	
	return (
		<div>
		
			<h2>Latest Incident</h2>
			<p>
				{number} 
			</p>
		</div>
	)
};

createCustomElement("x-528293-incident-list", {
	
	renderer: { type: snabbdom },
	view,
	styles
});


// https://dev90098.service-now.com/


// const fetchUserEffect = createHttpEffect(
// 	"https://cors-anywhere.herokuapp.com/https://dev11111.service-now.com/api/now/table/sys_user?sysparm_limit=10",
// 	{
// 		method: "GET",
// 		successActionType: "USER_FETCH_SUCCESS",
// 		errorActionType: "USER_FETCH_ERROR",
// 		batch: false,
// 		headers: {
// 			Authorization: "Basic bmljZXVzZXJuYW1laGVyZ3dvcmRoZXJl=",
// 		},
// 	}
// )



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {createHttpEffect} from '@servicenow/ui-effect-http';
import { createCustomElement, actionTypes } from "@servicenow/ui-core";
const { COMPONENT_BOOTSTRAPPED } = actionTypes;
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

// const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
// const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';

// const fetchUserEffect = createHttpEffect('https://cors-anywhere.herokuapp.com/https://dev90098.service-now.com/api/now/table/', {
// 	 method: 'GET',
// 	 batch: false,
// 	 headers: {
//         "Authorization": "Basic admin:QXNvbnllXzI1MCQ="
//     },
//      dataParam: 'data',
//      successActionType: USER_FETCH_SUCCESS
// });

// const view = (state, { updateState }) => {
// 	const {
// 		number = "Loading number",
// 		short_description = "Loading short description",
// 	} = state;
	
// 	return (
// 		<div>
		
// 			<h2>Latest Incident</h2>
// 			<p>
// 				{number} - {short_description}
// 			</p>
// 		</div>
// 	);
// };

// createCustomElement("x-528293-incident-list", {
// 	actionHandlers: {
// 		[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
// 			const { dispatch } = coeffects;

// 			dispatch("USER_FETCH_REQUESTED");
// 		},
		

// 		[USER_FETCH_REQUESTED] : fetchUserEffect,
// 		[USER_FETCH_SUCCEEDED]: {
// 			effect: (coeffects) => {
// 				const { 
// 					action: {
// 						payload
// 					}
// 				} = coeffects;
	
// 				// Logging the result
// 				console.log(payload.result);
// 			}
// 		}
// 	},
// 	renderer: { type: snabbdom },
// 	view,
// 	styles
// });


const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
const USER_FETCH_ERROR = 'USER_FETCH_ERROR'

const view = (state, {updateState, dispatch}) => {
	console.log("Trying");
	dispatch("USER_FETCH_REQUESTED");
	console.log("Tried");
	return (
	<div>
		${number}-${short_description}-${state}-${assignment_group}-${assigned_to}-${updated_on}

	</div>
	);

};

const fetchUserEffect = createHttpEffect('/api/now/table/incident?sysparm_display_value=true', {
	method: 'GET',
	successActionType: USER_FETCH_SUCCESS,
	errorActionType: USER_FETCH_ERROR,
	batch: false
});

createCustomElement('x-528293-incident-list', {
	renderer: {type: snabbdom},
	view,
	styles,
    actionHandlers: {
        'USER_FETCH_REQUESTED': fetchUserEffect,
        [USER_FETCH_SUCCESS]: {
						effect: (coeffects) => {
							const { action: {payload}} = coeffects;
							const number = payload.result[0].number;
							const short_description = payload.result[0].short_description;
							const state = payload.result[0].state;
							const assignment_group = payload.result[0].assignment_group;
							const assigned_to = payload.result[0].assigned_to;
							const updated_on = payload.result[0].updated_on;

							console.log(number);
				
							// Logging the result
							console.log(payload.result[0]);
						}
					},
        [USER_FETCH_ERROR]: ({action, updateState}) => {console.log("USER_FETCH_ERROR");}

	}
	
});

