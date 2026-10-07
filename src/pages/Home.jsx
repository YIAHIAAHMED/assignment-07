import { useContext } from 'react';
import { UserPlus } from 'lucide-react';

import { FriendContext } from '../context/FriendContext';
import FriendCard from '../components/FriendCard';
import Loading from '../components/Loading';

const Home = () => {
  const {
    friends,
    loading,
    timeline,
  } = useContext(FriendContext);

  // Loading state
  if (loading) {
    return <Loading />;
  }

  // Total friends
  const totalFriends = friends.length;

  // Friends who are on track
  const onTrack = friends.filter(
    (friend) => friend.status === 'on-track'
  ).length;

  // Friends who need attention
  const needAttention = friends.filter(
    (friend) =>
      friend.status === 'almost due' ||
      friend.status === 'overdue'
  ).length;

  // Current month interactions
  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const interactionsThisMonth = timeline.filter((item) => {
    const date = new Date(item.date);

    return (
      date.getMonth() === currentMonth &&
      date.getFullYear() === currentYear
    );
  }).length;

  return (
    <div className="min-h-screen">

      {/* =========================
          Hero Section
      ========================== */}
      <section className="max-w-7xl mx-auto px-5 pt-16 pb-12">

        <div className="text-center max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mt-4 leading-tight whitespace-nowrap">
            Friends to keep close in your life
          </h1>

          <p className="text-[#64748B] text-base md:text-lg leading-8 mt-5">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            <br />
            relationships that matter most.
          </p>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById('friends')
                ?.scrollIntoView({
                  behavior: 'smooth',
                })
            }
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#244D3F] text-white font-semibold hover:bg-[#1D3F34] transition"
          >
            <UserPlus size={19} />
            Add a Friend
          </button>

        </div>

      </section>


      {/* =========================
          Statistics Section
      ========================== */}
      <section className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Total Friends */}
          <div className="bg-white border border-gray-100 rounded-xl h-[138px] flex flex-col items-center justify-center shadow-sm">

            <p className="text-3xl md:text-4xl font-bold text-[#245646]">
              {totalFriends}
            </p>

            <p className="text-base md:text-lg text-[#64748B] mt-2">
              Total Friends
            </p>

          </div>


          {/* On Track */}
          <div className="bg-white border border-gray-100 rounded-xl h-[138px] flex flex-col items-center justify-center shadow-sm">

            <p className="text-3xl md:text-4xl font-bold text-[#245646]">
              {onTrack}
            </p>

            <p className="text-base md:text-lg text-[#64748B] mt-2">
              On Track
            </p>

          </div>


          {/* Need Attention */}
          <div className="bg-white border border-gray-100 rounded-xl h-[138px] flex flex-col items-center justify-center shadow-sm">

            <p className="text-3xl md:text-4xl font-bold text-[#245646]">
              {needAttention}
            </p>

            <p className="text-base md:text-lg text-[#64748B] mt-2">
              Need Attention
            </p>

          </div>


          {/* Interactions This Month */}
          <div className="bg-white border border-gray-100 rounded-xl h-[138px] flex flex-col items-center justify-center shadow-sm">

            <p className="text-3xl md:text-4xl font-bold text-[#245646]">
              {interactionsThisMonth}
            </p>

            <p className="text-base md:text-lg text-[#64748B] mt-2 text-center">
              Interactions This Month
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          Friends Section
      ========================== */}
      <section
        id="friends"
        className="max-w-7xl mx-auto px-5 py-16"
      >

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-[#1F2937]">
            Your Friends
          </h2>

        </div>


        {/* No Friends */}
        {friends.length === 0 ? (

          <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center">

            <p className="text-[#64748B]">
              No friends found.
            </p>

          </div>

        ) : (

          /* Friends Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {friends.map((friend) => (
              <FriendCard
                key={friend.id}
                friend={friend}
              />
            ))}

          </div>

        )}

      </section>

    </div>
  );
};

export default Home;
