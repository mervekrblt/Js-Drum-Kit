const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((localMediaStream) => {
        video.srcObject = localMediaStream;
        video.play();
      })
      .catch((err) => {
        console.error(`OH NO!!!`, err);
      });
  }

  const paintToCanvas =() =>{
      const {videoHeight: height, videoWidth:width} = video //ES6 feature
      canvas.height = height
      canvas.width = width

      //take and put photo of video into canvas every 16 msc
      setInterval(() =>{
          ctx.drawImage(video, 0, 0, width, height)
      },16)
  }


getVideo()
video.addEventListener('canplay', paintToCanvas)