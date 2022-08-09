import React, { useEffect, useState } from "react";
import "./Header.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../../Redux/actions/action";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();
  // cartItems

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // delete item
  const dlt = (id) => {
    dispatch(DLT(id));
  };

  // total
  const total = () => {
    let price = 0;
    getdata.map((element) => {
      price = element.price * element.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <nav className="header__container">
        <div className="header__list">
          <ul>
            <li>Add to cart</li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
          <div className="header__cart">
            <Badge
              badgeContent={getdata.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ShoppingCartIcon style={{ fontSize: 30, cursor: "pointer" }} />
            </Badge>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {getdata.length ? (
                <div className="cart__detail">
                  <table className="table">
                    <thead>
                      <tr style={{ borderBottom: "2px solid black" }}>
                        <th>Photo</th>
                        <th>Restaurant Name</th>
                        <CloseIcon
                          className="close__icon"
                          onClick={handleClose}
                        />
                      </tr>
                    </thead>

                    {getdata.map((e) => {
                      return (
                        <>
                          <tr style={{ borderBottom: "0.7px solid lightgray" }}>
                            <td>
                              <Link to={`/cart/${e.id}`}>
                                <img
                                  src={e.imgdata}
                                  alt="img"
                                  style={{ width: "5rem", height: "5rem" }}
                                />
                              </Link>
                            </td>

                            <td>
                              <p>{e.rname}</p>
                              <p>Price : ₹{e.price}</p>
                              <p>Quantity : {e.qnty}</p>
                            </td>

                            <td>
                              <DeleteIcon
                                style={{
                                  color: "red",
                                  cursor: "pointer",
                                  fontSize: "25px",
                                }}
                                onClick={() => dlt(e.id)}
                              />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <p className="cart__total">Total: ₹{price}</p>
                  </table>
                </div>
              ) : (
                <div className="cart__empty">
                  <p>Your cart is empty</p>
                  <img
                    src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
                    alt=""
                    className="emptycart_img"
                    style={{ width: "5rem", padding: 10 }}
                  />

                  <CloseIcon className="close__icon" onClick={handleClose} />
                </div>
              )}
            </Menu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
