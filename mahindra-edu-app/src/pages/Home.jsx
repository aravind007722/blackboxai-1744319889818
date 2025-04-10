import { Link } from 'react-router-dom';
import { AcademicCapIcon, BookOpenIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Mahindra Education
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your gateway to quality education and professional growth
        </p>
        <Link to="/courses" className="btn-primary">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="card text-center">
          <AcademicCapIcon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
          <p className="text-gray-600">Learn from industry professionals and gain practical knowledge</p>
        </div>

        <div className="card text-center">
          <BookOpenIcon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
          <p className="text-gray-600">Engage with interactive content and real-world projects</p>
        </div>

        <div className="card text-center">
          <ClipboardDocumentListIcon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-600">Monitor your learning journey and achievements</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-xl mb-8">Join thousands of students already learning with us</p>
        <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
