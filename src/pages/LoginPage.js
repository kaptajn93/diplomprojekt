import React from 'react'
import { connect } from 'react-redux';

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import { Link, browserHistory } from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';

const {Grid, Row, Col} = require('react-flexgrid');

import Key from 'material-ui/lib/svg-icons/action/lock-outline';
import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';

import { loginUser } from '../actions/authentication'
import Theme from '../components/Theme';
import Colors from 'material-ui/lib/styles/colors';
import Divider from 'material-ui/lib/divider';

var pageContainerStyle = {
  margin:'32px 20px'
};

var landingPageContainerStyle = {
  background: 'white',
  marginTop: '32px',
  marginLeft:'auto',
  marginRight:'auto'
};

var paddingStyle = {
  padding: '32px'
}

var primaryText = {
  color:Theme.palette.primary1Color
}

var sloganStyle = {
  color: '#888888',
  marginTop:'4px'
}

var title = {
  marginBottom:'4px',
  textAlign: 'center'
}

var noMargin = {
  margin:'0'
}

let LoginPage = React.createClass({

  getInitialState: function() {
    return {
        userId: '',
        password: ''
    };
  },

  componentDidMount: function(){
    if (sessionStorage.getItem('isLoggedIn') === "true"){
      //We are logged in
      if (sessionStorage.sessionUserRoles.split(",").indexOf("Admin") >= 0)
        window.location.assign("/#/administration");
      else if (sessionStorage.sessionUserRoles.split(",").indexOf("Coach") >= 0)
        window.location.assign("/#/coachDialogOverview");
      else
        window.location.assign("/#/dashboard");
    }
  },

  handleSubmit: function (event) {
    var that = this;
    this.props.dispatch(loginUser({userId:this.state.userId, password:this.state.password})).then(
      json => {
        //We are logged in
        if (json.user.hasRole("Admin"))
          window.location.assign("/#/administration");
        else if (json.user.hasRole("Coach"))
          window.location.assign("/#/coachDialogOverview");
        else
          window.location.assign("/#/dashboard");

        if (that.props.route.loginState.isLoggedIn !== undefined)
          that.props.route.loginState.isLoggedIn(true);
      }
    ).catch(err => {
      //TODO: Notify user
      }
    );
  },

  handleUserIdChange: function(event) {
    this.setState({
      userId: event.target.value,
    });
  },

  handlePasswordChange: function(event){
    this.setState({
      password: event.target.value,
    });
  },

  render: function() {
    return (
      <div style={pageContainerStyle}>
        <Row>
          <Col xs={0} sm={0} md={2} lg={2}/>

          <Col xs={12} sm={12} md={8} lg={8}>
          <Row>
            <Col xs={8} sm={8} md={8} lg={8}>

              <Paper style={landingPageContainerStyle}>
                <div >
                  <div style={paddingStyle}>
                    <h1 style={{ fontWeight: 400, marginBottom:4, marginTop:0}}>BETTER <strong>WAYS</strong></h1>
                    <h4 style={{ color: Theme.palette.primary1Color, marginTop:0, marginBottom:0}}>Vejen til dit nye job</h4>
                  </div>
                </div>
              </Paper>

              <Paper style={{marginTop:16}}>
                <div style={paddingStyle}>
                  <div dangerouslySetInnerHTML={{__html:'<div data-oembed-url="https://vimeo.com/168644549/89625991af"> <div> <div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 42.187%;"><iframe allowfullscreen="true" frameborder="0" mozallowfullscreen="true" src="//player.vimeo.com/video/168644549?byline=0&amp;badge=0&amp;portrait=0&amp;title=0" style="top: 0px; left: 0px; width: 100%; height: 100%; position: absolute;" webkitallowfullscreen="true"></iframe></div> </div> </div>' }}></div>


                  <p>Vi hjælper dig på vej til at finde det job der passer til netop din profil og dine kompetencer. Gennem coaching og sparring får du en klar forståelse af dig selv og dine kompetencer. Du bliver rustet til at finde det job som du brænder for.</p>
                  <p>BETTER WAYS - en ny begyndelse</p>

                  <RaisedButton secondary={true} style={{marginTop:24}} label="Læs mere" />
                </div>
              </Paper>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <div >
                <Paper style={{marginTop:32}}>
                  <div style={{
                    backgroundColor: Theme.palette.backgroundColor,
                    display:'flex', padding:'8 16'}}>
                    <Key style={{height: '29px', width: '29px'}} color={Colors.grey500} />
                    <h3 style={{
                      fontWeight: 'normal',
                      margin:0,
                      marginLeft: 8,
                      marginTop: 5
                    }}>Log ind</h3>

                  </div>
                  <div>
                    <div style={paddingStyle}>

                      <Row style={noMargin}>
                        <Col xs={12} sm={12} md={12} lg={12}>
                          <TextField
                            floatingLabelText="Brugernavn"
                            type="text"
                            style={{width:'100%'}}
                            value={this.state.userId}
                            onChange={this.handleUserIdChange}
                          />
                          <br/>
                          <TextField
                            floatingLabelText="Password"
                            type="password"
                            style={{width:'100%'}}
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                          />
                          <br/>
                          <RaisedButton onClick={this.handleSubmit} primary={true} style={{marginTop:32}} label="Log ind" />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Paper>

              </div>
            </Col>
          </Row>
          </Col>
          <Col xs={0} sm={0} md={2} lg={2}/>
        </Row>
      </div>);
  }
});

LoginPage = connect()(LoginPage);

export default LoginPage
