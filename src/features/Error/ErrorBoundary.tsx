import { ReactNode } from 'react';
import { ErrorBoundary as RError } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
    return (
        <RError FallbackComponent={ErrorFallback}>
            <>{children}</>
        </RError>
    );
};

export default ErrorBoundary;
