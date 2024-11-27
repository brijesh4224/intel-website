var data = [
    { product: 'Intel® Optane™ SSD DC D4800X Series (1.5TB, 2.5in PCIe 2x2, 3D XPoint™)', capacity: '1.5 TB', form_factor: 'U.2 15mm', interface: 'PCIe 3.0 2x2 dual port, NVMe', status: true },
    { product: 'Intel® Optane™ SSD DC D4800X Series (1.5TB, 2.5in PCIe 2x2, 3D XPoint™)', capacity: '1.5 TB', form_factor: 'U.2 15mm', interface: 'PCIe 3.0 2x2 dual port, NVMe', status: false },
    { product: 'Intel® Optane™ SSD DC D4800X Series (1.5TB, 2.5in PCIe 2x2, 3D XPoint™)', capacity: '1.5 TB', form_factor: 'U.2 15mm', interface: 'PCIe 3.0 2x2 dual port, NVMe', status: true },
    { product: 'Intel® Optane™ SSD DC D4800X Series (1.5TB, 2.5in PCIe 2x2, 3D XPoint™)', capacity: '1.5 TB', form_factor: 'U.2 15mm', interface: 'PCIe 3.0 2x2 dual port, NVMe', status: true },
    { product: 'Intel® Optane™ SSD DC D4800X Series (1.5TB, 2.5in PCIe 2x2, 3D XPoint™)', capacity: '1.5 TB', form_factor: 'U.2 15mm', interface: 'PCIe 3.0 2x2 dual port, NVMe', status: true },
]
var gen = [' Intel® Optane™ Persistent Memory 100 Series','Intel® Optane™ Persistent Memory 200 Series','Intel® Optane™ Persistent Memory 300 Series'];
var available = ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (22H2)', 'Windows 10* (22H2)'];
var b_data = [
    { id: "1212", name: 'Intel® Arc™ & Iris® Xe Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1232", name: 'Intel® NPU Driver - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1213", name: 'Intel® Arc™ Pro Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1262", name: 'Intel® Processor Identification Utility - Windows* Version', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1242", name: 'Intel® Processor Diagnostic Tool', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1212", name: 'Intel® Arc™ & Iris® Xe Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1232", name: 'Intel® NPU Driver - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1213", name: 'Intel® Arc™ Pro Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1262", name: 'Intel® Processor Identification Utility - Windows* Version', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1242", name: 'Intel® Processor Diagnostic Tool', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1212", name: 'Intel® Arc™ & Iris® Xe Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1232", name: 'Intel® NPU Driver - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1213", name: 'Intel® Arc™ Pro Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1262", name: 'Intel® Processor Identification Utility - Windows* Version', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1242", name: 'Intel® Processor Diagnostic Tool', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1212", name: 'Intel® Arc™ & Iris® Xe Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1232", name: 'Intel® NPU Driver - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1213", name: 'Intel® Arc™ Pro Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1262", name: 'Intel® Processor Identification Utility - Windows* Version', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1242", name: 'Intel® Processor Diagnostic Tool', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
]
const documents = [
    {
        id: "825857",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Case Studies",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Apache Pass",
        os: 'Linux'
    },
    {
        id: "825858",
        title: "采用英特尔® 傲腾™ 固态盘的介质感知云存储加速层 (CSAL) 缓存解决方案为阿里巴巴 ECS 本地磁盘 D3C 服务提供助力采用英特尔® 傲腾™ 固态盘的介质感知云存储加速层 (CSAL) 缓存解决方案为阿里巴巴 ECS 本地磁盘 D3C 服务提供助力",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Case Studies",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Barlow Pass",
        os: 'SUSE Linux Family'
    },
    {
        id: "825859",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Case Studies",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Barlow Pass",
        os: 'VMware'
    },
    {
        id: "825860",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Communications",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Barlow Pass",
        os: 'Microsoft Windows'
    },
    {
        id: "825861",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Communications",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Cascade Lake",
        os: 'Red Hat Linux Family'
    },
    {
        id: "825862",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Configuration Guides",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Cooper Lake",
        os: 'Red Hat Linux Family'
    },
    {
        id: "825863",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Customer Presentations",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Crow Pass",
        os: 'VMware'
    },
    {
        id: "825864",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Declaration of Conformities",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Purley",
        os: ''
    },
    {
        id: "825865",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Declaration of Conformities",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Cascade Lake",
        os: ''
    },
    {
        id: "825866",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Declaration of Conformities",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Cascade Lake",
        os: ''
    },
    {
        id: "825867",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Deployment Guides",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Columbiaville",
        os: ''
    },
    {
        id: "825868",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Deployment Guides",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Columbiaville",
        os: ''
    },
    {
        id: "825869",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Development Guides",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Columbiaville",
        os: ''
    },
    {
        id: "825870",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Development Guides",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Cooper Lake",
        os: ''
    },
    {
        id: "825871",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Device Overviews",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Cooper Lake",
        os: ''
    },
    {
        id: "825872",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Material Declaration Data Sheets",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Crow Pass",
        os: ''
    },
    {
        id: "825873",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Partner Capabilities Guides",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Crow Pass",
        os: ''
    },
    {
        id: "825874",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Briefs",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Ice Lake",
        os: ''
    },
    {
        id: "825875",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Change Notifications",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Ice Lake",
        os: ''
    },
    {
        id: "825876",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Change Notifications",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Ice Lake",
        os: ''
    },
    {
        id: "825877",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Change Notifications",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Ice Lake",
        os: ''
    },
    {
        id: "825878",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Change Notifications",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Ice Lake",
        os: ''
    },
    {
        id: "825879",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Change Notifications",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Purley",
        os: ''
    },
    {
        id: "825880",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Change Notifications",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Purley",
        os: ''
    },
    {
        id: "825881",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Change Notifications",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Purley",
        os: ''
    },
    {
        id: "825882",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Discontinuance Notices",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Sapphire Rapids",
        os: ''
    },
    {
        id: "825883",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Discontinuance Notices",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Sapphire Rapids",
        os: ''
    },
    {
        id: "825884",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Product Discontinuance Notices",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Sapphire Rapids",
        os: ''
    },
    {
        id: "825885",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Solution Briefs",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Sapphire Rapids",
        os: ''
    },
    {
        id: "825886",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Success Stories",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
        os: ''
    },
    {
        id: "825887",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Technical Articles",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
        os: ''
    },
    {
        id: "825888",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Technology Briefs",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
        os: ''
    },
    {
        id: "825889",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Topic Overviews",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
        os: ''
    },
    {
        id: "825890",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "White Papers",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
        os: ''
    },
    {
        id: "825891",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "White Papers",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
        os: ''
    },
    {
        id: "825892",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "White Papers",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
        os: ''
    },
    {
        id: "825893",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "White Papers",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
        os: ''
    },
    {
        id: "825894",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "White Papers",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
        os: ''
    },
];
const support_data = [
    {
        name: 'Mac* OS Compatibility for Intel® Solid State Drives',
        link: '#',
        last_review: '11/07/2022',
        category: 'Compatibility',
        ispopular: false,
        icon: 'fa-solid fa-puzzle-piece'
    },
    {
        name: 'Hot-Plug Capability of Intel® NVMe SSDs',
        link: '#',
        last_review: '10/28/2022',
        category: 'Connectivity',
        ispopular: false,
        icon: 'fa-solid fa-wifi'
    },
    {
        name: 'How To Proceed When Intel® Data Center SSD Moves from Healthy State to "Disable Logical State", "ASSERT" or "BAD_CONTEXT"',
        link: '#',
        last_review: '11/07/2022',
        category: 'Error Messages',
        ispopular: false,
        icon: 'fa-solid fa-circle-exclamation'
    },
    {
        name: 'What to Do if Error Code 0XC0000225 Appears during the Windows* Startup Repair Process',
        link: '#',
        last_review: '02/09/2023',
        category: 'Error Messages',
        ispopular: true,
        icon: 'fa-solid fa-circle-exclamation'
    },
    {
        name: 'How To Proceed When Intel® Data Center SSD Moves from Healthy State to "Disable Logical State", "ASSERT" or "BAD_CONTEXT"',
        link: '#',
        last_review: '11/07/2022',
        category: 'Product Information & Documentation',
        ispopular: false,
        icon: 'fa-solid fa-circle-info'
    },
    {
        name: 'What to Do if Error Code 0XC0000225 Appears during the Windows* Startup Repair Process',
        link: '#',
        last_review: '02/09/2023',
        category: 'Product Information & Documentation',
        ispopular: false,
        icon: 'fa-solid fa-circle-info'
    },
    {
        name: 'How to Identify a Formerly Intel® NAND SSD (now Solidigm™ SSD) Product',
        link: '#',
        last_review: '11/07/2022',
        category: 'Identify My Product',
        ispopular: false,
        icon: 'fa-solid fa-magnifying-glass'
    },
    {
        name: 'Unable to Validate Intel® Optane™ SSD Markings and Confirm if the Product Is Authentic',
        link: '#',
        last_review: '02/09/2023',
        category: 'Identify My Product',
        ispopular: true,
        icon: 'fa-solid fa-magnifying-glass'
    },
    {
        name: 'How to Use the F6-Have Disk Method to Load Drivers During Windows* Installation',
        link: '#',
        last_review: '08/08/2023',
        category: 'Install & Setup',
        ispopular: false,
        icon: 'fa-solid fa-screwdriver-wrench'
    },
    {
        name: 'Updated Guidance for Intel Drivers',
        link: '#',
        last_review: '08/08/2023',
        category: 'Maintenance & Performance',
        ispopular: false,
        icon: 'fa-solid fa-gauge-high',
    },
    {
        name: 'How Do I Find the Ordering Code for an Intel® Solid State Drive (Intel® SSD)?',
        link: '#',
        last_review: '05/04/2022',
        category: 'Product Codes & Spare Parts',
        ispopular: false,
        icon: 'fa-solid fa-barcode'
    },
    {
        name: 'Intel® Optane™ Technology Memory and Storage Product Portfolio',
        link: '#',
        last_review: '01/05/2023',
        category: 'Product Comparison',
        ispopular: false,
        icon: 'fa-regular fa-clone'
    },
    {
        name: 'Find and Compare Intel® SSDs on Product Specifications Page (ARK)',
        link: '#',
        last_review: '11/07/2022',
        category: 'Product Comparison',
        ispopular: false,
        icon: 'fa-regular fa-clone'
    },
    {
        name: 'Find and Compare Intel® SSDs on Product Specifications Page (ARK)',
        link: '#',
        last_review: '11/07/2022',
        category: 'Troubleshooting',
        ispopular: false,
        icon: 'fa-solid fa-truck-medical'
    },
    {
        name: 'Find Model, Serial Number and SA Number of Intel® Optane™ SSDs and Modules',
        link: '#',
        last_review: '10/24/2024',
        category: 'Warranty & RMA',
        ispopular: false,
        icon: 'fa-solid fa-truck-medical'
    }, {
        name: 'Find Model, Serial Number and SA Number of Intel® Optane™ SSDs and Modules',
        link: '#',
        last_review: '10/10/2024',
        category: 'Warranty & RMA',
        ispopular: false,
        icon: 'fa-solid fa-award'
    },
]
let currentPage = 1;
const itemsPerPage = 5;
function load_data(x, y) {
    var data1 = document.getElementById('b_result');
    data1.innerHTML = b_data.length == 0 ? `<h4 class="text-center">No results found for this product.<h4>` : 'Downloads Available :' + b_data.length;
    var b_gen = document.getElementsByClassName('b_genoption');
    for(var i = 0; i < b_gen.length; i++) {
    b_gen[i].innerHTML = ` <select class="p-2  w-100"> <option>All generation </option> ${gen.map(el => `<option value="${el}">${el}</option>`).join('')} </select>`;
    }
    var b_available = document.getElementById('b_available');
    b_available.innerHTML = ` <select class="p-2  w-100"> <option>All </option> ${available.map(el => `<option value="${el}">${el}</option>`).join('')} </select>`;
    var b_gen1 = document.getElementById('b_gen_data');
    b_gen1.innerHTML = ' ';
    b_data.forEach(element => {
        var innerdata = `<div class="document-item">
            <div class="row gx-0 accordion accordion-flush" id="accordionFlushExample">
                <div class="col-xxl-12 p-0 accordion-item border-0">
                    <div class="row align-items-center accordion-header gx-0" id="flush-heading-${element.id}">
                        <div class="col-md-9 col-lg-6 col-12">
                            <div class="ms-3 d-flex">
                                <a href="#" class="accordion-button collapsed p-0 document-title d-none d-sm-flex" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${element.id}" aria-expanded="false" aria-controls="flush-collapse-${element.id}"></a>
                                <p class="mt-2 ms-sm-5 text-center w-75">
                                    <a href="#" class="document-title">${element.name}</a>
                                </p>
                                <a href="#" class="accordion-button collapsed p-0 document-title d-flex d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${element.id}" aria-expanded="false" aria-controls="flush-collapse-${element.id}"></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12  ms-xl-0 d-flex d-none d-lg-block">
                            <p class="mb-0" style="font-size: 14px;">${element.date}</p>
                        </div>
                        <div class="col-lg-2 col-12  ms-xl-0 d-none d-lg-block">
                            <h6 class="d-block d-xl-none">Date : </h6>
                            ${element.os.slice(0, 3).map((el, id) => {
            return `<p class="mb-0" style="font-size: 14px;">${el}</p>`;
        }).join('')}
                        </div>
                        <div class="col-xl-1 col-md-2 ms-3 ms-lg-0 ">
                            ${element.download ? '<div class="b_special_btn1 w-100"><p class="mb-0">download</p><div>' : '<div class="b_special_btn2 w-100"><p class="mb-0">View Details</p><div>'}
                        </div>
                    </div>
                </div>
                <div id="flush-collapse-${element.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${element.id}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-3 px-0">
                        <div class="ms-3 col-xl-8"><p>${element.des}<a href="#" class="b_special_a3">View download options.</a></p></div>
                        <div class="d-flex ms-3"><h6>Version:</h6><small>${element.version}</small></div>
                        <div class="col-lg-2 col-12 ms-3 d-flex d-block d-lg-none">
                            <h6 class="">Date : </h6>
                            <p class="mb-0" style="font-size: 14px;">${element.date}</p>
                        </div>
                        <div class="d-flex ms-sm-3 "><h6>OS:</h6><small class="d-flex flex-wrap">
                         ${element.os.map((el, id) => {
            return `<p class="mb-0   m-2 px-2 b_text_bold" style="font-size: 14px;background:#e3e3e3">${el}</p>`;
        }).join('')}</small></div>
                        <div class="d-flex ms-3"><h6>Type:</h6><small>${element.type}</small></div>
                    </div>
                </div>
            </div>
        </div>`;
        b_gen1.innerHTML += innerdata;
    });
    // tab2 pagination
    renderPage();
    renderPaginationControls();
    var print_data;
    if (x == undefined || y == undefined) {
        print_data = data
    }
    console.log(x, y);
    if (y == 'Status') {
        if (x == 'true') {
            print_data = data.filter((item) => { return (item.status == true) });
        }
        else {
            print_data = data.filter((item) => { return (item.status == false) });
            console.log(print_data);
        }
    }
    var total = document.getElementById('b_table');
    total.innerHTML = print_data.length + ' Product';
    var data_id = document.getElementById('b_data');
    data_id.innerHTML = '';
    print_data.forEach(element => {
        var innerdata = `<tr class='great-parent bg-transparent'>
            <td class='h-100  align-self-center'><input type='checkbox' class='b_special_checkbox ms-2 ' onclick='check_items()'></input><a href='${element.link}' class='b_special_a1 text-nowrap mx-2'>${element.product}</a></td>
            <td><p class='px-2 mb-0'>${element.capacity}</p></td>
            <td><p class='px-2 mb-0'>${element.form_factor}</p></td>
            <td><p class='px-2 mb-0'>${element.interface}</p></td>
        </tr>`
        data_id.innerHTML += innerdata;
    });

    // support data 

}
function check_items() {
    var cnt = 0;
    var checkboxes = document.getElementsByClassName('b_special_checkbox');

    for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        const greatParent = checkbox.closest('.great-parent');
        if (checkbox.checked) {
            cnt++;
            if (greatParent) {
                greatParent.classList.add('bg_light_blue');
            }
        } else {
            if (greatParent) {
                greatParent.classList.remove('bg_light_blue');
            }
        }
    }
    console.log(cnt);
    if (cnt != 0) {
        var id = document.getElementsByClassName('b_compare_box')[0];
        id.classList.remove('d-none');
        var id2 = document.getElementById('compare_product');
        id2.innerHTML = '' + cnt;
    }
}
function closecompare() {
    var id = document.getElementsByClassName('b_compare_box')[0];
    id.classList.add('d-none');
    var checkbox = document.getElementsByClassName('b_special_checkbox');
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
    }
    var greatParent = document.getElementsByClassName('great-parent');
    for (var i = 0; i < greatParent.length; i++) {
        greatParent[i].classList.remove('bg_light_blue');
    }
}
function campareall() {
    var checkbox = document.getElementsByClassName('b_special_checkbox');
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = true
    }
    var id = document.getElementsByClassName('b_compare_box')[0];
    id.classList.remove('d-none');
    var id2 = document.getElementById('compare_product');
    id2.innerHTML = '' + checkbox.length;
    var greatParent = document.getElementsByClassName('great-parent');
    for (var i = 0; i < greatParent.length; i++) {
        greatParent[i].classList.add('bg_light_blue');
    }
}
window.onload = function () {
    load_data();
    tab4handler();
}

