import { SecurityScanOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

interface ProfileNavItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  color: 'primary' | 'error' | 'warning' | 'success';
  href: string;
}

export const profileNavData: ProfileNavItem[] = [
  {
    id: 1,
    name: 'Personal Info',
    icon: <UserOutlined />,
    color: 'primary',
    href: 'personal-info',
  },
  {
    id: 2,
    name: 'Change Password',
    icon: <SecurityScanOutlined />,
    color: 'success',
    href: 'security-settings',
  },
  // {
  //   id: 3,
  //   name: 'profile.nav.notifications.title',
  //   icon: <BellOutlined />,
  //   color: 'error',
  //   href: 'notifications',
  // },
  // {
  //   id: 4,
  //   name: 'profile.nav.payments.title',
  //   icon: <DollarOutlined />,
  //   color: 'warning',
  //   href: 'payments',
  // },
];
