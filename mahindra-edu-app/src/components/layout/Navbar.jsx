import { Link } from 'react-router-dom';
import { UserCircleIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <AcademicCapIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Mahindra Edu</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/courses" className="text-gray-600 hover:text-blue-600">Courses</Link>
            <Link to="/assignments" className="text-gray-600 hover:text-blue-600">Assignments</Link>
            <Link to="/profile" className="flex items-center text-gray-600 hover:text-blue-600">
              <UserCircleIcon className="h-6 w-6" />
              <span className="ml-1">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
