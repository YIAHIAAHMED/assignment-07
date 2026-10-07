import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const [timeline, setTimeline] = useState([
    {
      id: 1,
      friendId: 1,
      date: '2026-10-01',
      type: 'Call',
      title: 'Call with Alex Johnson',
    },
  ]);

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const response = await fetch('/friends.json');

        if (!response.ok) {
          throw new Error('Failed to fetch friends data');
        }

        const data = await response.json();

        setFriends(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load friends');
      } finally {
        setLoading(false);
      }
    };

    loadFriends();
  }, []);

  const addInteraction = (friendName, friendId, type) => {
    const newEntry = {
      id: Date.now(),
      friendId,
      date: new Date().toISOString().split('T')[0],
      type,
      title: `${type} with ${friendName}`,
    };

    setTimeline((previous) => [newEntry, ...previous]);

    toast.success(`${type} logged for ${friendName}!`);
  };

  return (
    <FriendContext.Provider
      value={{
        friends,
        loading,
        timeline,
        addInteraction,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};
