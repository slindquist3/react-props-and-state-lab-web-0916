const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();

  }


  // getAll: () => allPets,
  // getByType: (type) => allPets.filter(p => p.type === type),
  // getBetweenAge: (from, to) => allPets.filter(p => p.age >= from && p.age <= to),



  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.petFinder}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
