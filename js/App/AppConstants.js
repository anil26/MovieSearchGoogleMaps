/*
 * AppConstants
 * These are the variables that determine what our central data store (authreducer.js)
 * changes in our state. When you add a new action, you have to add a new constant here
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */
import * as appConfig from '../../config';

const SERVICE_DOMAIN = appConfig.SERVICE_DOMAIN;
//const SERVICE_DOMAIN = "http://lxtcatdev.beckman.com:8480/"
//const SERVICE_DOMAIN = "http://lxtcatqa1.beckman.com:8980/"

export const SERVICE_URL = appConfig.SERVICE_URL;//vm server
export const APP_VERSION = appConfig.APP_VERSION;



export const BASE_URL_IMAGE = SERVICE_DOMAIN;
export const SET_PARAMS_URL = "SET_PARAMS_URL";



//This instrument value is set in all the routes which is 
export const SET_INSTRUMENT_ID = 'SET_INSTRUMENT_ID';

//Setting the current page which the application is rendering
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const SET_DPHOST_URL = 'SET_DPHOST_URL';
export const SET_APPLET_URL = 'SET_APPLET_URL';

export const SET_RDS_URLS = 'SET_RDS_URLS';
export const SET_MODEL = 'SET_MODEL';

export const RMS_ID = '';
export const VerisInstrumentMessages = {
	'exportCsvSuccessMsg' : "The request to export the Sample Log to a CSV file is being carried out. You will receive an email with instructions once the file is available."
}

export const Au680InstrumentMessages = {
	'exportCsvSuccessMsg' : "The request to export the Sample Log to a CSV file is being carried out. You will receive an email with instructions once the file is available."
}

