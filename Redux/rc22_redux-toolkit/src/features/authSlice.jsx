import { createSlice } from "@reduxjs/toolkit";

// createSlice: reduxte kullanılan reducers, types, actions vs burada tek yerde birleşiyor. react-toolkit sitesinde bilgileri mevcut. aşağıdaki kodları hazır veriyor, biz değerleri kendimiz yazıyoruz. initialstate ve global state burada belirlenir.

const initialState = {
  user: "",
};

const authSlice = createSlice({
  // name sayesinde type belirtmeye gerek yok.
  name: "auth",
  initialState,
  // initialState: initialState, bu şekilde de yazılabilir ama react yeni versiyonda key ve value aynı ise üstteki gibi tek de yazılabilir.
  reducers: {
    // burası reducer ve action birlikte olduğu yer.
    setUser: (state, action) => {
      // burada fonksiyon yazıyoruz. fonksiyon key oluyor. devamı da value.
      // setUser: (state, {payload}) => {
      state.user = action.payload;
      // inputtaki bilgi state içindeki user oldu.
    },

    clearUser: (state) => {
      state.user = "";
    },
  },
});

// yukarda yazdığımız fonksiyonları bu şekilde export etmeliyiz. yoksa çalışmaz.
export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
