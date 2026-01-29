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
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message); // Show error
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch orders");
    }
  };

  const statusHandler = async (evt, orderId) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/order/status",
        { orderId, status: evt.target.value },
        { headers: { token } },
      );
      if (response.data.success) {
        fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update order status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Page</h3>
      <div className="space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src={assets.parcel_icon}
                  alt="Parcel Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <p className="text-sm text-gray-600">
                      {order.items.map((item, index) => {
                        const separator =
                          index === order.items.length - 1 ? "" : ", ";
                        return (
                          <span key={index}>
                            {item.name} x {item.quantity}{" "}
                            <span className="text-xs text-gray-500">
                              ({item.size})
                            </span>
                            {separator}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <p className="font-medium text-gray-800">
                    {order.address.firstName + " " + order.address.lastName}
                  </p>
                  <div className="text-sm text-gray-600 mb-1">
                    <p>
                      {order.address.street}, {order.address.city},{" "}
                      {order.address.state}, {order.address.country},{" "}
                      {order.address.zipcode}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{order.address.phone}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Items: {order.items.length}</p>
                    <p>Method: {order.paymentMethod}</p>
                    <p>Payment: {order.payment ? "Paid" : "Not Paid"}</p>
                    <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    $ {order.amount}
                  </div>
                  <select
                    onChange={(evt) => statusHandler(evt, order._id)}
                    value={order.status}
                    className="mt-2 sm:mt-0 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
