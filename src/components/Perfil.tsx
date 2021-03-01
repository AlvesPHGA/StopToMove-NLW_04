import { useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Perfil.module.css';

export function Profile(){
    const {level}= useContext(challengesContext);
    return(
        <div className={styles.perfilContainer}>
            <img src="/yoda.jpg" alt="Foto do usuario"/>
            <div>
                <strong>User Name</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    level {level}
                </p>
            </div>
        </div>
    )
}