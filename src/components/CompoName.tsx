
import React from "react";
//import Styles from "./CompoName_Style.scss";
interface MyProps {
    firstProp: Number,
    width?: Number
}


export default class CompoName extends React.Component<MyProps> {
  constructor(props:MyProps) {
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
