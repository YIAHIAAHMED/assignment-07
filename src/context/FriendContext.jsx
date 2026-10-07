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

  // Fetch JSON data
  useEffect(() => {

    fetch('/friends.json')
      .then((res) => {

        if (!res.ok) {
          throw new Error('Failed to fetch friends data');
        }

        return res.json();

      })
      .then((data) => {

        setFriends(data);
        setLoading(false);

      })
      .catch((error) => {

        console.error(error);
        setLoading(false);

        toast.error('Failed to load friends');

      });

  }, []);

  // Add Call / Text / Video
  const addInteraction = (friendName, friendId, type) => {

    const newEntry = {
      id: Date.now(),
      friendId: friendId,
      date: new Date().toISOString().split('T')[0],
      type: type,
      title: `${type} with ${friendName}`,
    };

    setTimeline((previous) => [
      newEntry,
      ...previous,
    ]);

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