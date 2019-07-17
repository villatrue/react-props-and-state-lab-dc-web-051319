import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  genPets= (pets) => {
    return pets.map(pet =>{
      // console.log(pet)
      return<Pet petObj={pet} onAdopt={this.props.onAdopt}/>
    })
  }

  render() {
    return <div className="ui cards">{this.genPets(this.props.pets)}</div>
  }
}

export default PetBrowser
