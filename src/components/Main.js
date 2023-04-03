import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__content'>
          <div className='profile__avatar'>
            <button
              id='edit-avatar-button'
              type='button'
              aria-label='Редактировать'
              className='profile__edit profile__edit_type_avatar'
              onClick={props.onEditAvatar}></button>
            <img
              src={currentUser.avatar}
              alt='Аватар'
              className='profile__image'
            />
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button
              id='edit-profile-button'
              type='button'
              aria-label='Редактировать'
              className='profile__edit'
              onClick={props.onEditProfile}></button>
            <p className='profile__workplace'>{currentUser.about}</p>
          </div>
        </div>
        <button
          type='button'
          aria-label='Добавить'
          className='profile__add'
          onClick={props.onAddPlace}></button>
      </section>

      <section className='elements'>
        <ul className='elements__list'>
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              name={card.name}
              link={card.link}
              likeCounter={card.likes.length}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
