import NavigationBar from "./NavigationBar";
import FooterComponent from "./Footer/FooterComponent";
import { Outlet } from "react-router-dom";
import ContentComponent from "./ContentComponent";


const HomePageComponent = () => {

    return(
        <>
        <h1>Hello form Homepage!</h1>
            <section>
                <NavigationBar />
                <hr />
                <Outlet />
                <FooterComponent />
            </section>
            <hr />
        </>
    )
}

export default HomePageComponent;