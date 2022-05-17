import React from 'react';


class Person extends React.Component{
    state = {
        Person:{
            fullname: "Dhafer Chrayti",
            bio: "I can develop both client and server software",
            profession: "Web Developer",    
            imgSrc: "image/mypic.jpg"
        },
        show: false
    };handleShowPerson = () => {
        this.setState({...this.state.Person, show: !this.state.show})
    }


    render(){
        return (
            <>
                {this.state.show && (
                <>
                    <h1>{this.state.Person.fullname}</h1>
                    <h3>{this.state.Person.profession}</h3>
                    <p>{this.state.Person.bio}</p>
                    <img src = {this.state.Person.imgSrc} alt = "myAvatar" height = "200px" width = "200px"/> 
                    <br></br>         
                </>

                )}

                <button onClick={this.handleShowPerson}>showProfile</button>
            </>
        );

    };
};


export default Person