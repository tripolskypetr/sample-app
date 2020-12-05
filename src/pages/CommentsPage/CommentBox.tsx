import React, { useState, useCallback } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

interface ICommentBoxProps {
  onComment: (comment: string) => void;
}

export const CommentBox = ({
  onComment = () => null,
}: ICommentBoxProps) => {
  const [comment, setComment] = useState<string>('');

  const handleSubmit = useCallback(() => {
    if (comment) {
      onComment(comment);
      setComment('');
    }
  }, [onComment, comment]);

  return (
    <Box
      className="comment-box__root"
      flexDirection="column"
      display="flex"
      mt={1}
    >
      <TextField
        onChange={({target}) => setComment(target.value)}
        variant="outlined"
        label="Message"
        value={comment}
        multiline
        rows={4}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onComment(comment: string) { dispatch(actions.saveComment(comment)); }
});

export default connect(null, mapDispatchToProps)(CommentBox);
