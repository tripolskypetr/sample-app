import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';


export const CommentsList = ({
  comments = [],
}) => (
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

const mapStateToProps = ({ comments }) => ({
  comments,
});

export default connect(mapStateToProps)(CommentsList);

