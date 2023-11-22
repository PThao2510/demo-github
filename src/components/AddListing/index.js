import React from 'react';
import { faUserPen, faTableList, faFileCirclePlus, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs } from 'antd';
import "./addlisting.css"
import Register from "../Register";
import AddNew from "./AddNew";


const items = [
  {
    key: '1',
    label: (
      <span>
        <FontAwesomeIcon icon={faFileCirclePlus} className='pr-2 text-blue-600' />
        Đăng bài
      </span>
    ),
    children: <AddNew />,
  },
  {
    key: '2',
    label: (
      <span>
        <FontAwesomeIcon icon={faTableList} className='pr-2 text-blue-600' />
        Danh sách bài viết
      </span>
    ),
    children: "<Register />",
  },
  {
    key: '3',
    label: (
      <span>
        <FontAwesomeIcon icon={faUserPen} className='pr-2 text-blue-600' />
        Thông tin cá nhân
      </span>
    ),
    children: "<Register />",
  },
];


export default function AddListing() {
  return (
    // <div className='dashboard-menu'>
    //   <Row gutter={16}>
    //     <Col className="gutter-row" span={5}>
    //       <div className="fixed user-menu">
    //         <div className='mt-28'>
    //           <h3 className='pb-3 font-semibold text-xs px-5 text-zinc-500'>LISTINGS</h3>
    //           <ul className='no-list-style'>
    //             <li className='list-news'>
    //               <FontAwesomeIcon icon={faFileCirclePlus} className='pr-2 text-blue-600' />
    //               Đăng bài
    //             </li>
    //             <li>
    //               <FontAwesomeIcon icon={faTableList} className='pr-2 text-blue-600' />
    //               Danh sách bài viết
    //             </li>
    //             <li>
    //               <FontAwesomeIcon icon={faUserPen} className='pr-2 text-blue-600' />
    //               Thông tin cá nhân
    //             </li>
    //           </ul>
    //         </div>
    //         <div className='dashboard-menu-footer'>© CLEANHOME 2022 . ALL RIGHTS RESERVED.</div>
    //       </div>
    //     </Col>
    //     <Col className="gutter-row" span={19}>
    //       <div className='dashboard-container'>
    //         <div className='dashboard-title'>
    //           <div className='header-container'>
    //             <h3 className='font-semibold text-xl'>ĐĂNG BÀI</h3>
    //             <div className='header-container-right'>
    //               <img src={custom1} className='w-10 h-10 rounded-full ml-2 '></img>
    //               <strong className='ml-2 mr-2'>Welcome, <span className='text-blue-500'>Alica Noory</span></strong>
    //               <Link to='/' className='border-l'>
    //                 <FontAwesomeIcon icon={faPowerOff} className='p-5 text-blue-400 ' />
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //         <div className='container-widget'>
    //           <div className='widget-header'>
    //             <FontAwesomeIcon icon={faStreetView} className='pt-1 text-blue-500 mr-1' />
    //             <h4 className='text-sm'>Location / Contacts</h4>
    //           </div>
    //           <div className='custom-form'>
    //             <Row gutter={16}>
    //               <Col className="gutter-row" span={8}>
    //                 <div>
    //                   <h5 className='pb-2'>Địa chỉ</h5>
    //                   <ul className='input-item'>
    //                     <FontAwesomeIcon icon={faLocationPin} className='p-4 text-blue-500' />
    //                     <input type='text' className='input-style' placeholder='   Địa Chỉ của bạn' value={''}></input>
    //                   </ul>
    //                 </div>
    //               </Col>
    //               <Col className="gutter-row" span={8}>
    //                 <div>
    //                   <h5 className='pb-2'>Từ khóa</h5>
    //                   <ul className='input-item'>
    //                     <FontAwesomeIcon icon={faLocationPin} className='p-4 text-blue-500' />
    //                     <input type='text' className='input-style' placeholder='   Mô tả' value={''}></input>
    //                   </ul>
    //                 </div>
    //               </Col>
    //               <Col className="gutter-row" span={8}>
    //                 <div>
    //                   <h5 className='pb-2'>Giá tiền</h5>
    //                   <ul className='input-item'>
    //                     <FontAwesomeIcon icon={faMoneyBillWave} className='p-4 text-blue-500' />
    //                     <input type='text' className='input-style' placeholder='  Danh mục ' value={''}></input>
    //                   </ul>
    //                 </div>
    //               </Col>
    //             </Row>
    //           </div>
    //           {/* map */}
    //           <div className='custom-form'>
    //             <Row gutter={16}>
    //               <Col className="gutter-row" span={8}>
    //                 <div>
    //                   <h5 className='pb-2'>Thành phố</h5>
    //                   <ul className='input-item'>
    //                     <FontAwesomeIcon icon={faLocationPin} className='p-4 text-blue-500' />
    //                     <input type='text' className='input-style' placeholder='   Địa Chỉ của bạn' value={''}></input>
    //                   </ul>
    //                 </div>
    //               </Col>
    //               <Col className="gutter-row" span={8}>
    //                 <div>
    //                   <h5 className='pb-2'>Số điện Thoại</h5>
    //                   <ul className='input-item'>
    //                     <FontAwesomeIcon icon={faPhoneFlip} className='p-4 text-blue-500' />
    //                     <input type='text' className='input-style' placeholder='   Số điện thoại của bạn' value={''}></input>
    //                   </ul>
    //                 </div>
    //               </Col>
    //               <Col className="gutter-row" span={8}>
    //                 <div>
    //                   <h5 className='pb-2'>Email</h5>
    //                   <ul className='input-item'>
    //                     <FontAwesomeIcon icon={faEnvelope} className='p-4 text-blue-500' />
    //                     <input type='text' className='input-style' placeholder='   Email của bạn' value={''}></input>
    //                   </ul>
    //                 </div>
    //               </Col>
    //             </Row>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>

    <div className='dashboard-menu'>
      <Tabs tabAddlisting tabPosition='left' defaultActiveKey="1" items={items} />
    </div>
  );
}
