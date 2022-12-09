import React from "react";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions.js";
import Card from "../Card/Card.jsx";
import s from "./favorites.module.css";

export function Favorites(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <select
          className={s.dropdown}
          onChange={(e) => dispatch(orderCards(e.target.value))}
        >
          <option className={s.dropdown} value="Ascendente">
            Ascendente
          </option>
          <option className={s.dropdown} value="Descendente">
            Descendente
          </option>
        </select>
        <select
          className={s.dropdown}
          onChange={(e) => dispatch(filterCards(e.target.value))}
        >
          <option className={s.dropdown} value="All">
            All
          </option>
          <option className={s.dropdown} value="Male">
            Male
          </option>
          <option className={s.dropdown} value="Female">
            Female
          </option>
          <option className={s.dropdown} value="Genderless">
            Genderless
          </option>
          <option className={s.dropdown} value="Unknow">
            Unknow
          </option>
        </select>
      </div>
      {props.myFavorites.map((e) => (
        <Card
          name={e.name}
          id={e.id}
          species={e.species}
          gender={e.gender}
          image={e.image}
          key={e.id}
        />
      ))}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
