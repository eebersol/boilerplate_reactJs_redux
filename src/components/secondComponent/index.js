import React, { Component } from 'react';
import '../reset.css';
import '../App.css'

import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { exemple_update_view } from '../../actions/exempleActions'


const mapDispatchToProps =  dispatch => ({
  action: bindActionCreators( { exemple_update_view }, dispatch)
});

const mapStateToProps = state => ({
  view: state.context.view
});

class SecondComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: false
		};

		this.update_view = this.update_view.bind(this);
	}
  componentWillMount() {
	}
	update_view = (newView) => {
		this.props.action.exemple_update_view(newView);
	}
	render() {
		const currentView = this.props.state.view;
		return (
            <div> Your first component :  { currentView }
				<Button onClick={ this.update_view("FirstComponent") }> SWITCH VIEW </Button>
                <Button onClick={ this.update_view("Home") }>  BACK TO HOME </Button>
		    </div>
		)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondComponent);