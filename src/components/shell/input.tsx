// ----------------------------------------------------------------------------
// IMPORTS

/* Yarn */
import * as React from "react";

/* Local */

// ----------------------------------------------------------------------------

export interface IShellInputProps {
  keyDownEvent: (event: any) => void,
  keyPressedEvent: (event: any) => void
}

export default class ShellInput extends React.Component<IShellInputProps> {
  public componentDidMount = () => {
    document.body.addEventListener("click", this.focusInput);

    this.focusInput();
  }

  public focusInput = () => {
    const input = document.getElementById("shell-input");

    if (input) {
      input.focus();
    }
  }

  public render() {
    return (
      <input id="shell-input" className="shell-input" type="text" autoComplete="off" placeholder="_" tabIndex={0} onKeyDown={this.props.keyDownEvent} onKeyUp={this.props.keyPressedEvent} onKeyPress={this.props.keyPressedEvent} />
    );
  }
}
