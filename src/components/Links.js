import React from "react";
import "../styles/Links.css"; // Adjust the path as necessary
import objktLogo from "../images/thumbnails/OBJKT.png";
import exchangeArtLogo from "../images/thumbnails/ExchangeArt.png";
import zoraLogo from "../images/thumbnails/Zorb.png";
import threadlessShirt from "../images/thumbnails/threadless-shirt.png";
import facebookIcon from "../images/social/Facebook.png";
import twitterIcon from "../images/social/Twitter.png";
import instagramIcon from "../images/social/Instagram.png";
import warpcastIcon from "../images/social/Warpcast.png";

const linkData = [
  {
    title: "OBJKT",
    description: "NFTs available on Tezos",
    imgUrl: objktLogo,
    url: "https://objkt.com/@draincain",
  },
  {
    title: "Exchange Art",
    description: "NFTs available on Solana",
    imgUrl: exchangeArtLogo,
    url: "https://exchange.art/drain/nfts",
  },

  {
    title: "Zora",
    description: "NFTs available on Etherium",
    imgUrl: zoraLogo,
    url: "https://exchange.art/drain/nfts",
  },

  {
    title: "Threadless",
    description: "Artifact Attire available on Threadless",
    imgUrl: threadlessShirt,
    url: "https://draincain.threadless.com/",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/draincain",
    imgUrl: facebookIcon,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/draincain",
    imgUrl: twitterIcon,
  },

  {
    name: "Instagram",
    url: "https://www.instagram.com/draincain/",
    imgUrl: instagramIcon,
  },

  {
    name: "Warpcast",
    url: "https://warpcast.com/draincain",
    imgUrl: warpcastIcon,
  },
];

const Links = () => {
  return (
    <div className="links-background">
      <div className="links-container">
        {linkData.map((link, index) => (
          <a
            href={link.url}
            key={index}
            className="link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="thumbnail"
              style={{ backgroundImage: `url(${link.imgUrl})` }}
            ></div>
            <div className="text-content">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="social-links-container">
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index} className="social-link-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <span>{link.name}</span>
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className="social-thumbnail"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Links;
