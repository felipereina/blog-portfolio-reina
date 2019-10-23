import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'


const Contact = () => {
    return (
        <section>
            <Title title="contact" subtitle="Me"/>
            <div className={styles.center}>
                <form className={styles.form}
                    action="https://formspree.io/reina.felipe@gmail.com" method="POST" 
                >
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" name="name" id="name" 
                        className={styles.formControl} placeholder="João Silva" />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="text" name="email" id="email" 
                        className={styles.formControl} placeholder="email@email.com" />
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <textarea type="message" name="message" rows="10" id="message" 
                        className={styles.formControl} placeholder="Olá, amigo!" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" className={styles.submit}/>
                    </div>
                </form>
                
            </div>
        </section>
    )
}

export default Contact