// load data from json file
var data = [
    {is:'Intel® Turbo Boost 2.0',does:'Boosts all-core frequency above base clock speed up to specified maximum frequency during more intensive workloads; available if the CPU’s running under its power, current, and temperature limits.'},
    {is:'Intel® Turbo Boost Max Technology 3.0',does:'Boosts the frequency of one or two favored cores; available if the CPU’s running below its power, current, and temperature limits.'},
    {is:'Intel® Adaptive Boost Technology',does:'Opportunistically increases all-core turbo frequency when current, power, and thermal headroom exists. Works below a temperature limit of 100°C.'},
    {is:'Intel® Thermal Velocity Boost',does:'Opportunistically increases clock frequency by up to 100MHz; available if the CPU’s within temperature limits (70°C for desktops, 65°C for mobile) and turbo power budget is available.'},
    {is:'Single-Core TVB',does:'Takes the faster of the two favored CPU cores to a speed superior to Turbo Boost Max 3.0.'},
    {is:'All-Core TVB',does:'Ultra fast speeds when all cores are active and the CPU is under its temperature threshold.'},    
]
function loaddata(){
    var table = document.getElementById('b_table');
    table.innerHTML = data.map((ele,ind)=>{
        if(ind%2==1){
            var color= 'light';
        }
        return `
            <tr class="bg-${color}">
                <td class="border" style="border-color: grey;">${ele.is}</td>
                <td class="border" style="border-color: grey;">${ele.does}</td>
            </tr>
        `;
    }).join('');
}
window.onload = function(){
    // load data
    loaddata();
}