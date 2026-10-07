import { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  UserPlus,
  Users,
  CheckCircle2,
  Clock3,
  AlertCircle,
} from 'lucide-react';

import { FriendContext } from '../context/FriendContext';
import FriendCard from '../components/FriendCard';
import Loading from '../components/Loading';

const Home = () => {

  const {
    friends,
    loading,
  } = useContext(FriendContext);

  if (loading) {
    return <Loading />;
  }

  const totalFriends = friends.length;

  const onTrack = friends.filter(
    friend => friend.status === 'on-track'
  ).length;

  const almostDue = friends.filter(
    friend => friend.status === 'almost due'
  ).length;

  const overdue = friends.filter(
    friend => friend.status === 'overdue'
  ).length;

  return (
    <div>

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-5 pt-16 pb-12">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm font-bold tracking-wider text-[#244D3F]">
            KEEP YOUR FRIENDSHIPS ALIVE
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mt-4 leading-tight">
            Your friends deserve
            <span className="text-[#244D3F]"> your attention.</span>
          </h1>

          <p className="text-[#64748B] text-base md:text-lg leading-8 mt-5">
            Keep track of the people who matter most.
            Stay connected, remember important moments,
            and never let a meaningful friendship fade away.
          </p>

          <button
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#244D3F] text-white font-semibold hover:bg-[#1D3F34] transition"
          >
            <UserPlus size={19} />
            Add a Friend
          </button>

        </div>

      </section>

      {/* Summary Cards */}
      <section className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Total */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-[#64748B]">
                  Total Friends
                </p>

                <p className="text-3xl font-bold mt-2">
                  {totalFriends}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users size={22} />
              </div>

            </div>

          </div>

          {/* On Track */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-[#64748B]">
                  On Track
                </p>

                <p className="text-3xl font-bold text-emerald-600 mt-2">
                  {onTrack}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 size={22} />
              </div>

            </div>

          </div>

          {/* Almost Due */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-[#64748B]">
                  Almost Due
                </p>

                <p className="text-3xl font-bold text-amber-500 mt-2">
                  {almostDue}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Clock3 size={22} />
              </div>

            </div>

          </div>

          {/* Overdue */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-[#64748B]">
                  Overdue
                </p>

                <p className="text-3xl font-bold text-red-500 mt-2">
                  {overdue}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <AlertCircle size={22} />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Friends */}
      <section className="max-w-7xl mx-auto px-5 py-16">

        <div className="mb-8">

          <h2 className="text-3xl font-bold">
            Your Friends
          </h2>

          <p className="text-[#64748B] mt-2">
            People who make your life better.
          </p>

        </div>

        {/* 4 columns desktop */}
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