
function handleProject() {
    window.location.href="project1.html";
}

function handleBio() {
    window.location.href="bio.html";
}

function handleBack() {
    window.location.href="index.html";
}

var trace1 = {
    x: [42, 79, 122, 213],
    y: [53, 51.8, 49, 43.2],
    mode: 'lines+markers',
    name: 'PP_YOLOE'
  };
  
  var trace2 = {
    x: [82, 99, 122, 157],
    y: [50.9, 49, 45.8, 37.8],
    mode: 'lines+markers',
    name: 'YOLOv5'
  };
  
  var trace3 = {
    x: [40, 62, 98, 118],
    y: [51.8, 50, 47.3, 40.2],
    mode: 'lines+markers',
    name: 'YOLOX'
  };

  var trace4 = {
    x: [50, 70],
    y: [50.2, 49.3],
    mode: 'lines+markers',
    name: 'PP_YOLOv2'
  };

  var trace5 = {
    x: [72, 90, 110, 132],
    y: [46, 44.5, 42.5, 39.2],
    mode: 'lines+markers',
    name: 'PP_YOLO'
  };
  
  var data = [trace1, trace2, trace3, trace4, trace5];
  
  var layout = {
    title: 'MS COCO Object Dectection',
    xaxis: {
      title: 'FPS(V100)'
    },
    yaxis: {
      title: 'COCO mAP(%)'
    }
  };
  
  Plotly.newPlot('myDiv', data, layout);
  