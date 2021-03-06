const redux = require("redux")
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIceCreame() {
    return {
        type: BUY_ICECREAM,
    }
}

// //{prevState, action} => newState

// const initialState = {
//     numOfCake: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCake: 10,
}
const initialIceCreamState = {
    numOfIceCreams: 20
}
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCake: state.numOfCake - 1
//                 //...state เพื่อ update เฉพาะ numOfCake
//             }
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams - 1
//             }
//         default:
//             return state;
//     }
// }
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
                //...state เพื่อ update เฉพาะ numOfCake
            }

        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
                //...state เพื่อ update เฉพาะ numOfCake
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: iceCreamReducer
    //render => {key, value} => { cake: { numOfCake: 7 }, iceCreame: { numOfIceCreams: 17 } }
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreame())
store.dispatch(buyIceCreame())
unsubscribe()
