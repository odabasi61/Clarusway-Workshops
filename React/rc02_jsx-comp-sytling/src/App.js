// App componenti

import Content from "./Content";
import { Footer } from "./Footer";
import Header from "./Header";

function App() {
  return (
    // jsx kısmı. return içinde div veya başka bir fragment olmazsa sadece bir element koyabiliriz. birden fazla koymak için bir fragment içine almalıyız
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
