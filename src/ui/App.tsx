import { Pad } from './components/Pad/Pad';
import Heater1 from './assets/Heater-1.mp3';
import Heater2 from './assets/Heater-2.mp3';
import Heater3 from './assets/Heater-3.mp3';
import Heater4 from './assets/Heater-4.mp3';
import Clap from './assets/Clap.mp3';
import OpenHH from './assets/Open-HH.mp3';
import Kick_n_Hat from './assets/Open-HH.mp3';
import Kick from './assets/Kick.mp3';
import ClosedHH from './assets/Closed-HH.mp3';
import { useState } from 'react';

export const App = () => {
  const [display, setDisplay] = useState('');
  return (
    <div id='drum-machine'>
      <div id='display'>{display}</div>
      <Pad
        id='Heater-1'
        matchingKey='Q'
        audioSrc={Heater1}
        label='Heater 1'
        setDisplay={setDisplay}
      />
      <Pad
        id='Heater-2'
        matchingKey='W'
        audioSrc={Heater2}
        label='Heater 2'
        setDisplay={setDisplay}
      />
      <Pad
        id='Heater-3'
        matchingKey='E'
        audioSrc={Heater3}
        label='Heater 3'
        setDisplay={setDisplay}
      />
      <Pad
        id='Heater-4'
        matchingKey='A'
        audioSrc={Heater4}
        label='Heater 4'
        setDisplay={setDisplay}
      />
      <Pad
        id='Clap'
        matchingKey='S'
        audioSrc={Clap}
        label='Clap'
        setDisplay={setDisplay}
      />
      <Pad
        id='Open-HH'
        matchingKey='D'
        audioSrc={OpenHH}
        label='Open HH'
        setDisplay={setDisplay}
      />
      <Pad
        id='Kick-n-hat'
        matchingKey='Z'
        audioSrc={Kick_n_Hat}
        label="Kick n' Hat"
        setDisplay={setDisplay}
      />
      <Pad
        id='Kick'
        matchingKey='X'
        audioSrc={Kick}
        label='Kick'
        setDisplay={setDisplay}
      />
      <Pad
        id='Closed-HH'
        matchingKey='C'
        audioSrc={ClosedHH}
        label='Closed HH'
        setDisplay={setDisplay}
      />
    </div>
  );
};
