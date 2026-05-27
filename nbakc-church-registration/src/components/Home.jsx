import HeroImg from "../assets/hero.png"
import LogIn from "../user components/LogIn";


const Home = () => {
    return (
        <div>
            <img src={HeroImg} alt="Logo" width={500}></img>
            <LogIn />
        </div>
    );
}
export default Home;