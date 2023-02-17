import React from "react";

class MyComponent extends React.Component{
    state = {
        name: 'Tony',
        address: 'HCM',
        age: '30',
    }
    render(){
        return(
            <div>
                My Name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;