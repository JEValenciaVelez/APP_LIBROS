import CardContainer from "../../components/CardContainer/CardContainer";
import NavBar from "../../components/NavBar/NavBar";


const Home = () => {

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <CardContainer />
            </main>
            <footer></footer>
        </div>
    )
};

export default Home;