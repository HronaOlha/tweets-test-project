import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { List, ListContainer, Button } from "./CardsList.styled";

function CardsList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
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
          setUsers((prev) => [...prev, ...results]);
        });
    }
  }, [page]);

  function onLoadMore() {
    setPage(page + 1);
  }

  return (
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
              />
            </li>
          ))}
      </List>
      <Button onClick={onLoadMore}>Load More</Button>
    </ListContainer>
  );
}

export default CardsList;
