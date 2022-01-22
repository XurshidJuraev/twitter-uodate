import React from 'react'
import './Footer.scss'

import langData from '../../Localization/data'

import { Context } from '../../Context/Localization'
import Imaj1 from '../../Components/images/footer/mushtariy.png';
import Imaj2 from '../../Components/images/footer/shuhrat.png';


function Footer () {
    const { state } = React.useContext(Context)

    return <footer>
        {/* {langData[state].footer.copyright} */}
        
        <input className='foter-input' type="search" name="search" placeholder='Search Twitter'/>
        <div className="footer-trend">
            <div className="container">
            <h3 className='footer-traid'>{langData[state].footer.trend}</h3>
            <div>
                <p className='footer-traider'>{langData[state].footer.trend_in}</p>
                <h4 className='footer-revolution'>Revolution</h4>
                <p className='footer-tweet'>50.4K {langData[state].footer.tweets}</p>
            </div>
            <div>
                <p className='footer-traider'>{langData[state].footer.trend_in}</p>
                <h4 className='footer-revolution'>Revolution</h4>
                <p className='footer-tweet'>50.4K {langData[state].footer.tweets}</p>
            </div>
            <div>
                <p className='footer-traider'>{langData[state].footer.trend_in}</p>
                <h4 className='footer-revolution'>Revolution</h4>
                <p className='footer-tweet'>50.4K {langData[state].footer.tweets}</p>
            </div>
            <p className='footer-more'>{langData[state].footer.more}</p>
            </div>
        </div>
        <div className="footer-might">
            <div className="container">
                <h3 className='footer-you'>{langData[state].footer.trend_like}</h3>
            <div className="footer-left">
                <img className='footer-profile' src={Imaj1} alt="profile" width='60' height='60'/>
                <div className="footer-top">
                    <h4 className='footer-profile_name'>Mushtariy</h4>
                    <p className='footer-profile_username'>@Mushtar565266</p>
                </div>
                <button className='footer-follow'>{langData[state].footer.follow_button}</button>
            </div>
            <div className="footer-left footer-glss">
                <img className='footer-profile' src={Imaj2} alt="profile" width='60' height='60'/>
                <div className="footer-top glasser">
                    <h4 className='footer-profile_name'>Shuhratbek</h4>
                    <p className='footer-profile_username'>@mrshukhrat</p>
                </div>
                <button className='footer-follow'>{langData[state].footer.follow_button}</button>
            </div>
            </div>
            <hr className='footer_hr1248' />
        </div>
        <ul className='footer-list'>
            <li className='footer-item'>{langData[state].footer.service}</li>
            <li className='footer-item'>{langData[state].footer.secured}</li>
            <li className='footer-item'>{langData[state].footer.cookie}</li>
            <li className='footer-item'>{langData[state].footer.imprint}</li>
            <li className='footer-item'>{langData[state].footer.ads}</li>
            <li className='footer-item'>{langData[state].footer.more_all}</li>
            <li className='footer-item'>{langData[state].footer.since}</li>
        </ul>
    </footer>
}

export default Footer
