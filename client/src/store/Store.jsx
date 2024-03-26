import {configureStore} from '@reduxjs/toolkit';
import UserSlice from './reducers/UserSlice';
import Pay from './reducers/Pay';

const store = configureStore({
    reducer:{
         userSlice:UserSlice,
         paySlice:Pay
    }

})

export default store;