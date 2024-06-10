import NumerologyImage from '@/assets/images/favico.png';
import { TAB_SIZE } from '@/config/theme';
import useWindowSize from '@/hooks/useWindowSize';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Image, Layout, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuContent from './SidebarContent';

const Header = React.memo(() => {
    const [open, setOpen] = useState(false);
    const { width } = useWindowSize();

    const onClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    // const { language, setLanguage } = useLanguage();

    // const [value, setValue] = useState(language);

    // const onChange = (e: RadioChangeEvent) => {
    //     setValue(e.target.value);
    //     setLanguage(e.target.value);
    // };

    return (
        <Layout.Header style={{ display: 'flex', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <Row
                onClick={() => {
                    navigate('/');
                }}
                style={{ flex: 1, color: 'white', fontSize: '18px', fontWeight: 'bold', alignItems: 'center' }}
            >
                <Image preview={false} width={40} src={NumerologyImage} />
                <div style={{ marginLeft: 10 }}>{'Lucky Wheel'}</div>
            </Row>
            {/* <Popover
                placement="bottom"
                title={
                    <div style={{ color: '#01509A', fontSize: '15px', fontWeight: '600' }}>
                        {t('common.change_language')}
                    </div>
                }
                content={
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            <Radio value={'en'}>{'English'}</Radio>
                            <Radio value={'vi'}>{'Vietnamese'}</Radio>
                        </Space>
                    </Radio.Group>
                }
            >
                <Row>
                    <Image preview={false} width={30} src={language == 'en' ? UkImage : VnImage} />
                </Row>
            </Popover> */}
            {width < TAB_SIZE ? (
                <MenuOutlined
                    onClick={() => {
                        setOpen(true);
                    }}
                    style={{ color: 'white', fontSize: '20px', marginLeft: 10 }}
                />
            ) : (
                <MenuContent isInline={false} />
            )}
            <Drawer
                width={250}
                onClose={onClose}
                open={open}
                placement="right"
                closable={false}
                bodyStyle={{ backgroundColor: '#001529', paddingLeft: 0, paddingRight: 0 }}
            >
                <MenuContent isInline={true} />
            </Drawer>
        </Layout.Header>
    );
});

export default Header;
