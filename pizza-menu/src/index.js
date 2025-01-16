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

function Header() {
  /// inline style in react ... :
  // const style = { color: "red", fontSize: "80px", textTransform: "uppercase" };
  // return <h1 style={style}>Fast React Pizza </h1>;

  return <h1 className="title">Fast React Pizza </h1>;
}

function Menu() {
  return (
    <div className="container">
    
      <Pizza
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
      />
  

 
    </div>
  );
}

function Pizza(props) {
  
  return (
    <div className="pizza-container">
      <img src={props.photoName} alt={props.name} />
      <div className="pizza-info">
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <p>{props.price+3}</p>
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

  return <footer> we're currently open !!!! </footer>;
}
