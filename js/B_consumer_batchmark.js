var table1_data =[
    {PlatformName: 'ADL-S',CPU:'Intel® 12th Gen i7-12700TE',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'	45.107',NumofStreams:'3',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'ADL-H',CPU:'Intel® 12th Gen i7-12700H',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'75.227',NumofStreams:'5',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'ADL-PS',CPU:'Intel® 12th Gen i7-12800HL',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'	75.161',NumofStreams:'5',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'RPL-S',CPU:'13th Gen Intel® Core™ i7-13700E',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'60.234',NumofStreams:'4',Latency:'NA',BatchSize:'1',WallPower:'NA'},
    {PlatformName: 'RPL-H',CPU:'13th Gen Intel® Core™ i7-13800HE',DiscreteAccelerator:'-',Device:'MULTI:GPU,CPU',Frameworks:'OpenCV 4.7.0 DLStreamer 1.7.0 Gstreamer 1.20.3 Openvino 22.2',Model:'detection - yolov5s classification - efficientnet-b0',VideoTypeResolution:'RTSP Camera (AVC 3840x2160 @15FPS)',Presicion:'INT8',CumulativeThroughput:'75.101',NumofStreams:'5',Latency:'NA',BatchSize:'1',WallPower:'NA'},
]
function loaddata(){
    var table1=document.getElementById('table1');
    table1.innerHTML=table1_data.map((ele,ind)=>{
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
    var table2=document.getElementById('table2');
    table2.innerHTML=table1_data.map((ele,ind)=>{
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

function fliterdata(x){
    var checkbox = document.getElementById(x);
    // Check if the checkbox is checked
    var isChecked = checkbox.checked;
    console.log(isChecked);
    // If the checkbox is not checked, hide all elements with the class "Platform"
    if (!isChecked) {
        // Get all elements with the class "Platform"
        var elements = document.getElementsByClassName(x);
        
        // Loop through each element and set its display style to "none"
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('d-none');
        }
    }
    else{
                // Get all elements with the class "Platform"
                var elements = document.getElementsByClassName(x);
        
                // Loop through each element and set its display style to "none"
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove('d-none');
                }
    }
}



window.onload = function(){
    // load data
    loaddata();
}