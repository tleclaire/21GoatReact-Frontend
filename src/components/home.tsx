import * as React from "react";
import { Component } from "react";
import gif from "../assets/spinning-goat.gif";
import letsgoat from "../assets/letsgoat.png";
import "../App.css";
import { Redirect } from "react-router";

interface IHomeState {
    toGame:boolean;
}

export class Home extends Component<{},IHomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            toGame:false,
        };
    }

        public render(): React.ReactElement {

        if (this.state.toGame === true) {
            return <Redirect to="/game" />;
        }
        return (
            <header className="App-header">
            <img src={gif} className="App-logo" alt="logo" />
            <img src={letsgoat} className="App-button" alt="letsgoat" onClick={()=>this.setState({toGame:true})}/>
          </header>
        );
    }
}