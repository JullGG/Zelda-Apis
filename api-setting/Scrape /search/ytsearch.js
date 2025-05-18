const yts = require('yt-search');

async function ytsSearch(query) {
  try {
    const { videos, channels, playlists, live } = await yts(query);

    return {
      videos: videos.map(video => ({
        id: video.videoId,
        title: video.title,
        url: video.url,
        thumbnail: video.thumbnail,
        duration: video.duration.timestamp,
        views: video.views,
        uploaded: video.uploadedAt,
        author: {
          name: video.author.name,
          url: video.author.url
        }
      })),
      channels: channels.map(channel => ({
        id: channel.channelId,
        name: channel.name,
        url: channel.url,
        thumbnail: channel.image
      })),
      playlists: playlists.map(playlist => ({
        id: playlist.listId,
        title: playlist.title,
        url: playlist.url,
        thumbnail: playlist.thumbnail,
        videoCount: playlist.videoCount,
        author: playlist.author.name
      })),
      liveStreams: live.map(stream => ({
        id: stream.videoId,
        title: stream.title,
        url: stream.url,
        thumbnail: stream.thumbnail,
        watching: stream.views,
        author: {
          name: stream.author.name,
          url: stream.author.url
        }
      }))
    };
  } catch (error) {
    throw new Error(`YouTube search failed: ${error.message}`);
  }
}

module.exports = ytsSearch;
