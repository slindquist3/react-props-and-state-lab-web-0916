const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');
const allPets = require('../data/pets.js')

class App extends React.Component {
  constructor() {
    super();



    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  //render filter of pets
  //
  //
  //

  petFinder(event) {
    if (document.getElementById("type").value !== "all") {

      this.setState(Object.assign({}, this.state, {
        filters: Object.assign({}, this.state.filters, {
          type: document.getElementById("type").value})}))

      this.setState(Object.assign({}, this.state,{pets: allPets.getAll().filter(function(pet){
        return pet.type === document.getElementById("type").value})}))

        }
     else {

      this.setState(Object.assign({}, this.state, {
        filters: Object.assign({}, this.state.filters, {
          type: "all"})}))

      this.setState(Object.assign({}, this.state,{pets: allPets.getAll()}))

        }
      }

    petAdopted(pet) {
      if (this.state.adoptedPets.includes(pet)) {
        this.state.adoptedPets.delete(pet)
      } else {
        this.state.adoptedPets.push(pet)
      }
    }



  render() {
    debugger
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters data={this.props.data} petFinder ={this.petFinder.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser data={this.props.data} state={this.state} allPets ={allPets} petAdopted={this.petAdopted.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
