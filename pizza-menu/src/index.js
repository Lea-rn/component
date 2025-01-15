import React from "react";
import ReactDom from "react-dom/client";


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
   <Header/>
   <Menu/>
   <Footer/>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);


function Pizza (){
  return (
    <div>
        <h2>pizza salamino</h2>
        <img src="pizzas/salamino.jpg" alt="message"/>
        <p>Tomato, mozarella, and pepperoni</p>
    </div>
  )
}

function Header (){
    return <h1>Fast React Pizza </h1>
}

function Menu (){
 return (
    <div>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    </div>
 )


}

function Footer (){
    return <footer>we're currently open !!!! </footer>
}