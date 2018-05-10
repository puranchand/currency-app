import React from 'react';
import { getCurrency ,selectCurrency, convertRates} from '../actions/actions';
import {connect} from 'react-redux';
import SymbolList from './symbolList';


class SimpleBox extends React.Component{

		constructor(props){
		super(props)
		this.state = {
			amount:1,
			base:'',
			target:'',
			base_amount: 1,
      		target_amount: 1,

		}
	}

    updateCurrency(e){
		this.setState({amount:e.target.value })
	}
		

   
	componentWillMount() {
		this.props.dispatch(selectCurrency());
	}
	
   
  
  	onSelect = (e) => {
  		this.setState({base : e.target.value})
  		
  		
  	}


  	onSetValue = (e) => {	
  		this.setState({target: e.target.value})
  	}

  	componentDidUpdate(prevProps, prevState) {
  		if(prevState.base != this.state.base || prevState.target != this.state.target){
  			this.props.dispatch(convertRates(this.state.base, this.state.target))
  		}
  	}

  	componentWillReceiveProps(nextProps) {
  		if(nextProps.Conecter.select_c.length !== this.props.Conecter.select_c.length) {
  			this.setState({
  				base: nextProps.Conecter.select_c[0].name,
  				target: nextProps.Conecter.select_c[1].name,
  			})
  		}
  	}

	render() {
		const {currency} = this.props.Conecter
		const {select_c} = this.props.Conecter

		let i = 0;
		
			return(
				<div className='container'>
						
					<h4>Current Value of <br />{this.state.base} to {this.state.target}</h4>

					<div>

						<div className="row">
							<div className="one-half column" >
							To
							<SymbolList value={this.state.base} onChange={this.onSelect} name='base'/>
							</div>
							<div className="one-half column" >
							From
							<SymbolList value_t={this.state.target} onChange_t={this.onSetValue} name_t='target'/>
							</div>
						</div>

						<div className="row">
							Amount
			    			<input type = "number" min={1} value = {this.state.amount} onChange = {(e) => this.updateCurrency(e)}/>
						</div>

						<div>
						   <h5 className="target-amount u-text-center">
							{this.state.amount}&nbsp;{this.state.base} &nbsp; &emsp;= &emsp;
							{this.state.amount * this.props.Conecter.fetching_value}
							{this.state.target}
							</h5>
						</div>
							<p>
								<h6>
									Made by <a href='#'>Puran Chand </a> and <a href='https://github.com/puranchand/currency-app'>code is here</a>
								</h6>
							</p>
            			</div>
				</div>		
		)
	}
}
 

function mapStateToProps(state) {
    return {
        Conecter: state.activeBtn
    };
}

export default connect(mapStateToProps)(SimpleBox);