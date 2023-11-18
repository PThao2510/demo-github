import React from 'react';
import { Col, Row, Radio } from 'antd';
import { Rate } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {HeartOutlined } from '@ant-design/icons'
import './item-product.css'

const product = require('../../../asset/img/Product/Forsale.jpg');
const custom1 = require('../../../asset/img/custom/custom1.jpg')
export default function ItemProduct() {
    return (
        <div className='grid-item'>
            <div className='for-sale'>
                <div className='listing-item'>
                    <article className='fl-wrap'>
                        <div className='geodir-img relative'>
                            <div className=''>
                                <a href='#'>
                                    <img src={product}></img>
                                    <div className=''></div>
                                </a>
                            </div>
                            <div className='absolute top-0 w-full h-full'>
                                <div className='content'></div>
                                <Row gutter={16} className='w-full h-full m-0 pt-8 pb-2 px-4 z-10 absolute top-0'>
                                    <Col span={20}>
                                        <div className='contact-product'>
                                            <ul className=' flex '>
                                                <li><a href='#' className='cat-otp'>Sale</a></li>
                                                <li><a href='#' className='cat-otp ml-3'>Apartment</a></li>
                                            </ul>
                                            <div className=''>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                                <span className='ml-1 text-white'>70 Bright St New York, USA</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={4}>
                                        <div className='contact-product items-center ml-4'>
                                            <div className='contact-share place-items-center'>  
                                                <a href='#' ><span className='bg-white py-2 px-2.5 rounded-sm'><FontAwesomeIcon icon={faHeart} className='save-i  hover:fill-red-500 ' /></span></a>
                                                <a href='#' className='pt-7'><span className='bg-white py-2 px-2.5 rounded-sm '><FontAwesomeIcon icon={faShuffle} /></span></a>
                                            </div>
                                            <div className='text-white font-normal text-sm'>
                                                <FontAwesomeIcon icon={faCamera} className='mr-0.5' />
                                                <span> 8</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </article>
                    <div className='geodir-content fl-wrap'>
                        <h3><a href='#' className='text-lg font-medium text-gray-500'>Gorgeous House For Sale</a></h3>
                        <div className='price'>$ 600,000</div>
                        <p className='text-xs pb-3 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla...</p>
                        <div className='content-details'>
                            <ul className='flex text-gray-400'>
                                <li><FontAwesomeIcon icon={faBed} className='mr-2' /><span>{3}</span></li>
                                <li><FontAwesomeIcon icon={faBath} className='mr-2' /><span>{3}</span></li>
                                <li><FontAwesomeIcon icon={faCube} className='mr-2' /><span>{450}</span></li>
                            </ul>
                        </div>
                        <div className='rate border-t'>
                            <a href='' className='flex pt-3'>
                                <img src={custom1} className='w-10 h-10 rounded-full '></img>
                                <span className='pt-2.5 ml-3 text-xs text-gray-500 font-semibold'>By Liza Rose</span>
                            </a>
                            <Rate disabled allowHalf defaultValue={3.5} className='text-sm ml-28 pt-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
