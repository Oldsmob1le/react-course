import React from "react";
import cl from './MyModal.module.css'

const MyModal = ({children}) => {
    return (
        <div className={[cl.myModel, cl.active].join(' ')}>
            <div className={cl.myModelContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;