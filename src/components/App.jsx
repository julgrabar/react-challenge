import { ThemeProvider } from "styled-components";

import { Container } from "./container/Container.styled";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { GlobalStyles } from "./container/Global";
import { StrictMode } from "react";
import { CardCollection } from "./card-collection/CardCollection";
import { cards } from "content";

const theme = {
  colors: {
    headerColor: '#ebfbff',
    bodyColor: '#ffffff',
    footerColor: '#003333'
  },
  mobile: '768px',

}

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <Header />
      <Container>
        <CardCollection items={cards} />
      </Container>
      <Footer />
    </>
    </ThemeProvider>
  );
};
