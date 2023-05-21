import { useEffect, useState } from "react";
import Card from "../Card/Card";
import {
  StyledLink,
  List,
  ListContainer,
  Button,
  Message,
} from "./CardsList.styled";

function CardsList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(true);

  useEffect(() => {
    try {
      if (page === 1) {
        fetch(
          `https://6453dfb6c18adbbdfeaa041f.mockapi.io/tweets/users?page=1&limit=3`
        )
          .then((res) => res.json())
          .then((results) => {
            setUsers(results);
          });
      }
      if (page > 1) {
        fetch(
          `https://6453dfb6c18adbbdfeaa041f.mockapi.io/tweets/users?page=${page}&limit=3`
        )
          .then((res) => res.json())
          .then((results) => {
            if (results.length === 0) {
              return setIsLoadMore(false);
            }

            setUsers((prev) => [...prev, ...results]);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  function onLoadMore() {
    setPage(page + 1);
  }

  const updateButtonState = (cardId, isFollowed) => {
    const buttonStates = JSON.parse(localStorage.getItem("buttonStates")) || {};
    buttonStates[cardId] = isFollowed;
    localStorage.setItem("buttonStates", JSON.stringify(buttonStates));
  };

  const getButtonState = (cardId) => {
    const buttonStates = JSON.parse(localStorage.getItem("buttonStates")) || {};
    return buttonStates[cardId] || false;
  };

  return (
    <>
      <StyledLink to="/">
        <span className="material-symbols-outlined">arrow_back</span>
        <span>Back</span>
      </StyledLink>

      <ListContainer>
        <List>
          {users &&
            users.map(({ id, tweets, avatar, followers, user }) => (
              <li key={id}>
                <Card
                  id={id}
                  tweets={tweets}
                  avatar={avatar}
                  followers={followers}
                  alt={user}
                  updateButtonState={updateButtonState}
                  getButtonState={getButtonState}
                />
              </li>
            ))}
        </List>

        {isLoadMore ? (
          <Button onClick={onLoadMore}>Load More</Button>
        ) : (
          <Message>
            <p>Thats it! &#129325;</p>
          </Message>
        )}
      </ListContainer>
    </>
  );
}

export default CardsList;
