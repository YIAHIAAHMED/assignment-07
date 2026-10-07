import { useContext } from 'react';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { FriendContext } from '../context/FriendContext';

const Stats = () => {
  const { timeline, friends } = useContext(FriendContext);

  const callCount = timeline.filter(
    (item) => item.type === 'Call'
  ).length;

  const textCount = timeline.filter(
    (item) => item.type === 'Text'
  ).length;

  const videoCount = timeline.filter(
    (item) => item.type === 'Video'
  ).length;

  const data = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount },
  ];

  const COLORS = [
    '#244D3F',
    '#5B8DEF',
    '#F59E0B',
  ];

  const overdue = friends.filter(
    (friend) => friend.status === 'overdue'
  ).length;

  const onTrack = friends.filter(
    (friend) => friend.status === 'on-track'
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">

      <div className="mb-10">
        <p className="text-sm font-bold text-[#244D3F]">
          RELATIONSHIP INSIGHTS
        </p>

        <h1 className="text-4xl font-bold mt-2">
          Friendship Analytics
        </h1>

        <p className="text-[#64748B] mt-2">
          Understand how you are staying connected.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <p className="text-sm text-[#64748B]">
            Total Friends
          </p>

          <p className="text-3xl font-bold mt-2">
            {friends.length}
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <p className="text-sm text-[#64748B]">
            Total Interactions
          </p>

          <p className="text-3xl font-bold mt-2">
            {timeline.length}
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <p className="text-sm text-[#64748B]">
            On Track
          </p>

          <p className="text-3xl font-bold text-emerald-600 mt-2">
            {onTrack}
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <p className="text-sm text-[#64748B]">
            Overdue
          </p>

          <p className="text-3xl font-bold text-red-500 mt-2">
            {overdue}
          </p>
        </div>

      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 mt-7">

        <h2 className="text-xl font-bold">
          Interaction Overview
        </h2>

        <p className="text-sm text-[#64748B] mt-1">
          Calls, texts and video interactions.
        </p>

        {timeline.length === 0 ? (
          <div className="h-[350px] flex items-center justify-center text-[#64748B]">
            No interactions available yet.
          </div>
        ) : (
          <div className="w-full h-[350px] mt-5">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={115}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

      </div>
    </div>
  );
};

export default Stats;
