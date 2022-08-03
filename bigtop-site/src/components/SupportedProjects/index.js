import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ProjectList = [
  {
    name: 'flink',
    logo: require('@site/static/img/project-logo/flink.png').default,
    url: 'https://flink.apache.org/',
  },
  {
    name: 'hadoop',
    logo: require('@site/static/img/project-logo/hadoop.png').default,
    url: 'https://hadoop.apache.org/',
  },
  {
    name: 'hbase',
    logo: require('@site/static/img/project-logo/hbase.png').default,
    url: 'https://hbase.apache.org/',
  },
  {
    name: 'hive',
    logo: require('@site/static/img/project-logo/hive.png').default,
    url: 'https://hive.apache.org/',
  },
  {
    name: 'kafka',
    logo: require('@site/static/img/project-logo/kafka.png').default,
    url: 'https://kafka.apache.org/',
  },
  {
    name: 'livy',
    logo: require('@site/static/img/project-logo/livy.png').default,
    url: 'https://livy.incubator.apache.org/',
  },
  {
    name: 'oozie',
    logo: require('@site/static/img/project-logo/oozie.png').default,
    url: 'https://oozie.apache.org/',
  },
  {
    name: 'phoenix',
    logo: require('@site/static/img/project-logo/phoenix.png').default,
    url: 'https://phoenix.apache.org/',
  },
  {
    name: 'solr',
    logo: require('@site/static/img/project-logo/solr.png').default,
    url: 'https://solr.apache.org/',
  },
  {
    name: 'spark',
    logo: require('@site/static/img/project-logo/spark.png').default,
    url: 'https://spark.apache.org/',
  },
  {
    name: 'tez',
    logo: require('@site/static/img/project-logo/tez.png').default,
    url: 'https://tez.apache.org/',
  },
  {
    name: 'zeppelin',
    logo: require('@site/static/img/project-logo/zeppelin.png').default,
    url: 'https://zeppelin.apache.org/',
  },
  {
    name: 'zookeeper',
    logo: require('@site/static/img/project-logo/zookeeper.png').default,
    url: 'https://zookeeper.apache.org/',
  },
];


function Logo({name, logo, url}) {
  return (
    <li key={name} className={styles.item}>
      <div className={styles.logo}>
        <a href={url}>
          <img className={styles.image} src={logo} alt={name} />
        </a>
      </div>
    </li>
  );
}

export default function SupportedProjects() {
  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>Supported Projects</h2>
        <ul className={styles.logoGrid}>
          {ProjectList.map((props, idx) => (
            <Logo key={idx} {...props} />
          ))}
        </ul>
        <p className={styles.following}>
          <a href="https://cwiki.apache.org/confluence/display/BIGTOP/Bigtop+3.0.0+Release">
            and more.
          </a>
        </p>
      </div>
    </section>
  );
}
