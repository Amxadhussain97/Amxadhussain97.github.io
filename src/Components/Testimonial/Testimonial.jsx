import React from "react";
// import './Testiminial.scss'
import Slider from "react-slick";
// import { comments, sliderSettings } from '../../utils/data'
// import { motion } from 'framer-motion'
// import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { useTestimonialStyles } from "./testimonialStyles";
import { comments, sliderSettings } from "../../utils/data";
import tIMG from "../../assets/images/tamim.jpg";
import { Box, Typography } from "@mui/material";

const Testimonial = () => {
  const classes = useTestimonialStyles();
  return (
    // <motion.section
    <>
      <Box>
      <a className="anchor" id="recommendations"></a>
        <Typography
          variant="overline"
          display="block"
          color="primary"
          gutterBottom
          sx={{
            fontSize: "14px",
            letterSpacing: "0.2rem",
            width: "100%",
            textAlign: "center",
          }}
          className="section-title"
        >
          my recommendations
        </Typography>

        <Typography
          variant="h3"
          gutterBottom
          // make font weight bold
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2rem",
              sm: "3.5rem",
            },
            width: "100%",
            textAlign: "center",
            mb:6
          }}
          className="section-tag"
        >
         What People Say 
        </Typography>
      </Box>
      <section
        // variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: false, amount: 0.25 }}
        className={classes.testimonial}
      >
        <a className="anchor" id="people"></a>
        <div className="container">
        

          <div className="comments">
            <Slider className="slider" {...sliderSettings}>
              {comments.map((person, id) => {
                const { name, post, comment, img } = person;

                return (
                  <div className="person" key={id}>
                    <img src={img} alt="" />
                    <p>{comment}</p>
                    <hr />
                    <div className="bio">
                      <span>{name}</span>
                      <span>{post}</span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        {/* </motion.div > */}
      </section>
    </>

    // </motion.section >
  );
};

export default Testimonial;
