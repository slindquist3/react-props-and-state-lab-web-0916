const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    console.log(this.props.allPets.getAll())
    return (
      <div>
        <div className="ui cards">
          {this.props.state.pets.map(pet => this.props.state.adoptedPets.includes(pet) ? <Pet data={pet} adopted= {true} petAdopted={this.props.petAdopted}/> : <Pet data={pet} adopted= {false} petAdopted={this.props.petAdopted.bind(this)}/>)}
        </div>
      </div>
    );
  }
}

module.exports = PetBrowser;
{/* <Pet data={this.props.allPets.getAll()[0]}/> */}
