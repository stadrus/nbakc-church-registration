import HeroImg from "../assets/hero.png"
import LogIn from "../user components/LogIn";
import Registration from "../user components/Registration";


const Home = () => {
    return (
        <div>
            <LogIn />
            <img src={HeroImg} alt="home-Logo" width={500}></img>
            <Registration />
        </div>
    );
}
export default Home;