
const ProtectedRoute = ({ newUser, children }) => {
    if (newUser.Email) {
        return children;
    } else {
        return (
            <>
                <h2>
                    This page is protected. Please sign in!!!
                </h2>
            </>
        )
    }

}

export default ProtectedRoute
