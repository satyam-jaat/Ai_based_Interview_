 // Access webcam and display video in the first div
 const videoElement = document.getElementById('videoElement');

 // Request access to the user's webcam
 navigator.mediaDevices.getUserMedia({ video: true })
     .then(stream => {
         videoElement.srcObject = stream;
     })
     .catch(error => {
         console.error('Error accessing webcam:', error);
     });