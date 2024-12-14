import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Specialist</h3>
              <p>
              I specialize in building and fine-tuning machine learning models, delivering predictive insights and automation solutions
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineer</h3>
              <p>
              I have experience building data pipelines on AWS, using EC2 and ECR, with expertise in Docker and Airflow
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
              I analyze complex datasets to uncover trends, generate actionable insights, and support data-driven decision-making
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
