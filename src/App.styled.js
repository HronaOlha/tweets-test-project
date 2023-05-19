import styled from "@emotion/styled";

export const List = styled.ul`
  list-style-type: none;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  place-items: center;
  padding: 28px 36px 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const BottomContainer = styled.div`
  margin-top: 88px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  /* transform: translate(50%, -50%); */
`;

export const Rectangle = styled.img`
  position: absolute;
  top: 220px;
  transform: translate(-50%, -50%);
`;

export const Ellipse = styled.img`
  z-index: 2;
  position: absolute;
  top: 218px;
  transform: translate(-50%, -50%);
`;

export const Userpic = styled.img`
  height: 64px;
  border-radius: 50%;
  position: absolute;
  top: 214px;
  transform: translate(-50%, -50%);
`;

export const TextContainer = styled.p`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  /* text-transform: uppercase; */
  gap: 16px;
`;

export const Text = styled.p`
  text-transform: uppercase;
  /* margin-bottom: 16px; */
`;

export const Button = styled.button`
  margin-top: 26px;
  cursor: pointer;
  padding: 14px 56px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  &:hover {
    background: #dcc4f5;
  }
`;
