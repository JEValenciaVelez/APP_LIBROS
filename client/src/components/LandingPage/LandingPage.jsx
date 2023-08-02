import React from "react";
import "./Landing.css";

const LandingPage = () => {
  const images = [
    // Aquí puedes agregar las URLs o rutas de las imágenes que deseas mostrar en la barra lateral
   
    "https://www.davidmonedero.com/wp-content/uploads/2021/06/lista_sagas_fantasia.jpg",
    // Agrega más URLs o rutas de imágenes según sea necesario
  ];

  return (
    <div className="landing-container">
        <header className="landing-header">
            <h1 className="landing-title">Encuentra tus libros favoritos</h1>
            <button>Ingresar</button>
        </header>
      <div className="sidebar">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
