import NotFoundPage from '@/features/Notfound';
import { Suspense } from 'react';
import { BarLoader } from 'react-spinners';

export const PublicRoutes = [{ path: '*', element: <NotFoundPage /> }];

const Lazy = ({ children }: { children: any }) => {
    return (
        <Suspense
            fallback={
                <div
                    style={{
                        height: '100vh',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <BarLoader color="green" />
                </div>
            }
        >
            {children}
        </Suspense>
    );
};

export default Lazy;
