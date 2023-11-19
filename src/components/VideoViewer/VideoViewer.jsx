import React from 'react';
import { View } from '@aws-amplify/ui-react';
import ReactPlayer from 'react-player';

const VideoViewer = ({ videoUrl }) => {
  return (
    <View style={{ width: '70%' }}>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width='100%'
        height='300px'
      />
    </View>
  );
};

export default VideoViewer;