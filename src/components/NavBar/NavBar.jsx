import { Link } from 'react-router-dom';

export default function NavBar({user}) {

    return (
    <nav className="mt-2 mb-4">
      <Link to="/movies">All Movies</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">All Actors</Link>
      &nbsp; | &nbsp;{user.username}
    </nav>
  )
}