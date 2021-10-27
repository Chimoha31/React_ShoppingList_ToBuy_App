import React from 'react';
import '../components/IntheCart.css';

const IntheCart = (props) => {
  const {intheCart, onClickBack} = props;

  return (
    <>
     <h4 className="title">カートに入れ済</h4>
      <ul>
        {intheCart.map((tobuy, index) => {
          return (
            <div key={tobuy} className="inthe_cart">
              <div>
                <li>{tobuy}</li>
              </div>
              <div className="btn">
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  )
}

export default IntheCart;