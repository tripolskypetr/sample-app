import React, {useEffect} from 'react';
import {compose} from 'redux';
import {observer} from 'mobx-react';

import withUser from '../../stores/UserStore';

export const MobxPage = (props) => {
  const {
    user: {
      firstName,
      age,
      nickName,
      incrementAge,
      decrementAge,
      follow,
      followers,
      info,
      updateEmail,
      loadFollowers,
    }
  } = props;
  useEffect(() => {
    loadFollowers();
  }, []);
  return (
    <>
      <p>firstName(observable): "{firstName}"</p>
      <p>age(observable): "{age}"</p>
      <p>nickName(computed): "{nickName}"</p>
      <p>email(observable object):{info.email}</p>
      <button onClick={incrementAge}>Increment age (action)</button>
      <button onClick={decrementAge}>Decrement age (action)</button>
      <button onClick={follow}>follow</button>
      <button onClick={updateEmail}>update email</button>
      <hr/>
      <p>Followers(observable array):</p>
      {followers.map((f) => {
        console.log(f);
        return <p key={f}>{f}</p>
      })}
    </>
  );
};

export default compose(
  withUser,
  observer,
)(MobxPage);
