import { useState } from 'react';
import Clap from './assets/Clap.mp3';
import ClosedHH from './assets/Closed-HH.mp3';
import Heater1 from './assets/Heater-1.mp3';
import Heater2 from './assets/Heater-2.mp3';
import Heater3 from './assets/Heater-3.mp3';
import Heater4 from './assets/Heater-4.mp3';
import Kick from './assets/Kick.mp3';
import Kick_n_Hat from './assets/Kick_n_Hat.mp3';
import OpenHH from './assets/Open-HH.mp3';
import { PadKey } from './components/PadKey/PadKey';
import { Pad } from './components/Pad/Pad';
import styles from './App.module.scss';

export const App = () => {
  const [display, setDisplay] = useState('');

  return (
    <div id='drum-machine' className={styles.drumMachine}>
      <div id='display' className={styles.display}>
        {display}
      </div>
      <Pad>
        <PadKey
          id='Heater-1'
          matchingKey='Q'
          audioSrc={Heater1}
          label='Heater 1'
          setDisplay={setDisplay}
        />
        <PadKey
          id='Heater-2'
          matchingKey='W'
          audioSrc={Heater2}
          label='Heater 2'
          setDisplay={setDisplay}
        />
        <PadKey
          id='Heater-3'
          matchingKey='E'
          audioSrc={Heater3}
          label='Heater 3'
          setDisplay={setDisplay}
        />
        <PadKey
          id='Heater-4'
          matchingKey='A'
          audioSrc={Heater4}
          label='Heater 4'
          setDisplay={setDisplay}
        />
        <PadKey
          id='Clap'
          matchingKey='S'
          audioSrc={Clap}
          label='Clap'
          setDisplay={setDisplay}
        />
        <PadKey
          id='Open-HH'
          matchingKey='D'
          audioSrc={OpenHH}
          label='Open HH'
          setDisplay={setDisplay}
        />
        <PadKey
          id='Kick-n-hat'
          matchingKey='Z'
          audioSrc={Kick_n_Hat}
          label="Kick n' Hat"
          setDisplay={setDisplay}
        />
        <PadKey
          id='Kick'
          matchingKey='X'
          audioSrc={Kick}
          label='Kick'
          setDisplay={setDisplay}
        />
        <PadKey
          id='Closed-HH'
          matchingKey='C'
          audioSrc={ClosedHH}
          label='Closed HH'
          setDisplay={setDisplay}
        />
      </Pad>
    </div>
  );
};
