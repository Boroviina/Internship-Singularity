import {FC} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from "../../../helpers";

const Error404: FC = () => {
  return (
    <div className='d-flex flex-column flex-root align-items-center h-100'>
      <div className='d-flex flex-column flex-center flex-column-fluid p-5 justify-content-center'>
        <img
          src={toAbsoluteUrl('/media/illustrations/sketchy/18.png')}
          alt='Not found'
          className='mw-100 mb-10 h-lg-450px'
        />
        <div className='fw-bold mb-3 mx-5' style={{color: '#3de094'}}>
          <h1> Oops! The page you're looking for doesn't exist.</h1>
          <p className="fs-4">Let's get you back on track.</p>
        </div>
        <Link to='/home' className='btn btn-outline-primary mx-5'>
          Return Home
        </Link>
      </div>
    </div>
  )
}

export {Error404}
