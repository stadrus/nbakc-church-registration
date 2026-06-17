import WelcomeImg from "../assets/WelcomeLogo.svg"
import Registration from "../user components/Registration";

const Home = () => {
    return (
        <div className="home-page">
            <img className= "welcome-img" src={WelcomeImg} alt="home-Img"></img>
            <Registration />
        </div>
    );
}
export default Home;