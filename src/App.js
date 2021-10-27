import React, { useState } from "react";
import "./App.css";

const App = () => {
  // 入力機能State化
  const [tobuyText, setTobuyText] = useState("");
  // カート前State化
  const [notIntheCart, setNotIntheCart] = useState([]);
  // カート後State化
  const [intheCart, setIntheCart] = useState([]);

  // 関数
  // 入力可能にする
  const onChangeTobuyText = (event) => {
    return setTobuyText(event.target.value);
  };
  // 追加ボタンを押してカート前リストに入れる
  const onClickAdd = () => {
    if (tobuyText === "") return;
    const newTobuy = [...notIntheCart, tobuyText];
    setNotIntheCart(newTobuy);
    setTobuyText("");
  };
  // 完了ボタンを押したらカート後のリストに入れる
  const onClickComplete = (index) => {
    const newTobuy = [...notIntheCart];
    newTobuy.splice(index, 1);
    setNotIntheCart(newTobuy);

    const newCompleteTobuy = [...intheCart, notIntheCart[index]];
    setIntheCart(newCompleteTobuy);
  };
  // 削除ボタンを押したらリストから消える
  const onClickDelete = (index) => {
    const newTobuy = [...notIntheCart];
    newTobuy.splice(index, 1);
    setNotIntheCart(newTobuy);
  };
  // 戻すボタンを押したらリストから消し、カート前リストに戻す
  const onClickBack = (index) => {
    const newCompleteTobuy = [...intheCart];
    newCompleteTobuy.splice(index, 1);
    setIntheCart(newCompleteTobuy);

    const newTobuy = [...notIntheCart, intheCart[index]];
    setNotIntheCart(newTobuy);
  };

  return (
    <>
      <div className="header_name">
        <h3>お母の買い物リスト</h3>
      </div>

      {/* 買う物を入力する部分 */}
      <div className="input_area">
        <input
          placeholder="買う物を入力"
          value={tobuyText}
          onChange={onChangeTobuyText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      {/* カートに入れる前の状態リスト */}
        <h4 className="title">買い物リスト</h4>
        <ul>
          {notIntheCart.map((tobuy, index) => {
            return (
              <div key={tobuy} className="not_inthe_cart">
                <li>{tobuy}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>

      {/* カートに入れてある状態リスト */}
      <h4 className="title">カートに入れ済</h4>
      <ul>
        {intheCart.map((tobuy, index) => {
          return (
            <div key={tobuy} className="inthe_cart">
              <li>{tobuy}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default App;
