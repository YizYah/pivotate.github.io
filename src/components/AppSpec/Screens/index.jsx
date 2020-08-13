/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://docs.google.com/document/d/1vYGEyX2Gnvd_VwAcWGv6Ie37oa2vXNL7wtl7oUyyJcw/edit?usp=sharing
 */
// ns__file unit: appSpec, comp: Screens

// ns__custom_start unit: appSpec, comp: Screens, loc: beforeImports
// ns__custom_end unit: appSpec, comp: Screens, loc: beforeImports

import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import ScreenCreationForm from '../ScreenCreationForm';
import Screen from '../Screen';
import InfoTypeCreationForm from '../InfoTypeCreationForm';

// ns__custom_start unit: appSpec, comp: Screens, loc: styling

const ScreensStyleWrapper = styled.div`
  margin: 0 0 0 7%;

`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
`;
// ns__custom_end unit: appSpec, comp: Screens, loc: styling

class Screens extends Component {
  state = {
    selectedScreenId: null,
    // ns__custom_start unit: appSpec, comp: Screens, loc: addedState
    infoTypeValueCount: 0,
    // ns__custom_end unit: appSpec, comp: Screens, loc: addedState
  };

  wrapperRef = createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedScreenId: null });
    }
  };

  handleSelect = (id) => {
    console.log('id screens', id);

    this.setState({ selectedScreenId: id });
  };

  // ns__custom_start unit: appSpec, comp: UserTypes, loc: beforeRender
  onChangeHelper = (value) => {
    this.setState({ infoTypeValueCount: value.length });
  };
  // ns__custom_end unit: appSpec, comp: UserTypes, loc: beforeRender

  render() {
    const { userTypeId, screens, refetchQueries, onUpdate  } = this.props;
    const { selectedScreenId } = this.state;


    // ns__custom_start unit: appSpec, comp: UserTypes, loc: beginning
    const {label} = this.props;
    const validateScreens = screens.length;
    const { infoTypeValueCount } = this.state;
    
    // ns__custom_end unit: appSpec, comp: UserTypes, loc: beginning

    // ns__custom_start unit: appSpec, comp: Screens, loc: renderBeginning
    return (
      <>
        <ScreensStyleWrapper ref={this.wrapperRef} onClick={this.handleClick}>
          {screens.map((screen) => (
            <Screen
              key={v4()}
              screen={screen}
              selected={screen.id === selectedScreenId}
              onUpdate={onUpdate}
              parentId={userTypeId}
              refetchQueries={refetchQueries}
              onSelect={this.handleSelect}
            />
          ))}
          {/* ns__custom_start unit: appSpec, comp: Screens, loc: renderEnding */}
          {/* ns__custom_end unit: appSpec, comp: Screens, loc: renderEnding */}
        </ScreensStyleWrapper>
        <ScreenCreationForm
          parentId={userTypeId}
          refetchQueries={refetchQueries}
          /* ns__custom_start unit: appSpec, comp: Screens, loc: addedProps */
          validateScreens={validateScreens}
          onChange={this.onChangeHelper}
          label={label}
          /* ns__custom_end unit: appSpec, comp: Screens, loc: addedProps */
        />
        
        {infoTypeValueCount >= 3 ? (
          <InfoTypeCreationForm disabled validateInfoTypes={0} textLabel="What is the Info Type fo..." infoTypeValueCount={infoTypeValueCount} label={label} />
        ) : null}
      </>
    );
    // ns__custom_end unit: appSpec, comp: Screens, loc: renderBeginning

    // return (
    //   <>
    //     <ScreensStyleWrapper ref={this.wrapperRef} onClick={this.handleClick}>
    //       {screens.map((screen) => (
    //         <Screen
    //           key={v4()}
    //           screen={screen}
    //           selected={screen.id === selectedScreenId}
    //           onUpdate={onUpdate}
    //           parentId={userTypeId}
    //           refetchQueries={refetchQueries}
    //           onSelect={this.handleSelect}
    //         />
    //       ))}
    //       {/* ns__custom_start unit: appSpec, comp: Screens, loc: renderEnding */}
    //       {/* ns__custom_end unit: appSpec, comp: Screens, loc: renderEnding */}
    //     </ScreensStyleWrapper>
    //     <ScreenCreationForm
    //       parentId={userTypeId}
    //       refetchQueries={refetchQueries}
    //       /* ns__custom_start unit: appSpec, comp: Screens, loc: addedProps */
    //       validateScreens={validateScreens}
    //       /* ns__custom_end unit: appSpec, comp: Screens, loc: addedProps */
    //     />
    //   </>
    // );
  }
}

export default Screens;
