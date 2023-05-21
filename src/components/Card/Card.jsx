import { NumericFormat } from "react-number-format";
import PropTypes from "prop-types";

import {
  CardItem,
  TextContainer,
  BottomContainer,
  Button,
  Text,
  Logo,
  Rectangle,
  Ellipse,
  Userpic,
} from "./Card.styled";

// розібратися з svg
// Перенести фетчі в окремий файл

import logo from "../../img/logo.png";
import boxes from "../../img/upper-img.png";
import rectangle from "../../img/rectangle.png";
import ellipse from "../../img/ellipse.png";
import { useState } from "react";

function Card({
  id,
  tweets,
  avatar,
  followers,
  alt,
  updateButtonState,
  getButtonState,
}) {
  const [following, setFollowing] = useState(followers);
  const isFollowed = getButtonState(id);

  const handleFollow = () => {
    const updatedStatus = !isFollowed;

    updateButtonState(id, updatedStatus);

    try {
      fetch(`https://6453dfb6c18adbbdfeaa041f.mockapi.io/tweets/users/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          followers: following + (isFollowed ? -1 : 1),
        }),
      })
        .then((res) => res.json())
        .then((results) => {
          return setFollowing(results.followers);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CardItem>
        <img src={boxes} alt="dialog boxes" />
        <div>
          <Logo src={logo} alt="GoIT logo" />
          <Rectangle src={rectangle} alt="rectangle" />
          <Ellipse src={ellipse} alt="ellipse" />
          <Userpic src={avatar} alt={alt} />
        </div>

        <BottomContainer>
          <TextContainer>
            <Text>
              <NumericFormat
                displayType="text"
                value={tweets}
                thousandSeparator=","
              />{" "}
              Tweets
            </Text>
            <Text>
              <NumericFormat
                displayType="text"
                value={following}
                thousandSeparator=","
              />{" "}
              Followers
            </Text>
          </TextContainer>
          <Button isFollowed={isFollowed} onClick={handleFollow}>
            {isFollowed ? "Following" : "Follow"}
          </Button>
        </BottomContainer>
      </CardItem>
    </>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  updateButtonState: PropTypes.func.isRequired,
  getButtonState: PropTypes.func.isRequired,
};
