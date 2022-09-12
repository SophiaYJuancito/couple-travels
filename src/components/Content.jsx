import React from 'react';

class Content extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            variables: "holi"
        }
    }


    render(){
        return(
            <div>
                HOLA MUNDO
            </div>
        );
    }

}

export default Content;