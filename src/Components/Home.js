import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="body">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-5ff78a97-f4d3-4242-9344-c1f478aff592._CB428091778_QL85_V1_.jpg"
        alt=""
      />
      <div className="Homepr">
        <Product
          id="121314"
          title="Flower pot"
          price={12}
          rating={5}
          image="https://family.disney.com/wp-content/uploads/2020/05/disneyfamily_minnie-flower-pots_elise-apffel_featured-1024x576.webp"
        />
        <Product
          id="121314"
          title="Life never gets old"
          price={11.9}
          rating={5}
          image="https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/54fff1158ca1d-10-thenotebook-nicholassparks-lgn.jpg?fill=320:426&resize=480:*"
        />
        <Product
          id="121314"
          title="Attaa"
          price={13}
          rating={5}
          image="https://5.imimg.com/data5/UI/VJ/GN/ANDROID-28736665/fb-img-1561604567491-jpg-500x500.jpg"
        />
        <Product
          id="121314"
          title="Life never gets old"
          price={11.9}
          rating={5}
          image="https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/54fff1158ca1d-10-thenotebook-nicholassparks-lgn.jpg?fill=320:426&resize=480:*"
        />
        <Product
          id="121314"
          title="Life never gets old"
          price={11.9}
          rating={5}
          image="https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/54fff1158ca1d-10-thenotebook-nicholassparks-lgn.jpg?fill=320:426&resize=480:*"
        />
        <Product
          id="121314"
          title="Life never gets old"
          price={11.9}
          rating={5}
          image="https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/54fff1158ca1d-10-thenotebook-nicholassparks-lgn.jpg?fill=320:426&resize=480:*"
        />
      </div>
    </div>
  );
}

export default Home;
