import React from 'react';
import { selectCurrency} from '../actions/actions';
import {connect} from 'react-redux';

class SymbolList extends React.Component{


		render() {
			
			const {select_c} = this.props.Conecter
			const {value,onChange,name}= this.props
			const {value_t,onSet,name_t} =this.props
			
			return(
				<div>
					<select name='name' value={this.props.value||this.props.value_t}  onChange={this.props.onChange||this.props.onChange_t} name={this.props.name||this.props.name_t}>
							
							{ select_c && select_c.length && select_c.map((data,index) =>							
								<option value={data.name}key={index}>{data.name}</option>
							)}
				 	</select>

				</div>
				)
			
		}
}

function mapStateToProps(state) {
    return {
        Conecter: state.activeBtn
    };
}

export default connect(mapStateToProps)(SymbolList);


