import { FC } from 'react';
import styled from 'styled-components';
import LinksUnderProfile from './LinksUnderProfile/LinksUnderProfile';
import Profile from "./Profile/Profile";

const Wrapper = styled.div`
  width: 304px;
  height: 500px;
  display: flex;
  margin-left:3%;
  margin-top:20px;
  border-radius:2%;
  flex-direction: column;
  z-index: 1;
`;

const LeftMenu: FC = () => {
    return( 
        <Wrapper>  
            <Profile/>
            <LinksUnderProfile/>
        </Wrapper>
    );
};
export default LeftMenu;
