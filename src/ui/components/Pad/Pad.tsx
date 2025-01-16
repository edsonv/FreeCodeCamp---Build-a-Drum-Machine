import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

type Props = {
  id: string;
  matchingKey: string;
  audioSrc: string;
  label: string;
  setDisplay: Dispatch<SetStateAction<string>>;
};
export const Pad = ({
  id,
  matchingKey,
  audioSrc,
  label,
  setDisplay,
}: Props) => {
  const formattedKey = matchingKey.toUpperCase();
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.key === matchingKey.toLowerCase() ||
        event.key.toUpperCase() === formattedKey
      ) {
        setDisplay(label);
        audioRef.current?.play();
      }
    },
    [formattedKey, matchingKey, label, setDisplay]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <button
      className='drum-pad'
      id={id}
      onClick={() => {
        setDisplay(label);
        audioRef.current?.play();
      }}
    >
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
