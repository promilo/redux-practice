import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
  render() {

    // Step 1 : Reducer: Change the state by action.type

    const reducer = (state, action) => {
      if(action.type === "ATTACK"){
        return action.payload
      }
      return state;
    }
    //Step 2 Store: reducer n state

    const store = createStore(reducer, "Peace")
    // Step 3 : Subscribe

    store.subscribe( () => {
      // everytime the store/state changes.
      console.log("Store is now", store.getState());
    })

    // Step 4: Dispatch action
    store.dispatch({type:"ATTACK", payload: "Iron Man"})

    store.dispatch({type:"ATTACK", payload: "captain america"})

  return (
    <div>
      test
    </div>
    )
  }
}

export default ReduxDemo;
