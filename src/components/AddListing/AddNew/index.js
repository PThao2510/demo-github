import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Tabs } from 'antd';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faStreetView, faLocationPin,faMoneyBillWave,faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import "./addNew.css";


const custom1 = require('../../../asset/img/custom/custom1.jpg');

function AddNew() {
    return (
        <div>
            <div className='dashboard-container'>
             <div className='dashboard-title'>
               <div className='header-container'>
                 <h3 className='font-semibold text-xl'>ĐĂNG BÀI</h3>
                 <div className='header-container-right'>
                   <img src={custom1} className='w-10 h-10 rounded-full ml-2 '></img>
                   <strong className='ml-2 mr-2'>Welcome, <span className='text-blue-500'>Alica Noory</span></strong>
                   <Link to='/' className='border-l'>
                     <FontAwesomeIcon icon={faPowerOff} className='p-5 text-blue-400 ' />
                   </Link>
                 </div>
               </div>
             </div>
             <div className='container-widget'>
               <div className='widget-header'>
                 <FontAwesomeIcon icon={faStreetView} className='pt-1 text-blue-500 mr-1' />
                 <h4 className='text-sm'>Location / Contacts</h4>
               </div>
               <div className='custom-form'>
                 <Row gutter={16}>
                   <Col className="gutter-row" span={8}>
                     <div>
                       <h5 className='pb-2'>Địa chỉ</h5>
                       <ul className='input-item'>
                         <FontAwesomeIcon icon={faLocationPin} className='p-4 text-blue-500' />
                         <input type='text' className='input-style' placeholder='   Địa Chỉ của bạn' value={''}></input>
                       </ul>
                     </div>
                   </Col>
                   <Col className="gutter-row" span={8}>
                     <div>
                       <h5 className='pb-2'>Từ khóa</h5>
                       <ul className='input-item'>
                         <FontAwesomeIcon icon={faLocationPin} className='p-4 text-blue-500' />
                         <input type='text' className='input-style' placeholder='   Mô tả' value={''}></input>
                       </ul>
                     </div>
                   </Col>
                   <Col className="gutter-row" span={8}>
                     <div>
                       <h5 className='pb-2'>Giá tiền</h5>
                       <ul className='input-item'>
                         <FontAwesomeIcon icon={faMoneyBillWave} className='p-4 text-blue-500' />
                         <input type='text' className='input-style' placeholder='  Danh mục ' value={''}></input>
                       </ul>
                     </div>
                   </Col>
                 </Row>
               </div>
               {/* map */}
               <div className='custom-form'>
                 <Row gutter={16}>
                   <Col className="gutter-row" span={8}>
                     <div>
                       <h5 className='pb-2'>Thành phố</h5>
                       <ul className='input-item'>
                         <FontAwesomeIcon icon={faLocationPin} className='p-4 text-blue-500' />
                         <input type='text' className='input-style' placeholder='   Địa Chỉ của bạn' value={''}></input>
                       </ul>
                     </div>
                   </Col>
                   <Col className="gutter-row" span={8}>
                     <div>
                       <h5 className='pb-2'>Số điện Thoại</h5>
                       <ul className='input-item'>
                         <FontAwesomeIcon icon={faPhoneFlip} className='p-4 text-blue-500' />
                         <input type='text' className='input-style' placeholder='   Số điện thoại của bạn' value={''}></input>
                       </ul>
                     </div>
                   </Col>
                   <Col className="gutter-row" span={8}>
                     <div>
                       <h5 className='pb-2'>Email</h5>
                       <ul className='input-item'>
                         <FontAwesomeIcon icon={faEnvelope} className='p-4 text-blue-500' />
                         <input type='text' className='input-style' placeholder='   Email của bạn' value={''}></input>
                       </ul>
                     </div>
                   </Col>
                 </Row>
               </div>
             </div>
           </div>
        </div>
    );
}

export default AddNew;