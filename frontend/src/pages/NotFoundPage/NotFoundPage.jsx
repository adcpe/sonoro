import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='notfound-layout'>
      <h1 className='notfound-title'>404</h1>
      <p className='notfound-message'>The page you're looking for doesn't exist.</p>

      <Link to='/' className='notfound-link'>
        Go back home
      </Link>
    </div>
  )
}

export default NotFoundPage
