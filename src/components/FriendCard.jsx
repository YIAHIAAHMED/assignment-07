import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';

const FriendCard = ({ friend }) => {

  const statusStyle = {
    overdue: 'bg-red-50 text-red-600 border-red-100',
    'almost due': 'bg-amber-50 text-amber-600 border-amber-100',
    'on-track': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  };

  return (
    <Link
      to={`/friend/${friend.id}`}
      className="block"
    >

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300">

        {/* Picture */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-full h-52 object-cover"
        />

        <div className="p-5">

          {/* Status */}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border capitalize ${
              statusStyle[friend.status]
            }`}
          >
            {friend.status}
          </span>

          {/* Name */}
          <h3 className="text-xl font-bold text-[#1F2937] mt-3">
            {friend.name}
          </h3>

          {/* Days */}
          <div className="flex items-center gap-2 text-sm text-[#64748B] mt-2">

            <CalendarDays size={16} />

            <span>
              {friend.days_since_contact} days since contact
            </span>

          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">

            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#F1F5F9] text-[#64748B] text-xs px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}

          </div>

          {/* View */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">

            <span className="text-sm font-semibold text-[#244D3F]">
              View Details
            </span>

            <ArrowRight
              size={18}
              className="text-[#244D3F]"
            />

          </div>

        </div>

      </div>

    </Link>
  );
};

export default FriendCard;