import React, { useRef, useEffect, memo } from 'react';

const Child = ({ name, siblings, fetchData }) => {
  const counter = useRef(0);

  useEffect(() => {
    counter.current++;
    console.log(`Child renders : ${counter.current}`);
  });

  useEffect(() => {
    fetchData('users');
  }, [fetchData]);
  
  return <div>Child: {name}</div>;
};

export default memo(Child);
