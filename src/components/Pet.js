import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petObj.gender === 'female' ? '♀' : '♂'}
            {this.props.petObj.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petObj.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petObj.age}</p>
            <p>Weight: {this.props.petObj.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.petObj.isAdopted === true ? (
             <button className="ui disabled button">Already adopted</button>
          ) : <button className="ui primary button"  onClick={()=>this.props.onAdopt(this.props.petObj.id)}>Adopt pet</button>
          
          
          
          ///by declaring an empty function it doesnt immediately evoke a function which 
          ///allows you to pass in an argument variable into a function
          }
          
        </div>
      </div>
    )
  }
}

export default Pet
