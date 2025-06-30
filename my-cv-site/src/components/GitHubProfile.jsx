import React, { useEffect, useState } from 'react';

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/lunardn');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Erreur GitHub :', error);
      }
    };

    fetchGitHubProfile();
  }, []);

  if (!profile) return <p>Chargement du profil GitHub...</p>;

  return (
    <div className="github-profile">
      <h3>💻 GitHub</h3>
      <p><strong>Utilisateur :</strong> {profile.login}</p>
      <p><strong>Dépôts publics :</strong> {profile.public_repos}</p>
      <p><strong>Followers :</strong> {profile.followers}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        Voir le profil →
      </a>
    </div>
  );
};

export default GitHubProfile;
