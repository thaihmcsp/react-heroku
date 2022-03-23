import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
  name: 'user',
  initialState:{
    user: {
    username: '',
    phone: '',
    email: '',
    address: '',
    avatar:[],
    fullname: '',
    role:''}
  },
  reducers:{
    getUser: function(state, action){
      state.user = action.payload
    },

    removeUser: function(state){
      state.user = {}
    }
  }
})

const {actions, reducer} = UserSlice
export const {getUser, removeUser} = actions
export default reducer