import React from 'react';
import {Composition} from 'remotion';
import {CibilVideo} from './Video';

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Main"
    component={CibilVideo}
    durationInFrames={8100}
    fps={30}
    width={1920}
    height={1080}
  />
);
