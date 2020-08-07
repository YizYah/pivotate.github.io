import React, { Component, createRef } from "react";
import { Unit } from "@nostack/no-stack";
import styled from "styled-components";
import { v4 } from "uuid";

import { flattenData } from "../../../flattenData";

import AppCreationForm from "../AppCreationForm";
import DescriptionCreationForm from "../DescriptionCreationForm";
import App from "../App";
import { connect } from "react-redux";
import { increment, decrement, currentUser } from "../../../actions";

import { SOURCE_APP_SPEC_ID } from "../../../config";
import {
  APP_SPEC_RELATIONSHIPS,
  SOURCE_APP_SPEC_QUERY,
} from "../../source-props/appSpec";


const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment,
  currentUser,
});
// np__added_start unit: appSpec, comp: Apps, loc: styling

// add styling here
const AppsStyleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
// np__added_end unit: appSpec, comp: Apps, loc: styling

class Apps extends Component {
  // np__added_start unit: appSpec, comp: Apps, loc: beginning
  // np__added_end unit: appSpec, comp: Apps, loc: beginning
  state = {
    selectedAppId: null,
  };

  wrapperRef = createRef();

  componentDidMount() {
    // document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    // document.removeEventListener("mousedown", this.handleClick);
  }

  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedAppId: null });
    }
  };

  handleSelect = (id) => this.setState({ selectedAppId: id });

  render() {
    const { customerId } = this.props;
    const { selectedAppId } = this.state;

    const parameters = {
      currentCustomer: customerId,
    };

    return (
      <Unit
        id={SOURCE_APP_SPEC_ID}
        typeRelationships={APP_SPEC_RELATIONSHIPS}
        query={SOURCE_APP_SPEC_QUERY}
        parameters={parameters}
      >
        {({ loading, error, data, refetchQueries }) => {
          if (loading) return "Loading...";
          if (error) {
            console.error(error);
            return `Error: ${error.graphQLErrors}`;
          }
          const apps = data.unitData.map((el) => flattenData(el));
          return (
            <div style={{ maxWidth: "769px" }}>
              {apps.length == 0 ? (
                <AppCreationForm
                  customerId={customerId}
                  refetchQueries={refetchQueries}
                />
              ) : (
                <div> </div>
              )}
              {apps.length > 0 ? (
                <AppsStyleWrapper
                  ref={this.wrapperRef}
                >
                  {apps &&
                    apps.map((app) => (

                      <App
                        hasApp={apps.length > 0}
                        key={v4()}
                        parentId={customerId}
                        app={app}
                        selected={app.id === selectedAppId}
                        refetchQueries={refetchQueries}
                        onSelect={this.handleSelect}
                      />
                     
                    ))}
                </AppsStyleWrapper>
              ) : (
                <div> </div>
              )}
              {/* np__added_start unit: appSpec, comp: Apps, loc: renderEnding */}
              {/* np__added_end unit: appSpec, comp: Apps, loc: renderEnding */}
            </div>
          );
        }}
      </Unit>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Apps);
