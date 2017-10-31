import * as React from "react";

/** Styles */
require('./main.sass');

export interface MainProps { }

export interface MainStates { }

export class Main extends React.Component<MainProps, MainStates> {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-component">
                <h1>Welcome to ReactJS</h1>
                <p>
                    If you see this, it means you have successfully built a ReactJS Web Application for the first time.
                </p>
                <p>
                    Congratulations!
                </p>
                <p /><p /><p />
                <p>
                    Sincerely yours,
                    <br /> The Author
                </p>
            </div>
        )
        ;
    }
}
