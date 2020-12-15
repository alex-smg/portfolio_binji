/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: []
};

const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, {payload}){
        state.projects = payload;
        console.log(state.projects);
    },
  }
})

export const {
  setProjects,
} = projects.actions;

export default projects.reducer;

export const getProjectsInfos = state => state.projects;
