import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index'
import DatePicker from "react-bootstrap-date-picker";
import Spinner from '../Components';

class SearchWidget extends Component {
constructor(props) {
        super(props);
        var value = new Date().toISOString();
        this.state = { value: value,isLoading:false };
    }

    componentDidUpdate(){
    // Access ISO String and formatted values from the DOM. 
    var hiddenInputElement = document.getElementById("example-datepicker");
    console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z" 
    console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016" 
  }

      start_handleChange(value, formattedValue) {
      this.setState({
        start_value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z" 
        s_formattedValue: formattedValue // Formatted String, ex: "11/19/2016" 
      });
    }

     return_handleChange(value, formattedValue) {
      this.setState({
        return_value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z" 
        r_formattedValue: formattedValue // Formatted String, ex: "11/19/2016" 
      });
    }


     handleClick(){
      debugger;
      this.setState({isLoading:true});
     
      const data = {
        Origin_Code : this.refs.Origin_Code.value,
        Dest_Code : this.refs.Dest_Code.value,
        start_Date: (this.state.s_formattedValue).split("/").join("-"),
        NoOfAdults:this.refs.NoOfAdults.value,
        Return_Origin_Code:this.refs.Return_Origin_Code.value,
        Return_Dest_Code:this.refs.Return_Dest_Code.value,
        return_Date:(this.state.r_formattedValue).split("/").join("-")
      }
      this.props.fetchData(data,this);
      }

    render() {
      const {data} = this.props;
      const style = {
      height: 50,
      width: 50,
      backgroundColor: 'black'
    };
    return(
      <form>
           <div className="row form-group">
             <div className="col-md-6">
                  <center><h3>Start Journey</h3></center>
                  <input className="form-control" type="text" ref="Origin_Code" placeholder="Origin" required/>
                  <input className="form-control" type="text" ref="Dest_Code" placeholder="Destination" required/>
                   <DatePicker id="example-datepicker" required dateFormat ="YYYY/MM/DD" value={this.state.start_value} onChange={this.start_handleChange.bind(this)} ref="start_Date"/>
                <input className="form-control" type="text" ref="NoOfAdults" placeholder="Number of adults" required/>
              </div>
              <div className="col-md-6">
              <center><h3>Return Journey</h3></center>
                  <input className="form-control" type="text" ref="Return_Origin_Code" placeholder="Origin" required/>
                  <input className="form-control" type="text" ref="Return_Dest_Code" placeholder="Destination" required/>
                  <DatePicker id="example-datepicker" required dateFormat ="YYYY/MM/DD" value={this.state.return_value} onChange={this.return_handleChange.bind(this)} ref="return_Date"/>
                  <input type="submit" className="btn btn-primary"  onClick={this.handleClick.bind(this)} value="Search"/>
                   {this.state.isLoading &&
                       <div style={style}>
                          <Spinner />
                      </div>
                   }
              </div>
            </div>
            </form>
       )
    }
}

//export default SearchWidget;


function mapStateToProps(state) {
  //SearchWidget
  debugger;
    return {
        data: state
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchData: fetchData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchWidget);
