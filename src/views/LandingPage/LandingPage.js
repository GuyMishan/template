import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
       /* brand="Material Kit React1"*/
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/bghimush.jpg")}>
        <div className={classes.container}>
          <GridContainer style={{textAlign:'right',direction:'rtl'}}>
            <GridItem xs={12} sm={12} md={6}>
              <h1 style={{textAlign:'right'}}>חיל הטכנולוגיה והאחזקה</h1>
              <h4 style={{textAlign:'right'}}>
              חיל הטכנולוגיה והאחזקה הוא חיל תומך לחימה באגף הטכנולוגיה והלוגיסטיקה. החיל מורכב משני מערכים עיקריים: המערך הטכני והמערך ההנדסי.
               המערך הטכני מורכב מבעלי מקצוע המתחזקים,
                מטפלים ומתקנים את ציוד הלחימה ואת הציוד המסייע ללחימה הנמצאים בשימוש זרוע היבשה בצה"ל.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
