import React from "react";
import Styles from "./CompoName_Style.scss";

export default class CompoName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="CompoName-wrapper">
        <div className="Testing">This is the test</div>
      </div>
    );
  }
}
