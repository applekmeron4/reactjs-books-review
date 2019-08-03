import React, { useRef, useState } from 'react';
import { Divider, Col, message } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import {
  Title,
  InputTitle,
  StyledSpan,
  InputArea,
  StyledInput,
  ButtonArea,
  StyledButton,
  DividerArea,
  LinkArea,
  LinkTitle,
  LinkButtonArea,
  LinkButton,
} from '../StyledTags';
import axios from 'axios';

const SigninForm = props => {
  const _emailInput = useRef(null);
  const _passwordInput = useRef(null);

  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    const { history } = props;

    const email = _emailInput.current.state.value;
    const password = _passwordInput.current.state.value;

    console.log(email, password);

    if (email === '' || password === '') {
      message.error('뭐라도 적으세요.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(' https://api.marktube.tv/v1/me', {
        email,
        password,
      });

      const token = response.data.token;
      console.log(token);

      // Token 처리
      localStorage.setItem('token', token);
      history.push('/');
    } catch (error) {
      message.error(error.response.data.error);
      setLoading(true);
    }

    // https://api.bmarktube.tv/v1/me post {email, password}
  };

  return (
    <Col
      span={12}
      style={{
        verticalAlign: 'top',
      }}
    >
      <Title>Log In. Start Searching.</Title>
      <InputTitle>
        Email
        <StyledSpan />
      </InputTitle>
      <InputArea>
        <StyledInput placeholder="Email" ref={_emailInput} />
      </InputArea>
      <InputTitle top={10}>
        Password
        <StyledSpan />
      </InputTitle>
      <InputArea>
        <StyledInput type="password" ref={_passwordInput} />
      </InputArea>
      <ButtonArea>
        <StyledButton size="large" loading={loading} onClick={onClick}>
          Sign In
        </StyledButton>
      </ButtonArea>
      <DividerArea>
        <Divider />
      </DividerArea>
      <LinkArea>
        <LinkTitle>Need to create an account?</LinkTitle>
        <LinkButtonArea>
          <Link to="/signup">
            <LinkButton>Sign up</LinkButton>
          </Link>
        </LinkButtonArea>
      </LinkArea>
      <LinkArea>
        <LinkTitle>Forgot your password?</LinkTitle>
        <LinkButtonArea>
          <Link to="/forgot">
            <LinkButton>Recovery</LinkButton>
          </Link>
        </LinkButtonArea>
      </LinkArea>
    </Col>
  );
};

export default withRouter(SigninForm);
// withRouter를 통해 history가 담겨진다.
