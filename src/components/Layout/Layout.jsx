import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, StyledLink, Nav } from "./Layout.styled";
import { Loader } from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </Nav>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
