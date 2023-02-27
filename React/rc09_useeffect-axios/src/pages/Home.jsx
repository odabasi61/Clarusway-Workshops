import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  // tutorials ve setTutorias getTutorials fonksiyonunda kullanıldı. bu fonksiyonu child elementlere aktardık. bu yol sayesinde parent elemandan child elemana props geçişi olduğu gibi bu fonksiyonlar sayesinde child elemandan da parent elemana geçiş yani güncelleme olur.
  const [tutorials, setTutorials] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(tutorials);

  //? componentDidMount
  // bu aşama yukardaki fonksiyonun sonsuz döngüye girmesini engelliyor
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      {/* gettutorials içinde settutorialsı da barındırır. bu fonksiyonu addtutorial componentine yolladık ve bu sayede post yaparken kullandık. input girdilerimizi anlık olarak güncellemeyi sağladı. eğer bu bağlantyı kurmazsak, addtutorial içinde yapılan değişiklikler burada güncellenmez. */}
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
