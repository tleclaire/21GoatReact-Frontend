import * as React from "react";
import { Component } from "react";

export class Layout extends Component {
    static displayName = Layout.name;

    public render(): React.ReactElement {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
