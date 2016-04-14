/*global Blaze */

this.Header = React.createClass({
  // componentDidMount() {
  //   // insert Blaze login buttons, see this if you do this a lot
  //   // https://gist.github.com/emdagon/944472f39b58875045b6
  //   var div = document.getElementById('loginContainer');
  //   Blaze.renderWithData(Template.loginButtons, {align: 'right'}, div);
  // },

  render() {
    return (
      <div className="header" align="center">
        <div className="container">
          <div className="logo">
            <a href="/">
              Home
            </a>
          </div>
          <div className="nav" align="center">
            
            <a href="/choiScene">ChoiScene</a>
            
          </div>
        </div>
        // <div class="login-buttons" class="login-buttons-dropdown-align-">
        //   <div class="login-link-and-dropdown-list login-form-sign-in">
        //     <a class="login-link-text" id="login-sign-in-link"><img src="/default-avatar.png" alt="" width="80" height="80"/></a>
        //   </div>
        // </div>
      </div>
    );
  }
});
