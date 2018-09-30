import React from 'react'
class Clock extends React.Component {
   state = {
       time: 'no time set'
   }
   componentDidMount = () => {
      this.interval = window.setInterval(this.setTime,1000);
   }
   setTime =  () => {
       this.setState({time:new Date().toString()})
   }
   render() {
       return(
           <div>{this.state.time}</div>
       )
   }
   componentWillUnmount() {
       window.clearInterval(this.interval)
   }
}
export default Clock