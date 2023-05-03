import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { EditAvatarPopup } from './EditAvatarPopup';
import { EditProfilePopup } from './EditProfilePopup';
import { AddPlacePopup } from './AddPlacePopup';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { Login } from './Login';
import { Register } from './Register';
import { ProtectedRoute } from './ProtectedRoute';
import { InfoTooltip } from './InfoTooltip';
import * as api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export const App = () => {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [email, setEmail] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      api
        .getUserInfo()
        .then((response) => {
          setCurrentUser(response);
        })
        .catch((error) => {
          console.log(error);
        });

      api
        .getCards()
        .then((response) => {
          setCards(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }, []);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleUpdateAvatar = (data) => {
    api
      .setAvatar(data)
      .then((response) => {
        setCurrentUser(response);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => popupWithFormEditProfile.renderLoading(false));
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((response) => {
        setCurrentUser(response);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => popupWithFormEditProfile.renderLoading(false));
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleAddPlaceSubmit = (data) => {
    api
      .addCard(data)
      .then((response) => {
        setCards([response, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => popupWithFormEditProfile.renderLoading(false));
  };

  const handleCardClick = (card) => {
    setImagePopupOpen(true);
    setSelectedCard(card);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((newArray) =>
          newArray.filter((item) => card._id !== item._id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setInfoTooltipPopupOpen(false);
  };

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      api
        .checkToken(localStorage.getItem('jwt'))
        .then((response) => {
          if (response) {
            setLoggedIn(true);
            setEmail(response.data.email);
            navigate('/', { replace: true });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    handleTokenCheck();

    // eslint-disable-next-line
  }, []);

  const handleLogin = (props) => {
    api
      .login(props.email, props.password)
      .then((response) => {
        if (response.token) {
          localStorage.setItem('jwt', response.token);
          setLoggedIn(true);
          setEmail(props.email);
          props.setValues({ email: '', password: '' });
          navigate('/', { replace: true });
          return response;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setEmail('');
    navigate('/sign-in', { replace: true });
  };

  const handleRegister = (props) => {
    api
      .register(props.email, props.password)
      .then(() => {
        setRegister(true);
        setInfoTooltipPopupOpen(true);
        navigate('/sign-in', { replace: true });
      })
      .catch((error) => {
        setRegister(false);
        setInfoTooltipPopupOpen(true);
        console.log(error);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isLoggedIn={isLoggedIn} email={email} onSignOut={handleSignOut} />
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute
              Component={Main}
              isLoggedIn={isLoggedIn}
              cards={cards}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          }
        />
        <Route path='/sign-in' element={<Login onLogin={handleLogin} />} />
        <Route
          path='/sign-up'
          element={<Register onRegister={handleRegister} />}
        />
      </Routes>
      <Footer />
      <PopupWithForm title={'Вы уверены?'} name={'confirm'} submitText={'Да'} />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
      <InfoTooltip
        isRegister={isRegister}
        isOpen={isInfoTooltipPopupOpen}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
};
