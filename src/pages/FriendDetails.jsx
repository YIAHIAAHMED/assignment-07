import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { FriendContext } from '../context/FriendContext';
import { assets } from '../assets/assets';

const FriendDetails = () => {
  const { id } = useParams();

  const {
    friends,
    loading,
    addInteraction,
  } = useContext(FriendContext);

  // Loading state
  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-lg font-semibold text-gray-600">
          Loading friend...
        </p>
      </div>
    );
  }

  // Find friend
  const friend = friends.find(
    (friend) => friend.id === parseInt(id)
  );

  // Friend not found
  if (!friend) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-semibold text-gray-600">
          Friend not found.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-32 h-32 rounded-full mx-auto object-cover mb-4 ring-4 ring-emerald-50"
          />

          <h2 className="text-2xl font-bold text-center text-gray-800">
            {friend.name}
          </h2>

          <p className="text-sm text-center text-gray-500 mb-3">
            {friend.email}
          </p>

          {/* Status */}
          <div className="text-center mb-4">
            <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100 capitalize">
              {friend.status}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 justify-center mb-6">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg leading-relaxed">
            "{friend.bio}"
          </p>

        </div>

        {/* Details & Actions */}
        <div className="lg:col-span-2 space-y-6">

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Days Since Contact */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-xs text-gray-500 mb-1">
                Days Since Contact
              </p>

              <p className="text-2xl font-bold text-emerald-600">
                {friend.days_since_contact} Days
              </p>
            </div>

            {/* Goal */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-xs text-gray-500 mb-1">
                Goal
              </p>

              <p className="text-2xl font-bold text-gray-800">
                Every {friend.goal} Days
              </p>
            </div>

            {/* Next Due Date */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-xs text-gray-500 mb-1">
                Next Due Date
              </p>

              <p className="text-xl font-bold text-amber-600">
                {friend.next_due_date}
              </p>
            </div>

          </div>

          {/* Quick Check-In */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">

            <h3 className="font-semibold text-gray-800 mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4">

              {/* Call */}
              <button
                onClick={() =>
                  addInteraction(
                    friend.name,
                    friend.id,
                    'Call'
                  )
                }
                className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-100 rounded-xl transition-all font-medium gap-2"
              >
                <img
                  src={assets.callIcon}
                  alt="Call"
                  className="w-8 h-8 object-contain"
                />

                <span className="text-sm text-gray-700">
                  Call
                </span>
              </button>

              {/* Text */}
              <button
                onClick={() =>
                  addInteraction(
                    friend.name,
                    friend.id,
                    'Text'
                  )
                }
                className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-100 rounded-xl transition-all font-medium gap-2"
              >
                <img
                  src={assets.textIcon}
                  alt="Text"
                  className="w-8 h-8 object-contain"
                />

                <span className="text-sm text-gray-700">
                  Text
                </span>
              </button>

              {/* Video */}
              <button
                onClick={() =>
                  addInteraction(
                    friend.name,
                    friend.id,
                    'Video'
                  )
                }
                className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-100 rounded-xl transition-all font-medium gap-2"
              >
                <img
                  src={assets.videoIcon}
                  alt="Video"
                  className="w-8 h-8 object-contain"
                />

                <span className="text-sm text-gray-700">
                  Video
                </span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;