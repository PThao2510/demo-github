import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { BellOutlined } from '@ant-design/icons';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Login from "../../Login";
import './Heade.css';


const logo = require('../../../asset/img/Logo.png');
export default function Header() {
    return (

        <nav className=" bg-white  border-gray-200 dark:bg-gray-900 " >
            <div className='scroll'>
                <div className=" flex flex-wrap items-center justify-between mx-auto" >
                    <a href="#" className="flex items-center">
                        <img src={logo} className="h-12 mr-3" />

                    </a>
                    <button className="button-header-search">
                        <SearchOutlined className='text-blue-600 font-extrabold mr-2 text-sm' />
                        <text className="text-xs">Search...</text>
                    </button>
                    <div className="hidden w-full md:block md:w-auto mr-5  " id="navbar-default">
                        <ul className=" font-medium flex flex-col p-4 md:p-0 border items-center border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                {/* <a href="#" className=" block text-xs py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Trang chủ</a> */}
                                <Link to="/">
                                    <span className="ml-3 block text-xs py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                                        Trang chủ
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="block text-xs py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chung cư</a>
                            </li>
                            <li>
                                <a href="#" className="block text-xs py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Phòng trọ</a>
                            </li>
                            <li>
                                <a href="#" className="block text-xs py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nhà nguyên căn</a>
                            </li>
                            <li>
                                <a href="#" className="block text-xs py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Ở ghép</a>
                            </li>
                            <li className='border-x' style={{ padding: "28px" }}>
                                {/* <a href="#" className="mt-0 text-xs flex items-center pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <UserOutlined />
                                    <span className="ml-3">
                                        Sign in
                                    </span>
                                </a> */}
                                <Link to="/login">
                                    <span className="mt-0 text-xs flex items-center pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        <UserOutlined />
                                        <span className="ml-3">
                                            Sign in
                                        </span>
                                    </span>
                                </Link>
                            </li>
                            <li className="pl-0 pr-7 flex p-7 border-r items-center relative" id='boder'>
                                <BellOutlined />
                                {/* <span className="count">5</span> */}
                            </li>
                            <button className='px-4 btn-add'>
                                <a href="#" className='mt-0 flex items-center'>
                                    <PlusCircleOutlined className='icon-add' />
                                    <span className="ml-3 text-xs">
                                        Đăng bài
                                    </span>
                                </a>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
