import React, { createContext, useState, useEffect } from 'react';
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
      title: 'Call with Alex Johnson'
    }
  ]);

  useEffect(() => {
    // public/friends.json থেকে ডেটা ফেচ করা হচ্ছে
    fetch('/friends.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch JSON');
        return res.json();
      })
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching friends:', err);
        setLoading(false);
      });
  }, []);

  const addInteraction = (friendName, friendId, type) => {
    const newEntry = {
      id: Date.now(),
      friendId,
      date: new Date().toISOString().split('T')[0],
      type,
      title: `${type} with ${friendName}`
    };

    setTimeline((prev) => [newEntry, ...prev]);
    toast.success(`${type} logged for ${friendName}!`);
  };

  return (
    <FriendContext.Provider value={{ friends, loading, timeline, addInteraction }}>
      {children}
    </FriendContext.Provider>
  );
};