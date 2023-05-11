import { createStore } from 'vuex';

import { actions } from './actions';
import { mutations } from './mutation';
const store = createStore({
    state,
    actions,   
    modules:{
        
    }
})
export default store;