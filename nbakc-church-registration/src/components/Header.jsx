import LogIn from "../user components/LogIn"
import HeroImg from "../assets/hero.png"

const Header = () => {
    return (
        <div className="header">
            <img src={HeroImg} alt="header-logo" width={100}></img>
            <LogIn />
        </div>
    );
}
export default Header;