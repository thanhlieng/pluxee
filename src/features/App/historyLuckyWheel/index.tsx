import { FONT_SIZE, FONT_WEIGHT } from '@/config/themes/constants';
import * as S from './HistoryLuckyWheelLayout.styles';
import { Pagination, Table } from 'antd';
const HistoryLuckyWheel = () => {
    const dataSource = [
        {
            key: '1',
            typeLucky: 'Vòng quay số 1',
            gift: 'iphone 13 pro max',
            name: 'Nguyễn Đức Thịnh',
            phone: '0795296216',
            created_at: '08/06/2024',
        },
        {
            key: '1',
            typeLucky: 'Vòng quay số 1',
            gift: 'iphone 13 pro max',
            name: 'Nguyễn Đức Thịnh',
            phone: '0795296216',
            created_at: '08/06/2024',
        },
        {
            key: '1',
            typeLucky: 'Vòng quay số 1',
            gift: 'iphone 13 pro max',
            name: 'Nguyễn Đức Thịnh',
            phone: '0795296216',
            created_at: '08/06/2024',
        },
        {
            key: '1',
            typeLucky: 'Vòng quay số 1',
            gift: 'iphone 13 pro max',
            name: 'Nguyễn Đức Thịnh',
            phone: '0795296216',
            created_at: '08/06/2024',
        },
        {
            key: '1',
            typeLucky: 'Vòng quay số 1',
            gift: 'iphone 13 pro max',
            name: 'Nguyễn Đức Thịnh',
            phone: '0795296216',
            created_at: '08/06/2024',
        },
        {
            key: '1',
            typeLucky: 'Vòng quay số 1',
            gift: 'iphone 13 pro max',
            name: 'Nguyễn Đức Thịnh',
            phone: '0795296216',
            created_at: '08/06/2024',
        },
        {
            key: '1',
            typeLucky: 'Vòng quay số 1',
            gift: 'iphone 13 pro max',
            name: 'Nguyễn Đức Thịnh',
            phone: '0795296216',
            created_at: '08/06/2024',
        },
    ];

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
        {
            title: 'Thời gian khởi tạo',
            dataIndex: 'created_at',
            key: 'created_at',
        },
    ];
    return (
        <S.Wrapper>
            {' '}
            <div
                style={{
                    textAlign: 'center',
                    fontWeight: FONT_WEIGHT.semibold,
                    fontSize: FONT_SIZE.xl,
                    color: '#103A71',
                    marginBottom: 20,
                }}
            >
                Danh sách quay thưởng
            </div>
            <Table pagination={false} bordered dataSource={dataSource} columns={columns} />
            <div style={{ justifyContent: 'end', display: 'flex', marginTop: 10 }}>
                <Pagination defaultCurrent={1} total={7} />
            </div>
        </S.Wrapper>
    );
};

export default HistoryLuckyWheel;
