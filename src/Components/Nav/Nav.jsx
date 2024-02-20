import profile from '../../assets/images/profile.png';
import './Nav.css'

const Nav = () => {
    return (
        <>
            <div className='nav'>
                <h1>Knowledge Cafe</h1>
                <ul>
                    <a href="">Home</a>
                    <a href="">Notification</a>
                    <a href="">Message</a>
                    <a href="">About</a>
                    <img src={profile} alt="" />
                </ul>
            </div>
            <hr />
        </>
    );
};

export default Nav;