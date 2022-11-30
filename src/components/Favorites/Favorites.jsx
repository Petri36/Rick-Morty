import { connect } from "react-redux"
import { Card } from "../Card/Card"

export function Favorites({ myFavorites }) {
  return (
    <div>
      {myFavorites?.map((character, index) => {
        <Card
          name={character.name}
          id={character.id}
          species={character.species}
          gender={character.gender}
          image={character.image}
          key={index}
        />;
      })}
    </div>
  );
}


export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)