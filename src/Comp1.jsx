import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Comp1() {
  
  // URL de imagen de ejemplo. En un proyecto real, usa una imagen en /public.
  const imagenNavidad = "https://cdn.pixabay.com/photo/2016/11/29/13/19/christmas-tree-1869811_1280.jpg"; 

  return (
    <div>
      <h3> Ideas de Decoración Navideña </h3>
      <p>Inspírate con nuestras ideas para tu árbol de Navidad.</p>

      {/* Tarjeta de Bootstrap con Imagen Referencial */}
      <div className="card" style={{ width: '18rem' }}>
        <img src="public\ultimo.jpg" className="card-img-top" alt="Árbol de Navidad decorado" />
        {/* Placeholder de imagen de un árbol de navidad. */} 
        <div className="card-body">
          <h5 className="card-title">Árbol Clásico</h5>
          <p className="card-text">Decoración tradicional con luces cálidas y esferas rojas y doradas.</p>
        </div>
      </div>
      
      <hr className='my-4'/>

      {/* Se mantienen los Modales con IDs únicos para información secundaria */}
      <div className="btn-group" role="group" aria-label="Grupo de botones de información">

        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#Modal1">
          Lazos 
        </button>
        {/* ... Modal 1 (ID: Modal1) ... */}
        <div className="modal fade" id="Modal1" tabIndex="-1" aria-labelledby="Modal1Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="Modal1Label">Detalle de Lazos</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Los lazos de terciopelo rojo le dan un toque elegante y festivo.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#Modal2">
          Luces 
        </button>
         {/* ... Modal 2 (ID: Modal2) ... */}
        <div className="modal fade" id="Modal2" tabIndex="-1" aria-labelledby="Modal2Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="Modal2Label">Detalle de Luces</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Recomendamos luces LED cálidas para un ambiente acogedor.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Modal3">
          Estrella 
        </button>

        <div className="modal fade" id="Modal3" tabIndex="-1" aria-labelledby="Modal3Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="Modal3Label">Detalle de la Cima</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                La estrella dorada es el toque final indispensable.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}