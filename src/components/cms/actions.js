import superagent from "superagent";

export /**
 * setModel
 * sets the chosen model
 * @param {*} model
 * @returns
 */
const setModel = model => {
  return {
    type: "MODEL",
    payload: model
  };
};

export const /**
 * getSchema
 * fetches info from superagent, returns the schema
 * @param {*} dispatch
 */
getSchema = (model, url) => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetSchema({ model: model, schema: data.body }));
  });
};

/**
 * runGetSchema
 * actions to return schema payload
 * @param {*} payload
 * @returns
 */
const runGetSchema = payload => {
  return {
    type: "SCHEMA",
    payload: payload
  };
};

export const /**
 * getModels
 * superagent call to get data and return as models
 * @param {*} dispatch
 */
getModels = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetModels(data.body));
  });
};

/**
 * runGetModels
 * returns the model payload
 * @param {*} payload
 * @returns
 */
const runGetModels = payload => {
  return {
    type: "MODELS",
    payload: payload
  };
};

export const /**
 * getRecords
 * makes a superagent call then dispatches the records from the results
 * @param {*} dispatch
 */
getRecords = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetRecords(data.body.results));
  });
};

/**
 * runGetRecords
 * returns the records payload
 * @param {*} payload
 * @returns
 */
const runGetRecords = payload => {
  return {
    type: "RECORDS",
    payload: payload
  };
};

export const /**
 * getRecord
 * superagent call, followed by return on an individual record
 * @param {*} dispatch
 */
getRecord = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetRecord(data.body));
  });
};

/**
 * runGetRecord
 * action to return record payload
 * @param {*} payload
 * @returns
 */
const runGetRecord = payload => {
  return {
    type: "RECORD",
    payload: payload
  };
};

export const /**
 * post
 * posts a new record to the collection
 * @param {*} dispatch
 */
post = (model, url, record) => dispatch => {
  superagent
    .post(url)
    .send(record)
    .then(data => {
      dispatch(runPost({ model, record: data.body }));
    });
};

/**
 * runPost
 * action to return post payload
 * @param {*} payload
 * @returns
 */
const runPost = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

export /**
 * put
 * updates a record in the collection
 * @param {*} model
 * @param {*} url
 * @param {*} record
 */
const put = (model, url, record) => dispatch => {
  superagent
    .put(url)
    .send(record)
    .then(data => {
      dispatch(runPut({ model, record: data.body }));
    });
};

/**
 * runPut
 * runs the put action, returns payload
 * @param {*} payload
 * @returns
 */
const runPut = payload => {
  return {
    type: "PUT",
    payload: payload
  };
};

export const /**
 * destroy
 * deletes a record
 * @param {*} dispatch
 */
destroy = (model, id, url) => dispatch => {
  superagent.delete(url).then(data => {
    dispatch(runDestroy({ model, id }));
  });
};

/**
 * runDestroy
 * action to return delete payload
 * @param {*} payload
 * @returns
 */
const runDestroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

export /**
 * clearRecord
 * clears the record
 * @returns
 */
const clearRecord = () => {
  return {
    type: "CLEAR"
  };
};
