import React, { useState } from 'react';

export default function InputGroup() {
  const [inputGroup, setInputGroup] = useState({
    cash: '', username: '', server: '', comment: '',
  });
  const changeHandler = (e) => setInputGroup((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
  console.log(inputGroup);
  return (
    <div className="row">
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input value={inputGroup.cash} onChange={changeHandler} name="cash" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
        <span className="input-group-text">.00</span>
      </div>

      <div className="input-group mb-3">
        <input value={inputGroup.username} onChange={changeHandler} name="username" type="text" className="form-control" placeholder="Username" aria-label="Username" />
        <span className="input-group-text">@</span>
        <input value={inputGroup.server} onChange={changeHandler} name="server" type="text" className="form-control" placeholder="Server" aria-label="Server" />
      </div>

      <div className="input-group">
        <span className="input-group-text">With textarea</span>
        <textarea value={inputGroup.comment} onChange={changeHandler} name="comment" className="form-control" aria-label="With textarea" />
      </div>

    </div>
  );
}
