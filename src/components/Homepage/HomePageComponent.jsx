import NavigationBar from "./NavigationBar";
import FooterComponent from "./Footer/FooterComponent";
import ContentComponent from "./ContentComponent";


const HomePageComponent = () => {

    return(
        <> 
       <div className="logo-and-title">
            <img src="./assets/booklogo.png" alt="book logo" className="book-logo" />
            <h1 className='title-bookify'>Bookify</h1>
        </div> 
            <section>
                <NavigationBar />
                <ContentComponent />
                <FooterComponent />
            </section>
        </>
    )
}

export default HomePageComponent;