import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn && (
    <button className='elements__delete' onClick={handleDeleteClick} />
  );
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `elements__like ${
    isLiked && 'elements__like_active'
  }`;

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className='elements__item' key={props._id}>
      {cardDeleteButtonClassName}
      <img
        src={props.link}
        alt={props.name}
        className='elements__image'
        onClick={handleCardClick}
      />
      <div className='elements__content'>
        <h2 className='elements__title'>{props.name}</h2>
        <div className='elements__like-container'>
          <button
            type='button'
            aria-label='Нравится'
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}></button>
          <p className='elements__like-counter'>{props.likeCounter}</p>
        </div>
      </div>
      <span className='elements__hover'></span>
    </li>
  );
}

export default Card;
