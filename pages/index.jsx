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

{/*            <section className="playtime-section mb-4">
                <div className="banner">
                    <figure>
                        <div className="lazy-overlay bg-transparent"></div>

                        <LazyLoadImage
                            alt="Intro Banner"
                            src="images/home/bg-2.png"
                            threshold={ 100 }
                            effect="blur"
                            width="1903"
                            height={ 880 }
                        />
                    </figure>
                    <div className="banner-content">
                        <h3 className="banner-subtitle">Listen all day</h3>
                        <h2 className="banner-title">20 + Hours of <br />Playtime</h2>
                        <p className="banner-text">
                            Donec nec justo eget felis facilisis fermentum. Aliquam <br />
                                porttitor mauris sit amet orci. Aenean dignissim <br />
                                pellentesque felis.
                            </p>
                        <div className="banner-info d-flex mt-4">
                            <div className="info-box">
                                <p>Charge</p>
                                <strong>2</strong>
                                <p>hours</p>
                            </div>
                            <div className="info-box">
                                <p>Playtime</p>
                                <strong>20</strong>
                                <p>hours</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>*/}

            {/*<Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <section className="choose-color mb-5">
                    <div className="container">
                        <div className="heading mb-6 text-center">
                            <h4 className="subtitle">Material &amp; Design</h4>
                            <h2 className="title mb-2">Find Your Color</h2>
                            <p className="content">Featuring Active Noise Cancelling that gives you the space to create with <br />
                            fully immersive sound.</p>
                        </div>

                        <div className="color-content">
                            {
                                loading ?
                                    ""
                                    :
                                    products && products.length > 0 ?
                                        <>
                                            <OwlCarousel adClass="owl-simple owl-nav-outside" onChangeRef={ setCarouselRef } events={ events } options={ productSlider }>
                                                { products[ 0 ].pictures.map( ( item, index ) =>
                                                    <img src={ process.env.NEXT_PUBLIC_ASSET_URI + item.url } alt="product" key={ 'lg' + index } />
                                                ) }
                                            </OwlCarousel>
                                            <div className="custom-dots">
                                                { products[ 0 ].variants.map( ( item, index ) =>
                                                    <button role="button" className={ `custom-dot ${ 0 === index ? 'active' : '' }` } key={ 'dot' + index } onClick={ e => changeLgImage( e, index ) }>
                                                        <span style={ { backgroundColor: item.color } }></span>
                                                        <span className="hidden-index d-none">0</span>
                                                    </button>
                                                ) }
                                            </div>
                                        </>
                                        : ""
                            }
                        </div>

                        <div className="desc text-center mt-2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetue elit.
                                Donec odio. Quisque volutpat mattis eros.
					</p>
                        </div>
                        <div className="action text-center mt-2">
                            <span className="price text-primary">
                                <sup>$</sup><strong>252</strong><sup>.99</sup>
                            </span>

                            <button className="btn btn-cart btn-primary btn-round btn-cart-home" onClick={ onCartClick }>
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>
                </section>
            </Reveal>

            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <section className="gallery pt-lg-15 bg-transparent" style={ { backgroundImage: `url(images/home/bg-3.png)` } }>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="content-left">
                                    <div className="heading mt-3">
                                        <h4 className="subtitle">Material &amp; Design</h4>
                                        <h2 className="title mb-2">Product <br />Gallery</h2>
                                        <p className="content mb-6">
                                            Donec nec justo eget felis facilisis fermentum. Aliquam <br />
                                        porttitor mauris sit amet orci. Aenean dignissim <br />
                                        pellentesque felis.
								    </p>
                                    </div>
                                    <figure className="lazy-media media-1">
                                        <div className="lazy-overlay bg-transparent"></div>

                                        <LazyLoadImage
                                            alt="Banner"
                                            src="images/home/banners/banner-1.jpg"
                                            threshold={ 100 }
                                            effect="blur"
                                            width="472"
                                            height="530"
                                        />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-md-6 p-md-0">
                                <div className="content-right">
                                    <figure className="mb-md-12 lazy-media media-2">
                                        <div className="lazy-overlay bg-transparent"></div>

                                        <LazyLoadImage
                                            alt="Banner"
                                            src="images/home/banners/banner-2.jpg"
                                            threshold={ 100 }
                                            effect="blur"
                                            width="590"
                                            height="532"
                                        />
                                    </figure>
                                    <figure className="lazy-media media-3">
                                        <div className="lazy-overlay bg-transparent"></div>

                                        <LazyLoadImage
                                            alt="Banner"
                                            src="images/home/banners/banner-3.jpg"
                                            threshold={ 100 }
                                            effect="blur"
                                            width="471"
                                            height="300"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Reveal>

            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <section className="reviews mt-15">
                    <div className="heading mb-6 text-center">
                        <h4 className="subtitle">Our users love us</h4>
                        <h2 className="title">Customer Reviews</h2>
                    </div>
                    <div className="container">
                        <OwlCarousel adClass="carousel-equal-height owl-simple" options={ reviewSlider }>
                            <div className="testimonials-box">
                                <blockquote className="testimonials text-center">
                                    <div className="avatar">
                                        <div className="lazy-overlay bg-transparent"></div>

                                        <LazyLoadImage
                                            alt="User"
                                            src="images/home/users/human-1.png"
                                            threshold={ 100 }
                                            effect="blur"
                                            width={ 100 }
                                            height={ 100 }
                                        />
                                    </div>
                                    <div className="ratings-contianer">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={ { width: '100%' } }
                                            ></div>
                                        </div>
                                    </div>
                                    <h5 className="comment-title">It's a very good product.</h5>
                                    <p>
                                        Dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
										</p>
                                    <cite>
                                        Sakina Stout
										</cite>
                                </blockquote>
                            </div>
                            <div className="testimonials-box">
                                <blockquote className="testimonials text-center">
                                    <div className="avatar">
                                        <div className="lazy-overlay bg-transparent"></div>

                                        <LazyLoadImage
                                            alt="User"
                                            src="images/home/users/human-2.png"
                                            threshold={ 100 }
                                            effect="blur"
                                            width={ 100 }
                                            height={ 100 }
                                        />
                                    </div>
                                    <div className="ratings-contianer">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={ { width: '100%' } }
                                            ></div>
                                        </div>
                                    </div>
                                    <h5 className="comment-title">5 stars indeed.</h5>
                                    <p>
                                        In nisi neque, dapibus Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                                </p>
                                    <cite>
                                        Sakina Stout
                                </cite>
                                </blockquote>
                            </div>
                            <div className="testimonials-box">
                                <blockquote className="testimonials text-center">
                                    <div className="avatar">
                                        <div className="lazy-overlay bg-transparent"></div>

                                        <LazyLoadImage
                                            alt="User"
                                            src="images/home/users/human-3.png"
                                            threshold={ 100 }
                                            effect="blur"
                                            width={ 100 }
                                            height={ 100 }
                                        />
                                    </div>
                                    <div className="ratings-contianer">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={ { width: '100%' } }
                                            ></div>
                                        </div>
                                    </div>
                                    <h5 className="comment-title">Excellent sound</h5>
                                    <p>
                                        Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, dapibus
                                </p>
                                    <cite>
                                        Sakina Stout
                                </cite>
                                </blockquote>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
            </Reveal>

            <section className="overview mt-15">
                <div className="container">
                    <figure className="bg-image">
                        <div className="lazy-overlay bg-transparent"></div>

                        <LazyLoadImage
                            alt="Background"
                            src="images/home/bg-circle.png"
                            threshold={ 100 }
                            effect="blur"
                            width="799"
                            height={ 760 }
                        />
                    </figure>
                    <div className="banner row d-flex">
                        <div className="col-lg-6 order-lg-last">
                            <figure className="banner-img">
                                <div className="lazy-overlay bg-transparent"></div>

                                <LazyLoadImage
                                    alt="Product"
                                    src="images/home/products/headphone-2.png"
                                    threshold={ 100 }
                                    effect="blur"
                                    width="901"
                                    height={ 532 }
                                />
                            </figure>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h3 className="banner-subtitle text-white">Specification</h3>
                                <h2 className="banner-title text-white mb-5">Product <br /> Overview</h2>

                                <div className="banner-info mb-5">
                                    <ul className="info-list text-white">
                                        <li>
                                            <span className="info-icon"><i className="icon-check"></i></span>
                                            <span className="info-content">Noise Cancelling actively blocks external noise.</span>
                                        </li>
                                        <li>
                                            <span className="info-icon"><i className="icon-check"></i></span>
                                            <span className="info-content">Up to 20+ hours of listening time</span>
                                        </li>
                                        <li>
                                            <span className="info-icon"><i className="icon-check"></i></span>
                                            <span className="info-content">Class 1 Wireless Bluetooth</span>
                                        </li>
                                        <li>
                                            <span className="info-icon"><i className="icon-check"></i></span>
                                            <span className="info-content">Product box uses 70% recycled fiber</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="action">
                                    <span className="price text-white">
                                        <sup>$</sup><strong>259</strong><sup>.99</sup>
                                    </span>

                                    <button className="btn btn-cart btn-primary btn-round btn-cart-home" onClick={ onCartClick }>
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}

            {/*<Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="video-banner bg-parallax" style={ { backgroundImage: "url('images/home/banners/banner-4.jpg')" } }>
                    <a
                        href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
                        onClick={ openVideoModal }
                        className="btn-iframe d-flex justify-content-center"
                    ><i className="icon-play-outline"></i></a>
                </div>
            </Reveal>*/}

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( connect( null, { ...cartAction, ...demoAction } )( Home ) );