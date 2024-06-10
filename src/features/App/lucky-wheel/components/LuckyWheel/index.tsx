import { FONT_WEIGHT } from '@/config/themes/constants';
import { LuckyWheel } from '@lucky-canvas/react';
import { Button, Col } from 'antd';
import { useRef, useState } from 'react';
import SelectWheel from '../SelectWheel';
import LocalStorage from '@/apis/LocalStorage';
import AxiosClient from '@/apis/AxiosClient';
const LuckyWheelComponent = ({
    setVisible,
    dataLuckyWheel,
    setDataLuckyWheel,
    setVisibleLogin,
    setDataItemWheel,
    dataItemWheel,
    selectedWheel,
    setSelectedWheel,
}: any) => {
    const [blocks] = useState([{ padding: '25px', background: '#103A71' }]);
    const [prizes] = useState([
        { background: '#B9D9EB', fonts: [{ text: '0', fontColor: '#103A71' }] },
        { background: '#ffffff', fonts: [{ text: '1', fontColor: '#103A71' }] },
        { background: '#B9D9EB', fonts: [{ text: '2', fontColor: '#103A71' }] },
        { background: '#ffffff', fonts: [{ text: '3', fontColor: '#103A71' }] },
        { background: '#B9D9EB', fonts: [{ text: '4', fontColor: '#103A71' }] },
        { background: '#ffffff', fonts: [{ text: '5', fontColor: '#103A71' }] },
        { background: '#B9D9EB', fonts: [{ text: '4', fontColor: '#103A71' }] },
        { background: '#ffffff', fonts: [{ text: '5', fontColor: '#103A71' }] },
    ]);
    console.log('dataItemWheel', dataItemWheel);

    // const dataSpin = useMemo(() => {
    //     return dataListSpin?.data.map((item: any, index: number) => {
    //         return {
    //             background: colors[index],
    //             fonts: [
    //                 {
    //                     text: item.rewards[0].item_value,
    //                     fontColor: 'white',
    //                     top: '15vw',
    //                     fontSize: '3.5vw',
    //                     fontWeight: 'bold',
    //                 },
    //             ],
    //             imgs: [
    //                 {
    //                     src: item.rewards[0].item_icon,
    //                     width: '12vw',
    //                     height: '12vw',
    //                     top: 10,
    //                 },
    //             ],
    //         };
    //     });
    // }, [dataListSpin]);

    const charePointAndSpin = async () => {
        const res = await AxiosClient.post(
            '/lucky_draw_api/ChargePoint',
            {
                wheel_id: selectedWheel.id,
                point: selectedWheel.point,
            },
            {
                headers: {
                    Authorization: LocalStorage.getTokenUser(),
                },
            }
        );
        console.log(res);

        myLucky.current.play();
        setTimeout(() => {
            myLucky.current.stop();
        }, 2500);
    };

    const requestEvoucherDetail = async (voucher: any) => {
        const res = await AxiosClient.post(
            '/lucky_draw_api/GetEvoucherCode',
            {
                evoucher_id: voucher,
                wheelitem_id: selectedWheel.id,
            },
            { headers: { Authorization: LocalStorage.getTokenUser() } }
        );
        console.log(res);
    };

    const myLucky = useRef();
    return (
        <Col span={10}>
            <div
                style={{
                    justifyContent: 'center',
                    display: 'flex',
                    position: 'relative',
                    paddingTop: 20,
                }}
            >
                <div
                    style={{
                        width: '60px',
                        height: '60px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(https://thmart.s3.ap-southeast-1.amazonaws.com/scutt/resource/15.png)`,
                        position: 'absolute',
                        zIndex: 99,
                        top: -5,
                    }}
                />

                <div style={{ marginLeft: -5, marginTop: -5 }}>
                    <LuckyWheel
                        ref={myLucky}
                        width="400px"
                        height="400px"
                        blocks={blocks}
                        prizes={dataItemWheel}
                        // buttons={buttons}
                        onStart={() => {
                            // 点击抽奖按钮会触发star回调
                            // myLucky.current.play();
                            // setTimeout(() => {
                            //     const index = (Math.random() * 6) >> 0;
                            //     myLucky.current.stop(index);
                            // }, 2500);
                        }}
                        onEnd={(prize) => {
                            // 抽奖结束会触发end回调
                            console.log(prize);
                            requestEvoucherDetail(prize.evoucher_id);
                            setVisible(true);
                        }}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                <Button
                    onClick={() => {
                        const token = LocalStorage.getTokenUser();
                        if (token) {
                            charePointAndSpin();
                        } else {
                            setVisibleLogin(true);
                        }
                    }}
                    type="primary"
                    style={{
                        backgroundColor: '#1BB1E7 ',
                        width: 300,
                        fontWeight: FONT_WEIGHT.bold,
                        height: 50,
                    }}
                >
                    SPIN
                </Button>
            </div>

            <SelectWheel
                setDataItemWheel={setDataItemWheel}
                dataLuckyWheel={dataLuckyWheel}
                setDataLuckyWheel={setDataLuckyWheel}
            />
        </Col>
    );
};

export default LuckyWheelComponent;
