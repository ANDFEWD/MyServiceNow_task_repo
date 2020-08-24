export const CHECKLIST_LOAD_REQUESTED = 'CHECKLIST_LOAD_REQUESTED';
export const CHECKLIST_LOAD_SUCCEEDED = 'CHECKLIST_LOAD_SUCCEEDED';
export const CHECKLIST_INPUT_CHANGED = 'CHECKLIST_INPUT_CHANGED';
export const CHECKLIST_ITEM_ADD = 'CHECKLIST_ITEM_ADD';
export const CHECKLIST_ITEM_UPDATED = 'CHECKLIST_ITEM_UPDATED';
export const CHECKLIST_UPDATED = 'CHECKLIST_UPDATED';
export const TOGGLE_CLICKED = 'NOW_TOGGLE#CHECKED_SET';
export const REMOVE_BTN_CLICKED = 'NOW_BUTTON_ICONIC#CLICKED';
export const URL_CURRENT_USER = 'api/now/ui/user/current_user';
export const URL_CURRENT_LIST = 'api/now/table/incident?sysparm_display_value=true.';
export const URL_TASK_TABLE = '/api/now/table/vtb_task';
export const URL_UPDATE_TASK = '/api/now/table/vtb_task/:id';
export const FETCH_ITEM_REQUESTED = 'FETCH_ITEM_REQUESTED';
export const FETCH_ITEM_SUCCEEDED = 'FETCH_ITEM_SUCCEEDED';
export const FETCH_ITEM_FAILED = 'FETCH_ITEM_FAILED';
export const CREATE_ITEM_REQUESTED = 'CREATE_ITEM_REQUESTED';
export const CREATE_ITEM_SUCCEEDED = 'CREATE_ITEM_SUCCEEDED';
export const UPDATE_ITEM_REQUESTED = 'UPDATE_ITEM_REQUESTED';
export const DELETE_ITEM_REQUESTED = 'DELETE_ITEM_REQUESTED';
export const CHECKLIST_LOAD_STARTED = 'CHECKLIST_LOAD_STARTED';
export const ENTER_KEY_CODE = 13;
export const ESC_KEY_CODE = 27;
export const FILTER = {
	ALL: 'all',
	COMPLETE: 'complete',
	INCOMPLETE: 'incomplete'
};