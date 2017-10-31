import * as React from "react";

export interface AboutProps { }

export interface AboutStates { }

export class About extends React.Component<AboutProps, AboutStates> {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-component">
                <h1>About Me</h1>
                <p>
                    I have no name and am as small as you are.
                </p>
            </div>
        )
        ;
    }
}