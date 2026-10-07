import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {

  const statusStyle = {
    overdue: 'bg-red-500 text-white',
    'almost due': 'bg-amber-500 text-white',
    'on-track': 'bg-[#244D3F] text-white',
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition">

      {/* Image */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        {/* Status */}
        <div className="mb-3">

          <span
            className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
              statusStyle[friend.status]
            }`}
          >
            {friend.status}
          </span>

        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-[#1F2937]">
          {friend.name}
        </h3>

        {/* Email */}
        <p className="text-sm text-[#64748B] mt-1">
          {friend.email}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">

          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-[#F1F5F9] text-[#64748B] px-2.5 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}

        </div>

        {/* Contact info */}
        <div className="mt-5 pt-4 border-t border-gray-100">

          <p className="text-sm text-[#64748B]">
            Contacted {friend.days_since_contact} days ago
          </p>

          <Link
            to={`/friend/${friend.id}`}
            className="inline-block mt-4 text-sm font-semibold text-[#244D3F] hover:underline"
          >
            View Details →
          </Link>

        </div>

      </div>

    </div>
  );
};

export default FriendCard;