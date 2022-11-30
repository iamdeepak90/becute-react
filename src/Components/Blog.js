import React from "react";

const Blog = () => {
    return(
        
          
                <section className="blog__section section--padding">
                  <div className="container">
                    <div className="row row-md-reverse">
                      <div className="col-lg-4">
                        <div className="blog__sidebar--widget left widget__area">
                          <div className="single__widget widget__search widget__bg">
                            <h2 className="widget__title h3">Search Objects</h2>
                            <form className="widget__search--form" action="#">
                              <label>
                                <input className="widget__search--form__input" placeholder="Search..." type="text" />
                              </label>
                              <button className="widget__search--form__btn" aria-label="search button">
                                <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                              </button>
                            </form>
                          </div>
                          <div className="single__widget widget__bg">
                            <h2 className="widget__title h3">Categories</h2>
                            <ul className="widget__categories--menu">
                              <li className="widget__categories--menu__list">
                                <label className="widget__categories--menu__label d-flex align-items-center">
                                  <img className="widget__categories--menu__img" src="assets/img/product/small-product/product1.webp" alt="categories-img" />
                                  <span className="widget__categories--menu__text">Fairness cream</span>
                                  <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                                  </svg>
                                </label>
                                <ul className="widget__categories--sub__menu">
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product2.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Massage Cream</span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product3.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Matte Walnut </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product4.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Bamboo Scrub </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product5.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Castor Oil</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="widget__categories--menu__list">
                                <label className="widget__categories--menu__label d-flex align-items-center">
                                  <img className="widget__categories--menu__img" src="assets/img/product/small-product/product2.webp" alt="categories-img" />
                                  <span className="widget__categories--menu__text">Skin Silver</span>
                                  <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                                  </svg>
                                </label>
                                <ul className="widget__categories--sub__menu">
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product2.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Massage Cream</span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product3.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Matte Walnut </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product4.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Bamboo Scrub </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product5.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Castor Oil</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="widget__categories--menu__list">
                                <label className="widget__categories--menu__label d-flex align-items-center">
                                  <img className="widget__categories--menu__img" src="assets/img/product/small-product/product3.webp" alt="categories-img" />
                                  <span className="widget__categories--menu__text">Night Serum</span>
                                  <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                                  </svg>
                                </label>
                                <ul className="widget__categories--sub__menu">
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product2.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Massage Cream</span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product3.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Matte Walnut </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product4.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Bamboo Scrub </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product5.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Castor Oil</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="widget__categories--menu__list">
                                <label className="widget__categories--menu__label d-flex align-items-center">
                                  <img className="widget__categories--menu__img" src="assets/img/product/small-product/product4.webp" alt="categories-img" />
                                  <span className="widget__categories--menu__text">Cream Oil</span>
                                  <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                                  </svg>
                                </label>
                                <ul className="widget__categories--sub__menu">
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product2.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Massage Cream</span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product3.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Matte Walnut </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product4.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Bamboo Scrub </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product5.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Castor Oil</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="widget__categories--menu__list">
                                <label className="widget__categories--menu__label d-flex align-items-center">
                                  <img className="widget__categories--menu__img" src="assets/img/product/small-product/product5.webp" alt="categories-img" />
                                  <span className="widget__categories--menu__text">Skin Cleaner</span>
                                  <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                                  </svg>
                                </label>
                                <ul className="widget__categories--sub__menu">
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product2.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Massage Cream</span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product3.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Matte Walnut </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product4.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Bamboo Scrub </span>
                                    </a>
                                  </li>
                                  <li className="widget__categories--sub__menu--list">
                                    <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                      <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product/product5.webp" alt="categories-img" />
                                      <span className="widget__categories--sub__menu--text">Castor Oil</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="single__widget widget__bg">
                            <h2 className="widget__title h3">Post Article</h2>
                            <div className="widget__post--article">
                              <div className="post__article--items d-flex align-items-center">
                                <div className="post__article--thumbnail">
                                  <a className="display-block" href="blog-details.html">
                                    <img className="post__article--thumbnail__img" src="assets/img/blog/blog1.webp" alt="article-img" />
                                  </a>
                                </div>
                                <div className="post__article--content">
                                  <h3 className="post__article--content__title"><a href="blog-details.html">In Clean Beauty List </a></h3>
                                  <span className="meta__deta">Sep 11, 2022</span>
                                </div>
                              </div>
                              <div className="post__article--items d-flex align-items-center">
                                <div className="post__article--thumbnail">
                                  <a className="display-block" href="blog-details.html">
                                    <img className="post__article--thumbnail__img" src="assets/img/blog/blog2.webp" alt="article-img" />
                                  </a>
                                </div>
                                <div className="post__article--content">
                                  <h3 className="post__article--content__title"><a href="blog-details.html">Beauty is Whatever</a></h3>
                                  <span className="meta__deta">Sep 11, 2022</span>
                                </div>
                              </div>
                              <div className="post__article--items d-flex align-items-center">
                                <div className="post__article--thumbnail">
                                  <a className="display-block" href="blog-details.html">
                                    <img className="post__article--thumbnail__img" src="assets/img/blog/blog3.webp" alt="article-img" />
                                  </a>
                                </div>
                                <div className="post__article--content">
                                  <h3 className="post__article--content__title"><a href="blog-details.html">Soak Up The Savings </a></h3>
                                  <span className="meta__deta">Sep 11, 2022</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="single__widget widget__bg">
                            <h2 className="widget__title h3">Brands</h2>
                            <ul className="widget__tagcloud">
                              <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html"> Hair Care
                                </a></li>
                              <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Make Up</a></li>
                              <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Skin Care</a></li>
                              <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Styling </a></li>
                              <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Products </a></li>
                              <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Fairness</a></li>
                              <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Cream Oil </a></li>
                              <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Matte Walnut </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="blog__wrapper">
                          <div className="row mb--n40">
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-40">
                              <article className="blog__card">
                                <div className="blog__card--thumbnail">
                                  <a className="blog__card--thumbnail__link" href="blog-details.html">
                                    <img className="blog__card--thumbnail__img" src="assets/img/blog/blog1.webp" alt="blog-img" />
                                  </a>
                                </div>
                                <div className="blog__card--content">
                                  <div className="blog__meta d-flex">
                                    <span className="blog__meta--text meta__date">30 March, 2022 </span>
                                    <span className="blog__meta--text"> / </span>
                                    <span className="blog__meta--text meta__comment">(02) Comment</span>
                                  </div>
                                  <h3 className="blog__card--title"><a href="blog-details.html">Justo Pellentesque Donec lobortis faucibus Vestibulum</a></h3>
                                  <a className="blog__card--link" href="blog-details.html">Read More</a>
                                </div>
                              </article>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-40">
                              <article className="blog__card">
                                <div className="blog__card--thumbnail">
                                  <a className="blog__card--thumbnail__link" href="blog-details.html">
                                    <img className="blog__card--thumbnail__img" src="assets/img/blog/blog2.webp" alt="blog-img" />
                                  </a>
                                </div>
                                <div className="blog__card--content">
                                  <div className="blog__meta d-flex">
                                    <span className="blog__meta--text meta__date">30 March, 2022 </span>
                                    <span className="blog__meta--text"> / </span>
                                    <span className="blog__meta--text meta__comment">(02) Comment</span>
                                  </div>
                                  <h3 className="blog__card--title"><a href="blog-details.html">Lorem ipsum dolor sit, amet adipisici elit. aliquam.</a></h3>
                                  <a className="blog__card--link" href="blog-details.html">Read More</a>
                                </div>
                              </article>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-40">
                              <article className="blog__card">
                                <div className="blog__card--thumbnail">
                                  <a className="blog__card--thumbnail__link" href="blog-details.html">
                                    <img className="blog__card--thumbnail__img" src="assets/img/blog/blog3.webp" alt="blog-img" />
                                  </a>
                                </div>
                                <div className="blog__card--content">
                                  <div className="blog__meta d-flex">
                                    <span className="blog__meta--text meta__date">30 March, 2022 </span>
                                    <span className="blog__meta--text"> / </span>
                                    <span className="blog__meta--text meta__comment">(02) Comment</span>
                                  </div>
                                  <h3 className="blog__card--title"><a href="blog-details.html">Numquam nulla ducimus neque, officiis perfere vol!</a></h3>
                                  <a className="blog__card--link" href="blog-details.html">Read More</a>
                                </div>
                              </article>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-40">
                              <article className="blog__card">
                                <div className="blog__card--thumbnail">
                                  <a className="blog__card--thumbnail__link" href="blog-details.html">
                                    <img className="blog__card--thumbnail__img" src="assets/img/blog/blog1.webp" alt="blog-img" />
                                  </a>
                                </div>
                                <div className="blog__card--content">
                                  <div className="blog__meta d-flex">
                                    <span className="blog__meta--text meta__date">30 March, 2022 </span>
                                    <span className="blog__meta--text"> / </span>
                                    <span className="blog__meta--text meta__comment">(02) Comment</span>
                                  </div>
                                  <h3 className="blog__card--title"><a href="blog-details.html">Mollitia in veniam magnam ipsam possimus dolores?</a></h3>
                                  <a className="blog__card--link" href="blog-details.html">Read More</a>
                                </div>
                              </article>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-40">
                              <article className="blog__card">
                                <div className="blog__card--thumbnail">
                                  <a className="blog__card--thumbnail__link" href="blog-details.html">
                                    <img className="blog__card--thumbnail__img" src="assets/img/blog/blog2.webp" alt="blog-img" />
                                  </a>
                                </div>
                                <div className="blog__card--content">
                                  <div className="blog__meta d-flex">
                                    <span className="blog__meta--text meta__date">30 March, 2022 </span>
                                    <span className="blog__meta--text"> / </span>
                                    <span className="blog__meta--text meta__comment">(02) Comment</span>
                                  </div>
                                  <h3 className="blog__card--title"><a href="blog-details.html">Lorem ipsum dolor sit, amet adipisici elit. aliquam.</a></h3>
                                  <a className="blog__card--link" href="blog-details.html">Read More</a>
                                </div>
                              </article>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-40">
                              <article className="blog__card">
                                <div className="blog__card--thumbnail">
                                  <a className="blog__card--thumbnail__link" href="blog-details.html">
                                    <img className="blog__card--thumbnail__img" src="assets/img/blog/blog3.webp" alt="blog-img" />
                                  </a>
                                </div>
                                <div className="blog__card--content">
                                  <div className="blog__meta d-flex">
                                    <span className="blog__meta--text meta__date">30 March, 2022 </span>
                                    <span className="blog__meta--text"> / </span>
                                    <span className="blog__meta--text meta__comment">(02) Comment</span>
                                  </div>
                                  <h3 className="blog__card--title"><a href="blog-details.html">Numquam nulla ducimus neque, officiis perfere vol!</a></h3>
                                  <a className="blog__card--link" href="blog-details.html">Read More</a>
                                </div>
                              </article>
                            </div>
                          </div>
                          <div className="pagination__area bg__gray--color">
                            <nav className="pagination justify-content-center">
                              <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                                <li className="pagination__list">
                                  <a href="blog.html" className="pagination__item--arrow  link ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M244 400L100 256l144-144M120 256h292" /></svg>
                                    <span className="visually-hidden">page left arrow</span>
                                  </a>
                                </li><li>
                                </li><li className="pagination__list"><span className="pagination__item pagination__item--current">1</span></li>
                                <li className="pagination__list"><a href="blog.html" className="pagination__item link">2</a></li>
                                <li className="pagination__list"><a href="blog.html" className="pagination__item link">3</a></li>
                                <li className="pagination__list"><a href="blog.html" className="pagination__item link">4</a></li>
                                <li className="pagination__list">
                                  <a href="blog.html" className="pagination__item--arrow  link ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M268 112l144 144-144 144M392 256H100" /></svg>
                                    <span className="visually-hidden">page right arrow</span>
                                  </a>
                                </li><li>
                                </li></ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
            
        
    )
}

export default Blog;