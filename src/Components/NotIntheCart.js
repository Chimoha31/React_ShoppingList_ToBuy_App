import React from "react";
import "./NotIntheCart.css";

const NotIntheCart = (props) => {
  const {notIntheCart, onClickComplete, onClickDelete} = props;

  return (
    <>
      <h4 className="title">買い物リスト</h4>
      <ul>
        {notIntheCart.map((tobuy, index) => {
          return (
            <div key={tobuy} className="not_inthe_cart">
              <div>
                <li>{tobuy}</li>
              </div>
              <div className="btn">
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default NotIntheCart;
