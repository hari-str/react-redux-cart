import React, { useState } from "react";
import Data from "../../data/Data";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/actions/action";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState(Data);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  };

  return (
    <>
      <main>
        <div className="home__tittle">
          <h1>React Redux cart 🔥</h1>
        </div>
        <div className="home__container">
          {data.map((datas) => {
            return (
              <div className="home__cart">
                <img src={datas.imgdata} alt="food-img" />

                <h3>{datas.rname} </h3>
                <p>price: ₹{datas.price}</p>
                <button onClick={() => send(datas)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
