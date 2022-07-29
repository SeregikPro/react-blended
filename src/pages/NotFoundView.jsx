import { Link } from 'react-router-dom';

const NotFoundView = () => {
  return (
    <div>
      <p>
        Oops, we didn't find this event. Go to <Link to="/">Home page</Link>
      </p>
    </div>
  );
};

export default NotFoundView;
