import img from "next/image";

export default function Hero() {
  return (
    <div style={{ position: "relative" }} className="container-fluid">
      <p
        className="fw-bold display-6  text-primary "
        style={{
          marginTop: "95px",
          position: "absolute",
          zIndex: 1,
          transform: "rotate(90deg)",
        }}
      >
        Gran Variedad
      </p>
      <div id="carouselExample" className="carousel slide text-center ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img3.jpg" alt="..." width={1200} height={350} />
          </div>
          <div className="carousel-item">
            <img src="/img2.jpg" alt="..." width={1200} height={350} />
          </div>
          <div className="carousel-item">
            <img src="/img4.jpg" alt="..." width={1200} height={350} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
