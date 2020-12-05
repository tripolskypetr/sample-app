import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';

import * as actions from '../../actions';

interface ICommentsListProps {
  comments: string[],
  loadComments: () => void,
}

export const CommentsList = ({
  comments = [],
  loadComments = () => null,
}: ICommentsListProps) => {
  useEffect(() => {
    loadComments();
  }, []);
  return (
    <div className="comments-list__root">
      <List>
        {
          comments.map((text, index) => (
            <ListItem className="comments-list__listItem" button key={index} >
              <ListItemText primary={text} />
            </ListItem>
          ))
        }
      </List>
    </div>
  );
};

const mapStateToProps = ({ comments }) => ({
  comments,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments() { dispatch(actions.fetchComments()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);

