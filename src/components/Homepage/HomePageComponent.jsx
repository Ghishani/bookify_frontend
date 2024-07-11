import NavigationBar from "./NavigationBar";
import FooterComponent from "./Footer/FooterComponent";
import ContentComponent from "./ContentComponent";
import bookLogo from "/src/assets/booklogo.png"


const HomePageComponent = () => {

    return(
        <> 
       <div className="logo-and-title">
            <img src={bookLogo} alt="book logo" className="book-logo" />
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