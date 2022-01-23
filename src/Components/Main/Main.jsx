import React from 'react'
import './Main.scss'
import { NavLink } from 'react-router-dom'

import rasm from '../../Components/images/bobur-aka.png';
import mainImage1 from '../../Components/images/main/Frame.svg';
import mainImage2 from '../../Components/images/main/main1.svg';
import mainImage3 from '../../Components/images/main/main2.svg';
import mainImage4 from '../../Components/images/main/main3.svg';
import mainImage5 from '../../Components/images/main/main4.svg';
// import mainImage6 from '../../Components/images/main/turqisovubrat.png';
// import mainImage7 from '../../Components/images/main/ackilibrat.png';
// import mainImage8 from '../../Components/images/main/designsta.png';

import sharePhotos1 from '../../Components/images/main/antena.svg';
import sharePhotos2 from '../../Components/images/main/aylana.svg';
import sharePhotos3 from '../../Components/images/main/comment.svg';
import sharePhotos4 from '../../Components/images/main/yurak.svg';
import sharePhotos5 from '../../Components/images/main/share.svg';
// import sharePhotos6 from '../../Components/images/main/shshlik.jpg';


import langData from '../../Localization/data'
import { Context } from '../../Context/Localization'







function Main() {

    const [users, setUsers] = React.useState([]);
    
    const [setLoading] = React.useState(true);

    React.useEffect(() => {

        (async () => {
            try {
                const response = await fetch('https://reqres.in/api/users')
                const data = await response.json()
                console.log(data.data)

                if (data?.data?.length > 0) {
                    setUsers([...data.data])
                    setLoading(false)
                }
            } catch (err) {
                console.log(err)
            }
        })()

    },[])

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

        {
        users.length > 0 && 
            users.map((user) => (
            <div key={user.id}>
                <div className="main-flex">
                    <NavLink to={'Profile/' + user.id}>
                        <img className='avatarcha' src={user.avatar} alt={user.first_name + "s avatar"} width={60} height={60} />
                    </NavLink>
                    <div className="main-comment">
                        <div className="link-profile">
                            <h3 className='main-name'>{user.first_name + " " + user.last_name}</h3>
                        </div>
                        <p className='main-tweet'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In est libero nemo iusto! Molestias voluptatum ut sed atque nostrum fuga! Dolor velit voluptates asperiores enim ab consequuntur quae blanditiis sit.</p>
                    </div>
                </div>
                <div className="main-image12">
                        <div className="divde">
                            <img src={sharePhotos3} alt="main" width="24" height="24" />
                            <p className='main_like'>10</p>
                        </div>
                        <div className="divde">
                            <img src={sharePhotos2} alt="main" width="24" height="24" />
                            <p className='main_like'>1</p>
                        </div>
                        <div className="divde">
                            <img src={sharePhotos4} alt="main" width="24" height="24" />
                            <p className='main_like'>8</p>
                        </div>
                        <div className="divde nolik">
                            <img src={sharePhotos5} alt="main" width="24" height="24" />
                        </div>
                        <div className="divde nolik">
                            <img src={sharePhotos1} alt="main" width="24" height="24" />
                        </div>
                </div>
                <hr className='main_hr' />
                </div>
            ))
        }
    </main>
}
export default Main