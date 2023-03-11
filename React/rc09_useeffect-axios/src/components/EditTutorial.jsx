import axios from "axios";
import { useEffect, useState } from "react";

//? i. tutorial listen gelen item state ini burada porps oalrak karşıladım ve aldım.
const EditTutorial = ({ getTutorials, item }) => {
  //? k. editTutorial(id,title,description)  parametreleri lazım. bu ise tutorial listen bize gelmişti ve bunu desc yaparak açıyoruz.stateler çakıştı ve isimlerini değiştiriyoruz.
  const { id, title: exTitle, description: exDescription } = item;
  // console.log(item);
  // console.log(id);
  // console.log(exTitle);
  // console.log(exDescription);

  //? c. bana stateler gerekeceği için şimdiden stateleri tanımlıyorum.bu stateler yeni girilecek olan değerler.
  //? h. aynı zamanda edit te tıkladığımda acılan modal da eskı verılerın gelmesı lazım kı user eskı verılerı gorerek ne değiştirecegını bılsın.bu yüzden item gelmesi lazım.
  const [title, setTitle] = useState(exTitle);
  const [description, setDescription] = useState(exDescription);
  //? l. eskilerin değerlerini yenilerin initial değerlerine vereceğiz ki tıklandıgında eski degerler gözüksün

  // console.log(title);
  // console.log(description);

  //? m. tıklıyoruz ama eski değerler gelmiyor???? Çünkü state initial değer verildiği zaman , ilk render da initial state ne ise onun degerını alır ve bir daha okumaz. ilk render da buraya boş geliyor ve state e boş deger geliyor. böyle tıklayınca boş deger geliyor. ÇÖZÜM ise componenetDidUpdate kullanmak. değerler değiştiğinde algılasın ve state lerimi güncellememiz lazım. useEffect ile yaparız.Böylece initial degerlerin pek bi espirisi kalmıyor.

  useEffect(() => {
    setTitle(exTitle);
    setDescription(exDescription);
  }, [exTitle, exDescription]);

  //? f. handle edit fonk. tanımlıyorum  sonra edit fonksıyonunu içine  yazıyorum ve handle edıt ıcınde tanımlıyorum.axios import yapıyorum  ve  getTutorials() fonksiyonunu TutorialList ten props aracılığı ile getiriyorum
  const handleEdit = (e) => {
    e.preventDefault();
    editTutorial(id, title, description);
    setTitle("");
    setDescription("");
  };

  const editTutorial = async (id, title, description) => {
    //! console.log(id)
    //!console.log(title)
    //!console.log(description);
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
    try {
      await axios.put(`${BASE_URL}/${id}/`, { title, description });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="modal" tabIndex="-1" id="edit-tutor">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* //? b. addtutorialdan ınputları divleri alıp yapıştırdık */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            {/* //? d. close buttonunu kaldırıyorum ve save buttonuna tıklayınca
            //? verileri göndermek için oncklik ekliyorum */}
            {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
            {/* //? ama close un kapatma özelliği var bunu save buttonuna aktarıyoruz. data-bs-dismiss="modal" */}

            <button
              type="button"
              className="btn btn-primary"
              //? e. save buttonuna tıklandıgında edittutorial fonksiyonunu calıstırsın dıye  onClick ekliyoruz
              onClick={handleEdit}
              data-bs-dismiss="modal"
              //?  data-bs-dismiss="modal" ONCLİCK in altında olsun
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;

//? a. Modal ın title ınput larını değiştireceğiz INPUTLARI addtutorialdan alacagız.Closa butonunu kaldırcagız.. ve save buttonuna basıldıgında kapanacak bunu ayarlayacagız.
//? b. addtutorialdan ınputları divleri alıp yapıştırdık
//? c. bana stateler gerekeceği için şimdiden stateleri tanımlıyorum
//? d. close buttonunu kaldırıyorum ve save buttonuna tıklayınca verileri göndermek için oncklik ekliyorum. ama close un kapatma özelliği var bunu save buttonuna aktarıyoruz.
//? e. save buttonuna tıklandıgında edittutorial fonksiyonunu calıstırsın dıye  onClick ekliyoruz
//? f. handle edit fonk. tanımlıyorum  sonra edit fonksıyonunu içine  yazıyorum ve handle edıt ıcınde tanımlıyorum.axios import yapıyorum  ve  getTutorials() fonksiyonunu TutorialList ten props aracılığı ile getiriyorum
//? g. edirtutorial fonksiyonunun çalışması için bana id, title, description yani modaldan verilerin gelmesi gerekiyor. işte burada tutorial list teki   onClick yardımcı olacak. bana ıtem gönderecek.
//? h. aynı zamanda edit te tıkladımda acılan modal da eskı verılerın gelmesı lazım kı user eskı verılerı gorerek ne değiştirecegını bılsın.bu yüzden item gelmesi lazım.
//? ı tutorial listte
//? i. tutorial listen gelen item state tini burada porps oalrak karşıladım ve aldım.
//? j. handleEdit() fonksiyonunu düzenliyoruz. e.preventDefault(), editTutorial(),setTitle('');setDesc('');
//? k. editTutorial(id,title,description)  parametreleri lazım. bu ise tutorial listen bize gelmişti ve bunu desc yaparak açıyoruz.stateler çakıştı ve isimlerini değiştiriyoruz.
//? l. eskilerin değerlerini yenilerin initial değerlerine vereceğiz ki tıklandıgında eski degerler gözüküsn
//? m. tıklıyoruz ama eski değerler gelmiyor???? Çünkü state initial değer verildiği zaman , ilk render da initial state ne ise onun degerını alır ve bir daha okumaz. ilk render da buraya boş geliyor ve state e boş deger geliyor. böyle tıklayınca boş deger geliyor. ÇÖZÜM ise componenetDidUpdate kullanmak. değerler değiştiğinde algılasın ve state lerimi güncellememiz lazım. useEffect ile yaparız. Böylece initial degerlerin pek bi espirisi kalmıyor.

//? n. aldığımız uyarı ile input a value verice kontrol etmek istiyoruz. value ve onChange kullanınca kontrollü hale çeviriyoruz. value undefined dan defined e geldi. ilk değerimiz boş geliyor undefined geliyor. o yüzden böyle bir hata veriyor. çözümü  || ""

//! bizim istediğimiz value yu bassın kontrol edıyoruz,input a undefined geliyor.title degeri yoksa boş değer bassın
