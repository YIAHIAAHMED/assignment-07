import { useContext, useState } from 'react';
import { FriendContext } from '../context/FriendContext';

const Timeline = () => {

  const {
    timeline,
    friends,
  } = useContext(FriendContext);

  const [filter, setFilter] = useState('All');

  const filteredTimeline =
    filter === 'All'
      ? timeline
      : timeline.filter(item => item.type === filter);

  const getFriendName = (friendId) => {

    const friend = friends.find(
      item => item.id === friendId
    );

    return friend ? friend.name : 'Unknown Friend';
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="mb-10">

        <p className="text-sm font-semibold text-[#244D3F]">
          YOUR ACTIVITY
        </p>

        <h1 className="text-4xl font-semibold mt-2">
          Timeline
        </h1>

        <p className="text-[#64748B] mt-3">
          Keep track of your recent interactions.
        </p>

      </div>

      {/* Filter */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 mb-8">

        <label className="text-sm font-medium">
          Filter timeline
        </label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-3 w-full md:w-64 border border-gray-200 rounded-lg px-4 py-3 outline-none"
        >
          <option value="All">
            All
          </option>

          <option value="Call">
            Call
          </option>

          <option value="Text">
            Text
          </option>

          <option value="Video">
            Video
          </option>

        </select>

      </div>

      {/* Timeline */}
      <div className="space-y-4">

        {filteredTimeline.map((item) => (

          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-xl p-6 flex items-start gap-5"
          >

            <div className="w-12 h-12 rounded-full bg-[#F1F7F4] flex items-center justify-center text-[#244D3F] font-semibold">
              {item.type.charAt(0)}
            </div>

            <div className="flex-1">

              <h3 className="font-semibold">
                {item.type}
              </h3>

              <p className="text-[#64748B] mt-1">
                {item.title}
              </p>

              <p className="text-sm text-[#94A3B8] mt-3">
                {item.date}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Timeline;