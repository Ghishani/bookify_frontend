import { Outlet } from "react-router-dom";
import BookOnlineComponent from "../BookOnlineComponent";

const ContentComponent = () => {

    return(
        <section className="content">
            <hr />
            <Outlet />
            <hr />
            <BookOnlineComponent/>
        </section>
    )
}

export default ContentComponent;