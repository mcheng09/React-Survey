var React = require('react');
var {Link, IndexLink} = require('react-router')

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <nav className = "navbar navbar-default" role = "navigation">
          <div className = "navbar-header">
            <button type = "button" className = "navbar-toggle"
              data-toggle = "collapse" data-target = "#example-navbar-collapse">
              <span className = "sr-only">Toggle navigation</span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
            </button>
            <a className = "navbar-brand" href = "#">React Survey</a>
          </div>
          <div className = "collapse navbar-collapse" id = "example-navbar-collapse">
            <ul className = "nav navbar-nav navbar-right">
              <li><IndexLink to="/">Take Survey</IndexLink></li>
              <li><Link to="results" activeClassName="active-link">See Results</Link></li>
            </ul>
          </div>

        </nav>
      </div>

    )
  }
})

module.exports = Nav;
