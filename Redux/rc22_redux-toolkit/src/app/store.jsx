import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";

//! configureStore metodu hem bir store olusturur hem de olsuturken farkli reducer'lari birlesitir.
const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //! Dev tool'u kapatmak icin kullanılan degisken
  // devtools redux-toolkit kurulunca otomatik kurulur. burada devtoolsu kapattık. kapatmazsak eğer chrome extension olarak devtools kullanan birisi buradan kodlarımızı görebilir. normalde devtools: false yapılabilir. ama yukardaki yazılış şekliyle production aşamasında otomatik devre dışı kalıyor.
});

export default store;
