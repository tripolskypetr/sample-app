import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

export const AboutPage = () => {
  const history = useHistory();
  const params = useParams<any>();
  return (
    <>
      <p>Был указан id: {params.id}</p>
      <button onClick={() => history.goBack()}>Назад</button>
    </>
  );
};

export default AboutPage;
