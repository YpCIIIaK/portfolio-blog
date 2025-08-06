import React, { useEffect, useState } from "react";
import axios from "axios";

const GitHubStats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const username = "YpCIIIaK";
                const token = import.meta.env.VITE_GITHUB_TOKEN;

                const profileResponse = await axios.get(
                    `https://api.github.com/users/${username}`,
                    {
                        headers: {
                            Authorization: `token ${token}`,
                        },
                    }
                );

                const reposResponse = await axios.get(
                    `https://api.github.com/users/${username}/repos`,
                    {
                        headers: {
                            Authorization: `token ${token}`,
                        },
                    }
                );

                const languages = {};
                let stars = 0;

                reposResponse.data.forEach((repo) => {
                    stars += repo.stargazers_count;
                    if (repo.language) {
                        languages[repo.language] = (languages[repo.language] || 0) + 1;
                    }
                });

                setStats({
                    followers: profileResponse.data.followers,
                    publicRepos: profileResponse.data.public_repos,
                    stars,
                    languages,
                    createdAt: new Date(profileResponse.data.created_at).toLocaleDateString(),
                    profileUrl: profileResponse.data.html_url,
                });
            } catch (error) {
                console.error("Error fetching GitHub stats:", error);
            }
        };

        fetchStats();
    }, []);

    if (!stats) return <div className="text-textPrimary">Loading github stats...</div>;

    return (
        <div className="p-6 bg-primary rounded-lg shadow-lg border border-secondary">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">GitHub Statistics</h3>
            <div className="text-textSecondary space-y-2">
                <p>
                    <strong className="text-secondary">Followers:</strong> {stats.followers}
                </p>
                <p>
                    <strong className="text-secondary">Public Repos:</strong> {stats.publicRepos}
                </p>
                <p>
                    <strong className="text-secondary">Total Stars:</strong> {stats.stars}
                </p>
                <p>
                    <strong className="text-secondary">Profile Created:</strong> {stats.createdAt}
                </p>
            </div>
            <h4 className="mt-4 text-xl font-bold text-textPrimary">Top Languages:</h4>
            <ul className="list-disc list-inside mt-2 text-textSecondary">
                {Object.entries(stats.languages).map(([language, count], index) => (
                    <li key={index}>
                        {language}: {count} repos
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <a
                    href={stats.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                >
                    View GitHub Profile
                </a>
            </div>
        </div>
    );
};

export default GitHubStats;
