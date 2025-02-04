
import React from "react";

const Decor = () => {

const decorData : {
    
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    }[] = [
    
     { id: 1,
      name: "Wall Sofa Art",
      price: 45000,
      image: "/resize1.jpg",
      description: "modern sofa",
    },
    {
      id: 2,
      name: "Classic Decor",
      price: 33000,
      image: "resize3.jpg",
      description: "classic sofa",
    },
    {
      id: 3,
      name: "Carving",
      price: 28000,
      image: "resize8.jpg",
      description: "carving sofa",
    },
    {
      id: 4,
      name: "Sofa Set",
      price: 78000,
      image: "resize02.jpg",
      description: "sofa setting",
    },
    {
      id: 5,
      name: "Room Decor",
      price: 38000,
      image: "resize7.jpg",
      description: "room sofa",
    },
    {
      id: 6,
      name: "Modern Decor",
      price: 40000,
      image: "resize6.jpg",
      description: "modern sofa",
    },
]


  return(
    <div>
        <div className="decors">
        {decorData.map((item) => (
            <div key={item.id} className="decor-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">Price: ${item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Decor