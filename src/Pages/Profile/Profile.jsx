import React from 'react'
import './Profile.scss'
import { NavLink } from 'react-router-dom'
import '../../Components/Footer/Footer.scss'
import '../../Components/Header/Header.scss'
import rasms from '../../Components/images/main/profile/Arrow1.png';
import rasms2 from '../../Components/images/main/profile/banner.jpg';
import rasms3 from '../../Components/images/main/profile/profile.png';
import rasms4 from '../../Components/images/main/profile/link.png'; 
import rasms6 from '../../Components/images/main/profile/localition.png';
import rasms5 from '../../Components/images/main/profile/brat.jpg'; 
import rasms7 from '../../Components/images/main/profile/nuqtas.png'; 
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'


import rasm from '../../Components/images/bobur-aka.png';

import sharePhotos1 from '../../Components/images/main/antena.svg';
import sharePhotos2 from '../../Components/images/main/aylana.svg';
import sharePhotos3 from '../../Components/images/main/comment.svg';
import sharePhotos4 from '../../Components/images/main/yurak.svg';
import sharePhotos5 from '../../Components/images/main/share.svg';
import sharePhotos6 from '../../Components/images/main/shshlik.jpg';


function Profile(){
    const navigate = useNavigate()

    const { id } = useParams()
    const [user, setUser] = React.useState({})
    const [setLoading] = React.useState(true)

    React.useEffect(() => {

        (async () => {
            try {
                const response = await fetch('https://reqres.in/api/users/' + id)
                const data = await response.json()

                setUser(data.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        })()
            
    }, [id])
    return <main2>
        <div className="klone-flex">
            <button className='ciqiw-exit' onClick={() => navigate(-1)}><img src={rasms} alt="chiquish" width='20' height={20}/></button>
            <div className='classed'>
            <h2 className='ucer-name'>Bobur</h2>
            <p className='all-tweet'>1,070 Tweets</p>
            </div>
        </div>
        <img src={user.avatar} alt="banner" width={600} height={280}/>
        <div className="profile-flex">
            <img className='profile-image' src={user.avatar} alt="banner" />
            <button className='profile-edit'>Edit profile</button>
        </div>
            <div className="container">
                <h2 className='ucer-name'>{user.first_name + ' ' + user.last_name}</h2>
                <p className='all-tweet2'>{user.email}<span className='profile-link'> @abutechuz</span></p>
                <ul className='profile-list'>
                    <li className='profile-item'><img src={rasms4} alt="rasmde" width={17} height={20} /><p className='profile-local'>{user.first_name}</p></li>
                    <li className='profile-item'><p className='profile-local profile-link12'>{user.last_name}</p></li>
                    <li className='profile-item'><img src={rasms6} alt="rasmde" width={17} height={20} /><p className='profile-local'>Uzbekistan 2000</p></li>
                    <li className='profile-item'><img src={rasms7} alt="rasmde" width={17} height={20} /><p className='profile-local'>{user.email}</p></li>
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
            <img className='usercani-avatari' src={user.avatar} alt="Profile" width={60} height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>{user.first_name}</h3>
                    <p className='main-time'>{user.email}</p>
                </div>
                <p  className='main-tweet'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ullam adipisci corporis. Voluptates similique sed, eligendi vero, architecto blanditiis error ullam mollitia animi temporibus quae a repellendus, nemo minus consequuntur.</p>
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
        <div className="main-flex">
            <img className='usercani-avatari' src={user.avatar} alt="Profile" width={60} height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>{user.first_name}</h3>
                    <p className='main-time'>{user.email}</p>
                </div>
                <p  className='main-tweet'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ullam adipisci corporis. Voluptates similique sed, eligendi vero, architecto blanditiis error ullam mollitia animi temporibus quae a repellendus, nemo minus consequuntur.</p>
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
        <div className="main-flex">
            <img className='usercani-avatari' src={user.avatar} alt="Profile" width={60} height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>{user.first_name}</h3>
                    <p className='main-time'>{user.email}</p>
                </div>
                <p  className='main-tweet'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ullam adipisci corporis. Voluptates similique sed, eligendi vero, architecto blanditiis error ullam mollitia animi temporibus quae a repellendus, nemo minus consequuntur.</p>
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
        <div className="main-flex">
            <img className='usercani-avatari' src={user.avatar} alt="Profile" width={60} height={60} />
            <div className="main-comment">
                <div className="link-profile">
                    <h3 className='main-name'>{user.first_name}</h3>
                    <p className='main-time'>{user.email}</p>
                </div>
                <p  className='main-tweet'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ullam adipisci corporis. Voluptates similique sed, eligendi vero, architecto blanditiis error ullam mollitia animi temporibus quae a repellendus, nemo minus consequuntur.</p>
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