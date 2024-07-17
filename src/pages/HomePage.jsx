import { Card } from "../components";

export const HomePage = () => {
  //! Funcione que desglosa el contenido de las cards
  const items = [
    { title: "Imagenes Master", img: "iconoWindows.png" },
    { title: "Drivers", img: "drivers.png" },
    { title: "Pendrive Masterizado", img: "iconopendrivemaster.png" },
    { title: "Software", img: "iconoSoftware.png" },
    { title: "Reparción de Errores", img: "erroresrepair.png" },
    { title: "Utilidades", img: "utilidades.png" },
  ];
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "60px",
        width: "100%",
        maxWidth: "1360px",
        justifyContent: "center",
        margin: "0 auto",
        height: "100%",
      }}
    >
      {" "}
      {items.map((item, index) => (
        //!aca con el map itineramos lo que se degloso antes
        <Card key={index} imageName={item.img} title={item.title} />
      ))}
    </div>
  );
};
