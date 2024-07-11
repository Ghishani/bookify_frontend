import { Outlet } from "react-router-dom";
import BookOnlineComponent from "../BookOnlineComponent";

const ContentComponent = ({booksOnline}) => {

    return(
        <section className="content">
            <hr />
            <Outlet />
            <hr />
            {booksOnline ? <BookOnlineComponent booksOnline = {booksOnline} /> : <p>Fetching online books ...</p>}
        </section>
    )
}

export default ContentComponent;