import { useContext } from 'react';

import {CountdownContext} from '../contexts/CountdownContext'
import styles from '../styles/components/CountDown.module.css';



export function CountDown(){
    //const contextData= useState(challengesContext);

    //console.log(contextData)

    const {

        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown
        
    } = useContext(CountdownContext);

    

    const [minutesLeft, minutesRight]= String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight]= String(seconds).padStart(2, '0').split('');

    

    return(
        <div>
            <div className={styles.countDownContainer}>

                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>

            </div>

            {hasFinished ?(
                <button disabled className={styles.countDownButton}>
                    Ciclo terminado
                </button>
            ):(
                <>
                    { isActive ? (
                    <button type="button" className={`${styles.countDownButton} ${styles.countDownButtonActive}`} onClick={resetCountDown}>
                        Abandonar ciclo
                    </button>
                ):(
                    <button type="button" className={styles.countDownButton} onClick={startCountDown}>
                        Iniciar um ciclo
                    </button>
                ) }
                </>
            )}

            

            

        </div>
        
    )
}