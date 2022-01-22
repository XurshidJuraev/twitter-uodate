import React from 'react'
import './Profile.scss'
import '../../Components/Footer/Footer.scss'
import '../../Components/Header/Header.scss'
import rasms from '../../Components/images/main/profile/Arrow1.png';
import rasms2 from '../../Components/images/main/profile/banner.jpg';
import rasms3 from '../../Components/images/main/profile/profile.png';
import rasms4 from '../../Components/images/main/profile/link.png'; 
import rasms6 from '../../Components/images/main/profile/localition.png';
import rasms5 from '../../Components/images/main/profile/brat.jpg'; 
import rasms7 from '../../Components/images/main/profile/nuqtas.png'; 

import rasm from '../../Components/images/bobur-aka.png';

import sharePhotos1 from '../../Components/images/main/antena.svg';
import sharePhotos2 from '../../Components/images/main/aylana.svg';
import sharePhotos3 from '../../Components/images/main/comment.svg';
import sharePhotos4 from '../../Components/images/main/yurak.svg';
import sharePhotos5 from '../../Components/images/main/share.svg';
import sharePhotos6 from '../../Components/images/main/shshlik.jpg';


function Profile(){
    return <main2>
        <div className="klone-flex">
            <img src={rasms} alt="chiquish" width='20' height={20}/>
            <div className='classed'>
            <h2 className='ucer-name'>Bobur</h2>
            <p className='all-tweet'>1,070 Tweets</p>
            </div>
        </div>
        <img src={rasms2} alt="banner" width={600} />
        <div className="profile-flex">
            <img className='profile-image' src={rasms3} alt="banner" />
            <button className='profile-edit'>Edit profile</button>
        </div>
            <div className="container">
                <h2 className='ucer-name'>Bobur</h2>
                <p className='all-tweet2'>UX&UI designer at <span className='profile-link'>@abutechuz</span></p>
                <ul className='profile-list'>
                    <li className='profile-item'><img src={rasms4} alt="rasmde" width={17} height={20} /><p className='profile-local'>Mashag'daman</p></li>
                    <li className='profile-item'><img src={rasms5} alt="rasmde" width={17} height={20} /><p className='profile-local profile-link12'>t.me/boburjon_mavlonov</p></li>
                    <li className='profile-item'><img src={rasms6} alt="rasmde" width={17} height={20} /><p className='profile-local'>Born November 24, 2000</p></li>
                    <li className='profile-item'><img src={rasms7} alt="rasmde" width={17} height={20} /><p className='profile-local'>Joined May 2020</p></li>
                </ul>
                <div className="all-follow">
                    <div className="follower">
                    <span className='profile--number__follow'>67</span> Following
                    </div>
                    <div className="follower">
                    <span className='profile--number__follow'>47</span> Followers
                    </div>
                </div>

                <ul className='animer'>
                    <li className='ucer-name'>Tweets</li>
                    <li className='all-tweet2'>Tweets & replies</li>
                    <li className='all-tweet2'>Media</li>
                    <li className='all-tweet2'>Likes</li>
                </ul>
            </div>
                <hr className='profile_hr' />
            <div className="container">
            <div className="main-flex">
            <img src={rasm} alt="Profile" width={60} height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>Bobur</h3>
                    <p className='main-time'>@bobur_mavlonov · Apr 1</p>
                </div>
                <p  className='main-tweet'>4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
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
        </div>
        <hr className='main_hr' />
        <div className="container">
        <div className="main-flex">
            <img src={rasm} alt="Profile" width={60} height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>Bobur</h3>
                    <p className='main-time'>@bobur_mavlonov · Apr 1</p>
                </div>
                <p  className='main-tweet'>Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 

Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 

Gap faqat biznes trenerlar haqida emas.</p>
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
        </div>
        <hr className='main_hr' />
        <div className="container">
        <div className="main-flex">
            <img src={rasm} alt="Profile" width={60} height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>Bobur</h3>
                    <p className='main-time'>@bobur_mavlonov · Apr 1</p>
                </div>
                <p  className='main-tweet'>A bo'pti maskamasman</p>
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
        </div>
            
    </main2>
}
export default Profile