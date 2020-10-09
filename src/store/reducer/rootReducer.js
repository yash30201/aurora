import { firestoreReducer } from "redux-firestore";
import { firebaseReducer} from 'react-redux-firebase';
const { combineReducers } = require("redux");
const { default: authReducer } = require("./authReducer");
const { default: projectReducer } = require("./projectReducer");


const rootReducer = combineReducers({
    auth : authReducer,
    project :projectReducer,
    firestore :firestoreReducer,
    firebase :firebaseReducer
});

export default rootReducer;