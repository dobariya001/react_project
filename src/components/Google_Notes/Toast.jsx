// import React, { useEffect } from 'react';
// import './Toast.css'; // CSS for toast notifications

// const Toast = ({ message, type, onClose }) => {
//     // Toast will automatically close after 3 seconds
//     // setTimeout(onClose, 3000);

//     useEffect(() => {
//         const timer = setTimeout(onClose, 3000);
//         return () => clearTimeout(timer); // Cleanup timer to prevent memory leak
//     }, [onClose]);

//     return (
//         <div className={`toastBox`}>
//             <p className={`toast ${type}`}>{message}</p>
//         </div>
//     );
// };

// export default Toast;
