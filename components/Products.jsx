"use client";

import { useEffect, useState } from "react";

function Card({ allProducts }) {
  console.log(allProducts);
  return (
    <>
      {allProducts?.map((Product, i) => (
        <div key={i} className="col-md-3">
          <div className="card h-100 ">
            <img src={Product.thumbnail} alt="..." className="card-img-top" />
            <div className="card-body ">
              <h3 className="card-title">{Product.title}</h3>
              <p className="card-text">{Product.price} $</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function Products() {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => setAllProducts(json))
      .catch((error) => console.log(error));
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
          <Card allProducts={allProducts} />
        </div>
      </div>
    </>
  );
}
