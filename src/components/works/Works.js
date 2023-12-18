/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Resume from '../../assets/recentprojects/resume.io.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Resume.io', 
      description: `It all started in 2012, when they have launched a small web app that
      built online documents such as cancellation letters and basic resumes. Now, they
      have helped over 15,000,000 people successfully build job-winning resumes, as well
      as helping countless others win jobs at elite companies such as PWC, BMW
      and T-Mobile.`,
      alter: 'VeriTru Project',
      image: `${Resume}`,
    },
    { 
      id: 3,
      title: 'BuildPulse.io', 
      description: `The platform that provides an end-to-end solution to detect flaky tests,
      give you metrics on productivity and stability, and track progress over time.
      `,
      alter: 'LoFo Project',
      image: `${Lofo}`,
    },
   
    { 
      id: 4,
      title: 'FairFax Egg Bank', 
      description: `The app serves as a platform connecting egg donors and recipients
      anonymously. It facilitates various functionalities, including appointment
      registration with doctors, lodging complaints, providing feedback, and tracking the
      status of applications`,
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter } />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
