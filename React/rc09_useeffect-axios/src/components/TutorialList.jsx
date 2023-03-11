import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({ tutorials, getTutorials }) => {
  // verileri göndermem için bir state lazım ve o state ile verileri gönderiyorum.
  const [item, setItem] = useState("");

  const deleteTutorial = async (id) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
    try {
      await axios.delete(`${BASE_URL}/${id}/`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  // const editTutorial = async ({ id, title, description }) => {
  //   const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
  //   try {
  //     await axios.put(`${BASE_URL}/${id}/`, { title, description });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   getTutorials();
  // };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-tutor"
                    // onClick={() =>
                    //   editTutorial({
                    //     id: 502,
                    //     title: "dokanmayin",
                    //     description: "REACT",
                    //   })
                    // }

                    // edirtutorial fonksiyonunun çalışması için bana id, title, description yani modaldan verilerin gelmesi gerekiyor. işte burada tutorial list teki onClick yardımcı olacak. bana item gönderecek.
                    onClick={() => setItem(item)}
                    // mapteki verileri item ile edittuorial a gönderiyorum.bunlar eski değerler. buttona tıklayınca eski değerler görünmesi için. butona tıklanıldıgında hem state guncellenıyor hemde Edittutorial e verıler gıdıyor.
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditTutorial getTutorials={getTutorials} item={item} />
    </div>
  );
};

export default TutorialList;
