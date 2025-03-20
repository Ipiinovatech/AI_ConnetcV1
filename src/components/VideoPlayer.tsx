import React from 'react';
import ReactPlayer from 'react-player';
import { getVideoUrl } from '../utils/assetHelpers';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  onReady?: () => void;
  onError?: (error: any) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  className = '',
  onReady,
  onError
}) => {
  return (
    <div className={`relative aspect-video ${className}`}>
      <ReactPlayer
        url={getVideoUrl(src)}
        width="100%"
        height="100%"
        controls
        playsinline
        config={{
          file: {
            attributes: {
              poster: poster ? getImageUrl(poster) : undefined,
              preload: 'auto'
            }
          }
        }}
        onReady={onReady}
        onError={onError}
      />
    </div>
  );
};

export default VideoPlayer;