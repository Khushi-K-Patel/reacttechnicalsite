import React from "react";
import Common from "./Common";
import web from "../src/images/img5.jpeg";

const About = () =>{
  return(
    <>
      <Common  name = 'Welcome to About Page' imgsrc={web}  visit='/contact' btname='Contact Now' />
    </>
  );
}
export default About;