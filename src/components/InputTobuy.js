import React from 'react';
import './InputTobuy.css';

const InputTobuy = (props) => {
  const{tobuyText, onChange, onClick} = props;

  return(
    <>
       <div className="input_area">
        <input
          placeholder="買う物を入力"
          value={tobuyText}
          onChange={onChange}
        />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  )
};

export default InputTobuy;