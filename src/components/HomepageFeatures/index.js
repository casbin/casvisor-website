import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, {translate} from "@docusaurus/Translate";
import {useColorMode} from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: translate({
      message: "Single Sign-On & User Asset Authorization",
    }),
    path: "/img/model",
    description: (
      <>
        <Translate>
          Easily manage user access and control asset permissions with Casdoor. Streamline user management and ensure secure, authorized access to your assets.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Remote Asset Management",
    }),
    path: "/img/storage",
    description: (
      <>
        <Translate>
          Simplify asset management with Casvisor. Easily connect to machines using RDP, SSH, and VNC protocols for
          efficient remote desktop access and establish convenient connections to databases.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Audit Logging & Monitoring",
    }),
    path: "/img/language",
    description: (
      <>
        <Translate>
          Monitor and log remote connections with comprehensive auditing in Casvisor. Keep track of connection start time, duration, and API logs for Casdoor operations.
        </Translate>
      </>
    ),
  },
];

function Feature({title, path, description}) {
  const {colorMode} = useColorMode();
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={colorMode === "light" ? path + ".png" : path + "-dark.png"} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
