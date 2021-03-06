import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
   border-radius: 0 0 60px 0;
   background-image: linear-gradient(45deg, #00FFA3, #03E1FF, #DC1FFF );
   font-size: 1.5rem;
   text-align: left;
   padding: 1.5rem 0 1.5rem 5rem;
   width: 350px;
`;

export default function AccountBalance(props) {
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if (props.showBalance) {
        content = <>Balance: ${props.amount}</>;
    }
    return (
        <Section>
            {content}   
            <button onClick={props.handleBalanceVisibilityChange}>{buttonText}</button> 
        </Section>
    );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}