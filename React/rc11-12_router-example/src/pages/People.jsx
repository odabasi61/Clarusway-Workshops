import { useState, useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

//? Link, NavLink ve Navigate componentleri declarative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapilan bir
//? componentlerdir. (Nav v.b)

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

const People = () => {
  const [people, setPeople] = useState([])
  const navigate = useNavigate()

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getPeople()
  }, [])

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((p) => {
          const { id, first_name, last_name, avatar } = p
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
              //? Absolute path (tam adres vermek)
              // onClick={() => navigate(`/people/${id}`)}
              //! Relative path (goreceli adres vermek)
              onClick={() => navigate(`${id}`, { state: p })}
            >
              <img className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>

              {/* <Link to={`/people/${id}`}> Deneme</Link>
              <Navigate to={`/people/${id}`} /> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default People
