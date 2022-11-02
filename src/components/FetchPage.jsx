import React, { useState } from 'react';

export default function FetchPage() {
  const [joke, setJoke] = useState(null);
  const handler = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(console.log);
  };
  const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
        fetch('/joke', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      })
      .catch(console.log);
  };
  return (
    <div className="row">
      <div className="col-12">
        <button type="button" className="btn btn-success" onClick={handler}>
          Click me!
        </button>
      </div>
      <div className="col-3">
        <button type="button" className="btn btn-success" onClick={getJoke}>
          Fetch joke!
        </button>
      </div>
      <div className="col-9">
        {joke ? joke.value : 'No joke! Push the button <-----'}
      </div>
    </div>
  );
}
