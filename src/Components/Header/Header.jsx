import React from 'react'
import './Header.scss'
// Images
import Image from '../../Components/images/lists.svg';
import Image2 from '../../Components/images/logo.svg';
import Image3 from '../../Components/images/Vector.svg';
import Image4 from '../../Components/images/Vector2.svg';
import Image5 from '../../Components/images/Vector3.svg';
import Image6 from '../../Components/images/Vector4.svg';
import Image7 from '../../Components/images/Vector5.svg';
import Image8 from '../../Components/images/Vector6.svg';
import Image9 from '../../Components/images/Vector7.svg';
import Image10 from '../../Components/images/bobur-aka.png';


import langData from '../../Localization/data'
import { Context } from '../../Context/Localization'
import {NavLink} from 'react-router-dom'



function Header () {

    const { state} = React.useContext(Context)

    return <header>
        <nav className='header_nav'>
            <ul className='header_list'>
                <li className='header_item'>
                    <img className='header_image' src={Image2} alt="direct" width='40' height='33'/>
                </li>
                <li className='header_item'>
                    <img className='header_image' src={Image3} alt="direct" width='26' height='23'/>
                    <NavLink className="absattor" to=''>{langData[state].header.nav.home}</NavLink>
                </li>

                <li className='header_item'>
                    <img className='header_image' src={Image9} alt="direct" width='26' height='23'/>
                    {langData[state].header.nav.about}
                </li>

                <li className='header_item'>
                    <img className='header_image' src={Image4} alt="direct" width='26' height='23'/>
                    {langData[state].header.nav.notifications}
                </li>

                <li className='header_item'>
                    <img className='header_image' src={Image5} alt="direct" width='26' height='23'/>
                    {langData[state].header.nav.messages}
                </li>

                <li className='header_item'>
                    <img className='header_image' src={Image6} alt="direct" width='26' height='23'/>
                    {langData[state].header.nav.bookmarks}
                </li>

                <li className='header_item'>
                    <img className='header_image' src={Image} alt="direct" width='26' height='23'/>
                    {langData[state].header.nav.lists}
                </li>

                <li className='header_item'>
                    <img className='header_image' src={Image7} alt="direct" width='26' height='23'/>
                    <NavLink className="absattor" to='Profile'>{langData[state].header.nav.profile}</NavLink>
                </li>

                <li className='header_item'>
                    <img className='header_image' src={Image8} alt="direct" width='26' height='23'/>
                    {langData[state].header.nav.more_bat}
                </li>

                <li className='header_item'>
                    <button className='header_button'>Tweet</button>
                </li>

                <li className='header_item bro-list'>
                    <img className='header_image' src={Image10} alt="direct" width='50' height='50'/>
                    <div className="heading_div">
                    <h2 className='header_anons'>Bobur</h2>
                    <p className='header-link'>@bobur_mavlonov</p>
                    <div className='heading_slipssle'>...</div>
                    </div>
                </li>
            </ul>
            <hr className='header_hr' />
        </nav>
    </header>
}

export default Header