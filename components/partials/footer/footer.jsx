import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';

function Footer() {
    const router = useRouter( "" );
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );
    const [ containerClass, setContainerClass ] = useState( 'container' );

    useEffect( () => {
        handleBottomSticky();
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky() {
        setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer">
            <section className="newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-6">
                            <div className="cta-heading text-center">
                                <h3 className="cta-title text-white">Get The Latest Deals</h3>
                                <p className="cta-desc">and receive <span className="font-weight-normal">$20 coupon</span> for first shopping</p>
                            </div>

                            <form action="#">
                                <div className="input-group input-group-round">
                                    <input
                                        type="email"
                                        className="form-control form-control-white"
                                        placeholder="Enter your Email Address"
                                        aria-label="Email Adress"
                                        required
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn"
                                            type="submit"
                                        >Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-middle">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="widget widget-about">
                                <h4 className="widget-title">About Molla</h4>
                                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>

                                <div className="social-icons">
                                    <ALink href="#" className="social-icon" rel="noopener noreferrer" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                                    <ALink href="#" className="social-icon" rel="noopener noreferrer" title="Twitter"><i className="icon-twitter"></i></ALink>
                                    <ALink href="#" className="social-icon" rel="noopener noreferrer" title="Instagram"><i className="icon-instagram"></i></ALink>
                                    <ALink href="#" className="social-icon" rel="noopener noreferrer" title="Youtube"><i className="icon-youtube"></i></ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Useful Links</h4>

                                <ul className="widget-list">
                                    <li><ALink href="/pages/about">About Molla</ALink></li>
                                    <li><ALink href="/pages/about">How to shop on Molla</ALink></li>
                                    <li><ALink href="/pages/faq">FAQ</ALink></li>
                                    <li><ALink href="/pages/contact">Contact us</ALink></li>
                                    <li><ALink href="/pages/login">Log in</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="widget-list">
                                    <li><ALink href="#">Payment Methods</ALink></li>
                                    <li><ALink href="#">Money-back guarantee!</ALink></li>
                                    <li><ALink href="#">Returns</ALink></li>
                                    <li><ALink href="#">Shipping</ALink></li>
                                    <li><ALink href="#">Terms and conditions</ALink></li>
                                    <li><ALink href="#">Privacy Policy</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li><ALink href="#">Sign In</ALink></li>
                                    <li><ALink href="/shop/cart">View Cart</ALink></li>
                                    <li><ALink href="/shop/wishlist">My Wishlist</ALink></li>
                                    <li><ALink href="#">Track My Order</ALink></li>
                                    <li><ALink href="#">Help</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ containerClass }>
                    <figure className="footer-payments">
                        <img src="images/payments.png" alt="Payment methods" width="272" height="20" />
                    </figure>
                    <img src="images/home/logo.png" className="footer-logo" alt="Footer Logo" width="82" height="20" />
                    <p className="footer-copyright">Copyright © { ( new Date() ).getFullYear() } Molla Store. All Rights Reserved.</p>
                </div>
            </div>
            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
    );
}

export default React.memo( Footer );