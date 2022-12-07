import React from "react";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions.js";
import Card from "../Card/Card.jsx";

export function Favorites(props) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "order":
        return dispatch(orderCards(value));
      case "filter":
        return dispatch(filterCards(value));
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <select name="order" onClick={handleClick}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" onClick={handleClick}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknow">Unknow</option>
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
