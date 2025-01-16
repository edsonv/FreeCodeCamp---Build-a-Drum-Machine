import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import './PadKey.scss';

type Props = {
  id: string;
  matchingKey: string;
  audioSrc: string;
  label: string;
  setDisplay: Dispatch<SetStateAction<string>>;
};

export const PadKey = ({
  id,
  matchingKey,
  audioSrc,
  label,
  setDisplay,
}: Props) => {
  const formattedKey = matchingKey.toUpperCase();
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = useCallback(() => {
    setDisplay(label);
    audioRef.current?.play();
  }, [label, setDisplay]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.key === matchingKey.toLowerCase() ||
        event.key.toUpperCase() === formattedKey
      ) {
        handleClick();
      }
    },
    [formattedKey, matchingKey, handleClick]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <button className='drum-pad' id={id} onClick={handleClick}>
      <audio
        src={audioSrc}
        id={formattedKey}
        ref={audioRef}
        className='clip'
      ></audio>
      {formattedKey}
    </button>
  );
};
