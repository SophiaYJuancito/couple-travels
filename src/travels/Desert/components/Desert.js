import React from 'react';
// import Slider from "react-slick";
import "../styles/desert.css";
// import HeaderImg from "../../../data/TatacoaDesert.png";
import activitiesOne from "../images/activities-1.jpg";
import activitiesTwo from "../images/activities-2.jpg";
import firms from "../images/firms.png";

const Desert = () => {

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // };

    return (
        <div id="desert">
            <div className="header">
                <h1>Tú y yo en el desierto, no sé, piénsalo.</h1>
                <h2>un fin de semana bajo las estrellas</h2>
            </div>
            <div className="description">
                <p>Este será una gran aventura, ya que conoceremos el desierto  de la</p>
                <div className="tatacoa-container">
                    <p>Tatacoa</p>
                </div>
                <p>Así será nuestra travesía...</p>
            </div>
            <div className="countdown-container">
                <h2>Faltan:</h2>
                <ul className="countdown" target-date="2022-10-22">
                    <li className="days dots">
                        <div className="number">5</div>
                        <div className="label">Días</div>
                    </li>
                    <li className="hours dots">
                        <div className="number">2</div>
                        <div className="label">Horas</div>
                    </li>
                    <li className="minutes dots">
                        <div className="number">7</div>
                        <div className="label">Min.</div>
                    </li>
                    <li className="seconds">
                        <div className="number">53</div>
                        <div className="label">Seg.</div>
                    </li>
                </ul>
            </div>
            <div className="activities">
                <img src={activitiesOne} alt="activitiesOne"/>
                <img className="second-image" src={activitiesTwo} alt="activitiesTwo"/>
            </div>
            <div className="video-container">
                <h2>VIDEO</h2>
                <iframe width="700" height="400" src="https://www.youtube.com/embed/pWXdhzC-PCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="pricing">
                <h2>Cotización</h2>
                <div className="data">
                    <h3>Costos</h3>
                    <h4>El costo total es de 500.000</h4>
                    <hr/>
                    <p>Travesía única por el desierto de la tatacoa</p>
                    <table>
                        <thead>
                            <tr>
                                <td>Personas</td>
                                <td>Precio</td>
                                <td>Almuerzos</td>
                                <td>TOTAL</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>470.000</td>
                                <td>20.000</td>
                                <td>490.000</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <div className="counts">
                        <div className="col">
                            <label>SUBTOTAL</label>
                            <label>POSIBLES GASTOS EXTRA</label>
                        </div>
                        <div className="col">
                            <p>490.000 COP</p>
                            <p>$ 10.000</p>
                        </div>
                        <hr/>
                        <div className="total">
                            <label>Total:</label>
                            <p>$500.000 COP</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="firms">
                <h3>Aprobación</h3>
                <h4>Por ultimo, juancito debe de aceptar está propuesta si esta de acuerdo.</h4>
                <p>Para hacer la reserva del viaje podemos pagar 50% ahora y 50% dias antes del viaje. O un 30% ahora y 70% dias antes. Todo depende del estado actual de nuestros bolsillos. Tambien recibimos un 10% de descuento por ser proximamente mi cumpleaños.</p>
                <img src={firms} alt="couple-firms"/>
                <div className="disclaimer">
                    <p>
                        Consideraciones:
                    </p>
                    <br/>
                    <p>
                        Lo de que Juancito viaje ambas veces en la ventana puede cambiar, ya que no es justo para sophie que disfruta mucho más del paisaje, en cambio, Juancito se queda dormido. Esta vez Juancito no podrá consentir perros (si es que hay) por mas de 5 minutos, pero en cambio si puede consentir a Sophie por tiempo ilimitado. Y por ultimo, al ser un desierto, habrá mucho frio en la noche por lo que Juancito tendra que hacer su función de cucharita grande. Fin.
                    </p>
                </div>
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

export default Desert;