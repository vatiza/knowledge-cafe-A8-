import profile from '../../assets/images/profile.png';
import './Nav.css'
import toast, { Toaster } from 'react-hot-toast';

const Nav = () => {
    const notify = () => toast(
        "How many programmers does it take to change a light bulb? None, that’s a hardware problem.",
        {
            duration: 6000,
        }
    );



    return (
        <>


            <div className='nav'>
                <h1>Knowledge Cafe</h1>
                <ul>
                    <a href="">Home</a>
                    <a href="">Notification</a>
                    <a href="">Message</a>
                    <a href="">About</a>
                    <img onClick={() => { notify() }} src={profile} alt="" />
                    <Toaster />
                </ul>
            </div>
            <hr />
        </>
    );
};

export default Nav;