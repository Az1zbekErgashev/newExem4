
const search = {
    val: ''
}



function search_card (state = search,  action){
    if(action.type === 'search'){
        const list = [...state.val]
        const arr = action.pay2 
        const newArr = action.pay2.filter(e=> {return e.name.toLowerCase().includes(action.payload.toLowerCase())})
        const newlist ={
            ...search,
            val: newArr
        }
        state = newlist
        
        return state
    }
    return state
}

export {search_card}