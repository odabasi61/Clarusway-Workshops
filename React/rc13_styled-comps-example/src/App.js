import Header from "./components/Header";
import Container from "./components/styled/Container";
import Card from "./components/Card";
import Footer from "./components/Footer";
import content from "./data";

import { GlobalStyles } from "./components/styled/GlobalStyles";

import { ThemeProvider } from "styled-components";

const styles = {
  colors: {
    primary: "#444",
    secondary: "#666",
  },
  margins: {},

  paddings: {},
  breakpoints: { xs: "300px", sm: "500px", md: "700px" },
};

const App = () => {
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Container>
        <Header />
        <Card content={content} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
