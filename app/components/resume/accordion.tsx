import React from "react";
import styles from './resume.module.css';

interface accoridionType  {
    expanded: boolean,
    setExpanded: (p: boolean) => void,
    i: boolean,
    bullets: string[],
    title: string
}


const Accordion: React.FC<accoridionType> = ({ i, expanded, setExpanded, bullets, title }) => {
  const isOpen = i === expanded;
  return (
    <>
      <div>      
        <div className={styles.spacer}>
            <div className={styles.skillsBar}>
                <h5 className={styles.headingS}> {title}</h5>
                <button className={styles.displayButton} 
                onClick={() => setExpanded(isOpen ? false : i)}>
                Hide</button>
            </div>
        </div>

      </div>

        {isOpen && (
          <section>
            <div className={styles.bullets}>
           {bullets.map((i) => (
              <h4
              key={i}
              className={styles.bulletW}>{i}</h4>
            ))}
            </div>
          </section>
        )}
    </>
  );
};

export default Accordion;
