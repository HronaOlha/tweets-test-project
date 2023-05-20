import styled from "@emotion/styled";

export const CardItem = styled.div`
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

export const TextContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.p`
  text-transform: uppercase;
`;

export const Button = styled.button`
  width: 196px;
  border: none;
  margin-top: 26px;
  cursor: pointer;
  padding: 14px 0;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  background: ${(props) => (props.isFollowed ? "#5CD3A8" : "#ebd8ff")};
`;
