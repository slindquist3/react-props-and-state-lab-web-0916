const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  petGender() {
    if (this.props.data.gender === "female") {
      return "♀"
    } else {
      return "♂"
    }
  }

  handleOnClick() {

    this.props.petAdopted(this)
  }
  //it should show the pet's name, type, age and weight

  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.data.name} {this.petGender()}</a>
          <div className="meta">
            <span className="date">Pet type {this.props.data.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.data.age}</p>
            <p>Weight: {this.props.data.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.data.adopted ?
            <button className="ui disabled button" onClick= {this.handleOnClick.bind(this)}>Already adopted</button> :
            <button className="ui primary button" onClick= {this.handleOnClick.bind(this)}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
