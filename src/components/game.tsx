import * as React from "react";
import { Component } from "react";
import "../App.css";
import { Redirect } from "react-router";

interface IGameState {
    playedIds :number [];
    content:string;
    toHome:boolean;
    statementsCount:number;
    counter:number;
}

export class Game extends Component<{}, IGameState> {

  constructor(props: any) {
    super(props);
    this.state = {
        playedIds:[],
        content:"",
        toHome:false,
        statementsCount:0,
        counter:93
    };
    this.loadNextRandomStatement = this.loadNextRandomStatement.bind(this);
  }

  private async loadNextRandomStatement() {
    const response:any = await fetch("https://21goatbackend20200329163244.azurewebsites.net/api/Statements/random");
    const data:any = await response.json();
    console.log(this.state.playedIds);
   
    if(this.state.counter >= this.state.statementsCount)
    {
        this.setState({playedIds:[],counter:0});
        console.log("all statements played.");
    }
    let ids:number[] = this.state.playedIds;
    if(!(ids.indexOf(data.id)>=0)) {
        ids.push(data.id);
        this.setState({ content: data.content,playedIds:ids, counter:this.state.counter+1} );
    } else {
        console.log("Statement already played");
        this.loadNextRandomStatement();
    }
  }

    private async getStatementsCount()
    {
        const response:any = await fetch("https://21goatbackend20200329163244.azurewebsites.net/api/Statements");
        const data:any = await response.json();
        this.setState({statementsCount:data.length});

    }

    public componentDidMount(): void {
        this.getStatementsCount();
    }

  public render(): React.ReactElement {
    if (this.state.toHome === true) {
        return <Redirect to="/" />;
    }
    return (
      <div className="App-header" onClick={this.loadNextRandomStatement}>
        <h1 onClick={()=>this.setState({toHome:true})}>21Goat</h1>
        <div style = {{width:700, textAlign:"center"}}>
        <p aria-live="polite">
          <strong>{this.state.content}</strong>
        </p>
        </div>
      </div>
    );
  }
}
