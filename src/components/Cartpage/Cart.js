import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD, REMOVE } from "../../Redux/actions/action";
import "./Cart.css";

const Cart = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const { id } = useParams();
  // console.log(id);

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // add data

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  // remove data

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="cart">
      <h1>Cart page</h1>
      <div className="cart__container">
        {data.map((ele) => {
          return (
            <>
              <div className="cart__img">
                <img src={ele.imgdata} alt="" />
              </div>

              <div className="cart__item">
                <table>
                  <tr>
                    <td>
                      <strong>Restaurant: </strong> <br /> {ele.rname}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Price: </strong>
                      {ele.price}
                    </td>
                    <td>
                      <strong>Rating: </strong>
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        {ele.rating} ★{" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Dishes: </strong> {ele.address}
                    </td>
                    <td>
                      <strong>Order Review: </strong> {ele.somedata}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Total:</strong> {ele.price * ele.qnty}
                    </td>
                    <td>
                      <strong>Remove</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="cart__count">
                        <span
                          style={{ fontSize: "24px", cursor: "pointer" }}
                          onClick={() => remove(ele)}
                        >
                          -
                        </span>
                        <span style={{ fontSize: "22px" }}>{ele.qnty}</span>
                        <span
                          style={{ fontSize: "24px", cursor: "pointer" }}
                          onClick={() => send(ele)}
                        >
                          +
                        </span>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
