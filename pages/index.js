import { useState } from "react";


const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD Image (1280x720)", code: "maxresdefault" },
        { resolution: "SD Image (640x480)", code: "sddefault" },
        { resolution: "Normal Image (480x360)", code: "hqdefault" },
        { resolution: "Medium Image (320x180)", code: "mqdefault" },
        { resolution: "Low Image(120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600 px-4">
        Download high-quality YouTube thumbnails for free! Simply paste the video URL below 
        <br/>and click "Get Thumbnail Image" to instantly save your thumbnails.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        
        <button
          className="btn-red mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
         Get Thumbnail Images
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <div>{option.resolution} </div>
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>

              <div class="flex justify-center items-center pt-2"> 
                     <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                  </div> 
                         
               
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
