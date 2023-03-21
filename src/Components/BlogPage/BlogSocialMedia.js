import React from "react";
import './BlogPage.css';

import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinIcon,  LinkedinShareButton, WhatsappShareButton, WhatsappIcon} from "react-share";
import { useLocation } from "react-router-dom";

function BlogSocialmedia() {
    let location = useLocation();
    const url="https://thevirtualbd.com";
    console.log(location.pathname )

    return (
        <>
            <div className="blog_social_media">
                <ul >

                <FacebookShareButton 
                    url={`${url}/${location.pathname}`}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#thevirtualbd"
                    >
                    <FacebookIcon size={30} round={true} />
                </FacebookShareButton>

                <TwitterShareButton 
                    url={`${url}${location.pathname}`}
                    quote={"The Virtual BD - World is yours to explore"}
                    hashtag="#thevirtualbd"
                    >
                    <TwitterIcon size={30} round={true}/>
                </TwitterShareButton>

                <WhatsappShareButton 
                    url={`${url}/${location.pathname}`}
                    quote={"The Virtual BD - World is yours to explore"}
                    hashtag="#thevirtualbd"
                    >
                    <WhatsappIcon size={30} round={true}/>
                </WhatsappShareButton>

                <LinkedinShareButton 
                    url={`${url}/${location.pathname}`}
                    quote={"The Virtual BD - World is yours to explore"}
                    hashtag="#thevirtualbd"
                    >
                    <LinkedinIcon size={30} round={true}/>
                </LinkedinShareButton>

                </ul>
            </div>
        </>
    );
}

export default BlogSocialmedia;
