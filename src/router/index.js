import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import RoomInfo from "@/pages/RoomInfo";
import Reserve from "@/pages/Reserve";
import ReserveSuccess from "@/pages/ReservationSuccess";
import Login from "@/pages/login";
import UserOrder from "@/pages/UserOrder";
import OrderList from "@/pages/OrderList";
import AllProduct from "@/components/AllProduct";

//後台
import adminLogin from "@/pages/adminLogin";
import Dashboard from "@/pages/Dashboard";
import Product from "@/components/Product";
import Orders from "@/components/orders";
import Coupon from "@/components/coupon";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 使用者輸入不存在的路由名稱，轉向到 path:'error'頁面上
      path: "*",
      redirect: "error"
    },
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "",
          //路徑盡可能小寫
          name: "AllProduct",
          component: AllProduct
        }
      ]
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/roominfo/:productId",
      //路徑盡可能小寫
      name: "RoomInfo",
      component: RoomInfo
    },
    {
      path: "/reserve",
      name: "Reserve",
      component: Reserve
    },
    {
      path: "/reserveSuccess/:orderId",
      name: "ReserveSuccess",
      component: ReserveSuccess
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/userorder",
      name: "UserOrder",
      component: UserOrder
    },
    {
      path: "/orderlist",
      name: "OrderList",
      component: OrderList,
      meta: { requiresAuth: true }
    },

    //後台
    {
      path: "/adminLogin",
      name: "adminLogin",
      component: adminLogin
    },
    {
      path: "/admin",
      name: "Dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: "product",
          //路徑盡可能小寫
          name: "Product",
          component: Product
          // meta: { requiresAuth: true }
          //驗證守衛參數
        },
        {
          path: "orders",
          //路徑盡可能小寫
          name: "Orders",
          component: Orders
          // meta: { requiresAuth: true }
          //驗證守衛參數
        },
        {
          path: "coupon",
          //路徑盡可能小寫
          name: "Coupon",
          component: Coupon
          // meta: { requiresAuth: true }
          //驗證守衛參數
        }
      ]
    }
  ]
});
