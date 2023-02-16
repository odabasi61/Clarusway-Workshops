//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? JSX icerisinde degiskenler {} icerisinde gosterilir.

export const Footer = () => {
  return (
    <footer>
      <p style={{ textAlign: "center" }}>
        copyright by clarusway {new Date().getFullYear()}
      </p>
    </footer>
  );
};
