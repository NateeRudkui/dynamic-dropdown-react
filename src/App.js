import "./App.css";
import Dropdown from "./conponent/Dropdown";
import FoodComponent from "./conponent/FoodComponent";
import { useState } from "react";
import MenuData from "./data/Menudata";

function App() {
  const [foods, setFood] = useState(MenuData);

  const changeFoodData = (e) => {
    const category = e.target.value;
    if (category === "เมนูทั้งหมด") {
     setFood(MenuData);
    } else {
      const result = MenuData.filter((element) => {
        return element.menu === category;
      });
      setFood(result);
    }
  };
  return (
    <div className="container">
      <h1>hello</h1>
      <Dropdown changeFoodData={changeFoodData} />
      <div className="content">
        {foods.map((data, index) => {
          return <FoodComponent key={index} {...data} />;
        })}
      </div>
    </div>
  );
}

export default App;
