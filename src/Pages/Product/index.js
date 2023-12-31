import React from 'react';
import { Radio } from 'antd';
import './Product.css';
import ItemProduct from "../Item-product";
import { Col, Row } from 'antd';


export default function Product() {
    return (
        <div className='product'>
            <div className='product-content'>
                <div className='flex py-12 justify-between'>
                    <div className='col-md-4 mt-2'>
                        <h2 className='text-sm font-bold'>TIN NỔi BẬT</h2>
                    </div>
                    <div className='col-md-8 '>
                        <div className='flex justify-end w-full text-xs font-normal'>
                            <Radio.Group defaultValue="a" buttonStyle="solid">
                                <Radio.Button value="a">Tất cả</Radio.Button>
                                <Radio.Button value="b">Cao-Thấp</Radio.Button>
                                <Radio.Button value="c">Thấp-Cao</Radio.Button>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={8}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <ItemProduct />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <ItemProduct />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
