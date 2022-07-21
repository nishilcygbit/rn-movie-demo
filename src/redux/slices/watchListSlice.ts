import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  watchList: [],
}

const watchListSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<any>) => {
      state.watchList = [...state.watchList, action.payload]
    },
    removeToWatchList: (state, action: PayloadAction<any>) => {
      state.watchList = state.watchList.filter((item: any) => item.id !== action.payload)
    },
  }
})

export const watchListReducer = watchListSlice.reducer;
export const { addToWatchList, removeToWatchList } = watchListSlice.actions;