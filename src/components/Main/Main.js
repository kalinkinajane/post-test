import { useState } from "react";
import "./Main.scss";
import FormAddCard from "./path/FormAddCard/FormAddCard";

function Main() {
  const [isOpenAddCard, setIsOpenAddCard] = useState(false);
  const handleClickAdd = () => {
    setIsOpenAddCard(true);
  };
  const handleClosePopup = () => {
    setIsOpenAddCard(false);
  };
  return (
    <div className="main">
      <div className="main__container">
        <h1 className="main__title">Список постов</h1>
        <button className="main__button" onClick={handleClickAdd}>Добавить</button>
      </div>
      <div className="main__list"></div>
      <FormAddCard isOpen = {isOpenAddCard} onClose={handleClosePopup}/>
    </div>
  );
}

export default Main;
