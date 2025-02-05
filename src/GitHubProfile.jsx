import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

export function GitHubProfile({username}) {
  const [profile, setProfile] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  // const [isAThing, setIsAThing] = useState(false)
  const location = useLocation();
  const params = useParams()

  console.log(params)

  useEffect(() => {
    // fetch(`https://api.github.com/users/${username}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setProfile(data)
    //     setLoading(false)
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //     setHasError(true)
    //   })

  const getUser = async () => {
    try {
      const userName = location.pathname.split(':')[1]
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json()
      setProfile(data)
      console.log(data)
    } catch (err) {
      console.error(err)
      setHasError(true)
    } finally {
      setLoading(false)
    }
  }

    getUser()
  }, [username, location.pathname])

  if (loading) {
    return <h2>Loading...</h2>
  }
  
  if (hasError) {
    return <h2>Has Error</h2>
  }

  return <>
            {username && !loading && !hasError && 
              <>
                <h3>hello {profile.login}</h3>
                <p>{profile.name}</p>
              </>
              }
            {/* <button onClick={() => setIsAThing(!isAThing)}>Click</button> */}
          </>
}

GitHubProfile.propTypes = {
  username: PropTypes.string
}