import React, { useState } from 'react';
import VideoViewer from '../components/VideoViewer';
import { Flex } from '@aws-amplify/ui-react';
import { SearchField } from '@aws-amplify/ui-react';

const Video = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${API_KEY}`);
    const data = await response.json();
    const videoId = data.items[0].id.videoId;
    setVideoUrl(`https://www.youtube.com/watch?v=${videoId}`);
  };

  return (
    <Flex direction="column" align="center">
      <form onSubmit={handleSearch}>
        <SearchField 
          width='50%'
          placeholder="Search for a video"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onSubmit={handleSearch}
        />
      </form>
      <VideoViewer videoUrl={videoUrl} />
    </Flex>
  );
};

export default Video;