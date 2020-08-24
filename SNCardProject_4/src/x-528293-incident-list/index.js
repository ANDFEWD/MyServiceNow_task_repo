import {createHttpEffect} from '@servicenow/ui-effect-http';
import { createCustomElement, actionTypes } from "@servicenow/ui-core";
// const { COMPONENT_BOOTSTRAPPED } = actionTypes;
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import "@servicenow/now-template-card";


const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
const USER_FETCH_ERROR = 'USER_FETCH_ERROR'

const view = (state, {updateState,dispatch}) => {

		
	dispatch("USER_FETCH_REQUESTED");
	// resultdata("USER_FETCH_SUCCESS");
	// const listItems = numbers.map((number) =>

	// const resultdataComponents = resultdata.map((data) => 
	// console.log(resultdataComponents));
	// const resultdataComponents = resultdata.map(resultdata => resultdata.number)

	const {results = "Loading data..." } = state;

	const resultdataComponents = results.map(result=>{
		<now-template-card-assist 
		key={result.sys_id}
		className="card_container-block-item"
		tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
		actions={[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}]} 
		heading={{"label":`${result.short_description}`}} 
		content={[{"label":"Number","value":{"type":"string","value":`${result.short_description}`}},{"label":"State","value":{"type":"string","value":`${result.sate}`}},{"label":"Assignment Group","value":{"type":"string","value":`${result.assignment_group}`}},{"label":"Assigned To","value":{"type":"string","value":`${result.assigned_to}`}}]} 
		footerContent={{"label":"Updated","value":`${result.sys_updated_on}`}} 
		configAria={{}} 
		contentItemMinWidth="300">
	</now-template-card-assist>
	});


	return (
	<div>
		<p>{resultdataComponents}</p>
		
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
        // [USER_FETCH_SUCCESS]: {
		// 				effect: (coeffects) => {
		// 					const { action: {payload}} = coeffects;
		// 					const resultdata = payload.result;
							

		// 					console.log(resultdata);

		// 					updateState( resultdata );
		// 				}
		// 			},
		// [USER_FETCH_ERROR]: ({action, updateState}) => {console.log("USER_FETCH_ERROR");}
		USER_FETCH_SUCCESS:(coeffects) => {
			
			const { action, updateState } = coeffects;
			const { results } = action.payload;
			console.log(results);
			// const { number, short_description } = results[0];

			updateState({ results });
		},

	}
	
});

