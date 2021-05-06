import Breadcrumbs from "../../components/Breadcrumbs";
import OrderCheckout from "../../components/OrderCheckout";
import OrderDetails from "../../components/OrderDetails";

const Order = () => {

    return (
        <div className="container mx-auto py-12">
            <Breadcrumbs />
            {/* <OrderCheckout /> */}
            <OrderDetails />
        </div>
    )
}

export default Order;