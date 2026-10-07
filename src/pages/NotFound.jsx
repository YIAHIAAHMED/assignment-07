import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[600px] flex items-center justify-center px-5">

      <div className="text-center">

        <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto">

          <AlertTriangle size={30} />

        </div>

        <h1 className="text-6xl font-bold mt-6">
          404
        </h1>

        <h2 className="text-2xl font-bold mt-3">
          Page Not Found
        </h2>

        <p className="text-[#64748B] mt-3">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-7 px-5 py-3 bg-[#244D3F] text-white rounded-lg font-medium"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;