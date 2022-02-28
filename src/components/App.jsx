import { Container } from "./container/Container.styled";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { GlobalStyles } from "./container/Global";
import { CardCollection } from "./card-collection/CardCollection";
import { cards } from "content";

export const App = () => {
  return (
    <>
    <GlobalStyles />
      <Header />
      <Container>
        <CardCollection items={cards} />
      </Container>
      <Footer />
    </>
  );
};
