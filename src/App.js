import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './openScreens/Home';
import { Container } from '@mui/material'

function App() {
  return (
    <div  >
      <BrowserRouter>
        <Header />

        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </Container>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
