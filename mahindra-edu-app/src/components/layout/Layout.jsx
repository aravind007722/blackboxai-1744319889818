import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="bg-white shadow-lg mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p>© 2024 Mahindra Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
