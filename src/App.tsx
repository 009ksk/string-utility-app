import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import Hex from './pages/Hex';
import Hash from './pages/Hash';
import Url from './pages/Url';
import Base64 from './pages/Base64';
import Count from './pages/Count';


function App() {
    return (
        <div className="App">
            <Router>
                <PermanentDrawerLeft>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/hash' element={<Hash />} />
                        <Route path='/url' element={<Url />} />
                        <Route path='/hex' element={<Hex />} />
                        <Route path='/base64' element={<Base64 />} />
                        <Route path='/count' element={<Count />} />
                    </Routes>
                </PermanentDrawerLeft>
            </Router>
        </div>
    );
}

export default App;
