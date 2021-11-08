import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';
import LoginModal from '~/components/features/modals/login-modal';
import HeaderSearch from '~/components/partials/header/partials/header-search';
import CartMenu from '~/components/partials/header/partials/cart-menu';
import MainMenu from '~/components/partials/header/partials/main-menu';
import StickyHeader from '~/components/features/sticky-header';

function Header() {
    const router = useRouter();
    const [ containerClass, setContainerClass ] = useState( 'container' );

    function openMobileMenu() {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    useEffect( () => {
        document.querySelector( '.header .header-middle' ).classList.remove( 'border-0' );
        if ( router.pathname == '/' ) document.querySelector( '.header .header-middle' ).classList.add( 'border-0' );

        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );

        document.querySelector( '.sticky-container' ).classList.remove( 'position-absolute' );
        if ( router.pathname == '/' ) {
            document.querySelector( '.sticky-container' ).classList.add( 'position-absolute' );
        }
    }, [ router.asPath ] );

    return (
        <header className="header">
            <div className="header-top">
                <div className={ containerClass }>
                    <div className="header-left">
                        <div className="header-dropdown">
                            <ALink href="#">Usd</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">Eur</ALink></li>
                                    <li><ALink href="#">Usd</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown">
                            <ALink href="#">Eng</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">English</ALink></li>
                                    <li><ALink href="#">French</ALink></li>
                                    <li><ALink href="#">Spanish</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <ALink href="#">Links</ALink>
                                <ul>
                                    <li><a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a></li>
                                    <li>
                                        <ALink href="/pages/about">About Us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/contact">Contact Us</ALink>
                                    </li>
                                    <LoginModal />
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sticky-container postion-absolute">
                <StickyHeader>
                    <div className="header-middle sticky-header border-0">
                        <div className={ containerClass }>
                            <div className="header-left">
                                <button className="mobile-menu-toggler" onClick={ openMobileMenu }>
                                    <span className="sr-only">Toggle mobile menu</span>
                                    <i className="icon-bars"></i>
                                </button>

                                <ALink href="/" className="logo">
                                    <img src="images/home/logo.png" alt="Molla Logo" width={ 82 } height={ 20 } />
                                </ALink>
                            </div>

                            <div className="header-center">
                                <MainMenu />
                            </div>

                            <div className="header-right">
                                <HeaderSearch />

                                <CartMenu />
                            </div>
                        </div>
                    </div>
                </StickyHeader>
            </div>
        </header>
    )
}

export default Header;