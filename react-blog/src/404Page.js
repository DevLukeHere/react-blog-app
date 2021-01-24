import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>404 Page Not Found!</p>
      <Link to='/'>Back to Homepage</Link>
    </div>
  );
}
 
export default ErrorPage;