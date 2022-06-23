import { createSelector } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  test: '-',
  selectedWidth: 'N/V',
  selectedDepth: 'N/V',
  selectedTop: 'N/V',
  isWintergarten: false,
  dimensions: [
    { width: '3.00', depth: '2.50', price: 1900 },
    { width: '3.00', depth: '3.00', price: 2100 },
    { width: '3.00', depth: '3.50', price: 2300 },
    { width: '3.00', depth: '4.00', price: 2500 },
    { width: '3.00', depth: '4.50', price: 2700 },
    { width: '4.00', depth: '2.50', price: 2250 },
    { width: '4.00', depth: '3.00', price: 2400 },
    { width: '4.00', depth: '3.50', price: 2550 },
    { width: '4.00', depth: '4.00', price: 2750 },
    { width: '4.00', depth: '4.50', price: 2900 },
    { width: '5.00', depth: '2.50', price: 2550 },
    { width: '5.00', depth: '3.00', price: 2700 },
    { width: '5.00', depth: '3.50', price: 2950 },
    { width: '5.00', depth: '4.00', price: 3300 },
    { width: '5.00', depth: '4.50', price: 3500 },
    { width: '5.00', depth: '5.00', price: 3750 },
    { width: '6.00', depth: '2.50', price: 3000 },
    { width: '6.00', depth: '3.00', price: 3150 },
    { width: '6.00', depth: '3.50', price: 3500 },
    { width: '6.00', depth: '4.00', price: 3700 },
    { width: '6.00', depth: '4.50', price: 3900 },
    { width: '6.00', depth: '5.00', price: 4050 },
    { width: '7.00', depth: '2.50', price: 3450 },
    { width: '7.00', depth: '3.00', price: 3650 },
    { width: '7.00', depth: '3.50', price: 3850 },
    { width: '7.00', depth: '4.00', price: 4150 },
    { width: '7.00', depth: '4.50', price: 4450 },
    { width: '7.00', depth: '5.00', price: 4700 },
    { width: '8.00', depth: '2.50', price: 3750 },
    { width: '8.00', depth: '3.00', price: 4100 },
    { width: '8.00', depth: '3.50', price: 4650 },
    { width: '8.00', depth: '4.00', price: 5200 },
    { width: '8.00', depth: '4.50', price: 5500 },
    { width: '8.00', depth: '5.00', price: 6000 }
  ]
};

/**
* Creates Selector to use in components
* rerenders only if state items has changed
* https://redux.js.org/usage/deriving-data-selectors
*
*/
export const selectApp = (state) => state.app;

export const getWidth = createSelector(
  selectApp,
  (state) => state.selectedWidth)

export const getDepth = createSelector(
  selectApp,
  (state) => state.selectedDepth)

export const getTop = createSelector(
  selectApp,
  (state) => state.selectedTop)

export const isWintergarten = createSelector(
  selectApp,
  (state) => state.isWintergarten)

export const selectPrice = createSelector(
  selectApp,
  (state) => {
    const selectedDimension = state.dimensions.filter((item) => {
      return item.width === state.selectedWidth && item.depth === state.selectedDepth;
    })

    return selectedDimension[0]?.price ?? 0;
  }
)

export const selectPriceForTop = createSelector(
  selectApp,
  (state) => {
    if (state.selectedTop === 'Polycarbon') {
      if ((state.selectedWidth * state.selectedDepth) < 20) { return 200 }
      else if ((state.selectedWidth * state.selectedDepth) < 30) { return 300 }
      else if ((state.selectedWidth * state.selectedDepth) < 40) { return 400 }
      else if ((state.selectedWidth * state.selectedDepth) < 50) { return 500 }
      else if ((state.selectedWidth * state.selectedDepth) < 60) { return 600 }
    }
    else if (state.selectedTop === 'Glas') return ((state.selectedWidth * state.selectedDepth) * 80)

    else if (state.selectedTop === 'Milchglas') return ((state.selectedWidth * state.selectedDepth) * 110)

    else return 0
  }
)



export const selectPriceForDoors = createSelector(
  selectApp,
  (state) => {
    if (!state.isWintergarten) return 0;

    else {
      const diameter = parseFloat(state.selectedDepth) + parseFloat(state.selectedDepth) + parseFloat(state.selectedWidth);
      return diameter * 350;
    }
  }
)

export const selectPriceForSeitenKeile = createSelector(
  selectApp,
  (state) => {
    if (!state.isWintergarten) return 0;

    else {
      if (state.selectedTop === 'Glas') return 1000;
      else {
        const seitenLaenge = parseFloat(state.selectedDepth) + parseFloat(state.selectedDepth);
        return seitenLaenge * 100;
      }

    }
  }
)


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    SET_SELECTED_WIDTH: (state, action) => {
      state.selectedWidth = action.payload;
    },
    SET_SELECTED_DEPTH: (state, action) => {
      state.selectedDepth = action.payload;
    },
    SET_SELECTED_TOP: (state, action) => {
      state.selectedTop = action.payload;
    },
    TOGGLE_IS_WINTERGARTEN: (state, action) => {
      state.isWintergarten = !state.isWintergarten;
    }
  },
  // extraReducers handle the async state changes during promise handling
  // extraReducers(builder) {
  //   builder; 
  // },
});

// DON'T FORGET: add new Reducer here to export.
// Action creators are generated for each case reducer function
export const { SET_SELECTED_WIDTH, SET_SELECTED_DEPTH, SET_SELECTED_TOP, TOGGLE_IS_WINTERGARTEN } = appSlice.actions;

export default appSlice.reducer;