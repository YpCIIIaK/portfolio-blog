const SpotifyMusic = () => {
    return (
        <div className="mt-6">
            <h4 className="text-lg font-bold">One`s of the Favorite Tracks</h4>
            <iframe
                src="https://open.spotify.com/embed/track/1T8Wf6c2AWWYNdc7tFAhzX?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allow="encrypted-media"
                className="mt-4 rounded-lg shadow-lg"
            ></iframe>
            <iframe
                src="https://open.spotify.com/embed/track/3NkCuoxxx5VZ6T6xTsmjFD?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allow="encrypted-media"
                className="mt-4 rounded-lg shadow-lg"
            ></iframe>
            <iframe
                src="https://open.spotify.com/embed/track/1StpXCfxWblt9D1I4hDVIx?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allow="encrypted-media"
                className="mt-4 rounded-lg shadow-lg"
            ></iframe>

        </div>
    );
};

export default SpotifyMusic;
