import Msg from "./Msg";

const Person = (props) => {
  // burada ilk props parametresinin yerine name, tel, img yazarsak aşağıdaki const lu olan kısma gerek kalmaz. yani yolda açma işlemidir
  // destructuring. parantez içinde süslü ile olur
  const { name, tel, img } = props;
  return (
    <div>
      <Msg isim={name} />
      <img style={{ width: "300px", height: "300px" }} src={img} alt="" />
      <p style={{ fontWeight: "bold" }}>tel: {tel}</p>
    </div>
  );
};

export default Person;
