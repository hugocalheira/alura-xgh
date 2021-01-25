import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';
import QuizLogo from '../QuizLogo';

const logoUrl = 'https://gohorseprocess.com.br/wp-content/uploads/2017/05/horse21.png'

function Logo({ className }) {
  return (
      <div>
          <img src={logoUrl} alt="XGoHorse" className={className}/>
      </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const GoHorseLogo = styled(Logo)`
  /* margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  } */
  
    background-color: #fdfbfb;
    width: 230px;
    height: 235px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #484848;
    border-radius: 255px 194px 230px 130px/198px 225px 267px 255px;
`;

export default GoHorseLogo;