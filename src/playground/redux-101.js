import { createStore } from 'redux'

//Action generators
const add = ({a, b}) => {
    return a + b
}
console.log(add({a: 1,b: 12 }))
const incrementCount = ({incrementBy = 1} ={}) => ({
    type: 'INCREMENT',
    incrementBy:  incrementBy 
})
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})
const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count: count
} )
const resetCount = ({count = 0 } = {}) => ({
    type: 'SET',
    count: count
})
//Reducers
//1. Reducers are pure functions
//2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
           
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
           
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: action.count
            }
    default:
        return state;
}

}
const store = createStore(countReducer);
// Actions 
// I'd like to increment the count
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch({
//     type: 'INCREMENT',
//    incrementBy: 5  
// })
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount())


store.dispatch(resetCount({count:0}))
store.dispatch(decrementCount())
    
store.dispatch(decrementCount({decrementBy: 10}))
store.dispatch(setCount({count:101}))
