import LogIn from "../user components/LogIn"
import HeroImg from "../assets/hero.png"

const Header = () => {
    return (
        <div>
            <img src={HeroImg} alt="header-logo" width={100}></img>
        </div>
    );
}
export default Header;