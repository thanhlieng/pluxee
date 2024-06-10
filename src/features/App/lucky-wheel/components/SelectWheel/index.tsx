import useGetWheelItems from '@/apis/luckyWheel/useGetWheelItems';
import { Card, Col, Row, Image } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import LD from '@/assets/images/ld.png';

type Wheel = {
    id: number;
    name: string;
    code: string;
    point: number;
    updated: string;
    selected?: boolean;
};

const SelectWheel = ({
    dataLuckyWheel,
    setDataLuckyWheel,
    setDataItemWheel,
    onClick,
    setSelectedWheel,
}: {
    dataLuckyWheel: Wheel[];
    setDataLuckyWheel: Dispatch<SetStateAction<Wheel[]>>;
    setDataItemWheel: any;
    onClick?: () => void;
    setSelectedWheel: any;
}) => {
    const mutation = useGetWheelItems();
    const onSelect = async (item: Wheel) => {
        const newData = [...dataLuckyWheel];
        const indexSelected = newData.findIndex((v) => v.id == item.id);

        newData.forEach((_value, index) => {
            if (index !== indexSelected) {
                newData[index].selected = false;
            } else {
                newData[index].selected = true;
            }
        });
        setDataLuckyWheel(newData);
        await mutation.mutate(
            { wheel_id: item.id, limit: 10 },
            {
                onSuccess(data) {
                    //const dataParse = JSON.parse(data);
                    // const newData = dataParse?.result?.items.map((item: any) => {
                    //     return { background: '#B9D9EB', fonts: [{ text: item.evoucher_name, fontColor: '#103A71' }] };
                    // });
                    console.log('newData', data);
                    const ok = JSON.parse(data.replaceAll('\r\n', '').replaceAll('\t', ''));
                    console.log('??', ok.result.items);
                    const listPrize = ok.result.items.map((ele, index) => {
                        if (index % 3 == 0 && ok.result.items.length % 2 != 0) {
                            return {
                                background: '#49FDFF',
                                fonts: [
                                    {
                                        text: ele.evoucher_name,
                                        fontColor: '#103A71',
                                        top: 15,
                                        lengthLimit: 90,
                                        fontSize: 16,
                                    },
                                ],
                                imgs: [{ src: ele.url_image }],
                                range: ele.win_rate,
                                ...ele,
                            };
                        }
                        if (index % 2 == 0) {
                            return {
                                background: '#B9D9EB',
                                fonts: [
                                    {
                                        text: ele.evoucher_name,
                                        fontColor: '#103A71',
                                        top: 15,
                                        lengthLimit: 90,
                                        fontSize: 16,
                                    },
                                ],
                                imgs: [{ src: ele.url_image }],
                                range: ele.win_rate,
                                ...ele,
                            };
                        } else {
                            return {
                                background: '#ffffff',
                                fonts: [
                                    {
                                        text: ele.evoucher_name,
                                        fontColor: '#103A71',
                                        top: 15,
                                        lengthLimit: 90,
                                        fontSize: 16,
                                    },
                                ],
                                imgs: [{ src: ele.url_image }],
                                range: ele.win_rate,
                                ...ele,
                            };
                        }
                    });
                    console.log(listPrize);

                    setDataItemWheel(listPrize);
                    setSelectedWheel && setSelectedWheel(item);
                    onClick && onClick();
                },
            }
        );
    };

    return (
        <Row style={{ marginTop: 50 }} gutter={[24, 24]}>
            {dataLuckyWheel?.map((item) => (
                <Col key={item.id} span={8}>
                    <Card
                        onClick={() => onSelect(item)}
                        style={{
                            backgroundColor: item.selected ? '#B9D9EB' : 'white',
                            border: '2px solid #B9D9EB',
                            color: '#103A71',
                            flex: 1,
                        }}
                        hoverable
                        bordered={false}
                    >
                        <p
                            style={{
                                textAlign: 'end',
                                fontWeight: 'bold',
                                position: 'absolute',
                                top: 10,
                                width: '80%',
                            }}
                        >
                            {item.point}point
                        </p>
                        <Image src={LD} alt="Not found" preview={false} style={{ marginTop: 10 }} />
                        <div style={{ textAlign: 'center', marginTop: 10 }}>{item.name}</div>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default SelectWheel;
