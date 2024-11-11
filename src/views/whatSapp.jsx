import { FaWhatsapp } from "react-icons/fa";

export default function WhatSapp() {
    return (
        <a href="https://wa.me/541123543337" target="_blank" rel="noopener noreferrer" style={{
            position: 'fixed',
            bottom: '20px',
            right: '40px',
            borderRadius: '50%',
            padding: '10px',
            color: '#25D366',
            textAlign: 'center',
            fontSize: '52px',
            zIndex: 1000
        }}>
            <FaWhatsapp />
        </a>
    );
}

