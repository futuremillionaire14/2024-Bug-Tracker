import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Aleyass Zegue"})
            state.push({name:"John Smith"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;
