import AppBarComp from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { pink, deepOrange } from "@mui/material/colors";
import MakeStylesComp from "../components/MakeStylesComp";

// burada genel styling için theme oluşturduk (createTheme ile) ve her yerde uygulanabilmesi için themeprovider ile sarmalladık.

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#bede",
      },
      secondary: {
        main: pink[300],
      },
      error: {
        main: deepOrange[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <TypoButtons />
      <TextFieldComp /> */}
      <AppBarComp />
      <CardGrid />
      <MakeStylesComp />
    </ThemeProvider>
  );
};

export default Home;
