/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: Apps

// ns__custom_start unit: appSpec, comp: Apps, loc: beforeImports
// 'use strict';
// ns__custom_end unit: appSpec, comp: Apps, loc: beforeImports

// ns__start_section imports
import React, { Component, createRef } from 'react';
import { Unit } from '@nostack/no-stack';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { flattenData } from '../../../flattenData';
import classNames from 'classnames';

// ns__remove_import AppCreationForm from '../AppCreationForm';
import App from '../App';

import { SOURCE_APP_SPEC_ID } from '../../../config';
import {
  APP_SPEC_RELATIONSHIPS,
  SOURCE_APP_SPEC_QUERY,
} from '../../source-props/appSpec';
// ns__custom_start unit: appSpec, comp: Apps, loc: addedImports
import FirstTimeAppCreationForm from '../../../custom/FirstTimeAppCreationForm';
import { Context as UnitDataContext } from '../../../custom/UnitDataContext';
import StepContext from '../../../StepContext';
import { Container } from '@material-ui/core';
import { $CombinedState } from 'redux';
import { stubFalse } from 'lodash';
// ns__custom_end unit: appSpec, comp: Apps, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const AppsStyleWrapper = styled.div`
  // ns__custom_start unit: appSpec, comp: Apps, loc: styling
  // add a prop called \`show\`
  padding-top: 5rem;
  padding-bottom: 5rem;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-evenly;
  // mystyling...
  // ns__custom_end unit: appSpec, comp: Apps, loc: styling
