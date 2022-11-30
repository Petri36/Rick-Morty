import { connect } from "react-redux"
import { Card } from "../Card/Card"

export function Favorites({ myFavorites }) {
  return (
    <div>
      {myFavorites?.map((e, index) => (
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


export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)