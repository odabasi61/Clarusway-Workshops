const Event = () => {
  // statik değişken. react default olarak statik ayarlar. değişiklik yapıp doma basılmasını sağlamak için dinamik yapmalıyız.
  let text = "Hi FS13";

  const handleClick = () => {
    alert("hello");
  };

  const handleReset = (msg) => {
    console.log(msg);
  };

  function handleChange() {
    text = "hello react";
    console.log(text);
  }

  return (
    <div className="container text-center my-5">
      <h1>{text}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleReset("hello world")}>Reset</button>
      <button onClick={handleChange}>Change</button>

      {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
    </div>
  );
};

export default Event;

//! text console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
