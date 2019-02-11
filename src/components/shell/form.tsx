// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

/* Local */

import ShellLabel from "./label";
import ShellInput from "./input";
import ShellOutput from "./output";

// ----------------------------------------------------------------------------

interface IShellFormState {
  content: string | null;
}

@observer
export default class ShellForm extends React.Component<{}, IShellFormState> {
  @observable content = null;

  public handleSubmit = (event: any) => {
    event.preventDefault();
    
    const url = `https://stackoverflow.com/search?q=${this.content}`;

    window.location.href = url;
  }

  public keyDownEvent = (event: any) => {
    this.content = event.target.value;
  }

  public keyPressedEvent = (event: any) => {
    this.content = event.target.value;
  }

  public render() {
    return (
      <div id="programmer-shell">
        <form id="shell-form" className="form" onSubmit={this.handleSubmit}>
          <h1>
            <ShellLabel />.<ShellInput keyDownEvent={this.keyDownEvent} keyPressedEvent={this.keyPressedEvent} /><ShellOutput content={this.content} />
          </h1>
        </form>      
      </div>
    );
  }
}
