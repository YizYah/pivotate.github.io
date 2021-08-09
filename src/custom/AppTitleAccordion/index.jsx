import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import { Container, AccordionActions } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { separateOperations } from 'graphql';
import ApplicationModal from '../ApplicationModal';
import ItemEditFormModal from '../ItemEditFormModal';
import GetStartedModal from '../GetStartedModal';
import CongratulationsModal from '../CongratulationsModal';

const CustomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CustomAccordion = styled(Container)`
  margin-bottom: 1rem;
`;
const Button = styled.button`
  // ns__custom_start unit: appSpec, comp: App, loc: buttonStyling
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0;
  color: #bbbbbb;
  transition: color 0.5s ease;
  &:hover {
    color: ${(props) => props.hoverColor || '#000000'};
  }
  // ns__custom_end unit: appSpec, comp: App, loc: buttonStyling
`;
const CustomButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function AppTitleAccordion({
  title,
  description,
  children,
  userTypes,
  updateButton,
  deleteButton,
}) {
  const styles = useStyles();
  const [expanded, setExpanded] = useState('panel1');
  const [openEdit, setOpenEdit] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [userCount, setUserCount] = useState(2);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };

  function getStepModal(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <ApplicationModal
              open={openEdit}
              title={'CONGRATULATIONS!'}
              content={
                "If you are reading this, then you've learned how to enter in the details that you need for us to build your application."
              }
              buttonLabel={"Yes, i'm Ready!"}
              buttonBack={'Go Back'}
              handleButton={handleNext}
              handleClose={handleClose}
              // onClose={() => setOpenEdit(false)}
            />
          </>
        );
      case 1:
        return (
          <>
            <GetStartedModal
              open={openEdit}
              title={"Let's get started"}
              content={
                ' This is semi-automated, but you have to enter your credit card details and talk to an account manager to start. '
              }
              buttonLabel={'NEXT'}
              buttonBack={'Go Back'}
              handleButton={handleNext}
              handleBack={handleBack}
              handleClose={handleClose}
            />
          </>
        );
      default:
        return (
          <>
            <CongratulationsModal
              open={openEdit}
              title={'CONGRATULATIONS!'}
              content={'To proceed further now you have to do these things.'}
              buttonLabel={'SCHEDULE A MEETING'}
              handleButton={handleNext}
              handleBack={handleBack}
              handleClose={handleClose}
            />
          </>
        );
    }
  }

  return (
    <>
      <CustomAccordion maxWidth='sm'>
        <Accordion
          className={styles.accordion}
          //  expanded={expanded === 'panel1'}
          // onChange={handleAccordionChange('panel1')}
        >
          {/* <AccordionActions className={styles.accordionButtonsWrapper}> */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#8AD5DD' }} />}
            Container
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            classes={{
              content: styles.accordionSummary,
            }}
          >
            <div>
              <Typography className={styles.heading}>{title}</Typography>
            </div>
            <div>
              <Typography className={styles.secondaryHeading}>
                DESCRIPTION
              </Typography>
            </div>
          </AccordionSummary>

          <Button
            className={styles.accordionButton}
            onClick={() => setOpenEdit(true)}
            variant='contained'
          >
            Create
          </Button>

          <CustomButtonWrapper>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
            <div>
              <Button onClick={updateButton}>&#9998;</Button>
              <Button onClick={deleteButton}>&#128465;</Button>
            </div>
          </CustomButtonWrapper>
        </Accordion>
        {children}
        {getStepModal(activeStep)}
        {/* <ApplicationModal
              open={openEdit}
              title={'Hellow 1'}
              content={'This is content'}
              buttonLabel={'next'}
              handleButton={handleNext}
              // onClose={() => setOpenEdit(false)}
            /> */}

        <ItemEditFormModal />
      </CustomAccordion>
    </>
  );
}

export default AppTitleAccordion;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '1.2rem 0',
    '&.MuiIconButton-root': {
      padding: 0,
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'Bold',
    flexBasis: '33.33%',
    flexShrink: 0,
    textAlign: 'initial',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#26ABBC',
  },
  accordion: {
    backgroundColor: '#D2ECEF',
    margin: '1rem 0',
    border: 'none',
    borderRadius: '10px',
    padding: '10px',
  },
  accordionSummary: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  accordionButtonsWrapper: {
    // justifyContent: 'space-between',
  },
  accordionButton: {
    width: '25%',
    borderRadius: '25px',
    backgroundColor: '#FCCC06',
    '&:hover': {
      backgroundColor: '#FCCC06',
    },
  },
}));
