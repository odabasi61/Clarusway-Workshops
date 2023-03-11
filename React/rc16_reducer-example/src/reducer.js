// reducer kullanım amacı stateleri tek bir yerde toplamak ve kullanımı indirgemek.
// reducer component değil pure javascript fonksiyonudur. apiden felan veri çekmemeli, tamamen js fonksiyonu olmalı.
// redux temelinde reducer yapısı var.

// burada başlangıç değerlerini belirliyoruz. mesela loading false, error false ve cat image boş
export const initialState = {
  loading: false,
  catImage: "",
  error: false,
};

// sonra reducer fonksiyonunu yazıyoruz. iki parametre alıyor. state yukardaki loading, error vs... action ise onu değiştirmeye yarayan işlemdir.

export const reducer = (state, action) => {
  switch (action.type) {
    // start aşamasında statei açıyoruz (...state). burada değişen tek şey loading.
    case "START":
      return { ...state, loading: true };

    // success kısmında da state açılıyor. içinde değişecekler belirleniyor. kedi resminin alındığı kaynağa action içindeki payloaddan ulaşıyoruz.
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        catImage: action.payload,
      };

    // burada error için action.payload kullandık. cat image boş duruma getirildi. yani hata varsa resim yok.
    case "FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        catImage: "",
      };

    default:
      break;
  }
};
