import { useState } from "react";
import "./stilo.css";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2"; // Componente de Video
// import Comp3 from "./Comp3"; // Se omite el carrusel

export default function Principal() {

  // Se reintroduce la lógica de vista para alternar entre Comp1 y Comp2
  const [view, setView] = useState("comp1"); 
  
  // ID del video de villancico
  const videoId = "sQsx5uq3LbM"; 
  
  // URLs de los enlaces (usando formato estándar de YouTube para el enlace)
  const youtubeVillancico = `https://www.youtube.com/watch?v=${videoId}`; 
  const youtubeReceta = `https://www.youtube.com/watch?v=${videoId}`; 

  return (
    <div className="layout">

      <div className="logo">
        <p>Universidad Mayor de San Andrés</p>
        <img src="/Imagen de WhatsApp 2025-12-09 a las 18.05.42_324bcad7.jpg" alt="Logo UMSA Navideño" /> 
      </div>

      <div className="titulo">
        ¡Felices Fiestas UMSA! 
      </div>

      <div className="menu">
        {/* Los botones ahora vuelven a controlar la vista */}
        <button className="btn btn-light me-2" onClick={() => setView("comp1")}> Decoración Navideña (Comp 1)</button>
        <button className="btn btn-warning me-2" onClick={() => setView("comp2")}>Ver Villancico (Video)</button>
      </div>

      <div className="contenido">
        {/* Alterna entre Comp1 y Comp2 */}
        {view === "comp1" ? <Comp1 /> : <Comp2 />} 
      </div>

      <div className="enlaces">
        <h4>MENÚ NAVIDEÑO </h4>
        <p>Aquí tienes contenido festivo:</p>
        <ul>
            <li><a href="https://www.nationalgeographic.com.es/temas/navidad" target="_blank" rel="noopener noreferrer">Noticias Navideñas (NatGeo)</a></li>
            <li><a href="https://www.unicef.es/noticia/ideas-regalar-navidad-ninos" target="_blank" rel="noopener noreferrer">Regalos Solidarios (UNICEF)</a></li>
            <li>
                <a href={youtubeVillancico} target="_blank" rel="noopener noreferrer">Ver Villancico Clásico (YouTube)</a>
            </li>
             <li>
                <a href={youtubeReceta} target="_blank" rel="noopener noreferrer">Ver Receta Navideña (YouTube)</a>
            </li>
        </ul>
        <p><a href="https://www.facebook.com/CarreraDeInformaticaUmsa/" target="_blank" rel="noopener noreferrer">Redes Sociales (UMSA)</a></p>
      </div>

      <div className="footer">
        Denis Mayta Ramos 2025 | ¡Feliz Navidad y Próspero Año Nuevo! 
      </div>

    </div>
  );
}