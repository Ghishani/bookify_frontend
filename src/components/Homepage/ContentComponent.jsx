import { Outlet } from "react-router-dom";

const ContentComponent = () => {

    return(
        <>
            <hr />
            <Outlet />
            <hr />
        </>
    )
}

export default ContentComponent;