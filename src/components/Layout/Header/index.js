import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { SearchOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Tabs, Input } from 'antd';
import Login from "../../Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Register from "../../Register";
import './Heade.css';


const items = [
    {
        key: '1',
        label: (
            <span>
                <FontAwesomeIcon icon={faRightToBracket} style={{ marginRight: '8px' }} />
                Login
            </span>
        ),
        children: <Login />,
    },
    {
        key: '2',
        label: (
            <span>
                <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '8px' }} />
                Register
            </span>
        ),
        children: <Register />,
    },
];

const logo = require('../../../asset/img/Logo.png');
const { Search } = Input;
export default function Header() {

    //bật login form and register form
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (

        <nav className="scroll bg-white  border-gray-200 dark:bg-gray-900 " >
            <div className=''>
                <div className=" flex flex-wrap items-center justify-between mx-auto" >
                    <a href="#" className="flex items-center">
                        <Link to= "/"><img src={logo} className="h-12 mr-3" /></Link>
                    </a>
                    {/* <button className="button-header-search">
                        <SearchOutlined className='text-blue-600 font-extrabold mr-2 text-sm' />
                        <text className="text-xs">Search...</text>
                    </button> */}
                    <Search  placeholder="Search..."   style={{ width: 400 }} />
                    <div className="hidden w-full md:block md:w-auto mr-5  " id="navbar-default">
                        <ul className=" font-medium flex flex-col p-4 md:p-0 border items-center border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link to="/">
                                    <span className="ml-3 block text-xs py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                                        Trang chủ
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="block text-xs py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chung cư</a>
                            </li>
                            <li>
                                <a href="#" className="block text-xs py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Phòng trọ</a>
                            </li>
                            <li>
                                <a href="#" className="block text-xs py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nhà nguyên căn</a>
                            </li>
                            <li>
                                <a href="#" className="block text-xs py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Ở ghép</a>
                            </li>
                            <li className='border-x' style={{ padding: "20px" }}>
                                <button onClick={showModal} className="mt-0 text-xs flex items-center pl-3 pr-4 shadow-none text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <UserOutlined />
                                    <span className="ml-3">
                                        Sign in
                                    </span>
                                </button>
                                <Modal open={isModalOpen} centered onCancel={handleCancel} width={500} footer={null} >
                                    <div className="logo-form">
                                        <img src={logo} className="h-20" />
                                    </div>
                                    <div className='title-logo' style={{ marginBottom: "10px" }}>
                                        <h3>Welcome back 👋</h3>
                                    </div>
                                    <div className='content-body'>
                                        <Tabs defaultActiveKey="1" items={items} />
                                    </div>
                                </Modal>
                            </li>
                            <li className="pl-0 pr-7 flex p-7 border-r items-center relative" id='boder'>
                                <BellOutlined />
                                {/* <span className="count">5</span> */}
                            </li>
                            <button className='px-4 btn-add'>
                                <Link to="/addlisting" className='mt-0 flex items-center'>
                                    <PlusCircleOutlined className='icon-add' />
                                    <span className="ml-3 text-xs">
                                        Đăng bài
                                    </span>
                                </Link>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
