import { useState, React } from "react";
import LobsterBisk from "../resources/img/menu/lobster-bisque.jpg";
import Mozarella from "../resources/img/menu/mozzarella.jpg";
import Title from "./Title";

const filtersList = [
  { key: 1, dataFilter: "*", description: "Todos" },
  {
    key: 2,
    dataFilter: ".filter-suggestions",
    description: "Sugestão do Dia",
  },
  {
    key: 3,
    dataFilter: ".filter-starters",
    description: "Entradas",
  },
  { key: 4, dataFilter: ".filter-dessert", description: "Sobremesas" },
];

var filtersHashMap = new Map();
filtersHashMap.set(1, "*");
filtersHashMap.set(2, "filter-suggestions");
filtersHashMap.set(3, "filter-starters");
filtersHashMap.set(4, "filter-dessert");

const menuList = [
  {
    key: 1,
    classContext: "filter-suggestions",
    img: LobsterBisk,
    content: "Mar e Terra",
    price: "25€",
    ingredients: "Lorem, deren, trataro, filede, nerada",
  },
  {
    key: 2,
    classContext: "filter-suggestions",
    img: Mozarella,
    content: "Arroz de Lavagante",
    price: "65€/kg",
    ingredients: "Lorem, deren, trataro, filede, nerada",
  },
  {
    key: 3,
    classContext: "filter-suggestions",
    img: Mozarella,
    content: "Meio Coelho Na Brasa",
    price: "9.5€",
    ingredients: "Coelho",
  },

  {
    key: 4,
    classContext: "filter-starters",
    img: Mozarella,
    content: "Bolinhos de Bacalhau",
    price: "0.2€/unidade",
    ingredients: "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
  },
  {
    key: 5,
    classContext: "filter-starters",
    img: Mozarella,
    content: "Rissóis",
    price: "0.4€/unidade",
    ingredients:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
  },
  {
    key: 6,
    classContext: "filter-starters",
    img: Mozarella,
    content: "Presunto",
    price: "4€/prato",
    ingredients: "Lorem, deren, trataro, filede, nerada",
  },
  {
    key: 7,
    classContext: "filter-dessert",
    img: Mozarella,
    content: "Tiramisú",
    price: "4€/prato",
    ingredients: "Lorem, deren, trataro, filede, nerada",
  },
  {
    key: 8,
    classContext: "filter-dessert",
    img: Mozarella,
    content: "Cheesecake de Morango",
    price: "4€/prato",
    ingredients: "Lorem, deren, trataro, filede, nerada",
  },
  {
    key: 9,
    classContext: "filter-dessert",
    img: Mozarella,
    content: "Parfait de Chocolate",
    price: "4€/prato",
    ingredients: "Lorem, deren, trataro, filede, nerada",
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState(1);
  const TabFilters = () => {
    return (
      <div className="row" data-aos="fade-up" data-aos-delay="100">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="menu-flters">
            {filtersList.map((props) => {
              const { key, dataFilter, description } = props;
              return (
                <li
                  onClick={() => {
                    setActiveTab(key);
                  }}
                  key={key}
                  data-filter={dataFilter}
                  className={activeTab === key ? "filter-active" : ""}
                >
                  {description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
  const MenuContainer = () => {
    return (
      <div
        className="row menu-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {menuList
          .filter(
            (menuItem) =>
              menuItem.classContext === filtersHashMap.get(activeTab) ||
              activeTab === 1
          )
          .map((props) => {
            const { key, classContext, img, content, price, ingredients } =
              props;
            return (
              <div key={key} className={"col-lg-6 menu-item " + classContext}>
                <img src={img} className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">{content}</a>
                  <span>{price}</span>
                </div>
                <div className="menu-ingredients">{ingredients}</div>
              </div>
            );
          })}
      </div>
    );
  };
  return (
    <section id="menu" className="menu section-bg pt-5 pb-2">
      <Title divClass="section-title pb-4" headerText="Menu" />
      <TabFilters />
      <MenuContainer />
    </section>
  );
};

export default Menu;
