//* Harici bir dosya icersinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima kullanima acimiş olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

function Header() {
  return (
    <header>
      <h1>React JS</h1>
    </header>
  );
}

export default Header;
