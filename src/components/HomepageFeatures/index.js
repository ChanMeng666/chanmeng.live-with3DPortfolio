import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Swimming Club',
    href: "https://groupaq.pythonanywhere.com/",
    Svg: require('@site/static/img/swimming-club.svg').default,
    description: (
      <>
        Countryside community swimming club management system.
      </>
    ),
  },
  {
    title: 'Biosecurity',
    href: "http://1160210.pythonanywhere.com/",
    Svg: require('@site/static/img/biosecurity.svg').default,
    description: (
      <>
        Informational app on NZ agricultural pests and weeds.
      </>
    ),
  },
  {
    title: 'Fishing Club',
    href: "http://groupac.pythonanywhere.com/",
    Svg: require('@site/static/img/fishing-club.svg').default,
    description: (
      <>
        East Coast anglers club management system.
      </>
    ),
  },
  {
    title: 'AgriHire Solutions',
    href: "https://agrihireaq.pythonanywhere.com/",
    Svg: require('@site/static/img/automotive.svg').default,
    description: (
      <>
        Equipment and order management system.
      </>
    ),
  },
];

function Feature({Svg, title, description, href}) {
  return (
    <div className={clsx('col col--3')}>
      <a href={href} className={styles.featureLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
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
