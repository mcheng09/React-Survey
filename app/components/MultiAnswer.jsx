var React = require('react');

var MultiAnswer = React.createClass({
  render: function() {
    return (
      <div>
        <div className='container'>
          <form>
            <fieldset className='form-group row'>
              <div className='col-sm-10'>
                <div className='form-check'>
                  <label className='form-check-label'>
                    <input className='form-check-input' type='radio' name='gridRadios' id='gridRatios1' value='option1'><img src='https://s29.postimg.org/tixf4e6x3/corgie4.jpg'/></input>
                  </label>
                </div>
                <div className='form-check'>
                  <label className='form-check-label'>
                    <input className='form-check-input' type='radio' name='gridRadios' id='gridRatios2' value='option2'><img src='https://s24.postimg.org/g3ovjv1md/IMG_1278.jpg'/></input>
                  </label>
                </div>
                <div className='form-check'>
                  <label className='form-check-label'>
                    <input className='form-check-input' type='radio' name='gridRadios' id='gridRatios3' value='option3'><img src='https://s30.postimg.org/grmsgmjwx/doge.jpg'/></input>
                  </label>
                </div>
                <div className='form-check'>
                  <label className='form-check-label'>
                    <input className='form-check-input' type='radio' name='gridRadios' id='gridRatios4' value='option4'><img src='https://s29.postimg.org/p47izzv87/kleekai.jpg'/></input>
                  </label>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = MultiAnswer;
