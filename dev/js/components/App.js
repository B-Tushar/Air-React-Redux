import React from 'react';
import SearchWidget from '../containers/SearchWidget';
import SearchResult from '../containers/SearchResult';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Button,Grid,Row,Col,Panel } from 'react-bootstrap';
import {connect} from 'react-redux';

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <center><h1>Airline Booking</h1></center><hr/>
                <Panel header={ <h2><b>Search Widget</b></h2> } bsStyle="info" style={{width:"50%"}}>
                    <SearchWidget />
                </Panel>
                 <hr />

                  < Panel header={<h2><b>Search Result</b></h2>}  bsStyle="info"> 
                    <SearchResult />
                </Panel>
                </div>
            )
    }
}
    


function mapStateToProps(state) {
    //App

    return {
        data: state
    };
}

export default connect(mapStateToProps,null)(App);
