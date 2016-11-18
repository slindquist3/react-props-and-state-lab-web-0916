const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    console.log(this.props.allPets.getAll())
    return (
      <div>
        <div className="ui cards">
          {this.props.state.pets.map(pet => <Pet data={pet} />)}
        </div>
      </div>
    );
  }
}

module.exports = PetBrowser;
{/* <Pet data={this.props.allPets.getAll()[0]}/> */}
