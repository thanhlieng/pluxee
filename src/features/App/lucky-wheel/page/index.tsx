import LocalStorage from '@/apis/LocalStorage';
import useGetToken from '@/apis/account/useGetToken';
import useGetWheel from '@/apis/luckyWheel/useGetWheel';
import LoginForm from '@/components/LoginForm';
import OTPForm from '@/components/OTPForm';
import { FONT_SIZE, FONT_WEIGHT } from '@/config/themes/constants';
import { Modal, Row, Image } from 'antd';
import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';
import ListUser from '../components/ListUser';
import LuckyWheelComponent from '../components/LuckyWheel';
import SelectWheel from '../components/SelectWheel';
import * as S from './LuckyWheelLayout.styles';
import BGImage from '@/assets/images/bg.jpg';
import AxiosClient from '@/apis/AxiosClient';

const LuckyWheelPage = () => {
    const [visible, setVisible] = useState(false);
    const [visibleLogin, setVisibleLogin] = useState(false);
    const [visibleOTP, setVisibleOTP] = useState(false);
    const { data, isSuccess } = useGetToken();
    const { data: dataWheel } = useGetWheel();
    const [dataLuckyWheel, setDataLuckyWheel] = useState<any>([]);
    const [dataItemWheel, setDataItemWheel] = useState([]);
    const [selectedWheel, setSelectedWheel] = useState<any>();
    const [gotItem, setGotItem] = useState<any>();
    const [listHistory, setListHistory] = useState<any>([]);

    if (isSuccess) {
        LocalStorage.setToken(data?.result?.accessToken);
    }

    const requestHistory = async () => {
        const res = await AxiosClient.post('/lucky_draw_api/GetUserWinners', { wheel_id: selectedWheel.id });
        setListHistory(res?.result.items);
    };

    useEffect(() => {
        if (selectedWheel?.id) {
            requestHistory();
        }
    }, [selectedWheel?.id]);

    useEffect(() => {
        if (dataWheel) {
            setDataLuckyWheel(dataWheel?.result?.items);
        }
    }, [dataWheel]);

    useEffect(() => {
        console.log('123', gotItem);
    }, [gotItem]);

    const [isSelectedOption, setIsSelectedOption] = useState(false);

    return (
        <S.Wrapper style={{ backgroundImage: `url(require('../../../../assets/images/bg.jpg'))` }}>
            {/* <Image style={{ width: '100%', height: '100%' }} src={BGImage} /> */}
            {isSelectedOption ? (
                <Row>
                    <LuckyWheelComponent
                        setSelectedWheel={setSelectedWheel}
                        selectedWheel={selectedWheel}
                        setVisible={setVisible}
                        setVisibleLogin={setVisibleLogin}
                        dataLuckyWheel={dataLuckyWheel}
                        setDataLuckyWheel={setDataLuckyWheel}
                        setDataItemWheel={setDataItemWheel}
                        dataItemWheel={dataItemWheel}
                        setGotItem={setGotItem}
                    />
                    <ListUser listHistory={listHistory} />
                </Row>
            ) : (
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                    <div style={{ fontWeight: FONT_WEIGHT.bold, fontSize: FONT_SIZE.xl, color: '#103A71' }}>
                        CHỌN VÒNG QUAY MAY MẮN
                    </div>
                    <div style={{ width: '50%' }}>
                        <SelectWheel
                            onClick={() => {
                                setIsSelectedOption(true);
                            }}
                            setDataItemWheel={setDataItemWheel}
                            dataLuckyWheel={dataLuckyWheel}
                            setDataLuckyWheel={setDataLuckyWheel}
                            setSelectedWheel={setSelectedWheel}
                        />
                    </div>
                </div>
            )}

            <Modal
                title=""
                open={visibleLogin}
                footer={null}
                centered
                onCancel={() => {
                    setVisibleLogin(false);
                }}
            >
                <>
                    {!visibleOTP ? (
                        <LoginForm
                            handleSubmit={() => {
                                setVisibleOTP(true);
                            }}
                        />
                    ) : (
                        <OTPForm
                            onBack={() => {
                                setVisibleOTP(false);
                            }}
                            onFinish={() => {
                                setVisibleLogin(false);
                            }}
                        />
                    )}
                </>
            </Modal>

            <Modal
                title=""
                open={visible}
                footer={null}
                onCancel={() => {
                    setVisible(false);
                }}
            >
                <div style={{ display: 'inline-block', alignItems: 'center', justifyContent: 'center' }}>
                    {gotItem ? (
                        <>
                            <p>Chúc mừng bạn đã nhận được</p>
                            <p style={{ fontWeight: 'bold' }}>Voucher {gotItem.evoucher_name}</p>
                            <p style={{ fontWeight: 'bold' }}>Code: {gotItem.code}</p>
                            <p></p>
                        </>
                    ) : null}
                </div>
            </Modal>
        </S.Wrapper>
    );
};

export default LuckyWheelPage;
