import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Packaging',
    Svg: require('@site/static/img/box-seam.svg').default,
    description: (
      <>
        Bigtop packages Hadoop RPMs and DEBs, so that you can manage and
        maintain your Hadoop cluster.
      </>
    ),
  },
  {
    title: 'Smoke testing',
    Svg: require('@site/static/img/gear.svg').default,
    description: (
      <>
        Bigtop provides an integrated smoke testing framework, alongside
        a suite of over 50 test files.
      </>
    ),
  },
  {
    title: 'Virtualization',
    Svg: require('@site/static/img/truck.svg').default,
    description: (
      <>
        Bigtop provides vagrant recipes, raw images, and docker recipes for
        deploying Hadoop from zero.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.title}>Overview</h2>
        <p className={styles.description}>
          Bigtop is an Apache Foundation project for Infrastructure Engineers
          and Data Scientists looking for comprehensive packaging, testing,
          and configuration of the leading open source big data components.
          Bigtop supports a wide range of components/projects, including,
          but not limited to, Hadoop, HBase and Spark.
        </p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
