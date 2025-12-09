import "react";

const Download = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto pt-4">
        <div>
          <img 
            src="/assets/WhiteLogo.png"
            className="my-4 mx-auto px-12" 
            alt="White Logo"
          />
          <div>
            <p className="text-zinc-400 mt-6 text-xl md:text-3xl text-center">
              FREE 
            </p>
            <p className="text-zinc-400 mt-1 text-xl md:text-3xl text-center">
              - 15-DAY FORECAST -
            </p>
          </div>
        </div>
        <div className="downloads mt-6 pb-10">
          <div className="ios">
            <a
              href="https://apps.apple.com/us/app/a-frame-surf-forecast/id6741837362"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/assets/AppStore.png"
                className="my-4 px-12 md:px-20 xl:px-32"
                alt="Download on the App Store"
              />
            </a>
          </div>
          <div className="google pt-1">
            <a
              href="https://play.google.com/store/apps/details?id=com.aframe.AFrameFontEnd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/assets/GooglePlay.webp"
                className="my-4 px-12 md:px-20 xl:px-32"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
