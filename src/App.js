import React, { useState } from "react";
import InputTobuy from "./components/InputTobuy";
import NotIntheCart from "./components/NotIntheCart";
import IntheCart from "./components/IntheCart";
// import Rice from './img/kome.jpg';
import "./App.css";

const App = () => {
  // 入力機能State化
  const [tobuyText, setTobuyText] = useState("");
  // カート前State化
  const [notIntheCart, setNotIntheCart] = useState(["しょうゆ"]);
  // カート後State化
  const [intheCart, setIntheCart] = useState(["tamago"]);

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
    {/* <img src={Rice} /> */}
      <div className="addition_name">
        <h3>お母の買い物リスト</h3>
      </div>

      {/* 買う物を入力する部分 */}
      <InputTobuy
        tobuyText={tobuyText}
        onChange={onChangeTobuyText}
        onClick={onClickAdd}
      />

      {/* カートに入れる前の状態リスト */}
      <NotIntheCart
        notIntheCart={notIntheCart}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      {/* カートに入れてある状態リスト */}
     <IntheCart intheCart={intheCart} onClickBack={onClickBack} / >
    </>
  );
};

export default App;
