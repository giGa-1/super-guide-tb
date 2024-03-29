import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tripSelects } from "./findTrip-reducer";
import {monthsReducer} from './months-reducer'
import {personInfoReducer} from './personInfo-reducer';
import { createWrapper } from "next-redux-wrapper";
import { aboutReducer } from './about-reducer';
import { reviewsReducer } from './reviews-reducer';
import {TripsReducer} from './trips-reducer';

const makeStore = () =>
  configureStore({
    reducer: {
      [tripSelects.name]: tripSelects.reducer,
      [monthsReducer.name]:monthsReducer.reducer,
      [personInfoReducer.name]: personInfoReducer.reducer,
      [aboutReducer.name]: aboutReducer.reducer,
      [reviewsReducer.name]: reviewsReducer.reducer, 
      [TripsReducer.name]: TripsReducer.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);