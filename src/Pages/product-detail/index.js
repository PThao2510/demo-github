import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLocationDot, faUsers, faBed, faBath, faHome, faUserCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Rate } from 'antd';
import { PhoneTwoTone, MailTwoTone, CreditCardTwoTone } from '@ant-design/icons';
import MapLocation from '../../components/Map';
import { Col, Row, Card } from 'antd';
import Banner from '../../components/banner';
import './ProductDetail.css';

function ProductDetail() {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }
    return (
        <div>
            <Banner/>
            <div className='detail-container'>
                <div className='content-detail'>
                    <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                    >
                        <Col className="gutter-row" span={16}>
                            <Card className='card content-left'>
                                <div className='img-list'>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={8}>
                                            <img className='img-item-top' src='https://homeradar.kwst.net/images/all/1.jpg' />
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <img className='img-item-top' src='https://homeradar.kwst.net/images/all/8.jpg' />
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <img className='img-item-top' src='https://homeradar.kwst.net/images/all/4.jpg' />
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={16}>
                                            <img className='img-item-top' src='https://homeradar.kwst.net/images/all/3.jpg' />
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <img className='img-item-top' style={{ marginBottom: '11px' }} src='https://homeradar.kwst.net/images/all/5.jpg' />
                                            <img className='img-item-top' src='https://homeradar.kwst.net/images/all/9.jpg' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className='properties'>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={6}>
                                            <div className='item-properties'>
                                                <FontAwesomeIcon className='icon-pro' icon={faHome} />
                                                <h4 className='title-item-pro'>Type</h4>
                                                <span className='des-item-pro'>Apartment/ House</span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className='item-properties'>
                                                <FontAwesomeIcon className='icon-pro' icon={faUsers} />
                                                <h4 className='title-item-pro'>Accomodation</h4>
                                                <span className='des-item-pro'>6 Guest</span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className='item-properties'>
                                                <FontAwesomeIcon className='icon-pro' icon={faBed} />
                                                <h4 className='title-item-pro'>Bedrooms</h4>
                                                <span className='des-item-pro'>3 Bedrooms / 4 Beds</span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className='item-properties'>
                                                <FontAwesomeIcon className='icon-pro' icon={faBath} />
                                                <h4 className='title-item-pro'>Bathrooms</h4>
                                                <span className='des-item-pro'>3 Full</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='about'>
                                    <h2 className='about-title'>About This Listing</h2>
                                    <span className='about-des'>
                                        Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
                                    </span>
                                </div>
                                <div className='detail'>
                                    <h3 className='detail-title'>Details</h3>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={8}>
                                            <div className='detail-item'>
                                                <span className='detail-item-type'>Property Id:
                                                    <strong>154</strong>
                                                </span>
                                                <span className='detail-item-type'>Rooms:
                                                    <strong>8</strong>
                                                </span>
                                                <span className='detail-item-type'>Available from:
                                                    <strong>25.05.2020</strong>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <div className='detail-item'>
                                                <span className='detail-item-type'>Property Lot Size:
                                                    <strong>850 m2</strong>
                                                </span>
                                                <span className='detail-item-type'>Bedrooms:
                                                    <strong>2</strong>
                                                </span>
                                                <span className='detail-item-type'>Price:
                                                    <strong>$ 50.500.00</strong>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <div className='detail-item'>
                                                <span className='detail-item-type'>Bathrooms:
                                                    <strong>4</strong>
                                                </span>
                                                <span className='detail-item-type'>Garage Size:
                                                    <strong>2 cars</strong>
                                                </span>
                                                <span className='detail-item-type'>Type:
                                                    <strong>Apartment/House</strong>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <MapLocation location={location} zoomLevel={17} />
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div className='box-widget'>
                                <div className='box-widget-header'>
                                    <div className='profile'>
                                        <div className='profile-img'>
                                            <img src='https://homeradar.kwst.net/images/all/1.jpg' />
                                        </div>
                                        <div className='profile-info'>
                                            <h4 className='profile-name'>Jessie Wilcox</h4>
                                            <span className='profile-des'><span>22</span>Property Listings</span>
                                        </div>
                                        <div className='profile-add'>
                                            <FontAwesomeIcon icon={faUserCheck} />
                                        </div>
                                    </div>
                                </div>
                                <Card className='box-widget-container'>
                                    <div className='box-widget-content'>
                                        <div className='contats-list'>
                                            <div className='contats-item'>
                                                <span className='contats-item-name'>
                                                    <PhoneTwoTone className='contats-icon' />
                                                    Phone:
                                                </span>
                                                <span className='contats-item-content'>
                                                    +7(123)987654
                                                </span>
                                            </div>
                                            <div className='contats-item'>
                                                <span className='contats-item-name'>
                                                    <MailTwoTone className='contats-icon' />
                                                    Email:
                                                </span>
                                                <span className='contats-item-content'>
                                                    JessieWilcox@domain.com
                                                </span>
                                            </div>
                                            <div className='contats-item'>
                                                <span className='contats-item-name'>
                                                    <CreditCardTwoTone className='contats-icon' />
                                                    Website:
                                                </span>
                                                <span className='contats-item-content'>
                                                    themeforest.net
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='profile-widget-footer'>
                                        <button className='btn-view-profile'>View Profile</button>
                                        <FontAwesomeIcon className='widget-footer-send' icon={faPaperPlane} />
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;