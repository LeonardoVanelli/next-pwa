import React, { useState, useEffect } from 'react';

function AddToHome() {
    const [instaled, setInstaled] = useState(true);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('before')
            setDeferredPrompt(e);
            setInstaled(false)
        })
    }, [])

    const cancel = () => {
        setInstaled(true)
    }

    const handleAddToHomescreenClick = (e) => {
        // Show the prompt
        if (!deferredPrompt)
            return
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            setDeferredPrompt(null);
        });
        setInstaled(false)
    };

    return (
        <>
            {!instaled &&
                <div className="container" onClick={handleAddToHomescreenClick}>
                    <div className="container2" >
                        <img className="logo" src="/logo.svg" alt="logo" />
                        <p>Add to Home Screen</p>
                    </div>
                    <img onClick={cancel} className="cancel" src="/cancel.svg" alt="logo" />

                </div>
            }
            <style jsx>{`
            .container {
                background-color: white;
                height: 50px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between; /* align items in Main Axis */
            }
            
            .container2 {
                display: flex;
            }
            
            p {
                color: black;
                font-size: 17px;
            }
            
            .logo {
                height: 40px;
                width: 40px;
                margin: 5px;
                background-color: #9f53af
            }
            
            .cancel {
                height: 20px;
                width: 20px;
                padding-right: 10px;
            }
            `}</style>
        </>
    );
}

export default AddToHome