import NavigationBar from "./NavigationBar";
import FooterComponent from "./Footer/FooterComponent";
import ContentComponent from "./ContentComponent";


const HomePageComponent = () => {

    return(
        <>
        <h1>Bookify</h1>
            <section>
                <NavigationBar />
                <ContentComponent />
                <FooterComponent />
            </section>
        </>
    )
}

export default HomePageComponent;