`;

// ns__end_section stylingSection

// ns__custom_start unit: appSpec, comp: Apps, loc: beforeFunction
// ns__custom_end unit: appSpec, comp: Apps, loc: beforeFunction

// ns__start_section function
class Apps extends Component {
  // ns__custom_start unit: appSpec, comp: Apps, loc: beginning
  // eslint-disable-next-line react/static-property-placement
  static contextType = UnitDataContext;
  // ns__custom_end unit: appSpec, comp: Apps, loc: beginning
  state = {
    selectedAppId: null,
    // ns__custom_start unit: appSpec, comp: Apps, loc: addedState
    // ns__custom_end unit: appSpec, comp: Apps, loc: addedState
  };

  wrapperRef = createRef();

  // ns__start_section didMount
  componentDidMount() {
    // ns__custom_start unit: appSpec, comp: Apps, loc: componentDidMount

    // ns__custom_end unit: appSpec, comp: Apps, loc: componentDidMount
    document.addEventListener('mousedown', this.handleClick);
  }
  // ns__end_section didMount

  // ns__start_section willMount
  componentWillUnmount() {
    // ns__custom_start unit: appSpec, comp: Apps, loc: componentWillUnmount
    // ns__custom_end unit: appSpec, comp: Apps, loc: componentWillUnmount
    document.removeEventListener('mousedown', this.handleClick);
  }
  // ns__end_section willMount

  // ns__start_section handleClick
  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedAppId: null });
    }
  };
  // ns__end_section handleClick

  // ns__start_section handleSelect
  handleSelect = (id) => this.setState({ selectedAppId: id });
  // ns__end_section handleSelect

  // ns__custom_start unit: appSpec, comp: Apps, loc: beforeRender
  // ns__custom_end unit: appSpec, comp: Apps, loc: beforeRender

  // ns__start_section render
  render() {
    const { customerId } = this.props;

    const { selectedAppId } = this.state;
    const parameters = {
      currentCustomer: customerId,
    };

    // ns__custom_start unit: appSpec, comp: Apps, loc: renderBeginning
    // ns__custom_end unit: appSpec, comp: Apps, loc: renderBeginning

    // ns__start_replacement renderReturn

    return (
      <Unit
        id={SOURCE_APP_SPEC_ID}
        typeRelationships={APP_SPEC_RELATIONSHIPS}
        query={SOURCE_APP_SPEC_QUERY}
        parameters={parameters}
      >
        {({ loading, error, data, refetchQueries }) => {
          if (loading) return 'Loading...';

          if (error) {
            return `Error: ${error.graphQLErrors}`;
          }

          const apps = data.unitData.map((el) => flattenData(el));
          function getDepth(obj) {
            let res = JSON.stringify(obj).replace(/[^{|^}]/g, '');
            while (/}{/g.test(res)) {
              res = res.replace(/}{/g, '');
            }
            return res.replace(/}/g, '').length;
          }
          let appLength = 0;
          if (apps[0]) {
            appLength = apps[0].children ? apps[0].children.length : 0;
          }

          // ns__custom_start unit: appSpec, comp: Apps, loc: beforeReturn
          /* NOTE: one app is assumed here. */
          // const appSpec = apps[0];

          // const descriptionInfo = getDescriptionChild(appSpec.children);
          // const descriptionValue = descriptionInfo.instances[0].value;

          // ns__custom_start unit: appSpec, comp: Apps, loc: beforeReturn
          const noApp =
            apps.length === 0 || !(apps[0].value && apps[0].value !== ''); // || descriptionValue); // &&
          // find in apps[0].children array an object o where o.typeId === TYPE_DESCRIPTION_ID
          // and where o.instances contains an object oi where oi.value && oi.value !== ''
          // const show = !noApp;
          // ns__custom_end unit: appSpec, comp: Apps, loc: beforeReturn

          return (
            <>
              <StepContext.Provider value={getDepth(apps)}>
                <Container maxWidth='sm'>
                  <div class='wizard-stepper'>
                    <div
                      className={classNames({
                        'step-done': getDepth(apps) >= 1,
                        'current-step': getDepth(apps) == 0,
                        'wizard-step': true,
                      })}
                    >
                      <span href='#' class='title-number grey--text'>
                        {getDepth(apps) > 0 ? '\u2713' : 1}
                      </span>
                      <span href='#' class='number'>
                        &nbsp;{' '}
                      </span>
                      <span href='#' class='text'>
                        About your app!
                      </span>
                    </div>
                    <div class='progress-bar'></div>
                    <div
                      className={classNames({
                        'step-done': getDepth(apps) > 1 && appLength > 1,
                        'current-step': appLength == 1,
                        'wizard-step': true,
                      })}
                    >
                      <span href='#' class='title-number grey--text'>
                        {getDepth(apps) > 1 && appLength >= 1 ? '\u2713' : 2}
                      </span>
                      <span href='#' class='number'>
                        &nbsp;{' '}
                      </span>
                      <span href='#' class='text'>
                        {' '}
                        First User Type{' '}
                      </span>
                    </div>
                    <div class='progress-bar'></div>
                    <div
                      className={classNames({
                        'step-done': getDepth(apps) > 3,
                        'current-step': getDepth(apps) == 3 && appLength == 2,
                        'wizard-step': true,
                      })}
                    >
                      <span href='#' class='title-number grey--text'>
                        {getDepth(apps) > 3 ? '\u2713' : 3}
                      </span>
                      <span href='#' class='number'>
                        &nbsp;
                      </span>
                      <span href='#' class='text'>
                        First Screen
                      </span>
                    </div>
                    <div class='progress-bar'></div>
                    <div
                      className={classNames({
                        'step-done': getDepth(apps) > 6,
                        'current-step': getDepth(apps) == 6,
                        'wizard-step': true,
                      })}
                    >
                      <span href='#' class='title-number grey--text'>
                        {getDepth(apps) > 6 ? '\u2713' : 4}
                      </span>
                      <span href='#' class='number'>
                        &nbsp;{' '}
                      </span>
                      <span href='#' class='text'>
                        {' '}
                        First Info Type{' '}
                      </span>
                    </div>
                    <div class='progress-bar'></div>
                    <div
                      className={classNames({
                        'step-done': getDepth(apps) > 8,
                        'current-step': getDepth(apps) >= 8,
                        'wizard-step': true,
                      })}
                    >
                      <span href='#' class='title-number grey--text'>
                        {getDepth(apps) > 8 ? '\u2713' : 5}
                      </span>
                      <span href='#' class='number'>
                        &nbsp;{' '}
                      </span>
                      <span href='#' class='text'>
                        {' '}
                        First Sub Info Type
                      </span>
                    </div>
                  </div>
                  {noApp ? (
                    <FirstTimeAppCreationForm
                      customerId={customerId}
                      refetchQueries={refetchQueries}
                      // ns__custom_start unit: appSpec, comp: Apps, loc: addedPropsForCreationForm
                      // ns__custom_end unit: appSpec, comp: Apps, loc: addedPropsForCreationForm
                    />
                  ) : (
                    <AppsStyleWrapper onClick={this.handleClick}>
                      <Container maxWidth='sm'>
                        {apps &&
                          apps.map((app) => (
                            <App
                              key={v4()}
                              parentId={customerId}
                              app={app}
                              selected={app.id === selectedAppId}
                              refetchQueries={refetchQueries}
                              // ns__custom_start unit: appSpec, comp: Apps, loc: addedPropsForChildren
                              // ns__custom_end unit: appSpec, comp: Apps, loc: addedPropsForChildren
                            />
                          ))}
                      </Container>
                      {/* ns__start_section listElements */}

                      {/* ns__end_section listElements */}
                    </AppsStyleWrapper>
                  )}
                  {/* ns__custom_start unit: appSpec, comp: Apps, loc: renderEnding */}
                  {/* ns__custom_end unit: appSpec, comp: Apps, loc: renderEnding */}
                </Container>
              </StepContext.Provider>
            </>
          );
        }}
      </Unit>
    );

    // ns__end_replacement renderReturn
  }
  // ns__end_section render
}
// ns__end_section function

// ns__start_section  compose
// ns__end_section  compose

// ns__start_section propTypes
Apps.propTypes = {
  // ns__custom_start unit: appSpec, comp: Apps, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: Apps, loc: addedPropTypes
};
// ns__end_section propTypes

export default Apps;
