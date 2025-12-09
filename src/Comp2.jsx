export default function Comp2(props) {
  const videoId = props.videoId || "sQsx5uq3LbM"; 
  
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0`;

  return (
    <div>
      <h3>🎶 Villancicos y Contenido Festivo </h3>
      <p>Mira este video de YouTube para entrar en el espíritu navideño.</p>
      
      {/* Contenedor responsivo para el Iframe de YouTube */}
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          width="100%"
          height="315"
          src={embedUrl}
          title="Video de YouTube de Navidad"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: "2px solid #c0392b", borderRadius: "8px" }}
        ></iframe>
      </div>
      
      <p className='mt-3'>Este componente te permite ver videos incrustados directamente.</p>
      {/* Placeholder de imagen de un villancico */} 

[Image of people singing Christmas carols]

    </div>
  );
}