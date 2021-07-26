import './FormAddCard.scss';

function FormAddCard({isOpen, onClose}) {
  return (
    <div className={`add-card ${isOpen && "add-card__open"}`}>
    <div className="add-card__container">
    <button className="add-card__close" onClick={onClose}></button>
    <h2 className="add-card__title">Новый пост</h2>
      <form className="add-card__form">
        <input className="add-card__input" name="title" placeholder="Введите заголовок" required/>
        <input className="add-card__input" placeholder="Введите текст" name="body" required/>
        <button className="add-card__save" type="submit">Сохранить</button>
      </form>
    </div>
    </div>
  );
}

export default FormAddCard;