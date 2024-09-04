var table1_data =[
    {PlatformName: 'ADL-S',CPU:'Intel® 12th Gen i7-12700TE',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'	45.107',NumofStreams:'3',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'ADL-H',CPU:'Intel® 12th Gen i7-12700H',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'75.227',NumofStreams:'5',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'ADL-PS',CPU:'Intel® 12th Gen i7-12800HL',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'	75.161',NumofStreams:'5',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'RPL-S',CPU:'13th Gen Intel® Core™ i7-13700E',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'60.234',NumofStreams:'4',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'RPL-H',CPU:'13th Gen Intel® Core™ i7-13800HE',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'75.101',NumofStreams:'5',Latency:'NA',BatchSize:'1',WallPower:'NA'},
]
var table2_data =[
    {PlatformName: 'ADL-S',CPU:'Intel® 12th Gen i7-12700TE',DiscreteAccelerator:'-',Device:'iGPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'',NumofStreams:'9',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'ADL-H',CPU:'Intel® 12th Gen i7-12700H',DiscreteAccelerator:'-',Device:'	iGPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'',NumofStreams:'14',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'ADL-PS',CPU:'Intel® 12th Gen i7-12800HL',DiscreteAccelerator:'-',Device:'iGPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'',NumofStreams:'14',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'RPL-S',CPU:'13th Gen Intel® Core™ i7-13700E',DiscreteAccelerator:'-',Device:'iGPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'',NumofStreams:'9',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'RPL-H',CPU:'13th Gen Intel® Core™ i7-13800HE',DiscreteAccelerator:'-',Device:'iGPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'',NumofStreams:'13',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'Xeon',CPU:'Intel® Xeon® Gold 6330',DiscreteAccelerator:'Intel® Flex 170',Device:'dGPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'',NumofStreams:'68',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'Serpent Canyon',CPU:'Intel® 12th Gen i7-12700H',DiscreteAccelerator:'Intel® Arc™ A770 Graphics',Device:'iGPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'',NumofStreams:'15',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'Serpent Canyon',CPU:'Intel® 12th Gen i7-12700H',DiscreteAccelerator:'Intel® Arc™ A770 Graphics',Device:'dGPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'',NumofStreams:'59',Latency:'NA',BatchSize:'1',WallPower:'NA'},
]
function loaddata(x,y){
    console.log(x,y);
    if(y=='table1'){
      var val=table1_data.filter((ele,ind)=>{
            return ele.PlatformName.includes(x);
      });
      console.log(val);
      table1(val);
    }
    if(x==undefined){
    table1(table1_data);    
    }
    console.log(x,y);
    if(y=='table2'){
      var val=table2_data.filter((ele,ind)=>{
            return ele.PlatformName.includes(x);
      });
      console.log(val);
      table2(val);
    }
    if(x==undefined){
    table2(table2_data);    
    }
    console.log(x,y);
    if(y=='table3'){
      var val=table1_data.filter((ele,ind)=>{
            return ele.PlatformName.includes(x);
      });
      console.log(val);
      table3(val);
    }
    if(x==undefined){
    table3(table1_data);    
    }
    console.log(x,y);
    if(y=='table4'){
      var val=table2_data.filter((ele,ind)=>{
            return ele.PlatformName.includes(x);
      });
      console.log(val);
      table4(val);
    }
    if(x==undefined){
    table4(table2_data);    
    }
}
function table1(table){
    console.log('table',table)
    var table1=document.getElementById('table1');
    table1.innerHTML=table.map((ele,ind)=>{
        return `
            <tr>
                <td class="PlatformName px-2">${ele.PlatformName}</td>
                <td class="px-2 CPU">${ele.CPU}</td>
                <td class="px-2 DiscreteAccelerator">${ele.DiscreteAccelerator}</td>
                <td class="px-2 Device">${ele.Device}</td>
                <td class="px-2 Frameworks">${ele.Frameworks}</td>
                <td class="px-2 Model">${ele.Model}</td>
                <td class="px-2 VideoTypeResolution">${ele.VideoTypeResolution}</td>
                <td class="px-2 Presicion">${ele.Presicion}</td>
                <td class="px-2 CumulativeThroughput">${ele.CumulativeThroughput}</td>
                <td class="px-2 NumofStreams">${ele.NumofStreams}</td>
                <td class="px-2 Latency">${ele.Latency}</td>
                <td class="px-2 BatchSize">${ele.BatchSize}</td>
                <td class="px-2 WallPower">${ele.WallPower}</td>
            </tr>
        `;
    }).join('');
}
function table2(table) {
    var table2=document.getElementById('table2');
    table2.innerHTML=table.map((ele,ind)=>{
        return `
            <tr>
                <td class="PlatformName1 px-2">${ele.PlatformName}</td>
                <td class="px-2 CPU1">${ele.CPU}</td>
                <td class="px-2 DiscreteAccelerator1">${ele.DiscreteAccelerator}</td>
                <td class="px-2 Device1">${ele.Device}</td>
                <td class="px-2 Frameworks1">${ele.Frameworks}</td>
                <td class="px-2 Model1">${ele.Model}</td>
                <td class="px-2 VideoTypeResolution1">${ele.VideoTypeResolution}</td>
                <td class="px-2 Presicion1">${ele.Presicion}</td>
                <td class="px-2 CumulativeThroughput1">${ele.CumulativeThroughput}</td>
                <td class="px-2 NumofStreams1">${ele.NumofStreams}</td>
                <td class="px-2 Latency1">${ele.Latency}</td>
                <td class="px-2 BatchSize1">${ele.BatchSize}</td>
                <td class="px-2 WallPower1">${ele.WallPower}</td>
            </tr>
        `;
    }).join('');
}
function table3(table){
    var table3=document.getElementById('table3');
    table3.innerHTML=table.map((ele,ind)=>{
        return `
            <tr>
                <td class="PlatformName2 px-2">${ele.PlatformName}</td>
                <td class="px-2 CPU2">${ele.CPU}</td>
                <td class="px-2 DiscreteAccelerator2">${ele.DiscreteAccelerator}</td>
                <td class="px-2 Device2">${ele.Device}</td>
                <td class="px-2 Frameworks2">${ele.Frameworks}</td>
                <td class="px-2 Model2">${ele.Model}</td>
                <td class="px-2 VideoTypeResolution2">${ele.VideoTypeResolution}</td>
                <td class="px-2 Presicion2">${ele.Presicion}</td>
                <td class="px-2 CumulativeThroughput2">${ele.CumulativeThroughput}</td>
                <td class="px-2 NumofStreams2">${ele.NumofStreams}</td>
                <td class="px-2 Latency2">${ele.Latency}</td>
                <td class="px-2 BatchSize2">${ele.BatchSize}</td>
                <td class="px-2 WallPower2">${ele.WallPower}</td>
            </tr>
        `;
    }).join('');
}
function table4(table){
    var table4=document.getElementById('table4');
    table4.innerHTML=table.map((ele,ind)=>{
        return `
            <tr>
                <td class="PlatformName3 px-2">${ele.PlatformName}</td>
                <td class="px-2 CPU3">${ele.CPU}</td>
                <td class="px-2 DiscreteAccelerator3">${ele.DiscreteAccelerator}</td>
                <td class="px-2 Device3">${ele.Device}</td>
                <td class="px-2 Frameworks3">${ele.Frameworks}</td>
                <td class="px-2 Model3">${ele.Model}</td>
                <td class="px-2 VideoTypeResolution3">${ele.VideoTypeResolution}</td>
                <td class="px-2 Presicion3">${ele.Presicion}</td>
                <td class="px-2 CumulativeThroughput3">${ele.CumulativeThroughput}</td>
                <td class="px-2 NumofStreams3">${ele.NumofStreams}</td>
                <td class="px-2 Latency3">${ele.Latency}</td>
                <td class="px-2 BatchSize3">${ele.BatchSize}</td>
                <td class="px-2 WallPower3">${ele.WallPower}</td>
            </tr>
        `;
    }).join('');
}
function fliterdata(x){
    var checkbox = document.getElementById(x);
    var isChecked = checkbox.checked;
    console.log(isChecked);
    if (!isChecked) {
        var elements = document.getElementsByClassName(x);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('d-none');
        }
    }
    else{
                var elements = document.getElementsByClassName(x);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove('d-none');
                }
    }
}
window.onload = function(){
    // load data
    loaddata();
}