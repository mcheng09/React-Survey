var React = require('react');

var RadioAnswer = React.createClass({
  render: function () {
    return (
      <div>
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default">1</button>
          <button type="button" className="btn btn-default">2</button>
          <button type="button" className="btn btn-default">3</button>
          <button type="button" className="btn btn-default">4</button>
          <button type="button" className="btn btn-default">5</button>
          <button type="button" className="btn btn-default">6</button>
          <button type="button" className="btn btn-default">7</button>
          <button type="button" className="btn btn-default">8</button>
          <button type="button" className="btn btn-default">9</button>
        </div>
      </div>
    )
  }
});

module.exports = RadioAnswer;
