
const ProtectedRoute = ({ user, children }) => {
    if (user.username > '') {
        return children;
    }
}

export default ProtectedRoute
