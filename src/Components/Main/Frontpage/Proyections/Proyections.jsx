import React from "react";
import image4 from "../../../../assets/image4.jpg";
import "./Proyections.css";

const Proyections = () => {
  return (
    <>
      <section>
        <h2>Proximas Proyecciones</h2>
        <div className="proyections-container">
          <article>
            <img className="image-article"src={image4} />
            <h6>Lorem Ipsum</h6>
          </article>
          <article>
            <img  className="image-article" src={image4} />
            <h6>Lorem Ipsum</h6>
          </article>
          <article>
            <img  className="image-article" src={image4} />
            <h6>Lorem Ipsum</h6>
          </article>
          <article>
            <img  className="image-article" src={image4} />
            <h6>Lorem Ipsum</h6>
          </article>
        </div>
      </section>
    </>
  );
};

export default Proyections;
