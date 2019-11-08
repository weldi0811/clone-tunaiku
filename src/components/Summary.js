import React, { Component } from 'react';

class Summary extends Component {
    state = {
        finaldata : []
    }
    
    constructor(props) {
        super(props);
        
    }

    async componentDidMount(){
        var data = await JSON.parse(localStorage.getItem('finaldata'))
        console.log(this.state.finaldata)
        console.log(data)
        
        var finaldata = []
        finaldata.push(data)
        this.setState({finaldata})
        console.log(this.state.finaldata)
    }

    render() { 
        return ( 
            <div>
                {console.log(this.state.finaldata)}
            </div>
         );
    }
}
 
export default Summary;