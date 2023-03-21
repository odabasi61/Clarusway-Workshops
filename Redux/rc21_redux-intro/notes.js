// view --> dispatch --> reducer --> store
// ​
// view den bir istek atıldı. Mesela bir butona onclick yapıldı. İstekten bir dispatch oluşur. Dispatch bir objedir. Bu objenin içinde type ve payload vardır. Type zorunludur, payload duruma göre olabilir ya da olmayabilir.
// Sonrasında oluşan istek dahili olarak reducer a gelir. Reducer a gelen bu istek bir switch-case yapısıyla gelen isteğin type ına bakarak state i günceller. Mesela gelen istek Increment ise state.counter +1 yapacak.
// Reducer da güncellemeler yapıldıktan sonra store a bunlar basılır. Bu şekilde bir döngü içerisinde global state imiz güncellenir.
// ​
// ​
// ---> src altında redux adında bir klasör oluşturduk.
// ---> redux klasörü altında index.js dosyası oluşturduk. Normalde bu dosyaya reducer.jsx de diyebilirdik. Ama index.js dediğimiz zaman bir klösör altındaki tüm bileşenlerin toplandığı dosya gibi düşünülebilir. import edileceği zaman .... from "redux" demek yeterli oluyor. Böyle yapmasaydık ... from "redux/reducer" diyecektik.
// ---> index.js altında ilk önce initial state oluşturduk. Bu bir obje. İçindeki değer de bizim global state imiz.
// ---> Ardından export const ile reducer fonksiyonu oluşturduk. Parametre olarak state ve bu state i değiştirmeye izin veren action ı alıyor bu fonksiyon. Context api dekinden farklı olarak burada state e default olarak initialState değerini tanımladık. Tanımlamazsak reducer çalışmaz.
// ---> Reducer herhangi bir yan etkiden etkilenmeyen bir pure js fonksiyonudur. pure js nin bir dış bağımlılığı olmamalı. Mesela bir fetch yapısı ya da dosya oku/yaz işlemleri dışa bağımlıdır. Ya da reducer içinde bir local state olmamalı. Pure luktan kasıt budur.
// ---> reducer altında switch-case yapısı oluşturduk. Switch parametre olarak (action.type) aldı. bu action dediğimiz şey aslında butondan gelen istek. İsteğin içindeki type ve payload. Biz de parametre olarak bu action ın içinde type ı aldık.
// ---> Case olarak da "INCREASE", "DECREASE", "RESET" durumlarını aldık. Bunların altında state imizi değiştirip return ettik. O yüzden de süslü içine aldık.
// ---> switch-case in sonundaki default: kısmında break olmaz. Mutlaka birşey return edilmeli. O yüzden initial state imizi alsın diye return state dedik.
// ​
// ​
// ---> Store oluşturma kısmına geldik. Normalde src altında store adında bir klasör oluşturuluyor. Ama burada App.js altında yaptık.
// ---> import {createStore} from "redux" dedik. Üstü çizili gelir, önemli değil. Çizginin kalkmasını istiyorsak {legacy_createStore as createStore} yazılabilir.
// ---> App içerisinde const store= createStore(reducer) yaptık. createContext gibi bir yapı. Parametre olarak da oluşturduğumuz reducer ı verdik. Tabi import {reducer} from "./redux" diyerek reducer ı da import ettik. "./redux/index" de diyebilirdik. Ama birşeyi değiştirmez.
// ---> Store u ekledik. Bundan sonrasında provider a / sarmalayıcıya ihtiyacımız var. import {Provider} from "react-redux" dedik.
// const store = createStore(reducer)
//   return (
//     <div className="app">
//       <Provider store={store}>
//         <Counter />
//         <Todo />
//       </Provider>
//     </div>)
// ---> Yukarıdaki gibi app içerisindeki tüm componentleri Provider ile sarmalladık.
// ​
// ​
// ---> Herşeyi yaptık. Artık UI kısmı kaldık. view kısmı. Counter.js componentine gittik. Buradaki butona tıklandığında increase veya decrease gibi işlemler yapması için onclick verdik.
// ---> Tıklanıldığında counter ın değerinin değişmesi için dispatch hook unu kullanıyoruz. import {useDispatch} from "react-redux" deyip import ettik.
// ---> Sonrasında bu hook bize bir fonksiyon döndürüyor. const dispatch = useDispatch() diyerek fonksiyonu dispatch adıyla tanımladık.
// ---> onClick={()=>dispatch({type: "INCREASE"})} onclick kısmında bunu yaptık. Dispatch bir objedir demiştik. type ve payload keylerini alır. Type zorunlu, burada payload kullanmadık.
// ​
// ​
// ---> Şimdi döngüyü tamamladık. Butona tıklandığında state güncelleniyor. Ama ekran basılmıyor. Ekrana basılması için aynı context api de consuming yaparken useContext hook unu kullandığımız gibi burada da useSelector() hook unu kullanıyoruz.
// ---> useSelector((state)=>state.counter) dedik. Buradaki counter denilen şey ta ilk başta index.js de oluşturduğumuz initialState içindeki counter. Tabi bu hook u bir değişkene atıyoruz. Herhangibir isim verilebilir buna.
// ---> const counter = useSelector((state)=>state.counter) diyerek bir değişkene atadık.
// ---> ekrandaki güncelleme için de; <h1>counter:{counter}</h1> dedik. böylece her tıklandığında ekranda counter değeri 1 artıyor.
