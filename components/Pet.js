const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  //it should show the pet's name, type, age and weight

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.data.name} {this.props.data.gender}(gender: ♂ or ♀)</a>
          <div className="meta">
            <span className="date">Pet type {this.props.data.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.data.age}</p>
            <p>Weight: {this.props.data.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
          <button className="ui disabled button">Already adopted</button>
        </div>
      </div>
    );
  }
}

module.exports = Pet;
