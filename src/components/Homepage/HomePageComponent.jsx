import NavigationBar from "./NavigationBar";
import FooterComponent from "./Footer/FooterComponent";
import ContentComponent from "./ContentComponent";
import { Outlet } from "react-router-dom";

const HomePageComponent = () => {

    return(
        <>
            <h1>Hello form Homepage!</h1>
            <section>
                <NavigationBar />
                <hr />
                <ContentComponent />
                <FooterComponent />
            </section>
            
            <Outlet />
        </>
    )
}

export default HomePageComponent;