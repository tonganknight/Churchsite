import './App.css';
import Main from './Components/Main'
import {BreakpointProvider} from "react-socks"

function App() {
  return (
    <BreakpointProvider>
       <Main />
    </BreakpointProvider>

  );
}

export default App;
