import{Link} from 'react-router-dom'

const FooterComponent = () => {

    return(
        <>
            <footer>
                <section className="footer__element">
                    <Link to = "/footer/about-us">About Us</Link>
                    <Link to = "/footer/terms">Terms</Link> 
                    <Link to = "/footer/privacy">Privacy</Link>
                </section>
                <section className="footer__element">
                    <Link to = "/footer/contact-us">Contact Us</Link>
                </section>
                <section className="footer__element">
                    <Link to = "/footer/faq">FAQs</Link>
                </section>
            </footer>
        </>
    )
}

export default FooterComponent;