var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2 contentContainer">
          {props.children}
        </div>
      </div>
    </div>
  )
};

module.exports = Main;
