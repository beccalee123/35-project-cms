import React from "react";
import { connect } from "react-redux";

import { When } from "../if";

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
 * Records class
 * @class Records
 * @extends {React.Component}
 */
class Records extends React.Component {
  /**
   * getRecord
   * gets a record
   * @memberof Records
   */
  getRecord = id => {
    let url = `${API}/${this.props.model}/${id}`;
    this.props.getRecord(url);
  };

  /**
   * deleteRecord
   * deletes a record
   * @memberof Records
   */
  deleteRecord = id => {
    let url = `${API}/${this.props.model}/${id}`;
    this.props.deleteRecord(this.props.model, id, url);
  };

  /**
   * render
   * renders specific records when the condition has been met
   * @returns
   * @memberof Records
   */
  render() {
    return (
      <When condition={this.props.model}>
        <ul className="records">
          {this.props.records.map((record, i) => (
            <li key={record._id}>
              <span className="record"
                style={styles.clickable}
                onClick={() => this.getRecord(record._id)}
              >
                {record.name}
              </span>
              <span className="x"
                style={styles.delete}
                onClick={() => this.deleteRecord(record._id)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <button onClick={this.props.clearRecord}>+</button>
      </When>
    );
  }
}

/**
 * mapStateToProps
 * maps records and model states to props
 * @param {*} state
 */
const mapStateToProps = state => ({
  records: state.records.records,
  model: state.records.model
});

/**
 * mapDispatchToProps
 * includes getRecord, deleteRecord, and clearRecord
 * @param {*} dispatch
 * @param {*} getState
 */
const mapDispatchToProps = (dispatch, getState) => ({
  getRecord: url => dispatch(actions.getRecord(url)),
  deleteRecord: (model, id, url) => dispatch(actions.destroy(model, id, url)),
  clearRecord: () => dispatch(actions.clearRecord())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Records);
