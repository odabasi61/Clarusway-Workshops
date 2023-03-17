import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button, Stack } from "@mui/material"; //* Bu import şekli (süslü parantez) performans açısından problemli

// mui de variantlar ve componentler attribute olarak kullanılır. component elementtir. yani componente p yazarsak, yazdığımız şey paragraf olur. variant ise şekildir. diyelim ki component p yaptık variant ise h4. bu durumda h4 görünümlü p olur.

const TypoButtons = () => {
  return (
    <>
      {" "}
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          mt={3}
          color="forestgreen"
        >
          MUI Typo
        </Typography>

        <Typography
          variant="body1"
          align="justify"
          mt={4}
          sx={{ backgroundColor: "red", color: "white", fontSize: "1.5rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae
          ad facilis voluptates! Exercitationem delectus quas illum quos
          consectetur! Dolorum minus ipsum debitis facilis temporibus harum
          labore quas eos perferendis!
        </Typography>

        <Typography
          variant="overline"
          component={"h2"}
          sx={{ display: "inline-block", marginTop: "1.1rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae
          ad facilis voluptates! Exercitationem delectus quas illum quos
          consectetur! Dolorum minus ipsum debitis facilis temporibus harum
          labore quas eos perferendis!
        </Typography>
      </Container>
      <Container>
        {/* container margintop almıyor diye box ekledik. box da bir çeşit div oluyor. */}
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button variant="text" color="warning">
            Text
          </Button>
          <Button variant="contained" color="error">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
          <Button variant="outlined">Primary</Button>
        </Box>

        {/* stack da bir çeşit div oluyo ve responsive olması çok güzel. box a kıyasla daha kullanışlı. */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          mt={2}
        >
          <Button variant="text" color="warning">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Primary</Button>
        </Stack>
      </Container>
    </>
  );
};

export default TypoButtons;
