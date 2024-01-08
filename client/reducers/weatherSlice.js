import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// fetch query import
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  weather: [],
  loading: false,
  error: ''
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://api.weatherapi.com/v1'}),
  endpoints: (builder) => ({
    getCurrent: builder.query({
      query: () => 'current.json'
    })
  })
})

export const { useGetCurrentQuery } = weatherApi;

// async thunk
// export const fetchWeather = createAsyncThunk('weather/fetchWeather', () => {
//    fetch('http://api.weatherapi.com/v1/current.json?key=348c3c87a6fc4cfc838200532240601&q=New York&aqi=no')
//     .then(response => response.json())
//     .then(data => {
//         const weatherNow = [];
//         weatherNow.push(<div id={data.current.temp_f}> <p> {data.current.temp_f} </p> </div>);
//         weatherNow.push(<div id={data.current.temp_c}> <p> {data.current.temp_c} </p> </div>);
//         return weatherNow;
//     })
//     .catch(error => {
//         return console.log(JSON.stringify(error));
//     })
// });

// const weatherSlice = createSlice({
//     name: 'weather',
//     initialState,
//     reducers: {
//         // give reducers past-tense 'event' style names

//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchWeather.pending, (state) => {
//             state.loading = true;
//         }),
//         builder.addCase(fetchWeather.fulfilled, (state) => {
//             state.loading = false,
//             state.weather = action.payload,
//             state.error = ''
//         }),
//         builder.addCase(fetchWeather.rejected, (state, action) => {
//             state.loading = false,
//             state.weather = [],
//             state.error = action.error.message
//         })
//     }
// });

// export const { weatherLoaded } = weatherSlice.actions;

// export default weatherSlice = weatherSlice.reducers;
