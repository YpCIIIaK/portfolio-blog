const SpotifyMusic = () => {
    return (
        <div className="mt-6">
            <h4 className="text-lg font-bold mb-4">Some of my Favorite Tracks</h4>
            <div className="flex flex-wrap gap-4">
                <iframe
                    src="https://open.spotify.com/embed/track/1T8Wf6c2AWWYNdc7tFAhzX?utm_source=generator"
                    width="400"
                    height="100"
                    frameBorder="0"
                    allow="encrypted-media"
                    className="rounded-lg shadow-lg"
                ></iframe>
                <iframe
                    src="https://open.spotify.com/embed/track/3NkCuoxxx5VZ6T6xTsmjFD?utm_source=generator"
                    width="400"
                    height="100"
                    frameBorder="0"
                    allow="encrypted-media"
                    className="rounded-lg shadow-lg"
                ></iframe>
                <iframe
                    src="https://open.spotify.com/embed/track/1StpXCfxWblt9D1I4hDVIx?utm_source=generator"
                    width="400"
                    height="100"
                    frameBorder="0"
                    allow="encrypted-media"
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>
        </div>
    );
};

export default SpotifyMusic;
