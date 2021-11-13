import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import './Dashboard.css';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddAProduct from '../AddAProduct/AddAProduct';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { userFromDB } = useAuth();
    return (
        <div>
            <div className="sidebar w-full h-auto relative m-0 p-0 sm:w-48 bg-gray-100 sm:h-full overflow-auto sm:fixed">
                {
                    userFromDB?.role === 'user' ? <div>
                        <Link to={`${url}/review`} className="active block float-left sm:float-none text-black-900 p-4 no-underline">Review</Link>
                        <Link to={`${url}/my-orders`} className='block float-left sm:float-none text-black-900 p-4 no-underline'>My Orders</Link>
                    </div>
                        :
                        <div>
                            <Link to={`${url}/manage-products`} className='block float-left sm:float-none text-black-900 p-4 no-underline'>Manage Products</Link>
                            <Link to={`${url}/manage-orders`} className='block float-left sm:float-none text-black-900 p-4 no-underline'>Manage Orders</Link>
                            <Link to={`${url}/add-a-product`} className='block float-left sm:float-none text-black-900 p-4 no-underline'>Add A Product</Link>
                            <Link to={`${url}/make-admin`} className='block float-left sm:float-none text-black-900 p-4 no-underline'>Make Admin</Link>
                        </div>
                }
            </div>

            <div className="ml-0 md:ml-52 sm:ml-48 px-4 pt-10">
                <Switch>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/my-orders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-orders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-a-product`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;