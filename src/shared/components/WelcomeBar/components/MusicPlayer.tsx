import { useState, useRef } from 'react';
import myAlbumCover from '@/assets/stickers/bunny02.svg';
import YouTube from 'react-youtube'
import type { YouTubeProps, YouTubePlayer } from 'react-youtube';


export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null)

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      listType: 'playlist',
      list: 'PLBgJjIxp0WaVX6LSodfsQ9pBfHWObvkfX',
      autoplay: 0,
      controls: 0,
    },
  };

  const onReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target;
    playerRef.current.setVolume(30);
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    playerRef.current?.nextVideo();
  };

  const playPrevious = () => {
    playerRef.current?.previousVideo();
  };

  return (
    <div className="relative flex w-lg rounded-3xl items-center text-white/80">

      <div style={{ position: 'absolute', top: '-1000px', left: '-1000px' }}>
        <YouTube opts={opts} onReady={onReady} />
      </div>

      <div className={`absolute bg-darkGray shadow-md shadow-gray-200/50 border border-borderGray left-5 rounded-full w-12 h-12 z-10 overflow-hidden flex items-center justify-center ${isPlaying ? 'animate-spin' : 'heartbeat '}`}>
        <img
          src={myAlbumCover}
          alt="Playlist Cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-18 flex gap-8 items-center w-full px-8 py-1 rounded-3xl">

        <div className="overflow-hidden whitespace-nowrap">
          <p className={` px-2 text-lg ${isPlaying ? 'animate-marquee ' : ''}`}>
            Lo-Fi Beats - Evelyn's Study Session
          </p>
        </div>

        <div className="flex items-center gap-3 ">
          <button
            onClick={playPrevious}
            className="text-2xl  transition-transform  hover:text-bgPink"
          >
            ⏮
          </button>

          <button
            onClick={togglePlay}
            className="text-3xl hover:scale-120 transition-transform "
          >
            {isPlaying ? '⏸' : '▶︎'}
          </button>

          <button
            onClick={playNext}
            className="text-2xl transition-transform hover:text-bgPink"
          >
            ⏭
          </button>
        </div>

        <div className="flex gap-1 items-center h-4">
          {[...Array(22)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 bg-white/60 h-1 rounded-full bar"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationPlayState: isPlaying ? 'running' : 'paused'
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
};