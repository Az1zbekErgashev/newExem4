const box = {
    card: []
}

function boxcard(state=box, action){
        if(action.type === 'Min'){
            // console.log(action.pay.count);
            action.pay.count= action.pay.count + 1
            let neww = []
            neww.push( action.pay.count)
        }
        return state
}

export {boxcard}