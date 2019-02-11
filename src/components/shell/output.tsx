// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import * as React from "react";

/* Local */

// ----------------------------------------------------------------------------
export interface IShellOutputProps {
  content: string | null,
}

export default class ShellOutput extends React.Component<IShellOutputProps> {
  public render() {
    return (
      <div id="shell-output"><span className="writer">{this.props.content}</span><i className="cursor">_</i></div>
    );
  }
}
