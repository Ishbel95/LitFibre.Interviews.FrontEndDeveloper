import ProductTile from "./components/ProductTile";
import "./App.css";

const products = [
  {
    name: "Brownie",
    price: "£3.50",
    image: "./images/brownies.jpg",
    mayContainsNuts: true,
    description: "A gooey slice of chocolatey goodness, enjoy it hot or cold!",
  },
  {
    name: "Carrot cake",
    price: "£3.00",
    image: "./images/carrot cake.jpg",
    mayContainsNuts: true,
    description:
      "Freshly baked cake with chunky carrot pieces and hazelnut frosting.",
  },
  {
    name: "Sponge",
    price: "£2.50",
    image: "./images/sponge.jpg",
    mayContainsNuts: true,
    description:
      "A traditional sponge with dustings of sugar and fresh summer fruit.",
  },
  {
    name: "Blueberry muffin",
    price: "£2.50",
    image: "./images/blueberry muffin.jpg",
    mayContainsNuts: true,
    description: "Fluffy vanilla muffins filled with fresh blueberries.",
  },
  {
    name: "Toast",
    price: "£1.00",
    image: "./images/toast.jpg",
    mayContainsNuts: false,
    description: "Choose from brown, white, gluten-free or rye bread.",
  },
  {
    name: "Savoury muffin",
    price: "£1.50",
    image: "./images/savoury muffin.jpg",
    mayContainsNuts: false,
    description:
      "Add some cream and Jam to turn this light snack into a mini afternoon tea.",
  },
  {
    name: "Sandwich",
    price: "£1.90",
    image: "./images/sandwich.jpg",
    mayContainsNuts: false,
    description:
      "Choose from the selection of freshly cut sandwiches with an array of fillings.",
  },
  {
    name: "Tea",
    price: "£1.00",
    image: "./images/tea.jpg",
    mayContainsNuts: false,
    description: "A piping hot mikly (or not so milky) tea.",
  },
  {
    name: "Coffee",
    price: "£1.50",
    image: "./images/coffee.jpg",
    mayContainsNuts: false,
    description: "Creamy Coffee with your choice of milk.",
  },
  {
    name: "Iced coffee",
    price: "£2.30",
    image: "./images/iced coffee.jpg",
    mayContainsNuts: false,
    description: "A refreshing drink with your choice of milk.",
  },
  {
    name: "Hot chocolate",
    price: "£2.00",
    image: "./images/hot chocolate.jpg",
    mayContainsNuts: true,
    description:
      "Sweet and salty Hot Chocolate, topped with whipped cream and chocolate sauce.",
  },
];
// for every object in array, return a ProductTile component that contains the
// data for the current object that is being iterated over.
// I have added a may contain nuts boolean and decription to each object to pass as props to components.

function App() {
  const getTile = products.map((item, index) => {
    return (
      <ProductTile
        key={index}
        productName={item.name}
        productPrice={item.price}
        productImageSrc={item.image}
        productDesc={item.description}
        productContainNuts={item.mayContainsNuts}
      />
    );
  });

  return (
    <>
      <h1 className="appHeader">Menu</h1>
      <div className="appContainer">{getTile}</div>
    </>
  );
}

export default App;
