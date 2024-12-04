import styles from './About.module.css'

function About() { 
    return (
      <section className={styles.about}>
        <div>
          <h1>About Me</h1>
        </div>
        <div className={styles.aboutContent}>
          <p>I have many interest, but my two favorite would 
            have to be weight training and playing video games!
          </p>
        </div>
        </section>
    );
  };
  
  export default About;