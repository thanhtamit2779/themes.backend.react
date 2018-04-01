import React, {Component} from 'react';

import * as _ from 'lodash';

class ThemeViewedCarousel extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        jQuery('.owl-carousel-viewed').owlCarousel({
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                768: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 30,
                    autoplay: true,
                    dots: false,
                    lazyLoad: true
                }
            }
        })
    }

    load(posts) {
        if (_.isEmpty(posts)) 
            return false;
        
        return posts.map((post, key) => {
            return (
                <div className="item" key={key}>
                    <div className="block2">
                        <div className="block2-img wrap-pic-w of-hidden pos-relative">
                            <img src={post.post_thumb} alt={post.post_title}/>
                            <div className="block2-overlay trans-0-4">
                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                    {/* Button */}
                                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                        ĐẶT MUA
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="block2-txt p-t-20 text-center">
                            <a href={post.post_thumb} className="text-center block2-name dis-block s-text3 p-b-5">
                                {post.post_title}
                            </a>
                            <span className="block2-price m-text6 p-r-5">
                                {post.post_price} VNĐ
                            </span>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render() {
        const posts = this.props.items.posts;
        return (
            <React.Fragment>
                {this.load(posts)}
            </React.Fragment>
        );
    }
}

export default ThemeViewedCarousel;