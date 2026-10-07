import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  ArrowLeft,
  Clock3,
  Archive,
  Trash2,
  Pencil,
  Phone,
  MessageSquare,
  Video,
  Mail,
} from 'lucide-react';

import { FriendContext } from '../context/FriendContext';
import Loading from '../components/Loading';

const FriendDetails = () => {

  const { id } = useParams();

  const {
    friends,
    loading,
    addInteraction,
  } = useContext(FriendContext);

  if (loading) {
    return <Loading />;
  }

  const friend = friends.find(
    item => item.id === Number(id)
  );

  if (!friend) {
    return null;
  }

  const statusStyle = {
    overdue: 'bg-red-50 text-red-600 border-red-100',
    'almost due': 'bg-amber-50 text-amber-600 border-amber-100',
    'on-track': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      {/* Back */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#244D3F]"
      >
        <ArrowLeft size={17} />
        Back to Friends
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-7">

        {/* LEFT */}
        <div className="bg-white rounded-2xl border border-gray-100 p-7">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />

          <h1 className="text-2xl font-bold text-center mt-5">
            {friend.name}
          </h1>

          <div className="flex items-center justify-center gap-2 text-[#64748B] mt-2">

            <Mail size={16} />

            <span className="text-sm">
              {friend.email}
            </span>

          </div>

          {/* Status */}
          <div className="flex justify-center mt-5">

            <span
              className={`px-3 py-1 rounded-full border text-xs font-semibold capitalize ${
                statusStyle[friend.status]
              }`}
            >
              {friend.status}
            </span>

          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">

            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-[#64748B] text-xs rounded-md"
              >
                #{tag}
              </span>
            ))}

          </div>

          {/* Bio */}
          <div className="bg-[#F8FAFC] rounded-xl p-4 mt-6">

            <p className="text-sm text-[#64748B] leading-7">
              {friend.bio}
            </p>

          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 gap-2 mt-6">

            <button className="border border-gray-200 rounded-lg py-3 text-xs font-medium hover:bg-gray-50">

              <Clock3
                size={17}
                className="mx-auto mb-1"
              />

              Snooze

            </button>

            <button className="border border-gray-200 rounded-lg py-3 text-xs font-medium hover:bg-gray-50">

              <Archive
                size={17}
                className="mx-auto mb-1"
              />

              Archive

            </button>

            <button className="border border-red-100 text-red-500 rounded-lg py-3 text-xs font-medium hover:bg-red-50">

              <Trash2
                size={17}
                className="mx-auto mb-1"
              />

              Delete

            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-white border border-gray-100 rounded-2xl p-5">

              <p className="text-sm text-[#64748B]">
                Days Since Contact
              </p>

              <p className="text-3xl font-bold mt-2">
                {friend.days_since_contact}
              </p>

            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">

              <p className="text-sm text-[#64748B]">
                Goal
              </p>

              <p className="text-3xl font-bold mt-2">
                {friend.goal}
              </p>

              <p className="text-xs text-[#64748B] mt-1">
                days
              </p>

            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">

              <p className="text-sm text-[#64748B]">
                Next Due Date
              </p>

              <p className="text-lg font-bold text-[#244D3F] mt-3">
                {friend.next_due_date}
              </p>

            </div>

          </div>

          {/* Relationship Goal */}
          <div className="bg-white border border-gray-100 rounded-2xl p-7">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold">
                  Relationship Goal
                </h2>

                <p className="text-[#64748B] text-sm mt-1">
                  Stay connected every {friend.goal} days.
                </p>

              </div>

              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">

                <Pencil size={16} />

                Edit

              </button>

            </div>

          </div>

          {/* Quick Check-In */}
          <div className="bg-white border border-gray-100 rounded-2xl p-7">

            <h2 className="text-xl font-bold">
              Quick Check-In
            </h2>

            <p className="text-sm text-[#64748B] mt-1">
              Log your latest interaction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

              {/* Call */}
              <button
                onClick={() =>
                  addInteraction(
                    friend.name,
                    friend.id,
                    'Call'
                  )
                }
                className="p-5 bg-[#F8FAFC] border border-gray-100 rounded-xl hover:bg-[#E7F1EC] hover:border-[#244D3F] transition"
              >

                <Phone
                  size={26}
                  className="mx-auto text-[#244D3F]"
                />

                <p className="font-semibold mt-3">
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
                className="p-5 bg-[#F8FAFC] border border-gray-100 rounded-xl hover:bg-[#E7F1EC] hover:border-[#244D3F] transition"
              >

                <MessageSquare
                  size={26}
                  className="mx-auto text-[#244D3F]"
                />

                <p className="font-semibold mt-3">
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
                className="p-5 bg-[#F8FAFC] border border-gray-100 rounded-xl hover:bg-[#E7F1EC] hover:border-[#244D3F] transition"
              >

                <Video
                  size={26}
                  className="mx-auto text-[#244D3F]"
                />

                <p className="font-semibold mt-3">
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