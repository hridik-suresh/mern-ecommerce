import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/order/list",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message); // Show error
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return (
                        <p key={index}>
                          {item.name} x {item.quantity} <span>{item.size}</span>
                        </p>
                      );
                    } else {
                      return (
                        <p key={index}>
                          {item.name} x {item.quantity} <span>{item.size}</span>
                          ,
                        </p>
                      );
                    }
                  })}
                </div>
                <p>{order.address.firstName + " " + order.address.lastName}</p>
                <div>
                  <p>
                    {order.address.street +
                      ", " +
                      order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              <div>
                <p>Item: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? "Paid" : "Not Paid"}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p>$ {order.amount}</p>
              <select >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
