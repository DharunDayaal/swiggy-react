import React from 'react'
import './footerComponent.css'

const FooterComponent = () => {
  return (
    <>
        <div className="footer-container">
            <div className="address-container">
                <div className="address-icon">
                    <img src="./src/assets/icons/swiggy_footer_icon.svg" alt="swiggy-icon" />
                    <h5>Swiggy</h5>
                </div>
                <div>
                    <span>&#169;</span> 2024 Bundl Technologies Pvt.Ltd
                </div>
            </div>
            <div className="swiggy-pages">
                <ul>
                    <li><div className="footer-heading">Company</div></li>
                    <li><div className="footer-body"><a href="#">About</a></div></li>
                    <li><div className="footer-body"><a href="#">Careers</a></div></li>
                    <li><div className="footer-body"><a href="#">Team</a></div></li>
                    <li><div className="footer-body"><a href="#">Swiggy One</a></div></li>
                    <li><div className="footer-body"><a href="#">Swiggy Instamart</a></div></li>
                    <li><div className="footer-body"><a href="#">Swiggy Genie</a></div></li>
                </ul>
            </div>
            <div className="terms-and-conditions">
                <div className="contact-section">
                    <ul>
                        <li><div className="footer-heading">Contact us</div></li>
                        <li><div className="footer-body"><a href="#">Help & Support</a></div></li>
                        <li><div className="footer-body"><a href="#">Partner with us</a></div></li>
                        <li><div className="footer-body"><a href="#">Ride with us</a></div></li>
                    </ul>
                </div>
                <div className="legal-section">
                    <ul>
                        <li><div className="footer-heading">Legal</div></li>
                        <li><div className="footer-body"><a href="#">Terms & Conditions</a></div></li>
                        <li><div className="footer-body"><a href="#">Cookie Policy</a></div></li>
                        <li><div className="footer-body"><a href="#">Privacy Policy</a></div></li>
                        <li><div className="footer-body"><a href="#">Investor Relatons</a></div></li>
                    </ul>
                </div>
            </div>
            <div className="cities-section">
                <ul>
                    <li><div className="footer-heading">We deliver to:</div></li>
                    <li><div className="footer-body"><a href="#">Bangalore</a></div></li>
                    <li><div className="footer-body"><a href="#">Gurgaon</a></div></li>
                    <li><div className="footer-body"><a href="#">Hyderabad</a></div></li>
                    <li><div className="footer-body"><a href="#">Delhi</a></div></li>
                    <li><div className="footer-body"><a href="#">Mumbai</a></div></li>
                    <li><div className="footer-body"><a href="#">Pune</a></div></li>
                    <li><div className="footer-body"><button className="footer-button">589 cities</button></div></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default FooterComponent