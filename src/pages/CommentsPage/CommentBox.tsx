import React, { useState, useCallback } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export const CommentBox = ({
  onComment = (comment) => console.log({comment}),
}) => {
  const [comment, setComment] = useState<string>('');

  const handleSubmit = useCallback(() => {
    onComment(comment);
    setComment('');
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
      <Box display="flex" alignItems="flex-end">
        <Button onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CommentBox;
