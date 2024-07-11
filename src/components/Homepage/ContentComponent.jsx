import { Outlet } from "react-router-dom";

const ContentComponent = () => {

    return(
        <section className="content">
            <hr />
            <Outlet />
            <hr />
        </section>
    )
}

export default ContentComponent;