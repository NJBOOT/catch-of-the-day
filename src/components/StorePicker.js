import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor () {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  // goToStore (e) {
  //   e.preventDefault();
  //   console.log(this);
  // };

  static propTypes = {
    history: PropTypes.object,
  };
  
  myInput = React.createRef();

  goToStore = (e) => {
    e.preventDefault();
    const storeId = this.myInput.current.value;
    this.props.history.push(`/store/${storeId}`);
  };

  render() {
    return (
      <form className="store-selector" onClick={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