function fiterhanddler() {
    var id = document.getElementById('b_filter');
    id.classList.toggle('d-none');
}

function createDocumentElement(doc) {

    return `
        <div class="document-item">
            <div class="row gx-0 accordion accordion-flush" id="accordionFlushExample">
                <div class="col-xxl-11 p-0 accordion-item border-0">
                    <div class="row align-items-center accordion-header gx-0" id="flush-heading-${doc.id}">
                        <div class="col-xxl-1 col-12 icon-group float-left align-items-center d-flex justify-content-end d-xl-none">
                            <a href="#"><i class="fa-solid fa-download document-title"></i></a>
                            <a href="#"><i class="fa-regular fa-bookmark document-title"></i></a>
                            <a href="#" class="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${doc.id}" aria-expanded="false" aria-controls="flush-collapse-${doc.id}"></a>
                        </div>
                        <div class="col-xxl-8 col-12">
                            <div class="ms-3">
                                <p class="mt-2">
                                    <a href="#" class="document-title">${doc.title}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-1 icon-group d-flex align-items-center d-none d-xl-flex ps-0">
                    <a href="#" ><i class="fa-solid fa-download document-title"></i></a>
                    <a href="#" class="document-title "><i class="fa-regular fa-bookmark document-title"></i></a>
                    <a href="#" class="accordion-button collapsed p-0 document-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${doc.id}" aria-expanded="false" aria-controls="flush-collapse-${doc.id}"></a>
                </div>
                <div id="flush-collapse-${doc.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${doc.id}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-3 px-0">
                       <div class="d-xl-flex d-block">
                            <div class="d-flex ms-3"><h6>File:</h6><small>${doc.file}</small></div>
                            <div class="d-flex ms-3"><h6>Content Type:</h6><small>${doc.content_type}</small></div>
                       </div>
                        <div class="ms-3 col-xl-8"><p>${doc.discription}</p></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function content_type(x) {
    console.log("cat", x);
    const category = document.getElementById('b_category');
    category.innerHTML = x.map((ele, ind) => {
        return `
                                              <li>
                                                <span> <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" onchange="content('${ele}')">
                                                </span>
                                                <span class="ms-2" key="ind">${ele}</span>
                                            </li>
        `
    }).join('');
}
function renderDocuments() {
    const container = document.getElementById('documentContainer');
    container.innerHTML = documents.map(createDocumentElement).join('');
    var total = document.getElementById('b_total');
    total.innerHTML = `${documents.length} Results`;
    var subs = document.getElementsByClassName('hide');
    var subs1 = document.getElementsByClassName('hide_1');
    for (var i = 0; i < subs.length; i++) {
        subs[i].classList.remove('active');
    }
    for (var j = 0; j < subs1.length; j++) {
        subs1[j].style.display = "none";
    }
}
function content(x) {
    console.log(x);
    var val = documents.filter((ele, ind) => {
        return ele.content_type == x;
    })
    var total = document.getElementById('b_total');
    total.innerHTML = `${val.length} Results`
    console.log("val", val);
    const container = document.getElementById('documentContainer');
    container.innerHTML = val.map(createDocumentElement).join('');
}
function codename(x) {
    console.log(x);
    var val = documents.filter((ele, ind) => {
        return ele.codename == x;
    })
    var total = document.getElementById('b_total');
    total.innerHTML = `${val.length} Results`
    console.log("val", val);
    const container = document.getElementById('documentContainer');
    container.innerHTML = val.map(createDocumentElement).join('');
}
function operatingsystem(x) {
    console.log(x);
    var val = documents.filter((ele, ind) => {
        return ele.os == x;
    })
    var total = document.getElementById('b_total');
    total.innerHTML = `${val.length} Results`
    console.log("val", val);
    const container = document.getElementById('documentContainer');
    container.innerHTML = val.map(createDocumentElement).join('');
}
function sortByNameAscending(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}
function clearall() {
    // Optional: Display an alert if needed
    // alert('Clearing all checkboxes');

    // Select all checkboxes with the class 'checkbox-item'
    const checkboxes = document.querySelectorAll('.checkbox-item');

    // Iterate over each checkbox and uncheck it
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    renderDocuments();
}
function sortByName(x) {
    var total = document.getElementById('b_total');
    total.innerHTML = `${documents.length} Results`
    console.log(x);
    if (x == 0) {
        var data = documents.sort(function (a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateB - dateA;
        })
        const container = document.getElementById('documentContainer');
        container.innerHTML = data.map(createDocumentElement).join('');
    }
    if (x == 1) {

        var data = documents.sort(function (a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateA - dateB;
        })
        const container = document.getElementById('documentContainer');
        container.innerHTML = data.map(createDocumentElement).join('');
    }
    if (x == 2) {
        const container = document.getElementById('documentContainer');
        container.innerHTML = documents.map(createDocumentElement).join('');
    }
    if (x == 3) {
        const sortedDocuments = documents.sort((a, b) => a.title.localeCompare(b.title));
        console.log(sortedDocuments);
        const container = document.getElementById('documentContainer');
        container.innerHTML = sortedDocuments.map(createDocumentElement).join('');
    }
    if (x == 4) {
        const sortedDocuments = documents.sort((a, b) => b.title.localeCompare(a.title));
        console.log(sortedDocuments);
        const container = document.getElementById('documentContainer');
        container.innerHTML = sortedDocuments.map(createDocumentElement).join('');
    }
}
function sortJsonByDate(data) {
    return data.sort(function (a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA; // Newest first
    });
}
renderDocuments();
// tab 2 
function renderPage() {
    const b_gen1 = document.getElementById('b_gen_data');
    b_gen1.innerHTML = '';

    // Calculate starting and ending index for the current page
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = b_data.slice(start, end);

    // Render items for the current page
    pageData.forEach(element => {
        const innerdata = `<div class="document-item">
            <div class="row gx-0 accordion accordion-flush" id="accordionFlushExample">
                <div class="col-xxl-12 p-0 accordion-item border-0">
                    <div class="row align-items-center accordion-header gx-0" id="flush-heading-${element.id}">
                        <div class="col-md-9 col-lg-6 col-12">
                            <div class="ms-3 d-flex">
                                <a href="#" class="accordion-button collapsed p-0 document-title d-none d-sm-flex" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${element.id}" aria-expanded="false" aria-controls="flush-collapse-${element.id}"></a>
                                <p class="mt-2 ms-sm-5 text-center w-75">
                                    <a href="#" class="document-title">${element.name}</a>
                                </p>
                                <a href="#" class="accordion-button collapsed p-0 document-title d-flex d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${element.id}" aria-expanded="false" aria-controls="flush-collapse-${element.id}"></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12 ms-xl-0 d-flex d-none d-lg-block">
                            <p class="mb-0" style="font-size: 14px;">${element.date}</p>
                        </div>
                        <div class="col-lg-2 col-12 ms-xl-0 d-none d-lg-block">
                            <h6 class="d-block d-xl-none">Date:</h6>
                            ${element.os.slice(0, 3).map(el => `<p class="mb-0" style="font-size: 14px;">${el}</p>`).join('')}
                        </div>
                        <div class="col-xl-1 col-md-2 ms-3 ms-lg-0">
                            ${element.download ? '<div class="b_special_btn1 w-100"><p class="mb-0">Download</p></div>' : '<div class="b_special_btn2 w-100"><p class="mb-0">View Details</p></div>'}
                        </div>
                    </div>
                </div>
                <div id="flush-collapse-${element.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${element.id}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-3 px-0">
                        <div class="ms-3 col-xl-8"><p>${element.des}<a href="#" class="b_special_a3">View download options.</a></p></div>
                        <div class="d-flex ms-3"><h6>Version:</h6><small>${element.version}</small></div>
                        <div class="col-lg-2 col-12 ms-3 d-flex d-block d-lg-none">
                            <h6 class="">Date:</h6>
                            <p class="mb-0" style="font-size: 14px;">${element.date}</p>
                        </div>
                        <div class="d-flex ms-sm-3"><h6>OS:</h6><small class="d-flex flex-wrap">
                         ${element.os.map(el => `<p class="mb-0 m-2 px-2 b_text_bold" style="font-size: 14px; background: #e3e3e3">${el}</p>`).join('')}</small></div>
                        <div class="d-flex ms-3"><h6>Type:</h6><small>${element.type}</small></div>
                    </div>
                </div>
            </div>
        </div>`;
        b_gen1.innerHTML += innerdata;
    });
}

function renderPaginationControls() {
    const paginationContainer = document.getElementById('pagination');
    const totalPages = Math.ceil(b_data.length / itemsPerPage);

    // Clear existing pagination
    paginationContainer.innerHTML = '';

    // Create Previous button
    if (currentPage > 1) {
        paginationContainer.innerHTML += `<i class="fa-solid fa-chevron-left mx-2" onclick="goToPage(${currentPage - 1})" style="color: #0071c5;"></i>
`;
    }

    // Create Next button


    // Show page number
    paginationContainer.innerHTML += `Page <span class="border px-2" style=" width:30px; height: 40px !important;">${currentPage}</span>/<span id="total_page" class=""> ${totalPages}</span>`;
    if (currentPage < totalPages) {
        paginationContainer.innerHTML += `<i class="fa-solid fa-chevron-right mx-2" onclick="goToPage(${currentPage + 1})" style="color: #0071c5;"></i>`;
    }
}

function goToPage(page) {
    currentPage = page;
    renderPage();
    renderPaginationControls();
}
// tab 4 
function tab4handler() {
    const support = document.getElementById('support_data');
    support.innerHTML = support_data.map(createSupportElement).join('');
    const total_artical = document.getElementById('total_article');
    total_artical.innerHTML = `${support_data.length} Support Articles`;
}
function createSupportElement(doc) {
    return `
        <div class='d-sm-flex justify-content-between py-3 border-bottom'>
            <div>
                <p class='mb-0'><i class='${doc.icon} mx-2'></i>${doc.category}</p>
                <a class='b_special_a3' href='${doc.link}'>${doc.name}</a>
            </div>
            <div class='d-flex d-sm-block'>
                <p class='mb-0'> Last Reviewed </p>
                <p class='mb-0'>${doc.last_review}</p>
            </div>
        </div>
    `
}
function fliterlist(x) {
    var lis = document.getElementById("fliter_list").getElementsByTagName("li");
    // lis.classList.remove('d-none');
    for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('b_active');
    }
    x.classList.add('b_active');
    console.log(x);
    var id = document.getElementById('selectfliter');
    id.innerHTML = x.innerHTML;
    console.log(x.textContent);
    if (x.textContent == 'All Article Categories') {
        tab4handler();
    }
    else {
        var val = support_data.filter((ele, ind) => {
            return ele.category == x.textContent;
        })
        const support = document.getElementById('support_data');
        support.innerHTML = val.map(createSupportElement).join('');
        console.log("val", val);
        const total_artical = document.getElementById('total_article');
        total_artical.innerHTML = `${val.length} Support Articles`;
    }
}
function fliteroption(x) {
    var option = document.getElementById('fliteroption').getElementsByTagName('li');
    console.log(option);
    for (var i = 0; i < option.length; i++) {
        option[i].classList.remove('active');
    }
    x.classList.add('active');
    if (x.textContent == 'All') {
        tab4handler();
    }
    else {
        var val = support_data.filter((ele, ind) => {
            return ele.ispopular == true;
        })
        const support = document.getElementById('support_data');
        support.innerHTML = val.map(createSupportElement).join('');
        console.log("val", val);
        const total_artical = document.getElementById('total_article');
        total_artical.innerHTML = `${val.length} Support Articles`;
    }
}
document.querySelector('.custom-dropdown .dropdown-header').addEventListener('click', function () {
    this.parentElement.classList.toggle('open');
});