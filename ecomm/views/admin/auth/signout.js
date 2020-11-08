const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
          <div>Logged out succesfully</div>
            <a href="/signin"><i class="fa fa-sign-in-alt"></i>Sign In</a>
            
            <a href="/"><i class="fa fa-home"></i>Home</a>
          </div>
        </div>
      </div>
    `
  });
};
