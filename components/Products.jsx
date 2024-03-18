"use client";

import { useEffect, useState } from "react";

function Card({ myStates }) {
  const { allProducts, loading } = myStates;

  return (
    <>
      {!loading ? (
        <div className="col-md-3 text-center">
          <div className="card h-100 ">
            <div className="card-header ">Agrovepal</div>
            <div className="card-body ">
              <h3 className="card-title">Cargando...</h3>
              <p className="card-text">Por favor espera...</p>
            </div>
          </div>
        </div>
      ) : (
        allProducts?.map((Product, i) => (
          <div key={i} className="col-md-3">
            <div className="card h-100 ">
              <img src={Product.thumbnail} alt="..." className="card-img-top" />
              <div className="card-body ">
                <h3 className="card-title">{Product.title}</h3>
                <p className="card-text">{Product.price} $</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default function Products() {
  const [myStates, setMyStates] = useState({
    allProducts: [],
    loading: false,
  });

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => {
        if (json.length)
          setMyStates({ ...myStates, allProducts: json, loading: true });
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <div className="container my-5 ">
        <div className="text-end my-4">
          <div class="dropdown btn-outline-dark ">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Fertilizantes
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Fungicidas
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Insecticidas
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Nematicidas
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Herbicidas
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Semillas
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Implementos Agricolas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <Card myStates={myStates} />
        </div>
      </div>
    </>
  );
}
