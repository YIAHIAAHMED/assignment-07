import { useContext, useState } from 'react';

import {
  Phone,
  MessageSquare,
  Video,
  CalendarDays,
} from 'lucide-react';

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
      : timeline.filter(
          item => item.type === filter
        );

  const getFriendName = (friendId) => {

    const friend = friends.find(
      item => item.id === friendId
    );

    return friend?.name || 'Unknown Friend';
  };

  const getIcon = (type) => {

    if (type === 'Call') {
      return <Phone size={20} />;
    }

    if (type === 'Text') {
      return <MessageSquare size={20} />;
    }

    return <Video size={20} />;
  };

  return (
    <div className="max-w-5xl mx-auto px-5 py-12">

      {/* Heading */}
      <div className="mb-8">

        <p className="text-sm font-bold text-[#244D3F]">
          ACTIVITY HISTORY
        </p>

        <h1 className="text-4xl font-bold mt-2">
          Timeline
        </h1>

        <p className="text-[#64748B] mt-2">
          See all your recent interactions.
        </p>

      </div>

      {/* Filter */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-7">

        <div className="flex flex-wrap gap-2">

          {['All', 'Call', 'Text', 'Video'].map(
            (item) => (

              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition ${
                  filter === item
                    ? 'bg-[#244D3F] text-white'
                    : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                }`}
              >
                {item}
              </button>

            )
          )}

        </div>

      </div>

      {/* Timeline */}
      <div className="space-y-4">

        {filteredTimeline.length === 0 ? (

          <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center">

            <p className="text-[#64748B]">
              No {filter} interactions found.
            </p>

          </div>

        ) : (

          filteredTimeline.map((item) => (

            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-5"
            >

              {/* Icon */}
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#E7F1EC] text-[#244D3F] flex items-center justify-center">
                {getIcon(item.type)}
              </div>

              {/* Content */}
              <div className="flex-1">

                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="text-sm text-[#64748B] mt-1">
                  {getFriendName(item.friendId)}
                </p>

              </div>

              {/* Date */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-[#64748B]">

                <CalendarDays size={16} />

                {item.date}

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default Timeline;