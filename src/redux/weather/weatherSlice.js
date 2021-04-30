import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from './weatherAPI';

const initialState = {
    loading: 'idle',
    data: {},
    err: '',
}

//* async logic
export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async (city) => {
        const res = await fetchWeather(city);
        
        return res.data;
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(getWeather.rejected, (state,action) => {
                state.loading = 'finished';
                state.err = action.payload;
            })
            .addCase(getWeather.fulfilled, (state,action) => {
                state.loading = 'finished';
                state.data = action.payload;
            })
            .addDefaultCase((state,action) => {
                return state;
            });
    },
});

export const selectWeather = (state) => state;

export default weatherSlice.reducer;