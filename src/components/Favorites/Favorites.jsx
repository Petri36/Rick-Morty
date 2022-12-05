import React from "react"
import { connect } from "react-redux";
import Card from "../Card/Card.jsx";

export function Favorites (props) {
  console.log(props.myFavorites)
  return (
    <div>
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
