import { Input, Button } from 'antd';
import styled from 'styled-components';

export const Title = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  margin-top: 60px;
  text-align: center;
`;

export const InputTitle = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: ${props => props.top || '40'}px;
  text-align: left;
  padding-left: 40px;
`;

export const InputArea = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledInput = styled(Input)`
  width: 320px;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  margin-left: 40px;
  margin-right: 40px;
`;

export const ButtonArea = styled.div`
  text-align: left;
  padding-left: 40px;
  margin-top: 20px;
`;

export const StyledButton = styled(Button)`
  border-color: #28546a;
  background-color: #28546a;
  text-transform: uppercase;
  border-radius: 1px;
  border-width: 2px;
  color: white;
  width: 120px;

  &:hover {
    background-color: #28546a;
    color: white;
  }
`;

export const DividerArea = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
`;

export const LinkArea = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 15px;
  overflow: hidden;
`;

export const LinkTitle = styled.div`
  float: left;
  padding-top: 5px;
`;

export const StyledSpan = styled.span.attrs(() => ({
  children: '*',
}))`
  color: #971931;
`;

export const LinkButtonArea = styled.div`
  float: right;
`;

export const LinkButton = styled(Button)`
  background-color: #f3f7f8;
  border-color: #28546a;
  color: #28546a;
  text-transform: uppercase;
  border-radius: 1px;
  border-width: 2px;

  &:hover {
    background-color: #28546a;
    color: white;
  }
`;
