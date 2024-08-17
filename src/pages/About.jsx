import React, { useEffect } from "react";
import aboutImage from "../images/about.png";
import aboutMainImage from "../images/about2.jpg";
import {
  DivAbout,
  DivAboutDescriptionContent,
  DivDetailsAbout,
  DivTitleDetailsAbout,
} from "../styles/Styles";
import Circle from "../components/about/Circle";
import circles from "../data/aboutCircleData";
import { handleToTop } from "../utils/Utils";
import { useSelector } from "react-redux";

const About = () => {
  const carts = useSelector((store) => store.cart.items);
  useEffect(() => {
    document.querySelector(".shopping-cart").style.visibility = "visible";

    if (carts.length > 0) {
      document.querySelector(".shopping-cart-qty-icon").style.visibility =
        "visible";
    } else {
      document.querySelector(".shopping-cart-qty-icon").style.visibility =
        "hidden";
    }
    handleToTop();
  }, [carts]);
  return (
    <DivAbout>
      <div className="about-main-image">
        <div className="container-title">
          <h1 className="title-about">Welcome to Sportlabs online store</h1>
          <hr className="line-below-title" />
        </div>
        <div className="about-main-description">
          <img src={aboutMainImage} alt="" />
          <hr className="line-below-about-description" />
          <div className="about-description">
            <DivAboutDescriptionContent>
              <DivTitleDetailsAbout>
                <h1 className="title-about">How did we achieve it?</h1>
              </DivTitleDetailsAbout>
              <DivDetailsAbout>
                <p>
                  Founded in the ’90s by a group of bodybuilding enthusiasts,
                  this store became one of America’s top destinations for anyone
                  who’s willing to either lose some fat and burn it or who want
                  to gain some mass or muscle strength…
                </p>
                <p>Our Supplements Will Turn Anyone into a Superman!</p>
                <p>
                  Our sports food supplements store sets some pretty high
                  standards in the nutritional supplement industry. We’ve
                  achieved that by demanding truth in labeling, ingredient
                  safety, and product potency, all while remaining on the
                  cutting-edge of nutritional science. As our company has grown
                  over the years, so has our commitment to Living Well. In fact,
                  GNC is the world’s largest company of its kind devoted
                  exclusively to helping its customers improve the quality of
                  their lives.
                </p>
                <p>
                  From scientific research and new product discovery to the
                  manufacturing and packaging processes, GNC takes pride in our
                  rigorous approach to ensuring quality. Our commitment to
                  quality extends to our interactions with you in our stores and
                  after you buy our products.
                </p>
                <p>
                  We are your personal trainer, your nutritionist, your
                  supplement expert, your lifting partner, your support group.
                  We provide the technology, tools, and products you need to
                  burn fat, build muscle, and become your best self.
                </p>
              </DivDetailsAbout>
            </DivAboutDescriptionContent>
          </div>
        </div>
      </div>

      <hr className="line-division-about" />

      <div className="about-data">
        {circles.map((circle, index) => (
          <div className="about-circle-desc">
            <Circle
              colourRight={circle.colorRight}
              colourTop={circle.colorTop}
              colourBottom={circle.colorBottom}
              colourLeft={circle.colorLeft}
              info={circle.info}
            />
            <h3>{circle.description}</h3>
          </div>
        ))}
      </div>

      <hr className="line-division-about" />

      <div id="about">
        <div className="about-image">
          <img src={aboutImage} alt="" />
        </div>
        <div className="about-text">
          <h1>LEARN MORE ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </DivAbout>
  );
};

export default About;
