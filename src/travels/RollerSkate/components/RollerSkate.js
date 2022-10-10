import React from 'react';
import Slider from "react-slick";
import "../styles/roller-styles.css";
// import "../styles/pinkyStyles.css";

import RollerSkate from "../../../data/RollerSkate.png";
// import Trip from "../images/Trip.png";
// import Boat from "../images/Boat.png";
// import Bonfire from "../images/Bonfire.png";
// import Popcorns from "../images/Popcorns.png";
// import Pillow from "../images/Pillow.png";
// import Kayak from "../images/Kayak.png";
// import Hiking from "../images/Hiking.png";
// import Peach from "../images/Peach.png";
// import Bills from "../images/Bills.png";

const Glamping = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div id="roller-skate">
            <div className="roller-header">
                <h1>ROLLER SKATE</h1>
                <h2>SÁBADO 25 DE JUNIO 2022</h2>
            </div>
            <div className="countdown-container">
                <h2>HACE EXACTAMENTE:</h2>
                <ul className="countdown" target-date="2022-06-25">
                    <li className="days dots">
                        <div className="outer-border">
                            <div className="number">5</div>
                        </div>
                        <div className="outer-border">
                            <div className="label">Dias</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="roller-description">
                <p>
                    Comenzamos con un almuerzo en un lugar muy cache, luego nos dirigimos a procrastinar todo el resto de la tarde y finalmente llegamos a la pista donde por poco no entramos,sin embargo los contactos secretos de Juancito hicieron que nos permitieran ingresar. Juancito se lució completamente y nos enseñó pasos épicos que recordaremos por siempre, nos mostró sus talentos ocultos y dio a entender que muy pronto quisiera repetir el plan nuevamente.
                </p>
                <p>
                    Sophie encontró una fan en medio de la pista y se divirtió mucho. Además dio muy buenas clases de patinaje a Juancito. Y así finalizó este plan.
                </p>
            </div>
            <div className='star-container'>
                <div className="roller-images">
                    <img className="roller-skate-image" src={RollerSkate} alt="roller-skate-image"/>
                </div>
                <div className="star one"></div>
                <div className="star two"></div>
                <div className="star three"></div>
                <div className="star four"></div>
                <div className="star five"></div>
                <div className="star six"></div>
            </div>
                
            {/* <div className="roller-gallery">
                <Slider {...settings}>
                    <div style={{width: "300px", height: "200px"}}>HOLA SOY 1</div>
                    <div style={{width: "300px", height: "200px"}}>HOLA SOY 2</div>
                    <div style={{width: "300px", height: "200px"}}>HOLA SOY 3</div>
                    <div style={{width: "300px", height: "200px"}}>HOLA SOY 4</div>
                    <div style={{width: "300px", height: "200px"}}>HOLA SOY 5</div>
                    <div style={{width: "300px", height: "200px"}}>HOLA SOY 6</div>
                    <div style={{width: "300px", height: "200px"}}>HOLA SOY 7</div>
                </Slider>
            </div> */}
        </div>
    );
}

export default Glamping;