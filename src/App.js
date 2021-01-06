import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import skyline from './skyline.jpg'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navigation>
        <NavLinkWrapper>
          <NavLink>About Me</NavLink>
          <NavLink>Work</NavLink>
          <NavLink>Contact Me</NavLink>
        </NavLinkWrapper>
      </Navigation>
      <Container>
        <HeaderImage>
          <HeaderTitle>Warren R. Gabrillo</HeaderTitle>  
        </HeaderImage>  
      </Container>
    </div>
  );
}

export default App;

const Navigation = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  height: 30px;
  width: 100%;
  padding: 15px 0px;
  background-color: white;
`

const NavLinkWrapper = styled.div`
  width: 400px;
  margin: 0px auto;
  display: flex;
`

const NavLink = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  line-height: 18px;
  padding: 0px 10px;
  item-align: center;
  margin: auto;
  cursor: pointer;
`

const Container = styled.div`
  
`

const HeaderImage = styled.div`
  height: 92vh;
  background-image: url(${skyline});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderTitle = styled.div`
  width: 500px;
  font-size: 50px;
  color: white;
  text-transform: uppercase;
`

const Education = styled.div`

`