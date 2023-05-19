import {
  List,
  Card,
  TextContainer,
  BottomContainer,
  Button,
  Text,
  Logo,
  Rectangle,
  Ellipse,
  Userpic,
} from "./App.styled";
import logo from "./img/logo.png";
import boxes from "./img/upper-img.png";
import rectangle from "./img/rectangle.png";
import ellipse from "./img/ellipse.png";
import userpic from "./img/hansel-2.jpg";

function App() {
  return (
    <>
      <List>
        <li>
          {/* Card */}
          <Card>
            {/* upper container */}
            <div>
              <img src={boxes} alt="dialog boxes" />
              {/* profile img */}
              <div>
                <Logo src={logo} alt="GoIT logo" />
                <Rectangle src={rectangle} alt="rectangle" />
                <Ellipse src={ellipse} alt="ellipse" />
                <Userpic src={userpic} alt="userpic" />
              </div>
            </div>
            {/* bottom container */}
            <BottomContainer>
              <TextContainer>
                <Text>777 Tweets</Text>
                <Text>100500 Followers</Text>
              </TextContainer>
              <Button>Follow</Button>
            </BottomContainer>
          </Card>
        </li>
      </List>
    </>
  );
}

export default App;

// useEffect(() => {
//   const controller = new AbortController();
//   fetchPopularMovies(controller)
//     .then(({ results }) => {
//       setPopularMovies(results);
//     })
//     .catch((error) => console.log(error));

//   return () => {
//     controller.abort();
//   };
// }, []);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// <div>
//   {/* <a href="https://vitejs.dev" target="_blank">
//     <img src={viteLogo} className="logo" alt="Vite logo" />
//   </a> */}
//   {/* <a href="https://react.dev" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
//   </a> */}
// </div>
// <h1>Vite + React</h1>
// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.jsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>
