
const Profile = ({ setUser }) => {
  return (
      <div>
          <h2>
              Profile
          </h2>
          <button onClick={() => setUser({})}>
              Log out
          </button>
      </div>
  )
}

export default Profile
