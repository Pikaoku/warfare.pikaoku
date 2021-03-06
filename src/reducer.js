import {combineReducers} from "redux";
import {authReducer} from "./features/auth/store/authReducer";
import {dataReducer} from "./store/data/dataReducer";
import {unitmakerReducer} from "./features/unitmaker/store/unitmakerReducer";
import aspectsReducer from './features/aspects/store/aspectsReducer';
import featuresReducer from './features/features/store/featuresReducer';
import unitsReducer from './features/units/store/unitsReducer';
import siteSettingsReducer from './features/common/store/siteSettingsReducer';

export const AUTH = 'auth';
export const DATA = 'data';
export const SETTINGS = 'settings';
export const UNITMAKER = 'unitmaker';

const reducer = combineReducers({
    [AUTH]: authReducer,
    [UNITMAKER]: unitmakerReducer,
    aspects: aspectsReducer,
    features: featuresReducer,
    units: unitsReducer,
    settings: siteSettingsReducer
});

export default reducer;