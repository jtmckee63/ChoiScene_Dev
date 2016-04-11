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
            <a href="/feed">Feed Page</a>
            &nbsp;
            <a href="/choiScene">ChoiScene</a>
            <div id="loginContainer" />
          </div>
        </div>
        <br />
      </div>
    );
  }
});
