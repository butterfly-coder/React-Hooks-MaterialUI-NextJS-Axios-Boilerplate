import React, { useEffect } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({ 
  rootContainer: {
    height: '100%'
  },  
}));

const Homepage = props => {

  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter()

  useEffect(() => {
    const user = authService.getCurrentUser();

  }, []);

  return (
    <div className={classes.rootContainer}>
      This is homepage
    </div>
      
    
  );
};

Homepage.propTypes = {
  
};

export default Homepage;