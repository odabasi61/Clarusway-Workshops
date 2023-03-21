import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import newsReducer from "../features/newsSlice"

//! configureStore metodu hem bir store olusturur hem de olsuturken farkli reducer'lari birlesitir.
const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //! Dev tool'u kapatmak icin kullanılan degisken
})

export default store
