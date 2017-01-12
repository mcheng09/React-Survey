var React = require('react');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">React Survey</a>
            <div className="collaspe navbar-collaspe" id="bs-example-nav-collaspe-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/">Take Survey</a></li>
                <li><a href="/">See Results</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
})

module.exports = Nav;
