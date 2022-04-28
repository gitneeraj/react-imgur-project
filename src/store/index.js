import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from './features/gallery'

export default configureStore({
  reducer: {
    gallery: galleryReducer
  },
})
