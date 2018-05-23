import React from 'react';
import Header from './../../components/header/Header';
import Background from './../../components/background/Background';
import Footer from './../../components/footer/Footer';
import Title from './../../components/title/Title';
import { Button, UncontrolledAlert } from 'reactstrap';
import jwt_decode from 'jwt-decode'

import './Homepage.css';

class Homepage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        user: null,
        userid: null
      };
    }

    componentDidMount() {
      if(localStorage.getItem('jwtToken')) {
        const token = localStorage.getItem('jwtToken')
        // const decoded = jwt_decode(token)
        // console.log(decoded)
        this.setState({ loggedIn: true, user: token.username, userid: token._id });
      }
      else {
        this.setState({ loggedIn: false, user: null });
        window.location.replace('/');
      }
    }

    render() {

        const round = {borderRadius:'50%',width:'100px',height:'100px',backgroundColor:'#3D3D9D',marginBottom:'100px',fontSize:'20px',fontWeight:'bold'}

        return(
            <div className="container" id="full-body">
                <Background backgroundImage="">
                    <Header/>
                    <Title/>
                    <br/>
                    <UncontrolledAlert className="welcome-alert">
                        Welcome to Landing Pad!<br/>Click an option below to get started.<br/>Happy parking!
                    </UncontrolledAlert>
                     <div className="fixed-bottom park-btn-div">
                        <button outline color="primary" className="park-btn" style={round} href="/findrental">PARK</button>
                        <button outline color="primary" className="park-btn" style={round} href="/newspot">RENT</button>
                    </div>
                    <Footer/>
                </Background>
            </div>
        )
    }
}

export default Homepage;

const prev = `
<div className="container" id="full-body">
    <Background backgroundImage="">
        <Header/>
        <Title/>
        <br/>
        <UncontrolledAlert className="welcome-alert">
            Welcome to Landing Pad!<br/>Click an option below to get started.<br/>Happy parking!
        </UncontrolledAlert>
         <div className="fixed-bottom park-btn-div">
            <button outline color="primary" className="park-btn" style={round} href="/findrental">PARK</button>
            <button outline color="primary" className="park-btn" style={round} href="/newspot">RENT</button>
        </div>
        <Footer/>
    </Background>
</div>`