import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#FEF3C6',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    textDecorationLine: 'underline',
  },
  accordionSummary: {
    backgroundColor: '#FEF3C6',
  },
}));

function ModalAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordionSummary}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: '#26ABBC'}} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>
            {' '}
            <span className="circle-question" > ? </span>
            How does this work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <font color="red" >15 days free trial period</font>, including a free session with an app
            architect. Cancel anytime. Then you can pay $45 for our monthly plan
            (cancel any time, just pay current month) plus fees for any services
            that you order.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default ModalAccordion;
