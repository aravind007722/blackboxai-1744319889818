import { 
  UserCircleIcon, 
  AcademicCapIcon, 
  ClockIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const Profile = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'April 2024',
    progress: {
      coursesCompleted: 2,
      coursesInProgress: 1,
      totalAssignments: 15,
      completedAssignments: 10
    },
    achievements: [
      { id: 1, title: 'Quick Learner', description: 'Completed first course within 2 weeks' },
      { id: 2, title: 'Perfect Score', description: 'Achieved 100% in Programming Basics' },
      { id: 3, title: 'Team Player', description: 'Helped 5 peers in discussion forums' }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-4">
          <UserCircleIcon className="h-20 w-20 text-gray-400" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
            <p className="text-gray-600">{userProfile.email}</p>
            <p className="text-sm text-gray-500">Member since {userProfile.joinDate}</p>
          </div>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3">
            <AcademicCapIcon className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Completed Courses</p>
              <p className="text-2xl font-bold text-gray-900">{userProfile.progress.coursesCompleted}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3">
            <ClockIcon className="h-8 w-8 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-500">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">{userProfile.progress.coursesInProgress}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3">
            <ChartBarIcon className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Assignment Progress</p>
              <p className="text-2xl font-bold text-gray-900">
                {userProfile.progress.completedAssignments}/{userProfile.progress.totalAssignments}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userProfile.achievements.map((achievement) => (
            <div key={achievement.id} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          Edit Profile
        </button>
        <button className="btn-primary">
          View Certificates
        </button>
      </div>
    </div>
  );
};

export default Profile;
