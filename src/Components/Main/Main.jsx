import React from 'react'
import './Main.scss'
import rasm from '../../Components/images/bobur-aka.png';
import mainImage1 from '../../Components/images/main/Frame.svg';
import mainImage2 from '../../Components/images/main/main1.svg';
import mainImage3 from '../../Components/images/main/main2.svg';
import mainImage4 from '../../Components/images/main/main3.svg';
import mainImage5 from '../../Components/images/main/main4.svg';
import mainImage6 from '../../Components/images/main/turqisovubrat.png';
import mainImage7 from '../../Components/images/main/ackilibrat.png';
import mainImage8 from '../../Components/images/main/designsta.png';

import sharePhotos1 from '../../Components/images/main/antena.svg';
import sharePhotos2 from '../../Components/images/main/aylana.svg';
import sharePhotos3 from '../../Components/images/main/comment.svg';
import sharePhotos4 from '../../Components/images/main/yurak.svg';
import sharePhotos5 from '../../Components/images/main/share.svg';
import sharePhotos6 from '../../Components/images/main/shshlik.jpg';


import langData from '../../Localization/data'
import { Context } from '../../Context/Localization'







function Main() {
    const { state, setState } = React.useContext(Context)
    return <main>
        <div className="main-birbalo">
            <h1 className='main_header'>{langData[state].main.title}</h1>
            <select className="select_option" value={state} onChange={(evt) => setState(evt.target.value)}>
                <option value='uz'> UZ</option>
                <option value='ru'> RU</option>
                <option value='en'> EN</option>
            </select>
        </div>
        
        <hr className='main_hr' />

        <img src={rasm} alt="Profile" />
        <input className='main_input' type="text" placeholder='Whats happening' />
        <div className="main_image">
            <img src={mainImage2} alt="main" />
            <img src={mainImage3} alt="main" />
            <img src={mainImage4} alt="main" />
            <img src={mainImage5} alt="main" />
            <img src={mainImage1} alt="main" />
        </div>
        <button className='main_button'>Tweet</button>
        <hr className='main_hr' />
        <div className="main-flex">
            <img src={mainImage8} alt="Profile" width="60" height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>Designsta</h3>
                    <p className='main-time'>@inner · 25m</p>
                </div>
                <p  className='main-tweet'>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
            </div>
        </div>
        <div className="main-image12">
            <div className="divde">
                <img src={sharePhotos3} alt="main"  width="24" height="24" />
                <p className='main_like'>10</p>
            </div>
            <div className="divde">
                <img src={sharePhotos2} alt="main"  width="24" height="24" />
                <p className='main_like'>1</p>
            </div>
            <div className="divde">
                <img src={sharePhotos4} alt="main"  width="24" height="24" />
                <p className='main_like'>8</p>
            </div>
            <div className="divde nolik">
                <img src={sharePhotos5} alt="main" width="24" height="24"/>
            </div>
            <div className="divde nolik">
                <img src={sharePhotos1} alt="main" width="24" height="24"/>
            </div>
        </div>
        <hr className='main_hr' />
        <div className="main-flex">
            <img src={mainImage7} alt="Profile" width="60" height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>cloutexhibition</h3>
                    <p className='main-time'>@RajLahoti · 22m</p>
                </div>
                <p  className='main-tweet'>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
            </div>
        </div>
        <div className="main-image12">
            <div className="divde">
                <img className='brbalo' src={sharePhotos3} alt="main"  width="24" height="24" />
                <p className='main_like'></p>
            </div>
            <div className="divde">
                <img src={sharePhotos2} alt="main"  width="24" height="24" />
                <p className='main_like'>5</p>
            </div>
            <div className="divde">
                <img src={sharePhotos4} alt="main"  width="24" height="24" />
                <p className='main_like'>9</p>
            </div>
            <div className="divde nolik">
                <img src={sharePhotos5} alt="main" width="24" height="24"/>
            </div>
            <div className="divde nolik">
                <img src={sharePhotos1} alt="main" width="24" height="24"/>
            </div>
        </div>
        <hr className='main_hr' />
        <div className="main-flex">
            <img src={mainImage6} alt="Profile" width="60" height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>CreativePhoto</h3>
                    <p className='main-time'>@cloutexhibition · 1h</p>
                </div>
                <p  className='main-tweet'>Обетда..... <br />
Кечиринглар</p>
            <img className='main-ovqat' src={sharePhotos6} alt="ovqat" />
            </div>
        </div>
        <div className="main-image12">
            <div className="divde">
                <img src={sharePhotos3} alt="main"  width="24" height="24" />
                <p className='main_like'>10</p>
            </div>
            <div className="divde">
                <img src={sharePhotos2} alt="main"  width="24" height="24" />
                <p className='main_like'>1</p>
            </div>
            <div className="divde">
                <img src={sharePhotos4} alt="main"  width="24" height="24" />
                <p className='main_like'>8</p>
            </div>
            <div className="divde nolik">
                <img src={sharePhotos5} alt="main" width="24" height="24"/>
            </div>
            <div className="divde nolik">
                <img src={sharePhotos1} alt="main" width="24" height="24"/>
            </div>
        </div>
        {/* <div className="profille1">
        <img src={rasm} alt="Profile" />
        </div> */}
    </main>
}
export default Main