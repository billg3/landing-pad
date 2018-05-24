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

    redirect = (h) => {
        window.location.href(`${h}`)
    }

    render() {

        const round = { borderRadius:'50%',
                        width:'100px',
                        height:'100px',
                        background:'linear-gradient(to right, #3D3D9D, #5C4483',
                        marginBottom:'100px',
                        fontSize:'20px',
                        fontWeight:'bold',
                        color:'white',
                        border:'none',
                        marginRight:'15px',
                        boxShadow:'0px 0px 10px #5C4483'
                        }

        return(
            <div className="container" id="full-body">
                <Background backgroundImage="https://trainwithpg.com/wp-content/uploads/2016/11/london-map-fade.jpg">
                    <Header/>
                    <Title/>
                    <br/>
                    <UncontrolledAlert className="welcome-alert">
                        Welcome to Landing Pad!<br/>Click an option below to get started.<br/>Happy parking!
                    </UncontrolledAlert>
                     <div className="fixed-bottom park-btn-div">
                        <button outline color="primary" onClick={() => window.location.href='/findrental'} style={round} href="/findrental">PARK</button>
                        <button outline color="primary" style={round} href="/newspot">RENT</button>
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