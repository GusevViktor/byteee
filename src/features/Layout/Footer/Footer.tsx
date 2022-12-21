import React from "react";
import classes from "./Footer.module.scss";
import {
  Logo,
  Icons,
  Text,
} from "@viktor666/byteee-kit";
import Link from "../../Link";

import { ReactComponent as Honeycomb } from "src/assets/icons/honeycomb_logo.svg";

const {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  Linkedin: LinkedinIcon,
} = Icons;

const Footer = () => (
  <section className={classes.section}>
    <div className={classes.footerWrap}>
      <footer className={classes.footer}>
        <div className={classes.footer_top}>
          <div className={classes.footer_logo}>
            <Logo theme="light" />
          </div>
          <div className={classes.footer_description}>
            <Text size="s" color="grayscale400">
              We use our social media to share useful stuff and updates, so why not
              join?
            </Text>
          </div>

          <div className={classes.social}>
            <div className={classes.social_group}>
              <Link
                to={"https://www.linkedin.com/company/byteee"}
                target={"_blank"}
                external={true}
                color="white"
                className={`${classes.footer_link} ${classes.social_link}`}
              >
                <>
                  <LinkedinIcon color="grayscale400" />
                        LinkedIn
                </>

              </Link>
              <Link
                to={"https://www.facebook.com/byteeehq"}
                target={"_blank"}
                external={true}
                color="white"
                className={`${classes.footer_link} ${classes.social_link}`}
              >
                <>
                  <FacebookIcon color="grayscale400" />
                  Facebook
                </>
              </Link>
            </div>
            <div className={classes.social_group}>
              <Link
                to={"https://twitter.com/byteeehq"}
                target={"_blank"}
                color="white"
                external={true}
                className={`${classes.footer_link} ${classes.social_link}`}
              >
                <>
                  <TwitterIcon color="grayscale400" />
                  Twitter
                </>
              </Link>
              <Link
                to={"https://www.instagram.com/byteeehq"}
                external={true}
                color="white"
                target={"_blank"}
                className={`${classes.footer_link} ${classes.social_link}`}
              >
                <>
                  <InstagramIcon color="grayscale400" />
                  Instagram
                </>
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.link_groups}>
          <div className={classes.link_group}>
            <h3 className={classes.link_group_title}>Product</h3>
            <div>
              <Link
                to={"/event-catalog"}
                className={classes.footer_link}
                color="white">
                Event catalog
              </Link>
            </div>
            <div>
              <Link to={"/features"} className={classes.footer_link} color="white">
                Features
              </Link>
            </div>
            <div>
              <Link to={"/pricing"} className={classes.footer_link} color="white">
                Pricing
              </Link>
            </div>
            <div>
              <Link to={"/learning"} className={classes.footer_link} color="white">
                Learning
              </Link>
            </div>
          </div>
          <div className={classes.link_group}>
            <h3 className={classes.link_group_title}>Company</h3>
            <div>
              <Link to={"/about-us"} className={classes.footer_link} color="white">
                About us
              </Link>
            </div>
            <div>
              <Link to={"/contact-us"} className={classes.footer_link} color="white">
                Contacts
              </Link>
            </div>
            <div>
              <Link
                to={"/event-catalog"}
                className={classes.footer_link}
                color="white">
                Catalog
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.section_warning}>
          <div className={classes.rights_wrap}>
            <div className={classes.warning}>
              <Text size="s" color="grayscale400" as="span">
                  It’s not fun but it’s important. Check out byteee{" "}
              </Text>
              <Link
                to="/privacy-policy"
                size="s"
                className={classes.footer_link}
                color="white">
                Privacy Policy
              </Link>
            </div>
            <Link
              to="/service-terms"
              className={`${classes.footer_link} ${classes.service_link}`}
              color="white"
            >
                  Terms of Service
            </Link>
          </div>
          <div className={classes.warning_wrap}>
            <div className={classes.warning}>
              <Honeycomb className={classes.logo} />
            </div>
            <div className={classes.warning}>
              <Text size="s" color="grayscale400" >
                ©byteee, 2022
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </section>
);
export default Footer;
