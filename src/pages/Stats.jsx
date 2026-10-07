import { useContext } from 'react';
import { FriendContext } from '../context/FriendContext';

const Stats = () => {

  const {
    friends,
    timeline,
  } = useContext(FriendContext);

  const calls = timeline.filter(
    item => item.type === 'Call'
  ).length;

  const texts = timeline.filter(
    item => item.type === 'Text'
  ).length;

  const videos = timeline.filter(
    item => item.type === 'Video'
  ).length;

  const overdue = friends.filter(
    friend => friend.status === 'overdue'
  ).length;

  const onTrack = friends.filter(
    friend => friend.status === 'on-track'
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="mb-10">

        <p className="text-sm font-semibold text-[#244D3F]">
          RELATIONSHIP ANALYTICS
        </p>

        <h1 className="text-4xl font-semibold mt-2">
          Stats
        </h1>

        <p className="text-[#64748B] mt-3">
          Understand how you are nurturing your relationships.
        </p>

      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

        <div className="bg-white border border-gray-100 rounded-2xl p-6">

          <p className="text-[#64748B]">
            Total Friends
          </p>

          <p className="text-4xl font-semibold mt-3">
            {friends.length}
          </p>

        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">

          <p className="text-[#64748B]">
            On Track
          </p>

          <p className="text-4xl font-semibold text-[#244D3F] mt-3">
            {onTrack}
          </p>

        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">

          <p className="text-[#64748B]">
            Overdue
          </p>

          <p className="text-4xl font-semibold text-red-500 mt-3">
            {overdue}
          </p>

        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">

          <p className="text-[#64748B]">
            Interactions
          </p>

          <p className="text-4xl font-semibold mt-3">
            {timeline.length}
          </p>

        </div>

      </div>

      {/* Interaction Type */}
      <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-8">

        <h2 className="text-xl font-semibold">
          By Interaction Type
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

          <div className="bg-[#F8FAFC] rounded-xl p-6">

            <p className="text-[#64748B]">
              Call
            </p>

            <p className="text-3xl font-semibold mt-2">
              {calls}
            </p>

          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6">

            <p className="text-[#64748B]">
              Text
            </p>

            <p className="text-3xl font-semibold mt-2">
              {texts}
            </p>

          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6">

            <p className="text-[#64748B]">
              Video
            </p>

            <p className="text-3xl font-semibold mt-2">
              {videos}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Stats;