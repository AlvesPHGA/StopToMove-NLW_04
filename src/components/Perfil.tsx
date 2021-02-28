import { useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Perfil.module.css';

export function Profile(){
    const {level}= useContext(challengesContext);
    return(
        <div className={styles.perfilContainer}>
            <img src="https://avatars.githubusercontent.com/u/35383608?s=400&u=121a93a6e6482e42b1991508180fffb7720f0306&v=4" alt="Foto do usuario"/>
            <div>
                <strong>Pedro Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    level {level}
                </p>
            </div>
        </div>
    )
}