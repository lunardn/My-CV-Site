import React, { useEffect, useState } from 'react';
import '../App.css';

const HackerNewsFeed = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const storyIds = await response.json();
        const top10 = storyIds.slice(0, 10);

        const storyPromises = top10.map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
        );

        const storiesData = await Promise.all(storyPromises);
        setStories(storiesData);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des actualités :', error);
        setLoading(false);
      }
    };

    fetchTopStories();
  }, []);

  if (loading) return <p>Chargement des actualités Hacker News...</p>;

  return (
    <div className="hn-container">
      <h2 className="hn-title">📰 Top 10 Hacker News</h2>
      <ul className="hn-list">
        {stories.map(story => (
          <li key={story.id} className="hn-item">
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a> <span>({story.score} points)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HackerNewsFeed;
