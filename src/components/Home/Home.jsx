import { Container, Title, Img } from "./Home.styled";

import greetings from "../../img/hand.gif";

const Home = () => {
  return (
    <Container>
      <Title>Greetings!!!</Title>
      <Img>
        <img src={greetings} alt="Waving hand" width="200" />
      </Img>
    </Container>
  );
};

export default Home;
