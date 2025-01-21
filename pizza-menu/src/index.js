import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <h2 className="menu">Our Menu</h2>

      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

const messageStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  fontSize: "30px",
  fontWeight: "400",
  color: "red",
  textAlign: "center",
};

function Header() {
  /// inline style in react ... :
  // const style = { color: "red", fontSize: "80px", textTransform: "uppercase" };
  // return <h1 style={style}>Fast React Pizza </h1>;

  return <h1 className="title">Fast React Pizza </h1>;
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [] ;
  const numPizzas = pizzas.length;

  return (
    <div>
      {/* render the page with the && (and) operator       */}
      {/* {numPizzas >0 && (
     pizzas.map((pizza) => {
      return <Pizza pizzaObj={pizza} key={pizza.name} />;
})
      )} */}

      {/* render the page with ternary operator ... */}

      {numPizzas > 0 ? (
        <>
          <p className="presentation">
            Authentic Italian cuisines . 6 creative dishes to choose from . All
            from our stone oven , all organic , all delecious{" "}
          </p>

          <div className="container">
            {pizzas.map((ele) => {
              return <Pizza pizzaObj={ele} key={ele.name} />;
            })}
          </div>

 
        </>
      ) : (
        <p style={messageStyle}>
          We're still working on our menu . Please come back later 😊
        </p>
      )}

      {/* <Pizza
        name="pizza salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price ={10}
        
      />
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price = {10}
      />

      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price = {10}
      />
         <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price = {10}
      />


    <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price = {10}
      />

<Pizza
        name="pizza salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price = {10}
      /> */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null; ///// early return ...
  return (
    <div className={`pizza-container ${pizzaObj.soldOut ? "soldout" : " " } `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div className="pizza-info">
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
     {/* {
      pizzaObj.soldOut ? <p>SOLD OUT</p> : <p>{pizzaObj.price}</p>

     } */}
     <p>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</p>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours(); //// 20
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen)

  // isOpen ? alert("we're currently open !!") : alert("sorry we're close !!! ")

  return (
    ///// ternary operator ::

    <footer>
      {isOpen ? (
        //  <Order closeHour={closeHour}  />
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
}

///// dry === > d'ont repeat yourself ....
function Order({ closeHour, openHour }) {
  return (
    <div>
      <p>
        we're open from {openHour}:00 until {closeHour}:00 . Come visit us or
        order online
      </p>
      <button>order</button>
    </div>
  );
}

//// with and oprator :::
{
  /* <div>
      <footer>
        {isOpen && `we're open until ${closeHour}:00 . Come visit us or order online` }
      
        
      </footer>
      <button>Order</button>
</div> */
}
