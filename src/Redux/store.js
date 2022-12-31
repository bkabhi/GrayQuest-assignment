import userApi from "./userAPI";
import { configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>(
        getDefaultMiddleware().concat(userApi.middleware)
    )
})

export default store;