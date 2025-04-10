import { CalendarIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

const assignments = [
  {
    id: 1,
    title: 'Programming Basics Quiz',
    course: 'Introduction to Programming',
    dueDate: '2024-04-20',
    status: 'Pending',
    points: 100,
    timeEstimate: '45 mins'
  },
  {
    id: 2,
    title: 'React Components Project',
    course: 'Web Development Bootcamp',
    dueDate: '2024-04-25',
    status: 'In Progress',
    points: 150,
    timeEstimate: '2 hours'
  },
  {
    id: 3,
    title: 'Data Analysis Report',
    course: 'Data Science Essentials',
    dueDate: '2024-04-30',
    status: 'Completed',
    points: 200,
    timeEstimate: '3 hours'
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-800';
    case 'In Progress':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-red-100 text-red-800';
  }
};

const Assignments = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Your Assignments</h1>
        <p className="mt-4 text-gray-600">Track and manage your course assignments</p>
      </div>

      <div className="space-y-6">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{assignment.title}</h3>
                <p className="text-gray-600 mt-1">{assignment.course}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(assignment.status)}`}>
                {assignment.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="flex items-center text-gray-600">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>Due: {assignment.dueDate}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>{assignment.timeEstimate}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                <span>{assignment.points} points</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                View Details
              </button>
              {assignment.status !== 'Completed' && (
                <button className="btn-primary">
                  {assignment.status === 'In Progress' ? 'Continue' : 'Start Assignment'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
