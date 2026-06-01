import HeroImg from "../assets/hero.png"
import Registration from "../user components/Registration";


const Home = () => {
    return (
        <div>
            <img src={HeroImg} alt="Logo" width={500}></img>
            <Registration />
        </div>
    );
}
export default Home;