export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    for(let i of queue){
      if(typeof i==="function"){
          finalState=i(finalState)
          
        }else{
          finalState=i
        }
    }
  
    return finalState;
  }
  