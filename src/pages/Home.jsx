import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FriendContext } from '../context/FriendContext';
import FriendCard from '../components/FriendCard';

const Home = () => {

  const {
    friends,
    loading,
  } = useContext(FriendContext);

  if (loading) {
    return (
      <div className="text-center py-32">
        <p className="text-[#64748B]">
          Loading friends...
        </p>
      </div>
    );
  }

  const overdue = friends.filter(
    friend => friend.status === 'overdue'
  ).length;

  const almostDue = friends.filter(
    friend => friend.status === 'almost due'
  ).length;

  const onTrack = friends.filter(
    friend => friend.status === 'on-track'
  ).length;

  return (
    <div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold text-[#244D3F] mb-4">
            YOUR RELATIONSHIP DASHBOARD
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#1F2937] leading-tight">
            Your personal shelf of meaningful connections.
          </h1>

          <p className="mt-5 text-lg text-[#64748B] leading-8">
            Browse, tend, and nurture the relationships
            that matter most.
          </p>

          <Link
            to="/timeline"
            className="inline-block mt-8 px-6 py-3 rounded-lg bg-[#244D3F] text-white font-medium hover:bg-[#1d3f34] transition"
          >
            View Timeline
          </Link>

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <p className="text-sm text-[#64748B]">
              Total Friends
            </p>

            <p className="text-3xl font-semibold mt-2">
              {friends.length}
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <p className="text-sm text-[#64748B]">
              On Track
            </p>

            <p className="text-3xl font-semibold text-[#244D3F] mt-2">
              {onTrack}
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <p className="text-sm text-[#64748B]">
              Almost Due
            </p>

            <p className="text-3xl font-semibold text-amber-500 mt-2">
              {almostDue}
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <p className="text-sm text-[#64748B]">
              Overdue
            </p>

            <p className="text-3xl font-semibold text-red-500 mt-2">
              {overdue}
            </p>
          </div>

        </div>

      </section>

      {/* Friends */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h2 className="text-2xl font-semibold">
              Your Friends
            </h2>

            <p className="text-[#64748B] mt-1">
              Keep your important relationships close.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {friends.map(friend => (
            <FriendCard
              key={friend.id}
              friend={friend}
            />
          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;