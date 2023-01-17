import React, { useState } from 'react';
import "./modal.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Job from './Job';

const Modal = () => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            <button onClick={toggleModal} className='btn-modal'>Open</button>
            {modal && (
                      <div className='modal'>
                        <div onClick={toggleModal} className='overlay'></div>
                            <div className='modal-content'>
                                <div className='reseaux-icons'>
                                    <div className='linkedin-logo'></div>
                                    <div className='twitter-logo'></div>
                                    <div className='facebook-logo'></div>
                                    <div className='instagram-logo'></div>
                                </div>
                                <div className='background-img'></div>
                                <div className='logo-entreprise'></div>
                                <div className='presentation-part'>
                                    <h2 className='title'>Presentation</h2>
                                    <p className='content'>TestTestLoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam 
                                    quas, excepturi ipsam amet dignissimos incidunt rem cumque,
                                    laborum quam a minima aliquid praesentium molestiae nam cupiditate aspernatur,
                                    nihil alias laboriosam?  quas, excepturi ipsam amet dignissimos incidunt rem cumque,
                                    laborum quam a minima aliquid praesentium molestiae nam cupiditate aspernatur,
                                    nihil alias laboriosam?  quas, excepturi ipsam amet dignissimos incidunt rem cumque,
                                    laborum quam a minima aliquid praesentium molestiae nam cupiditate aspernatur,
                                    nihil alias laboriosam?  quas, excepturi ipsam amet dignissimos incidunt rem cumque,
                                    laborum quam a minima aliquid praesentium molestiae nam cupiditate aspernatur,
                                    nihil alias laboriosam?
                                    </p>
                                </div>
                                <h2 className='jobs-title'>X-jobs Disponible</h2>
                                <div className='jobs-dispo-part'>
                                            <Job />
                                            <Job />
                                            <Job />
                                            <Job />
                                            <Job />
                                            <Job />
                                            <Job />
                                </div>
                                <div className='profils-recherche-part'>
                                    <h2 className='title'>Profils recherché</h2>
                                    <p className='content'>TestTestLoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam 
                                    quas, excepturi ipsam amet dignissimos incidunt rem cumque,
                                    laborum quam a minima aliquid praesentium molestiae nam cupiditate aspernatur,
                                    nihil alias laboriosam?  quas, excepturi ipsam amet dignissimos incidunt rem cumque,
                                    laborum quam a minima aliquid praesentium molestiae nam cupiditate aspernatur,
                                    nihil alias laboriosam?  quas, excepturi ipsam amet dignissimos incidunt rem cumque,
                                    laborum quam a minima aliquid praesentium molestiae nam cupiditate aspernatur,
                                    nihil alias laboriosam?  quas, excepturi ipsam amet dignissimos incidunt rem cumque,
                                    laborum quam a minima aliquid praesentium molestiae nam cupiditate aspernatur,
                                    nihil alias laboriosam?
                                    </p>
                                </div>
                                <button onClick={toggleModal} className='close-modal'><ArrowBackIcon /></button>
                        </div>
                      </div>
            )}
        </div>
    );
};

export default Modal;