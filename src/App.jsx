import React from 'react'
import './App.scss'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Main2 from './Pages/Profile/Profile'
import { Context as Launguage } from '../src/Context/Theme'

import { Routes, Route } from 'react-router-dom'
function App () {
    const { theme} = React.useContext(Launguage)

    
    return (
        <>
            <div className={`${theme === 'light' ? 'drone' : 'jour'}`}>
            <div className="disklone">
                <Header />
                
                <Routes>
                    <Route path='' element={<Main />} />
                    <Route path='profile' element={<Main2></Main2>} />
                </Routes>
                
                
                <Footer />
            </div>
            </div>
        </>
        );
    }
    
    export default App;