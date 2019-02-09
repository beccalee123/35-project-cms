import React from "react";
import { connect } from "react-redux";
import Form from "react-jsonschema-form";
import { When } from "../if";

import * as actions from "./actions.js";

const API = process.env.REACT_APP_API;

// Auto-Hide some of the mongo specific fields
const uiSchema = {
  _id: { "ui:widget": "hidden" },
  __v: { "ui:widget": "hidden" }
};

/**
 * Records class
 * @class Record
 * @extends {React.Component}
 */
class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schemas: {} };
  }

  /**
   * getDerivedStateFromProps
   * method that runs whenever props change (pre-render)
   * @static
   * @param {*} props
   * @param {*} state
   * @returns
   * @memberof Record
   */
  static getDerivedStateFromProps(props, state) {
    if (props.model && !props.schemas[props.model]) {
      let url = `${API}/${props.model}/schema`;
      props.getSchema(props.model, url);
    }
    return {};
  }

  /**
   * handleError
   * error handler method
   * @memberof Record
   */
  handleError = error => {
    console.error(error);
  };

  /**
   * handleSubmit
   * Method that handles puts and posts to update records
   * @memberof Record
   */
  handleSubmit = form => {
    if (form.formData._id) {
      let url = `${API}/${this.props.model}/${form.formData._id}`;
      this.props.put(this.props.model, url, form.formData);
    } else {
      let url = `${API}/${this.props.model}`;
      this.props.post(this.props.model, url, form.formData);
    }
  };

  /**
   * render
   * renders Form when condition is met
   * @returns
   * @memberof Record
   */
  render() {
    return (
      <When condition={this.props.schemas[this.props.model]}>
        <Form
          schema={this.props.schemas[this.props.model] || {}}
          uiSchema={uiSchema}
          formData={this.props.record}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onError={this.handleError}
        />
      </When>
    );
  }
}

/**
 * mapStateToProps
 * maps record, schemas, and model states to props
 * @param {*} state
 */
const mapStateToProps = state => ({
  record: state.records.record,
  schemas: state.records.schemas,
  model: state.records.model
});

/**
 * mapDispatchToProps
 * includes getRecord, getSchema, post, and put
 * @param {*} dispatch
 * @param {*} getState
 */
const mapDispatchToProps = (dispatch, getState) => ({
  getRecord: url => dispatch(actions.getRecord(url)),
  getSchema: (model, url) => dispatch(actions.getSchema(model, url)),
  post: (model, url, record) => dispatch(actions.post(model, url, record)),
  put: (model, url, record) => dispatch(actions.put(model, url, record))
});

export default connect(mapStateToProps, mapDispatchToProps)(Record);
