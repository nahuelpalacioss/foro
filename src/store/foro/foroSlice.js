import { createSlice } from '@reduxjs/toolkit';

export const foroSlice = createSlice({
    name: 'foro',
    initialState: { 
        posts: [],
        isSaving: false,
     },
    reducers: {  

        addNewPost: ( state, action ) => {

            state.posts.push(action.payload)
            state.isSaving = true;

        },

        resetReducer: (state) => {

            state.isSaving = false;

        }

    },
});

export const {
    addNewPost,
    resetReducer,
} = foroSlice.actions;