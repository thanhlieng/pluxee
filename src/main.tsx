import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import vi_VN from 'antd/lib/locale/vi_VN';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App.tsx';
import i18n from './language';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60000,
            retry: 1,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <I18nextProvider i18n={i18n}>
        <ConfigProvider locale={vi_VN}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </ConfigProvider>
    </I18nextProvider>
);
