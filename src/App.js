import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import './App.css';
import Child from './components/Child';

const fetchData = (type) => {
  return fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const siblings = [1, 2, 3];

function App() {
  const [click, setClick] = useState(0);

  const counter = useRef(0);
  useEffect(() => {
    counter.current++;
    console.log(`Parent renders : ${counter.current}`);
  }, [click]);

  /**
   * If your dependency array is empty, you should simply move your variable definition outside of the component definition
   */
  /*    const siblings = useMemo(() => {
    return [1, 2, 3];
  }, []);
 */

  /*   const fetchData = useCallback((type) => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []); */

  useEffect(() => {
    fetchData('todos');
  }, [fetchData]);

  return (
    <div className="App">
      <div className="App-header">
        <h3>React Optimizations</h3>
        <Child
          name={'I am a Romain'}
          siblings={siblings}
          fetchData={fetchData}
        />
        <div>Clicked : {click}</div>
        <button onClick={() => setClick((prevClick) => prevClick + 1)}>
          Update Parent State
        </button>
      </div>
    </div>
  );
}

export default App;
