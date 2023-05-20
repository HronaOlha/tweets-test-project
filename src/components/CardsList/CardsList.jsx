import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { List } from "./CardsList.styled";

function CardsList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://6453dfb6c18adbbdfeaa041f.mockapi.io/tweets/users`)
      .then((res) => res.json())
      .then((results) => {
        setUsers(results);
      });
  }, []);

  return (
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
  );
}

export default CardsList;
