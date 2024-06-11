import { FONT_SIZE, FONT_WEIGHT } from '@/config/themes/constants';
import { Col, Pagination, Table } from 'antd';
import { useEffect, useState } from 'react';

const ListUser = ({ listHistory }: any) => {
    const [dataSource, setDataSource] = useState<any>([]);
    useEffect(() => {
        const ar = listHistory?.map((ele, index) => {
            return {
                key: index,
                typeLucky: ele.wheel_name,
                gift: ele.evoucher_name,
                name: '',
                phone: ele.phone,
            };
        });
        setDataSource(ar);
    }, [listHistory]);
    // const dataSource = [
    //     {
    //         key: '1',
    //         typeLucky: 'Vòng quay số 1',
    //         gift: 'iphone 13 pro max',
    //         name: 'Nguyễn Đức Thịnh',
    //         phone: '0795296216',
    //     },
    //     {
    //         key: '1',
    //         typeLucky: 'Vòng quay số 1',
    //         gift: 'iphone 13 pro max',
    //         name: 'Nguyễn Đức Thịnh',
    //         phone: '0795296216',
    //     },
    //     {
    //         key: '1',
    //         typeLucky: 'Vòng quay số 1',
    //         gift: 'iphone 13 pro max',
    //         name: 'Nguyễn Đức Thịnh',
    //         phone: '0795296216',
    //     },
    //     {
    //         key: '1',
    //         typeLucky: 'Vòng quay số 1',
    //         gift: 'iphone 13 pro max',
    //         name: 'Nguyễn Đức Thịnh',
    //         phone: '0795296216',
    //     },
    //     {
    //         key: '1',
    //         typeLucky: 'Vòng quay số 1',
    //         gift: 'iphone 13 pro max',
    //         name: 'Nguyễn Đức Thịnh',
    //         phone: '0795296216',
    //     },
    //     {
    //         key: '1',
    //         typeLucky: 'Vòng quay số 1',
    //         gift: 'iphone 13 pro max',
    //         name: 'Nguyễn Đức Thịnh',
    //         phone: '0795296216',
    //     },
    //     {
    //         key: '1',
    //         typeLucky: 'Vòng quay số 1',
    //         gift: 'iphone 13 pro max',
    //         name: 'Nguyễn Đức Thịnh',
    //         phone: '0795296216',
    //     },
    // ];

    const columns = [
        {
            title: 'Loai vòng quay',
            dataIndex: 'typeLucky',
            key: 'typeLucky',
        },
        {
            title: 'Quà tặng',
            dataIndex: 'gift',
            key: 'gift',
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
    ];
    return (
        <Col style={{ paddingLeft: 100 }} span={14}>
            <div
                style={{
                    textAlign: 'center',
                    fontWeight: FONT_WEIGHT.semibold,
                    fontSize: FONT_SIZE.xl,
                    color: '#103A71',
                    marginBottom: 20,
                }}
            >
                Danh sách khách hàng nhận quà
            </div>
            <Table pagination={false} bordered dataSource={dataSource} columns={columns} />
            {/* <div style={{ justifyContent: 'end', display: 'flex', marginTop: 10 }}>
                <Pagination defaultCurrent={1} total={7} />
            </div> */}
        </Col>
    );
};

export default ListUser;
