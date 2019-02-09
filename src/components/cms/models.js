import React from "react";
import { connect } from "react-redux";

import * as actions from "./actions.js";

const styles = {
  clickable: { cursor: "pointer" },
  delete: {
    color: "red",
    cursor: "pointer",
    marginLeft: ".5em"
  }
};

const API = process.env.REACT_APP_API;

/**
 * Models class
 * @class Models
 * @extends {React.Component}
 */
class Models extends React.Component {
  /**
   * componentDidMount
   * method to get the models from the url
   * @memberof Models
   */
  componentDidMount() {
    let url = `${API}/models`;
    this.props.getModels(url);
  }

  /**
   * selectModel
   * method to select a specific model
   * @param {*} model
   */
  selectModel = model => {
    let url = `${API}/${model}`;
    this.props.clearRecord();
    this.props.setModel(model);
    this.props.getRecords(url);
  };

  /**
   * render
   * renders data
   * @returns
   * @memberof Models
   */
  render() {
    return (
      <ul>
        {this.props.models &&
          this.props.models.map((model, i) => (
            <li
              key={`models-${i}`}
              onClick={() => {
                this.selectModel(model);
              }}
            >
              <span style={styles.clickable}>{model}</span>
            </li>
          ))}
      </ul>
    );
  }
}

/**
 * mapStateToProps
 * maps models state to props
 * @param {*} state
 */
const mapStateToProps = state => ({
  models: state.records.models
});

/**
 * mapDispatchToProps
 * Sets model, gets model, gets records, clears records
 * @param {*} dispatch
 * @param {*} getState
 */
const mapDispatchToProps = (dispatch, getState) => ({
  setModel: model => dispatch(actions.setModel(model)),
  getModels: url => dispatch(actions.getModels(url)),
  getRecords: url => dispatch(actions.getRecords(url)),
  clearRecord: () => dispatch(actions.clearRecord())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Models);
