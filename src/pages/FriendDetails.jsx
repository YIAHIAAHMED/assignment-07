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

  if (loading) {
    return (
      <div className="text-center py-32">
        Loading...
      </div>
    );
  }

  const friend = friends.find(
    item => item.id === parseInt(id)
  );

  if (!friend) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl font-semibold">
          Friend not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="mb-10">

        <p className="text-sm text-[#244D3F] font-semibold mb-2">
          FRIEND DETAILS
        </p>

        <h1 className="text-4xl font-semibold">
          {friend.name}
        </h1>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Profile */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />

          <h2 className="text-2xl font-semibold text-center mt-5">
            {friend.name}
          </h2>

          <p className="text-center text-[#64748B] mt-2">
            {friend.email}
          </p>

          <div className="flex justify-center mt-4">

            <span className="px-3 py-1 bg-[#244D3F] text-white text-xs rounded-full capitalize">
              {friend.status}
            </span>

          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">

            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-[#64748B] px-3 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}

          </div>

          <p className="text-[#64748B] text-sm leading-7 bg-[#F8FAFC] rounded-xl p-4 mt-6">
            "{friend.bio}"
          </p>

        </div>

        {/* Right side */}
        <div className="lg:col-span-2 space-y-6">

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">

            <h2 className="text-xl font-semibold">
              Relationship Goal
            </h2>

            <p className="text-[#64748B] mt-2">
              Connect every {friend.goal} days
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

              <div className="bg-[#F8FAFC] rounded-xl p-5 text-center">

                <p className="text-sm text-[#64748B]">
                  Days Since Contact
                </p>

                <p className="text-2xl font-semibold mt-2">
                  {friend.days_since_contact}
                </p>

              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-5 text-center">

                <p className="text-sm text-[#64748B]">
                  Goal (Days)
                </p>

                <p className="text-2xl font-semibold mt-2">
                  {friend.goal}
                </p>

              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-5 text-center">

                <p className="text-sm text-[#64748B]">
                  Next Due
                </p>

                <p className="text-lg font-semibold mt-3 text-[#244D3F]">
                  {friend.next_due_date}
                </p>

              </div>

            </div>

          </div>

          {/* Quick Check In */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">

            <h2 className="text-xl font-semibold">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-3 gap-4 mt-6">

              {/* Call */}
              <button
                onClick={() =>
                  addInteraction(
                    friend.name,
                    friend.id,
                    'Call'
                  )
                }
                className="p-6 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-[#244D3F] hover:bg-[#F1F7F4] transition"
              >
                <img
                  src={assets.callIcon}
                  alt="Call"
                  className="w-8 h-8 mx-auto"
                />

                <p className="text-sm font-medium mt-3">
                  Call
                </p>

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
                className="p-6 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-[#244D3F] hover:bg-[#F1F7F4] transition"
              >

                <img
                  src={assets.textIcon}
                  alt="Text"
                  className="w-8 h-8 mx-auto"
                />

                <p className="text-sm font-medium mt-3">
                  Text
                </p>

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
                className="p-6 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-[#244D3F] hover:bg-[#F1F7F4] transition"
              >

                <img
                  src={assets.videoIcon}
                  alt="Video"
                  className="w-8 h-8 mx-auto"
                />

                <p className="text-sm font-medium mt-3">
                  Video
                </p>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FriendDetails;