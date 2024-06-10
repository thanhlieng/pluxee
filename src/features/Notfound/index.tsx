import { ClipLoader } from 'react-spinners';

const NotFoundPage = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'transparent', zIndex: '999' }}>
            <ClipLoader />
        </div>
    );

    // return (
    //     <div style={{ height: '100vh' }} className="gx-page-error-container">
    //         <div className="gx-page-error-content">
    //             <div className="gx-error-code gx-mb-4">404</div>
    //             <h2 className="gx-text-center">Rất tiếc, đã xảy ra lỗi. Không tìm thấy trang!</h2>
    //             <p className="gx-text-center">
    //                 <Link className="gx-btn gx-btn-primary" to="/">
    //                     Trở lại
    //                 </Link>
    //             </p>
    //         </div>
    //     </div>
    // );
};

export default NotFoundPage;
