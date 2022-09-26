import CookieCounter from './CookieCounter/CookieCounter';
import Cookie from './Cookie/Cookie';
import { useState } from 'react';
import Modal from './Modal/Modal';


const monTableau = ['a', 'b', 'c', 'd'];
// const maLettre = monTableau[0];
// const monAutreLettre = monTableau[1];
// décomposer un tableau
// const [maLettre, monAutreLettre, ...leReste] = monTableau;


const CookieClicker = props => {

    const minCookies = 10;
    const [nbCookies, setNbCookies] = useState(0);


    const clickHandler = () => {
        setNbCookies((previous) => previous + 1);  
        setNbCookies((previous) => previous + 1);  
    };

    return (
        <>
            <CookieCounter nombre={nbCookies}/>
            <Cookie clickFn={clickHandler}/>

            {/* Composante Modal si 10 biscuits ou + */}
            {nbCookies >= minCookies ? (
                <Modal>
                    <>
                        <h2>Bravo!</h2>
                        <p>Lorem ipsum!</p>
                    </>
                </Modal>
            ) : null}
        </>
    );
};

export default CookieClicker;
