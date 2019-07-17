import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      
      filters: {
        type: 'all'
      }
    }
  }

  onAdoptPet = (petId) =>{
    console.log(petId)
    let petArray = [...this.state.pets]
    ///made a copy of array
    let adoptedPet = petArray.find((pet)=>{
      /// find the per with the id value of the petId passed in
      return pet.id === petId
      //return the pet or you will still get undefined
    })
    adoptedPet.isAdopted = true
    ///manipulating the dom

    this.setState({
      pets: petArray
    })
    
    
  }

  // onAdoptPet = (petId) => {
  //   let foundPet = this.state.pets.map(pet => {
  //     return pet.id === petId ? {...pet, isAdopted: true} : pet
  //   })
  //   this.setState({
  //     pets: foundPet
  //   }, () => {console.log(this.state.pets)})
  // }

  onFindPetsClick = () =>{
    
    if(this.state.filters.type ==='all')
    fetch('/api/pets')
        .then(response => response.json())
        .then(obj => { 
            this.setState({pets: obj})
        });
    else{
      fetch(`/api/pets?type=${this.state.filters.type}`)
          .then(response => response.json())
          .then(obj => {
              this.setState({pets: obj})
          });
    }
  }

  onChangeType = (e)=>{
    let filter = e.target.value
   
    this.setState({
      filters: {...this.state.filters, type: filter}
      //... is a spread operator it is creating a new object so its saying let filters be the old object
      //but over ride the type with filter, the value of the key is being changed
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdopt={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
