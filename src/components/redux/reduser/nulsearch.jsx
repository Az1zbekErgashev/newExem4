const nullS = {
    val2: ''
}

function null_search(state = nullS, action ){
    if(action.type === 'search'){
        let group = [...state.val2]
        if(action.payload.length>1){

            group.push(action.payload)
            let nullgroup ={
                ...nullS,
                val2: group
            }       
            state = nullgroup
             return state 
        }
        if(action.payload.length === 0){
            
            group = ''
            let nullgroup ={
                ...nullS,
                val2: group
            }       
            state = nullgroup
             return state 
        }
    }
    return state
}

export {null_search}