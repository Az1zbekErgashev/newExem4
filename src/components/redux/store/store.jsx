import {configureStore} from '@reduxjs/toolkit'
import { addCard } from '../reduser/addCard' 
import { search_card } from '../reduser/search'
import { null_search } from '../reduser/nulsearch'

const store = configureStore({
    reducer : {
        DataCard: addCard ,
        DataVal: search_card,
        nullS: null_search,
    }
})

export {store}