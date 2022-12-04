import React, { useState, useEffect } from "react";
import s from "./card.module.css";
import { NavLink } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { connect } from "react-redux";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorites(props.id);
    } else {
      setIsFav(true);
      props.addFavorites(props.id);
    }
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);

  return (
    <div className={s.Carta}>
      <NavLink to={`/detail/${props.id}`}>
        <button className={s.cardBoton}>
          <span className={s.cardSpan}>{props.name}</span>
        </button>
      </NavLink>

      <img className={s.Img} src={props.image} alt={props.name} />
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>

      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button className={s.btn} onClick={() => props.onClose(props.id)}>
        <span className={s.Span}>CERRAR</span>
      </button>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorites: function (id) {
      dispatch(addFavorites(id));
    },
    deleteFavorites: function (id) {
      dispatch(deleteFavorites(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
