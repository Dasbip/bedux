import './App.css';
import {Header} from './components/header';
import Article from './components/article';
import styled from "styled-components";
function App() {
  return (<Styledsection>
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <Article />
    </div>
    </Styledsection>);
}
const Styledsection = styled.section`

  background-color: black;
  font-size: 32px;
  color: white;
`;

export default App;
