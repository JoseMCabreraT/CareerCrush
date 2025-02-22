import '../styles/Footer.css'; //// Here we are importing a CSS file as a dependency.

const Footer = () => {

    return (

        <div className='Footer'>
            <footer>
                <p>&copy; {new Date().getFullYear()} Career Crush Inc. All rights reserved.</p>
                <p>
                    Follow us on 
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>
                    <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer"> Twitter</a> 
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </p>

            </footer>

        </div>//parent element

    );//return



}//Footer function

export default Footer;