import {FC} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from "../../../helpers";

const Error500: FC = () => {
  return (
    <div className='d-flex flex-column flex-root'>
      <div className='d-flex flex-column flex-column-fluid'>
        <div className='d-flex flex-column flex-column-fluid text-center p-5'>
          <Link to='/' className='pt-3'>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/default.svg')}
              style={{height: '100px'}}
            />
          </Link>
          <div className='pt-5 mb-5'>
            <h1 className='fw-bolder fs-2qx text-secondary mb-4'>System Error</h1>
            <div className='fw-bold fs-3 text-muted mb-5'>
              Something went wrong!
              <br />
              Please try again later.
            </div>
            <div className='text-center'>
              <Link to='/' className='btn btn-lg btn-primary fw-bolder'>
                Go to homepage
              </Link>
            </div>
          </div>
          <div>
            <img
                src={toAbsoluteUrl('/media/illustrations/sketchy/17.png')}
                alt="illustration"
                style={{width: '40%'}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Error500}
