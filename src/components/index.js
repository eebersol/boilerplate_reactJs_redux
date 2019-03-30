import React, { Component } from 'react';
import '../App.css'


import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/secondComponent'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { exemple_update_view } from '../actions/exempleActions'


const mapDispatchToProps =  dispatch => ({
  action: bindActionCreators( { exemple_update_view }, dispatch)
});

const mapStateToProps = state => ({
  view: state.context.view
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: false
		};
	}

  componentWillMount() {
  }
	render() {
    const currentView = this.props.state.view;
    return (
       <Router>
         <h1> WELCOME TO YOUR REACTJS APP</h1>
        { currentView == "FisrtComponent"   ?   <FirstComponent />  : null }
        { currentView == "SecondeComponent" ?   <SecondComponent /> : null }
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);