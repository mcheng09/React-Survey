var React = require('react');

var RadioAnswer = require('RadioAnswer');
var MultiAnswer = require('MultiAnswer');

var Survey = React.createClass({
  render: function() {
    return (
      <div>
        <div className='row'>
          <h1 className='text-center'>Random Survey</h1><hr/>
          <table className='table'>
            <thead>
              <tr>
                <th>Questions</th>
                <th>Fill In</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>How much do you like pizza?</td>
                <td><RadioAnswer/></td>
              </tr>
              <tr>
                <td>Which is your favorite breed of dogs?</td>
                <td><MultiAnswer/></td>
              </tr>
              <tr>
                <td>Do you know how to snowboard?</td>
                <td></td>
              </tr>
              <tr>
                <td>How much money do you spend a day?</td>
                <td></td>
              </tr>
              <tr>
                <td>What is your dream car?</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})

module.exports = Survey;
