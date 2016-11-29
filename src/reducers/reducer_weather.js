import {FETCH_WEATHER} from '../actions/index'

export default function(state = [], action){
  console.log('Action recived', action)
  switch (action.type){
    case FETCH_WEATHER :
    // return state.push(action.payload.data)
    // return state.concat([action.payload.data])
     return [action.payload.data, ...state]              //es6
  }
  return state
}
