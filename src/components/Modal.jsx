import React from 'react';

const Modal = () => {
    return (
        <div>
            <div className="my-modal">
                <h4>Modal</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo officia est voluptatum consequatur adipisci sint.
                    Ea placeat eius, natus aliquid doloribus, deserunt rerum facilis nemo, quo quam, porro sunt ab.
                </p>

                <button className="ui button">Закрыть</button>
            </div>


            <div className="my-modal-overlay"></div>
        </div>

    );
};

export default Modal;
