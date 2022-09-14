const redux = require('redux');

// create Reducer
function Counter(state=0,action){
    switch(action.type){
        case 'INC':
            return state+1;
        case 'DEC':
            return state-1;
        default:
            return state;
    }
}
//create Store
const store = redux.createStore(Counter);

//Subscribe the store(when ever data change.);
store.subscribe(()=>{console.log("Store",store.getState())});

//actions
const inc = ()=>{
    return {type:'INC'}
}
const dec = ()=>{
    return {type:'DEC'}
}
store.dispatch((inc()));
store.dispatch((dec()));
