import { ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const courses = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the fundamentals of programming with hands-on exercises',
    duration: '8 weeks',
    students: '1.2k',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    description: 'Master modern web development with React and Node.js',
    duration: '12 weeks',
    students: '850',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
  },
  {
    id: 3,
    title: 'Data Science Essentials',
    description: 'Explore data analysis, visualization, and machine learning',
    duration: '10 weeks',
    students: '650',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
  }
];

const Courses = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Available Courses</h1>
        <p className="mt-4 text-gray-600">Explore our wide range of courses designed to help you succeed</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
              <p className="mt-2 text-gray-600">{course.description}</p>
              
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 mr-1" />
                  <span>{course.students} students</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {course.level}
                </span>
                <button className="btn-primary">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
