import React, { useRef, useState } from 'react';
import { Col, message } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  InputTitle,
  StyledSpan,
  InputArea,
  StyledInput,
  ButtonArea,
  StyledButton,
} from '../StyledTags';

const BookAddForm = props => {
  const _titleInput = useRef(null);
  const _commentInput = useRef(null);
  const _authorInput = useRef(null);
  const _urlInput = useRef(null);

  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    const { history, token } = props;

    const title = _titleInput.current.state.value;
    const comment = _commentInput.current.state.value;
    const author = _authorInput.current.state.value;
    const url = _urlInput.current.state.value;

    console.log(title, comment);

    if (title === '' || comment === '') {
      message.error('뭐라도 적으세요.');
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        'https://api.marktube.tv/v1/book',
        {
          title,
          message: comment,
          author,
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

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
      <InputTitle>
        Title
        <StyledSpan />
      </InputTitle>
      <InputArea>
        <StyledInput placeholder="Title" ref={_titleInput} />
      </InputArea>

      <InputTitle top={10}>
        Comment
        <StyledSpan />
      </InputTitle>
      <InputArea>
        <StyledInput placeholder="Comment" ref={_commentInput} />
      </InputArea>

      <InputTitle top={10}>Author</InputTitle>
      <InputArea>
        <StyledInput placeholder="Author" ref={_authorInput} />
      </InputArea>
      
      <InputTitle top={10}>Url</InputTitle>
      <InputArea>
        <StyledInput placeholder="Url" ref={_urlInput} />
      </InputArea>

      <ButtonArea>
        <StyledButton size="large" loading={loading} onClick={onClick}>
          Add book
        </StyledButton>
      </ButtonArea>
    </Col>
  );
};

export default withRouter(BookAddForm);
// withRouter를 통해 history가 담겨진다.
