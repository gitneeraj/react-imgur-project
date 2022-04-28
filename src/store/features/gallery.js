import { createSlice } from '@reduxjs/toolkit'

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    section: 'hot',
    sort: 'viral',
    window: 'day',
    images: []
  },
  reducers: {
    setSelection: (state, { payload }) => {
      state[payload.type] = payload.value
    },
    setImages: (state, { payload }) => {
      state.images = payload
    },
  },
})

export const { setSelection, setImages } = gallerySlice.actions

export default gallerySlice.reducer
