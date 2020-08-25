import React from "react"
import Routes from "./Routes/Routes"
import "./assets/fonts.css"
import "./assets/bootstrap.css"
import "./assets/GlobalStyles.css"
import { ThemeProvider } from '@material-ui/styles';
import {useSelector} from 'react-redux';
import { Theme } from './utils/Theme';
import {
  BrowserRouter as Router
}
from 'react-router-dom'
import Snackbar from './components/Snackbar';



function App() {
    const data = useSelector( state =>{
      console.log(state);
    })

  return(
    <ThemeProvider theme={Theme}>
      <Router>
       <Routes/>
       <Snackbar/>
      </Router>
    </ThemeProvider>

  )
}

export default App;
