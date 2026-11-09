
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    Navigation_page: String;
}

const initialState: CounterState = {
    Navigation_page: "Dashboard",
};

const counterSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {

        Getnavigation: (state) => {
            state.Navigation_page;


        },
        Setnavigation: (state, action) => {
            console.log(action.payload.name + "name")
            state.Navigation_page = action.payload.name || window.location.pathname.split("/")[2];
        },



    },
});

export const { Setnavigation } = counterSlice.actions;

export default counterSlice.reducer;
