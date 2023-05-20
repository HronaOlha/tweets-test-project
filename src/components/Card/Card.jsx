import { NumericFormat } from "react-number-format";

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
// дописати пропси
// !!!! ВИДАЛИ ГАНСЕЛЯ !!!
// Перенести фетчі в окремий файл
// Допиши до фетчів кетчі

import logo from "../../img/logo.png";
import boxes from "../../img/upper-img.png";
import rectangle from "../../img/rectangle.png";
import ellipse from "../../img/ellipse.png";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Card({ id, tweets, avatar, followers, user }) {
  const [following, setFollowing] = useState(followers);
  const [isFollowed, setIsFollowed] = useState();

  // useEffect(() => {
  //   const contacts = localStorage.getItem("IsFollowedStatus");
  //   console.log("contacts", contacts);

  //   // const contactsParce = JSON.parse(contacts);
  //   // setIsFollowed(contactsParce);
  // }, []);

  const handleFollow = () => {
    // setIsFollowed(!isFollowed);
    localStorage.setItem("IsFollowedStatus", JSON.stringify(!isFollowed));
    const contacts = localStorage.getItem("IsFollowedStatus");
    const contactsParce = JSON.parse(contacts);
    setIsFollowed(contactsParce);

    fetch(`https://6453dfb6c18adbbdfeaa041f.mockapi.io/tweets/users/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ followers: following + (isFollowed ? -1 : 1) }),
    })
      .then((res) => res.json())
      .then((results) => {
        return setFollowing(results.followers);
      });
  };

  return (
    <>
      <CardItem>
        <img src={boxes} alt="dialog boxes" />
        <div>
          <Logo src={logo} alt="GoIT logo" />
          <Rectangle src={rectangle} alt="rectangle" />
          <Ellipse src={ellipse} alt="ellipse" />
          <Userpic src={avatar} alt={user} />
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
