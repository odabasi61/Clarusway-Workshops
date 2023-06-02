import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// buradaki createasyncthunk, middleware ile ilgilidir. reduxta yapılan reduce, dispatch vs işlemler, api verisi çekerken şöyle soruna yol açabiliyor: veri gecikmeli geldiği için redux işlemi veriyi almadan tamamlanıyor. bunu engelleyen ara yazılımlara miidleware denir.
import axios from "axios";

const initialState = {
  news: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk(
  "getNews", //? action types
  // düz async yerine createasyncthunk ile yaptık. ilk önce bir string alır (getnews verdiğimiz yer. herhangi bir isim verilebilir.). sonra aşağıdaki gibi async fonksiyonu yazılır.
  //? async callback func

  // async içindeki bu parametreleri yazıyoruz
  async (thunkAPI, { rejectWithValue }) => {
    const API = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`;

    try {
      const { data } = await axios(url);
      // console.log(data);
      return data.articles;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Something went wrong");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // arrayi boşaltması için yazdığımız fonksiyon
    clearNews: (state) => {
      state.news = [];
    },
  },
  // buradaki builder parametresi ve builder.addcase standarttır. burada işlemin başlangıç (pending), başarılı olması (fulfilled) ve hata vermesi (rejected) durumları ele alınır. getnews de yukarda verdiğimiz string şeklindeki parametredir.
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        // başarılı olması durumunda action.payload ile güncelledik
        state.news = action.payload;
        // başarılı olduğu için loadingi false ettik
        state.loading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearNews } = newsSlice.actions;

export default newsSlice.reducer;
