import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducers from '../reducers/index'

const middleware = applyMiddleware(promise(), thunk, logger)

/* store.subscribe(()=>{
    console.log("store changed",store.getState())
})

store.dispatch({type:"ADD_MOVIE",payload:{name:"new film title",desc:"new film desc"}}); */

export default createStore(reducers, middleware)
