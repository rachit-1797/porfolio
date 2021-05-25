import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faGithub,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.youtube.com/c/jamesqquick"
  className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>

<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="github social">
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>
    </div>
  )
}