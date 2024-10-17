import { Component } from 'react'
import "../Style.css"

export default class Digitalclock extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : new Date().toLocaleTimeString()
        };
    }
    componentDidMount(){   
        this.timeId = setInterval(()=>{
            this.setState({time: new Date().toLocaleTimeString()})
        },1000);
    }
    render(){
        return(
            <div className='clock-container' >
                <div className='clock'>
                    {this.state.time}
                </div>
            </div>
        )
    }
}