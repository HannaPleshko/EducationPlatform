import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export default function useRedirect() {
    const navigate = useNavigate();

    return (isRegistration) => {
        if (isRegistration) {
            navigate('/auth');
            return
        }

        const { role } = jwt_decode(Cookies.get('access_token'))

        if (role === 3) {
            navigate('/admin');
        } else {
            navigate('/');
        }

    };
}