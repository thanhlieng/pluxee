import * as AntdIcons from '@ant-design/icons';

const IconAntd = ({
    spin = false,
    icon,
    props,
    size = '20px',
    style,
}: {
    icon: any;
    size?: string;
    props?: any;
    spin?: boolean;
    style?: any;
}) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const AntdIcon = AntdIcons[icon];

    return <AntdIcon spin={spin} style={{ fontSize: size, color: '#333', height: size, ...style }} {...props} />;
};

export default IconAntd;
