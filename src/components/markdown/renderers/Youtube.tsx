import { FullWidth } from '@/components/typography/FullWidth';
import { useRef } from 'react';
import styles from './VideoEmbed.module.scss';
// import ReactYoutube from 'react-youtube';

interface Props {
  videoid: string;
}

export default function Youtube({ videoid }: Props) {

  const ref = useRef(null);

  const opts = {
    // height: '360',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestBranding: 1,
      rel: 0,
      // controls:0,
    },
  };
  const handleReady = (e: any) => {
    // e.target.pauseVideo()
  }

  return (
    // <div className="video-responsive">
    // <FullWidth colour='primary'>
    <div className={styles.videoResponsive}>
      <iframe
        // width='100%'
        // height="480"
        src={`https://www.youtube.com/embed/${videoid}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    {/* </div> */ }
    {/* </FullWidth> */}
    </div>
  );
}