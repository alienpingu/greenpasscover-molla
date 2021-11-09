import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from "@apollo/react-hooks";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
import NewsletterModal from "~/components/features/modals/newsletter-modal";

import { actions as cartAction } from '~/store/cart';
import { actions as demoAction } from '~/store/demo';

import withApollo from '~/server/apollo';
import { GET_HOME_DATA } from '~/server/queries';
import { parallax } from '~/utils';

import { serviceSlider, productSlider, reviewSlider, fadeInUpShorter, fadeIn } from '~/utils/data';

function Home( props ) {
    const { data, loading, error } = useQuery( GET_HOME_DATA );
    const products = data && data.homeData.products;
    const [ carouselRef, setCarouselRef ] = useState( null );

    if ( error ) {
        return <div></div>
    }

    function onCartClick( e ) {
        e.preventDefault();

        let newProduct = { ...products[ 0 ] };
        let index = document.querySelector( '.hidden-index' ).innerHTML;
        if ( products[ 0 ].variants.length > 0 ) {
            newProduct = {
                ...products[ 0 ],
                name:
                    products[ 0 ].name +
                    ' - ' +
                    products[ 0 ].variants[ index ].color_name,
                price: products[ 0 ].variants[ index ].price
            };
        }
        props.addToCart(
            newProduct
        );
    }

    const events = {
        onTranslate: function ( e ) {
            let items = document.querySelectorAll( '.color-content .custom-dots .custom-dot' );
            document.querySelector( '.color-content .custom-dots .custom-dot.active' ).classList.remove( 'active' );
            items[ e.item.index ].classList.add( 'active' );

            document.querySelector( '.action .price strong' ).innerHTML = ( products[ 0 ].variants[ e.item.index ].price.toFixed() - 1 ).toString();
            document.querySelector( '.hidden-index' ).innerHTML = e.item.index;
        }
    }

    function changeLgImage( e, index ) {
        document.querySelector( '.color-content .custom-dots .custom-dot.active' ).classList.remove( 'active' );
        e.currentTarget.classList.add( 'active' );
        carouselRef.current.goTo( index );
    }

    const openVideoModal = ( e ) => {
        e.preventDefault();
        props.showVideo();
    }

    useEffect( () => {
        document.addEventListener( 'scroll', parallax, true );

        return () => {
            document.removeEventListener( 'scroll', parallax );
        }
    }, [] )

    return (
        <div className="main home-page">
            <section className="intro-section" style={ { backgroundColor: '#697979' } }>
                <div className="banner">
                    <figure>
                        <div className="lazy-overlay"></div>

                        <LazyLoadImage
                            alt="Intro Banner"
                            src="images/home/banners/top-banner-3.png"
                            threshold={ 100 }
                            effect="blur"
                            width="1903"
                            height={ 700 }
                        />
                    </figure>
                    <div className="banner-content">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                            <>
                                <h3 className="banner-subtitle text-white">Hear it First</h3>
                                <h2 className="banner-title text-white">Control Your <br /> Sound</h2>
                                <p className="banner-text text-white">
                                    Featuring Active Noise Cancelling that <br />
                                        gives you the space to create with fully <br />
                                            immersive sound.
					            </p>

                                <div className="banner-action">
                                    <button className="btn btn-cart btn-primary btn-round btn-cart-home" onClick={ onCartClick }>
                                        <span>Add To Cart</span>
                                    </button>

                                    <ALink href="/shop/sidebar/list" className="btn btn-outline-white btn-round">
                                        <span>Discover Now</span>
                                    </ALink>
                                </div>
                            </>
                        </Reveal>
                    </div>
                </div>
            </section>


            <section className="sound-section bg-transparent" style={ { backgroundImage: `url(images/home/bg-4.jpg)` } }>
                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 500 } triggerOnce>
                    <div className="container service">
                        <OwlCarousel adclassName="owl-simple" options={ serviceSlider }>
                            <div className="icon-box icon-box-side text-white">
                                <span className="icon-box-icon text-white">
                                    <i className="icon-truck"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title text-white">Payment &amp; Delivery</h3>
                                    <p>Free shipping for orders over $50</p>
                                </div>
                            </div>
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <img src="images/home/icons/icon-reload.png" width="28" height="28" alt="Icon" />
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title text-white">Return &amp; Refund</h3>
                                    <p>Free 100% money back guarantee</p>
                                </div>
                            </div>
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <img src="images/home/icons/icon-tools.png" width="28" height="28" alt="Icon" />

                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title text-white">Quality Support</h3>
                                    <p>Alway online feedback 24/7</p>
                                </div>
                            </div>
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <img src="images/home/icons/icon-envelope.png" width="28" height="28" alt="Icon" />

                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title text-white">Join Our Newsletter</h3>
                                    <p>10% off by subscribing to our newsletter</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </Reveal>

                <div className="container">
                    <div className="banner row d-flex">
                        <div className="col-lg-6 mb-3 mt-6 mt-lg-0 d-flex d-lg-block justify-content-center">
                            <figure className="banner-img">
                                <div className="lazy-overlay bg-transparent"></div>

                                <LazyLoadImage
                                    alt="Product"
                                    src="images/home/products/iphone-2.png"
                                    threshold={ 100 }
                                    effect="blur"
                                    width="653"
                                    height={ 793 }
                                />
                            </figure>
                        </div>
                        <div className="col-lg-6 mt-2 mt-lg-0">
                            <div className="banner-content">
                                <h3 className="banner-subtitle text-white">Hear your music, not the noise.</h3>
                                <h2 className="banner-title text-white">Natural Sound</h2>
                                <p className="banner-text">
                                    Morbi in sem quis dui placerat ornare. Pellentesque odio <br />
								nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. <br />
								Cras consequat.
						        </p>
                                <div className="banner-info row">
                                    <div className="col-6">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon">
                                                <img src="images/home/icons/icon-noise.png" width="30" height="30" alt="Icon" />
                                            </span>
                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title text-white">Noise Cancelling</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon">
                                                <img src="images/home/icons/icon-battery.png" width="30" height="30" alt="Icon" />
                                            </span>
                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title text-white">Playtime 20 + Hours</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon">
                                                <i className="icon-bluetooth-b"></i>
                                            </span>
                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title text-white">Wireless</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="icon-box icon-box-side">
                                            <span className="icon-box-icon">
                                                <img src="images/home/icons/icon-mobile.png" width="30" height="30" alt="Icon" />
                                            </span>
                                            <div className="icon-box-content">
                                                <h3 className="icon-box-title text-white">Phone Functionality</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="form-section container">
                <div className="row">
                    <div className="col col-12 col-md-6"> 
                        <h3>Compra la tua cover!</h3>
                        <p>È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato.</p>
                        <LazyLoadImage
                                    alt="Product"
                                    src="images/home/banners/banner-5.png"
                                    threshold={ 100 }
                                    effect="blur"
                                    width="653"
                                    height={ 793 }
                                />
                    </div>
                    <div className="col col-12 col-md-6">
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlInput1">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name="_replyto" placeholder="name@example.com" required/>
                          </div>
                          <div className="form-group">
                            <label for="inputAddress">Indirizzo spedizione</label>
                            <input type="text" className="form-control" id="inputAddress" name="inputAddress" placeholder="Via Milano 10, Milano 20123" required/>
                          </div>
                          <div className="form-group">
                            <label for="selectPhoneModel">Seleziona il modello</label>
                            <select className="form-control" id="selectPhoneModel" name="selectPhoneModel" required="required">
                              <option>iPhone 13</option>
                              <option>iPhone 12</option>
                              <option>iPhone 11</option>
                              <option>iPhone X</option>
                              <option>iPhone 8</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlFile1">Carica GreenPass</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" name="exampleFormControlFile1" required/>
                          </div>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">Ulteriori dettagli</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" name="defaultCheck1" required />
                              <label class="form-check-label pl-2" for="defaultCheck1">
                                Default checkbox
                              </label>
                            </div>
                          <button type="submit" className="btn btn-primary btn-lg btn-block">
                              Invia form
                          </button>
                        </form>
                    </div>
                </div>

            </section>


            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( connect( null, { ...cartAction, ...demoAction } )( Home ) );