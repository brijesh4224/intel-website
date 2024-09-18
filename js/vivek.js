
// ------------------ json data --------------------

let developer_catalog_card_data = [
    {
        name: "Intel® Distribution for Python*",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Develop fast, Python* code with essential computational packages including NumPy, SciPy, scikit-learn*, and more.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: "Updated"
    },
    {
        name: "Migrate CUDA* to DPC++ Code: Intel® DPC++ Compatibility Tool",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Transform CUDA* applications to standards-based DPC++ code to increase interoperability across CPUs, GPUs, FPGAs, and other accelerators.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: "Updated"
    },
    {
        name: "Intel® Smart Edge Open",
        system: "Linux*",
        content: "Software Overviews",
        description: "Streamline networking and application deployment at the edge.",
        image: "default-document.svg",
        status: "Updated"
    },
    {
        name: "Intel® Rendering Toolkit: 3D Graphics & Visualization",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Create high-fidelity, photorealistic experiences and 3D data visualizations—scientific, industrial, animation, and more—with open source ray tracing",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: "Updated"
    },
    {
        name: "Pin - A Dynamic Binary Instrumentation Tool",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Pin is a dynamic binary instrumentation framework for the IA-32, x86-64 and MIC instruction-set architectures that enables the creation of dynamic...",
        image: "webops9569-page-icon-pin-debugger.png",
        status: "Updated"
    },
    {
        name: "Pin - A Dynamic Binary Instrumentation Tool",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Software Overviewsn is a dynamic binary instrumentation framework for the IA-32, x86-64 and MIC instruction-set architectures that enables the creation of dynamic...",
        image: "cutout-256671.jpg",
        status: "Updated"
    },
    {
        name: "Perform Model Optimization Using Intel® Neural Compressor",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "This open source Python* library performs framework-independent AI model optimization.",
        image: "default-document.svg",
        status: "Updated"
    },
    {
        name: "Perform Model Optimization Using Intel® Neural Compressor",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Included as part of the Intel® oneAPI HPC Toolkit, use this for complex HPC applications based on Intel® processors.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI Threading Building Blocks",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Simplify efforts to add parallelism to an application via a flexible runtime library that automatically maps logical parallelism onto threads.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Distribution of OpenVINO™ Toolkit",
        system: null,
        content: "Software Overviews",
        description: "Optimize and deploy AI inference. Boost deep learning performance in computer vision, automatic speech recognition, NLP, and more.",
        image: "openvino-logo.png.rendition.intel.web.256.144.png",
        status: false
    },
    {
        name: "Intel® System Bring-up Toolkit, Powered by oneAPI",
        system: null,
        content: "Software Overviews",
        description: "Accelerate system bring-up and optimization to get from presilicon to production faster",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Integrated Performance Primitives",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "With royalty-free APIs, this library includes ready-to-use functions highly optimized for diverse Intel® architectures.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Key Management Reference Application",
        system: null,
        content: "Software Overviews",
        description: "Set up a workload with this reference application in an Intel® Software Guard Extension enclave on an Intel® processor.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Celadon",
        system: "Operating System:Linux*, Android*",
        content: "Linux*, Android*",
        description: "A unified code base allows you to run Android* applications in containers or virtual machines.",
        image: "celadon-logo-transparent-rwd.png.rendition.intel.web.256.144.png",
        status: false
    },
    {
        name: "Intel® oneAPI Deep Neural Network Library (oneDNN)",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Develop faster deep learning frameworks with a library that combines primitives and a single API to develop for CPUs, GPUs, or both.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Priority Support for Intel® oneAPI Base & HPC Toolkit",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Purchase the Intel® oneAPI Base & HPC Toolkit with priority support to build, analyze, optimize, and scale HPC applications.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Modin",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "This library enables distributed DataFrame processing and is fully compatible with the pandas API.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Priority Support for Intel® oneAPI Base Toolkit",
        system: null,
        content: "Software Overviews",
        description: "Purchase the Intel oneAPI Base Toolkit with priority support to build and deploy high-performance, data-centric applications",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Priority Support for Intel® oneAPI Base Toolkit",
        system: "Linux*, Microsoft Windows",
        content: "Software Overviews",
        description: "Unlock media features on CPUs, GPUs, VPUs, and other accelerators with a successor to Intel® Media SDK—a video-processing API for encode and decode.",
        image: "vpl-diagram-media-sdk-rwd.png.rendition.intel.web.256.144.png",
        status: false
    },
    {
        name: "Intel® Extension for Scikit-learn*",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Seamlessly speed up scikit-learn* workloads with only a couple lines of code on Intel® CPUs and GPUs across single- and multinode configurations.",
        image: "logo-scikit-learn-rwd.png",
        status: false
    },
    {
        name: "Fix Performance Bottlenecks with Intel® VTune™ Profiler",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Use advanced sampling and profiling methods to quickly analyze code, isolate issues, and deliver performance insight on modern CPUs, GPUs, and FPGAs.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® HPC Toolkit: Cluster & HPC Development Tools",
        system: null,
        content: "Software Overviews",
        description: "Build, optimize, and scale HPC and cluster apps with the latest techniques in vectorization, multinode parallelization, and memory optimization.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Speed Up ML & DL with Intel® oneAPI Data Analytics Library",
        system: null,
        content: "Software Overviews",
        description: "This library includes a set of high-speed algorithms: analysis, math, training and prediction functions, and more.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Cluster Checker",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Identify issues with clusters and resolve them quickly.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI Base & IoT Toolkit",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Buy the Intel® oneAPI Base & IoT Toolkit with Priority Support to build data-centric, cross-architecture IoT applications",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Design Code for Parallelism and Offloading with Intel® Advisor",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Design code for efficient vectorization, threading, and offloading to accelerators.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Inspector",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Solve threading & memory problems early with Intel Inspector, a dynamic debugger for C, C++, and Fortran applications.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Trace Analyzer and Collector",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Profile and analyze MPI applications to focus your optimization efforts.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Memory Latency Checker v3.11",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Intel® Memory Latency Checker (Intel® MLC) is a tool used to measure memory latencies and b/w, and how they change with increasing load on the",
        image: "-p-493768.png",
        status: false
    },
    {
        name: "Intel® Battery Life Diagnostic Tool",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "This tool helps monitor and diagnose battery life impact of the system configuration and installed software on computer systems with an Intel® CPU.",
        image: "adobestock-317133417.jpeg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Smart, Connected Device Development with Intel® oneAPI IoT Toolkit",
        system: null,
        content: "Software Overviews",
        description: "This toolkit will no longer be available as of v2024.0. However, the tools in this toolkit are still available for download and use.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Fortran Compiler",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Build applications that can scale for the future with optimized code designed for Intel® architecture.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Distribution for GDB*",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Debug cross-platform parallel & threaded applications with this component, which is part of the Intel® oneAPI Base Toolkit.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI DPC++ Library",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Speed performance of Data Parallel C++ kernels on CPUs, GPUs, and FPGAs with this standards-based library.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI Collective Communications Library",
        system: "Linux*",
        content: "Software Overviews",
        description: "Distribute machine and deep learning model training across multiple nodes using a library of optimized communication patterns.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Integrated Simulation Infrastructure with Modeling",
        system: "Linux*",
        content: "Software Overviews",
        description: "Learn about this versatile framework that supports functional, performance, power, and thermal simulations in a single environment.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Collaboration Suite for WebRTC",
        system: null,
        content: "Software Overviews",
        description: "This open standard distribution supports real-time communication without additional clients or plug-ins.",
        image: "tool-thumbnail-production-20.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® Software Guard Extensions",
        system: null,
        content: "Software Overviews",
        description: "Create code with APIs, libraries, tools, and sample code to leverage security protections enabled with Intel® Software Guard Extensions.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Edge Controls for Industrial",
        system: null,
        content: "Software Overviews",
        description: "Create software-defined industrial control solutions with this prevalidated reference platform.",
        image: "edge-controls-for-industrial.png.rendition.intel.web.256.144.png",
        status: false
    },
    {
        name: "OpenCL™ Runtimes for Intel® Processors",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Obtain runtimes to execute or develop OpenCL™ applications on Intel­® processors.",
        image: "graphics-implementation-501945.png",
        status: false
    },
    {
        name: "OpenCL™ Runtimes for Intel® Processors",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Obtain runtimes to execute or develop OpenCL™ applications on Intel­® processors.",
        image: "tool-thumbnail-production-41.jpg",
        status: false
    },
    {
        name: "Intel® Extension for OpenXLA*",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "An open source compiler that will enable efficient lowering, optimization and deployment of ML models from most major frameworks to any",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Data Center GPU Driver for OpenShift*",
        system: "Linux*",
        content: "Software Overviews",
        description: "The Intel Data Center GPU Driver for OpenShift project focuses on the development, packaging, certification, and release of Intel® Data Center GPU",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Technology Enabling for OpenShift*",
        system: "Linux*",
        content: "Software Overviews",
        description: "The Intel Technology Enabling for OpenShift project provides Intel Data Center hardware feature-provisioning technologies with the Red Hat OpenShift Container Platform (RHOCP).",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Homomorphic Encryption Tookit (Intel® HE Toolkit)",
        system: "Linux*",
        content: "Software Overviews",
        description: "Increase performance of homomorphic encryption-based cloud solutions running on Intel® platforms using the Intel® Homomorphic Encryption...",
        image: "tool-thumbnail-production-40.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® CPU Runtime for OpenCL™ Applications",
        system: null,
        content: "Software Overviews",
        description: "Run OpenCL™ applications and kernels directly on Intel® processors as target OpenCL devices.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "PM-Graph",
        system: null,
        content: "Software Overviews",
        description: "This project provides resources for viewing the activity in suspend, resume, and boot.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "OpenVINO™ Toolkit Model Server",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "OpenVINO™ Toolkit model server is a scalable, high-performance solution for serving machine learning models optimized for Intel® architectures. The server",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® OSPRay - Open Source",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Develop interactive, high-fidelity, visualization applications using this ray-tracing API and engine.",
        image: "d4598237-a808-4bf0-8388-b27459af3b00.png",
        status: false
    },
    {
        name: "Intel® OSPRay Studio - Open Source",
        system: "Linux*, Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Perform high-fidelity, ray traced, interactive, and real-time rendering through a graphical user interface with this new scene graph application addition to Inte",
        image: "7d4c8d12-1be8-469c-bc5d-24a1616730b5.png",
        status: false
    },
    {
        name: "Intel® Distribution of Modin* - Open Source",
        system: "Linux*, macOS*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Scale data preprocessing across multi-nodes using this intelligent, distributed dataframe library with an identical API to pandas. This library integrates with...",
        image: "140d34da-113b-4908-a7c0-b9af9eaf276b.png",
        status: false
    },
    {
        name: "Mesa",
        system: "Linux*, Microsoft Windows*",
        content: "Software Overviews",
        description: "This open source 3D graphics library supports OpenGL*, Vulkan*, and other 3D APIs.",
        image: "e6d3a121-554f-4187-846d-553892375e3c.png",
        status: false
    },
    {
        name: "The LLVM Compiler Infrastructure",
        system: "Linux*, macOS*, Microsoft Windows*, Unix*",
        content: "Software Overviews",
        description: "The LLVM Project is a collection of modular and reusable compiler and toolchain technologies. The purpose of this project is open source collaboration...",
        image: "f7542a8f-d07d-4cdb-be1e-b77ff1db4500.png",
        status: false
    },
    {
        name: "Clear Linux* Project",
        system: "Linux*",
        content: "Software Overviews",
        description: "Clear Linux OS is an open source, rolling release Linux distribution optimized for performance and security, from the Cloud to the Edge, designed for customization...",
        image: "81b823e2-6ce6-4f2f-82c8-4f5ef8d61d1d.png",
        status: false
    },
    {
        name: "Linux Kernel",
        system: "Linux*",
        content: "Software Overviews",
        description: "This kernel is at the heart of worldwide Linux*-based systems in CSPs, Chromebooks*, embedded devices, and more.",
        image: "bbaa7778-c442-4fd6-b05b-92714627412d.png",
        status: false
    },
    {
        name: "Yocto* Project",
        system: "Linux*, macOS*, Microsoft Windows*",
        content: "Software Overviews",
        description: "The Yocto Project* is an open source collaboration that provides templates, tools, and methods to help you create custom Linux*-based systems for...",
        image: "e4880605-2750-4fd9-8273-01dadb58dca2.png",
        status: false
    },
    {
        name: "KVM",
        system: "Linux*",
        content: "Software Overviews",
        description: "In addition to its traditional role for running hardware-isolated virtual environments on client PCs and laptops, kernel-based virtual machine (KVM)...",
        image: "8a9ea6df-8d56-41f9-b9b6-558013f5b283.png",
        status: false
    },
    {
        name: "ACRN",
        system: "Linux*",
        content: "Software Overviews",
        description: "ACRN* is a lightweight reference hypervisor that's built to meet the unique needs of embedded IoT development, such as real-time and safety-critical...",
        image: "7b7dd0ad-a90d-4137-869b-872b35f7d3ed.png",
        status: false
    },
    {
        name: "EdgeX Foundry",
        system: "Linux*, macOS*, Microsoft Windows*",
        content: "Software Overviews",
        description: "EdgeX Foundry* is flexible and scalable software framework that facilitates interoperability between devices and applications at the IoT edge. Intel",
        image: "3d40eac8-d83d-4f26-9df9-cfd74fd5f21e.png",
        status: false
    },
    {
        name: "PyTorch",
        system: "Microsoft Windows*, macOS*, Linux*",
        content: "Software Overviews",
        description: "This open source, machine learning framework is based on the Torch* library. it's used for computer vision and natural language processing applications.",
        image: "6271974e-fad6-47ef-9700-f2e41d0a1407.png",
        status: false
    },
    {
        name: "PyTensorFlow*",
        system: "macOS*, Microsoft Windows*, Linux*",
        content: "Software Overviews",
        description: "TensorFlow* is a software library for machine learning and AI with a particular focus on training and inference of deep neural networks. Intel's...",
        image: "d2325a34-b1ce-4573-9d57-1ae0ddd5b9cc.png",
        status: false
    },
    {
        name: "Sound Open Firmware (SOF)*",
        system: "Linux*, Chrome OS*",
        content: "Software Overviews",
        description: "Sound Open Firmware is an open source audio DSP firmware and SDK that provides audio firmware infrastructure and development tools for...",
        image: "d1e2809b-05a2-448c-8597-089a66bcd829.png",
        status: false
    },
    {
        name: "SPDK (Storage Performance Dev Kit)",
        system: "Linux*",
        content: "Software Overviews",
        description: "The Storage Performance Development Kit (SPDK) provides a set of tools and libraries for writing high performance, scalable, user-mode storage applications.",
        image: "e27a44f8-f95f-40c2-8ca2-fe274c0f4dfd.png",
        status: false
    },
    {
        name: "Ceph",
        system: "Linux*",
        content: "Software Overviews",
        description: "Get better performance for Intel® Xeon® processors and Intel® Optane™ products on database and analytics workloads.",
        image: "6bd83116-96cd-427f-8767-e31ee32947ab.png",
        status: false
    },
    {
        name: "Chromium(Chrome)* OS",
        system: "Linux*, Chromium OS*",
        content: "Software Overviews",
        description: "Intel® architecture was integrated into the Google Chrome* operating system project.",
        image: "12238aad-040e-42d7-a2e9-b37025e78d28.png",
        status: false
    },
    {
        name: "Zephyr* Project",
        system: null,
        content: "Software Overviews",
        description: "The Zephyr Project* is an open source collaborative effort developed by Intel and open-sourced under the Linux Foundation umbrella. The project unite",
        image: "3e4416d8-ee8c-4abb-86c8-53b6399a1e51.png",
        status: false
    },
    {
        name: "coreboot*",
        system: "Linux*",
        content: "Software Overviews",
        description: "Coreboot* is an extended open source firmware platform. It delivers a fast and secure boot experience on modern computers and embedded systems.",
        image: "3420b4f0-202f-4a1a-9e92-fe25a5ead64a.png",
        status: false
    },
    {
        name: "Data Plane Development Kit (DPDK) - Open Source",
        system: "Linux*",
        content: "Software Overviews",
        description: "The Data Plane Development Kit (DPDK*) is a set of libraries and drivers used for fast packet processing. It's designed to run on any processor.",
        image: "847d70f5-af75-44e1-a2d8-8d6f6385f687.png",
        status: false
    },
    {
        name: "Hugging Face",
        system: "Linux*, macOS*, Microsoft Windows*",
        content: "Software Overviews",
        description: "\"The AI community building the future. Build, train and deploy state of the art models powered by the reference open source in machine learning.\"",
        image: "ba578880-fe63-43e1-a0d7-f058c22d8116.png",
        status: false
    },
    {
        name: "Intel® oneAPI Collective Communications Library (oneCCL) - Open Source",
        system: null,
        content: "Software Overviews",
        description: "Distribute machine and deep learning model training across multiple nodes using a library of optimized communication patterns.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI Data Analytics Library (oneDAL) - Open Source",
        system: null,
        content: "Software Overviews",
        description: "This library includes a set of high-speed algorithms: analysis, math, training and prediction functions, and more.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI Deep Neural Network Library (oneDNN) - Open Source",
        system: null,
        content: "Software Overviews",
        description: "Intel® architecture was integrated into the Google Chrome* operating system project.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI DPC++ Library - Open Source",
        system: null,
        content: "Software Overviews",
        description: "Speed performance of Data Parallel C++ kernels on CPUs, GPUs, and FPGAs with this standards-based library.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI Math Kernel Library (oneMKL) - Open Source",
        system: null,
        content: "Software Overviews",
        description: "Build, optimize, and scale HPC and cluster apps with the latest techniques in vectorization, multinode parallelization, and memory optimization.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI Video Processing Library - Open Source",
        system: null,
        content: "Software Overviews",
        description: "Unlock media features on CPUs, GPUs, VPUs, and other accelerators with a successor to Intel® Media SDK—a video-processing API for encode and decode.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source",
        system: null,
        content: "Software Overviews",
        description: "Simplify efforts to add parallelism to an application via a flexible runtime library that automatically maps logical parallelism onto threads.",
        image: "tool-thumbnail-beta-oneapi.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "OpenVINO™ Toolkit - Open Model Zoo",
        system: "macOS*, Microsoft Windows*",
        content: "Software Overviews",
        description: "This open source toolkit optimizes and deploys AI inference. Boost deep learning performance in computer vision, automatic speech recognition, natural...",
        image: "openvino-logo.png.rendition.intel.web.256.144.png",
        status: false
    },
    {
        name: "MariaDB",
        system: "Linux*",
        content: "Software Overviews",
        description: "This server is a fully open source cloud-native relational database designed for performance and stability with large distributed datasets. Intel...",
        image: "70ec3c69-c243-4480-9f5a-7fef7a85fd89.png",
        status: false
    },
    {
        name: "QEMU*",
        system: "Linux*",
        content: "Software Overviews",
        description: "This is a generic and open source machine emulator and virtualizer",
        image: "8be25be6-52ba-472b-a9ab-be2356017c74.png",
        status: false
    },
    {
        name: "BigDL 2.0",
        system: null,
        content: "Software Overviews",
        description: "Learn how to create AI workflows using the BigDL deep learning framework for Apache Spark.",
        image: "bigdl-logo-dark-rwd.png.rendition.intel.web.256.144.png",
        status: false
    },
    {
        name: "Intel® Active Management Technology SDK",
        system: null,
        content: "Software Overviews",
        description: "This technology enables remote, secure platform management when connected to AC power with network connections.",
        image: "tool-thumbnail-production-32.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "StarlingX*",
        system: null,
        content: "Software Overviews",
        description: "StarlingX is a complete cloud infrastructure software stack for the edge used by the most demanding applications in industrial IOT, telecom,...",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Open Programmable Infrastructure Project (OPI Project)",
        system: "Linux*",
        content: "Software Overviews",
        description: "This project fosters a community-driven, standards-based open ecosystem for next-generation architectures and frameworks based on DPU and IPU-like technologies...",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Linux IO Visor Project",
        system: "Linux*",
        content: "Software Overviews",
        description: "This open source project has a community of developers to accelerate the innovation, development, and sharing of virtualized in-kernel IO services for...",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Deep Learning Streamer (Intel® DL Streamer)",
        system: "Linux*",
        content: "Software Overviews",
        description: "An open-source streaming media analytics framework, based on GStreamer* multimedia framework, for creating complex media analytics pipelines for the...",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Open Data Center Diagnostic Project (Open DCDIAG)",
        system: "Linux*",
        content: "Software Overviews",
        description: "The framework is an extensible application programing interface for tests to run to set up their environment, generate test data, perform their function...",
        image: "default-document.svg",
        status: false
    },
    {
        name: "NumaTOP",
        system: null,
        content: "Software Overviews",
        description: "This observation tool identifies the behavior of NUMA processes and threads, and locates NUMA performance bottlenecks.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Dynamic Application Loader SDK",
        system: null,
        content: "Software Overviews",
        description: "Develop applets and host applications with this tool collection from Intel.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® OSPRay for Hydra",
        system: null,
        content: "Software Overviews",
        description: "Connect the Render Kit libraries in your application to the universal scene description (USD) Hydra rendering subsystem by using the Intel® OSPRay for Hydra* plug-in. This plug-in enables fast preview exploration for compositing and animation, as well as high-quality, physically based photorealistic rendering of USD content...",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® OpenSWR",
        system: null,
        content: "Software Overviews",
        description: "Use this software rasterizer that's compatible with OpenGL* to work with datasets when GPU hardware isn’t available or is limiting. This CPU-based...",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Open Volume Kernel Library (Intel® Open VKL) - Open Source",
        system: null,
        content: "Software Overviews",
        description: "Enable rendering and simulation processing of 3D spatial data with low-level volumetric data-processing algorithms.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Open Path Guiding Library (Open Source)",
        system: null,
        content: "Software Overviews",
        description: "Increase rendering performance by improving the sampling quality of complex light transport effects. Facilitate state-of-the-art path-guiding..",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Open Image Denoise",
        system: null,
        content: "Software Overviews",
        description: "Increase image quality with machine learning algorithms that selectively filter visual noise. This independent component can be used for noise reduction on 3D rendered images, with or without Intel® Embree.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Media SDK - Open Source",
        system: null,
        content: "Software Overviews",
        description: "Boost media performance with video transcoding, image processing, and media workflow libraries accessible via a single API.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Embree",
        system: "Linux*, macOS*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Improve the performance of photo-realistic rendering applications with this library of ray-tracing kernels. The kernels are optimized for the latest Intel® processors",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Implicit SPMD Program Compiler (ISPC) - Open Source",
        system: null,
        content: "Software Overviews",
        description: "ispc is a compiler for a variant of the C programming language, with extensions for \"single program, multiple data\" (SPMD) programming.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Gramine",
        system: "Linux*",
        content: "Software Overviews",
        description: "This library operating system provides a flexible and modular architecture for securing unmodified Linux* applications/binaries on Intel® Software Guard Extensions...",
        image: "default-document.svg",
        status: false
    },
    {
        name: "eBPF",
        system: "Linux*",
        content: "Software Overviews",
        description: "This technology originated in the Linux* kernel. It runs sandboxed programs in an operating system kernel",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Hardware Accelerated Execution Manager (Intel® HAXM)",
        system: "Linux*",
        content: "Software Overviews",
        description: "HAXM is a cross-platform hardware-assisted virtualization engine (hypervisor), widely used as an accelerator for Android Emulator and QEMU. It has",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Chromium* browser",
        system: "Linux*, macOS*, Microsoft Windows*",
        content: "Software Overviews",
        description: "Chromium* is an open source browser project. Intel’s contributions help to optimize performance, and enable new and expand existing platform",
        image: "default-document.svg",
        status: false
    },
    {
        name: "OpenJDK",
        system: null,
        content: "Software Overviews",
        description: "OpenJDK* is the open source implementation of the Java* platform and related projects. It develops and maintains a high-performance, robust Java",
        image: "default-document.svg",
        status: false
    },
    {
        name: "EDK II",
        system: "Linux*",
        content: "Software Overviews",
        description: "This development environment has open source firmware implementation and build tools for producing firmware images. They",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® System Studio for Microcontrollers",
        system: null,
        content: "Software Overviews",
        description: "Access downloads, documentation, and support for a software development environment for designs based on the Intel® Quark™",
        image: "tool-thumbnail-production-25.jpg.rendition.intel.web.256.144.jpg",
        status: false
    },
    {
        name: "Model Zoo for Intel® Architecture - Open Source",
        system: "Linux*",
        content: "Software Overviews",
        description: "Access a repository of pretrained models, sample scripts, best practices, and step-by-step tutorials for many popular open-source, machine-learning models",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Intel® Intelligent Storage Acceleration Library",
        system: null,
        content: "Software Overviews",
        description: "Maximize network storage, security, and resilience with functions for RAID, erasure, cyclic redundancy check, and more.",
        image: "default-document.svg",
        status: false
    },
    {
        name: "Node Feature Discovery",
        system: "Linux*",
        content: "Software Overviews",
        description: "Kubernetes add-on that detects and advertises hardware and software capabilities of a platform to facilitate workload scheduling.",
        image: "open-software-default-icon.jpg",
        status: false
    },
    {
        name: "Telemetry Aware Scheduling (TAS) makes telemetry data available to...",
        system: null,
        content: "Software Overviews",
        description: "Telemetry Aware Scheduling (TAS) makes telemetry data available to scheduling and descheduling decisions in Kubernetes. Through a use",
        image: "fallback-icons-articles.png.rendition.intel.web.256.144.png",
        status: false
    },
    {
        name: "Optimize Dynamic Language Runtimes Workloads for WordPress*",
        system: "Linux*",
        content: "Software Overviews",
        description: "Run this project in a containerized environment (a Wordpress* target of the oss-performance benchmark suite) with updates from Intel.",
        image: "logo-intel.png.rendition.intel.web.256.144.png",
        status: false
    },
    {
        name: "Intel® Power Gadget",
        system: "Microsoft Windows*, macOS*",
        content: "Software Overviews",
        description: "Intel® Power Gadget is a software-based power estimation tool enabled for 2nd Generation Intel® Core™ processors or newer. It provides real-time processor package power information in watts using energy counters.",
        image: "PowerGadget3.5.0-184535.jfif",
        status: false
    },
    {
        name: "PowerTOP Primer",
        system: "Linux*",
        content: "Software Overviews",
        description: "Note: All information from this article has been taken from https://01.org/powertop/   Computer programs can make your comput.",
        image: "screenshot2-small-157001.gif",
        status: false
    },
]


// -------------------------------- pagination ---------------------------------------


let originalRecords = developer_catalog_card_data;
let currentRecords = [...originalRecords];
let page = 1;

let all_data = () => {
    page = 1;
    currentRecords = [...originalRecords];
    Pagination(page, currentRecords);
};

let Pagination = (page, record) => {
    if (record.length !== 0) {
        if (document.getElementById('VK_curent_page')) {
            document.getElementById('VK_curent_page').innerHTML = page;
            let limit = 50;
            let first = (limit * page) - limit;
            let last = limit * page;
            let total_page = Math.ceil(record.length / limit);

            document.getElementById('VK_total_page_count').innerHTML = total_page;
            let result = record.slice(first, last);
            let VK_card_map = document.getElementById('VK_card_parent');
            VK_card_map.innerHTML = '';
            for (let i = 0; i < result.length; i++) {
                VK_card_map.innerHTML += `<div class="col-xxl-3 VK_result_card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3">
            <div class="VK_card_parent bg-white h-100">
                                        <div class="VK_card_img_box d-flex justify-content-center overflow-hidden">
                                            <img src="/img/vivek/${result[i].image}" alt=""
                                                class="h-100 object-fit-contain">
                                        </div>
                                        <hr class="m-0">
                                        <div class="VK_card_details px-3 pb-3 mt-3">
                                            <div class="VK_card_Title">
                                                <a href="" class="text-decoration-none fw-normal">${result[i].name}</a>
                                            </div>
                                            ${result[i].system ? `<div class="VK_card_system py-1">
                                                <span><strong>Operating System : </strong> ${result[i].system}</span>
                                                </div>` : ""}
                                                <div class="VK_card_description py-1">
                                                <strong>Content Type :</strong> <span> ${result[i].content}</span>
                                                <span class="mt-2 d-block">${result[i].description}</span>
                                                </div>
                                                </div>
                                    </div>
                                    </div>`;
            }
        }
    }
    else {
        document.getElementById('VK_card_parent').innerHTML = `<h1 class="text-danger">Record Not Found</h1>`
    }
};

let ince = (amt) => {
    let total_page = parseInt(document.getElementById('VK_total_page_count').innerHTML);
    let curent_page = parseInt(document.getElementById('VK_curent_page').innerHTML);
    curent_page += amt;
    if (curent_page <= 0) curent_page = 1;
    if (curent_page >= total_page) curent_page = total_page;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    Pagination(curent_page, currentRecords);
};

let operating_system_filter = (op_system) => {
    currentRecords = originalRecords.filter((ele) => {
        return ele.system != null && ele.system.includes(op_system);
    });
    page = 1;
    Pagination(page, currentRecords);
};

let content_type = () => {
    let check_box = document.getElementById('VK_filter_checkbox');
    if (check_box.checked) {
        currentRecords = originalRecords.filter((ele) => {
            return ele.content == "Software Overviews";
        });
    } else {
        currentRecords = [...originalRecords];
    }
    page = 1;
    Pagination(page, currentRecords);
};

let record_count = () => {
    let id = ['Linux', 'Microsoft_Windows', 'macOS', 'Android', 'Chrome', 'Chromium', 'Unix']
    let op = ["Linux", "Microsoft Windows", "macOS", "Android", "Chrome", "Chromium", "Unix"]
    for (let i = 0; i < op.length; i++) {
        let arrr = originalRecords.filter((ele) => {
            return ele.system != null && ele.system.includes(op[i]);
        });
        let chk = id[i];
        if (document.getElementById(chk)) {
            document.getElementById(chk).innerHTML = id[i] + " (" + arrr.length + ")";
        } else {
            return;
        }
    }
}

let VK_catalog_searching = () => {
    let search = document.getElementById('VK_software_catalog_search_bar')
    if (search.value.length > 2) {
        console.log(currentRecords);
    }
}

window.onload = function () {
    // developer catalog
    record_count();
    Pagination(page, currentRecords);
    if (document.getElementById('VK_search_result_span')) {
        document.getElementById('VK_search_result_span').innerHTML = currentRecords.length + " Results";
    }
    if (document.getElementById('VK_accoridan')) {
        if (window.innerWidth < 1200) {
            document.getElementById('VK_accoridan').classList.add('d-none')
            document.getElementById('VK_accoridan').classList.remove('VK_Block')
        }
    }
    // design and tools page
    VK_chk_page();

    // ai development page
    intel_latest_cards();

    // Vturn profiler documentation page
    VK_vturn_profiler_toolkit();
    // content checkbox
    VK_vturn_content_type_checkbox();
    // software checkbox
    VK_vturn_programming_checkbox();



    // celadon documantation
    createDocumentElementforceladon();

    // intel adviser documantation
    VK_display_result_accridan();


    // software guard documantation
    VK_display_software_result_accridan();


    // intel oneAPI documantation
    VK_intel_oneapi_toolkit();
    // content checkbox
    VK_oneAPI_content_type_checkbox()
    // software checkbox
    VK_oneapi_software_checkbox();


    // intel hpc toolkit documantation
    VK_hpc_toolkit_display_accoridan();
    // content type checkbox
    VK_hpc_content_type_checkbox();
    // software type checkbox
    VK_hpc_software_checkbox();


    // ai tools doucmantation
    VK_ai_tools_documantaion();
    // content type checkbox
    VK_ai_tools_content_checkbox();
    // software type checkbox
    VK_ai_software_checkbox();



    // api training
    VK_api_training_card_display()
    // api training software
    VK_api_training_software_checkbox();
    // programming
    VK_api_training_programming_checkbox();
    // skill
    VK_api_training_skill_checkboxes();


    // technical library
    VK_technical_accoridan();
    // software
    VK_technical_software_checkbox();
    // programming language
    VK_technical_programming_checkbox();
    // content type
    VK_technical_content_type_checkbox();


    // gamedev technical library
    VK_gamedev_technical_accoridan();
    // content type
    VK_gamedev_technical_content_checkbox();
    // software
    VK_gamedev_technical_software_checkbox();


    // gpu reserach publisher
    VK_gpu_publishr_display_card();
}

if (document.getElementById('VK_select_filters')) {
    document.getElementById('VK_select_filters').addEventListener("change", function () {
        let val = document.getElementById('VK_select_filters').value
        sortBy(val)
    })
}

if (document.getElementById('VK_selected_filters')) {
    document.getElementById('VK_selected_filters').addEventListener("change", function () {
        let val = document.getElementById('VK_selected_filters').value;
        sortBy(val);
    })
}

let sortBy = (val) => {

    switch (val) {
        case 'A-Z':
            currentRecords = sortByNameAscending([...currentRecords]);
            break;
        case 'Z-A':
            currentRecords = sortDescendingByName([...currentRecords]);
            break;
    }
    Pagination(1, currentRecords);
}

function sortByNameAscending(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}

function sortDescendingByName(arr) {
    return arr.sort((a, b) => b.name.localeCompare(a.name));
}







// --------------------- filter toggle ------------------------

function VK_toggle_cetalog_filter() {
    if (window.innerWidth < 1200) {
        let arr = document.getElementById('VK_accoridan').classList.value
        if (arr.includes('VK_Block')) {
            document.getElementById('VK_accoridan').classList.remove('VK_Block')
            document.getElementById('VK_accoridan').classList.add('d-none')
        }
        else {
            document.getElementById('VK_accoridan').classList.remove('d-none')
            document.getElementById('VK_accoridan').classList.add('VK_Block')
        }
    }
    else {
        if (arr.includes('VK_Block')) {
            document.getElementById('VK_accoridan').classList.remove('VK_Block')
            document.getElementById('VK_accoridan').classList.add('d-none')
        }
    }
}

let chk = () => {
    if (document.getElementById('VK_accoridan')) {
        if (window.innerWidth < 1200) {
            document.getElementById('VK_accoridan').classList.add('d-none')
        }
        else {
            document.getElementById('VK_accoridan').classList.add('d-none')
            document.getElementById('VK_accoridan').classList.remove('VK_Block')
        }
    } else {
        return
    }
}

window.addEventListener('resize', () => {
    chk();
})


// ------------------------------------ design and tools page -------------------------------

function VK_open_menu(menu) {
    if (window.innerWidth > 992) {
        let VK_menu = ['SERVICES', 'EQUIPMENT', 'PLATFORMS', 'ENABLEMENT'];

        VK_menu.forEach(ele => {
            let el = ele.toLowerCase();
            let items = document.getElementsByClassName(el);
            Array.from(items).forEach(item => {
                item.classList.remove('bg-white', 'text-primary');
                item.classList.add('text-white');
            });
            if (ele !== menu) {
                document.getElementById(ele).classList.add('d-none');
            }
        });

        let mn = menu.toLowerCase();
        let selectedItems = document.getElementsByClassName(mn);
        let menuElement = document.getElementById(menu);

        if (!menuElement.classList.contains('d-none')) {
            Array.from(selectedItems).forEach(item => {
                item.classList.remove('bg-white', 'text-primary');
                item.classList.add('text-white');
            });
            menuElement.classList.add('d-none');
        } else {
            Array.from(selectedItems).forEach(item => {
                item.classList.add('bg-white', 'text-primary');
                item.classList.remove('text-white');
            });
            menuElement.classList.remove('d-none');
        }
    }
}



function VK_open_menu_box() {
    if (window.innerWidth < 992) {
        document.getElementById('VK_tools_header_part').classList.add('d-none')
        document.getElementById('VK_tools_open_menu').classList.remove('d-none')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}
function VK_close_menu_box() {
    if (window.innerWidth < 992) {
        document.getElementById('VK_tools_header_part').classList.remove('d-none')
        document.getElementById('VK_tools_open_menu').classList.add('d-none')
    }
}

window.addEventListener('resize', function () {
    if (document.getElementById('VK_tools_open_menu')) {
        if (window.innerWidth < 992) {
            document.getElementById('VK_tools_open_menu').classList.add('d-none')
            document.getElementById('VK_tools_header_part').classList.remove('d-none')
        }
    }
    else {
        return
    }
})



function VK_tool_search() {
    if (window.innerWidth < 1200) {
        document.getElementById('VK_tools_parent_box').style.display = 'block'
        document.getElementById('VK_menu_search').classList.toggle('d-none')
    }
    document.getElementById('VK_tools_scroll').classList.toggle('VK_scroll')
    document.getElementById('VK_tools_search_close_icon').classList.toggle('d-none')
    document.getElementById('VK_tool_search_icon').classList.toggle('d-none')
}

function VK_tool_search_close() {
    if (window.innerWidth < 1200) {
        document.getElementById('VK_tools_parent_box').style.display = 'none'
        document.getElementById('VK_menu_search').classList.toggle('d-none')
    }
    document.getElementById('VK_tools_scroll').classList.toggle('VK_scroll')
    document.getElementById('VK_tools_search_box').value = '';
    document.getElementById('VK_tool_search_icon').classList.toggle('d-none')
    document.getElementById('VK_tools_search_close_icon').classList.toggle('d-none')
}




// --------------------------------------------------------------- custom pagiantion logic -----------------------------------------------------------------


let VK_Tools_service_data = [
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Test Fixture KIT for Open Compute Project (OCP) ",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "+5V Capable Gen5 VR Test Tool Base Kit (Internal Only)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit Refurbished",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
]

let VK_mother_board_data = [
    {
        name: "Socket R1 (LGA2011) [Red] Interposer",
        image: "nophoto-base_1.png",
        price: "$500.00"
    },
    {
        name: "Socket R3 (LGA2011-3) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R3 (LGA2011-3) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R3 (LGA2011-3) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R3 (LGA2011-3) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R3 (LGA2011-3) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R3 (LGA2011-3) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R3 (LGA2011-3) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R3 (LGA2011-3) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R3 (LGA2011-3) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
]

let VK_palform_software_data = [
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
]

let VK_server_tools_data = [
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
]

let VK_Purley_tools_data = [
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
]

let VK_purley_essential_tools_data = [
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
]

let VK_romley_model_data = [
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
]

let VK_purley_power_delivery_data = [
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
]


let VK_purley_high_speed_data = [
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Interconnect Model Analyzer and Domain Converter (Intel® IMADC)",
        image: "nophoto-base_1.png"
    },
]

let VK_purley_bios_data = [
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
]

let VK_purley_thermal_data = [
    {
        name: "FloTHERM* Thermal Models",
        image: "nophoto-base_1.png"
    },
    {
        name: "FloTHERM* Thermal Models",
        image: "nophoto-base_1.png"
    },
    {
        name: "FloTHERM* Thermal Models",
        image: "nophoto-base_1.png"
    },
    {
        name: "FloTHERM* Thermal Models",
        image: "nophoto-base_1.png"
    },
    {
        name: "FloTHERM* Thermal Models",
        image: "nophoto-base_1.png"
    },
    {
        name: "FloTHERM* Thermal Models",
        image: "nophoto-base_1.png"
    },
]

let VK_purley_validation_data = [
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
]

let VK_purley_bios_firmware_data = [
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® TXT ToolKit (TTK) for Debug ACM",
        image: "nophoto-base_1.png"
    },
]

let VK_purley_debug_data = [
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
]

let VK_purley_power_vrs_data = [
    {
        name: "Platform - VRTT Test Spreadsheet",
        image: "nophoto-base_1.png"
    },
    {
        name: "Platform Power Delivery Validation Plan",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 DIMM Thermal Test Vehicle (TTV)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Platform Power Thermal Utility (PTU aka Maximum Power Program)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Processor Thermal Test Vehicle (TTV)",
        image: "nophoto-base_1.png"
    },
]

let VK_purley_tools_model_card_parent = [
    {
        name: "Intel® Channel Checker",
        image: "nophoto-base_1.png",
    },
    {
        name: "Intel® Electrical Validation Test Suite (Intel® EVTS)",
        image: "nophoto-base_1.png",
    },
    {
        name: "Integrated Channel Analysis Tool (ICAT)",
        image: "nophoto-base_1.png",
    },
    {
        name: "Intel® Memory Bit Error Rate Executable (Intel® MBERE)",
        image: "nophoto-base_1.png",
    },
]

let VK_purley_menufacturing_data = [
    {
        name: "Intel® Server Platform Services (SPS) Manageability Engine (ME) Firmware & Tools",
        image: "VK_design_Tools1.jpeg",
    }
]

let VK_harrisonville_tools_data = [
    {
        name: "DDR4 Memory VR Test Tool Master Module for Narrow DIMM Pitch Platforms",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
]

let VK_grangeville_tools_data = [
    {
        name: "Intel® ITP PDT Software Subscription",
        image: "nophoto-base_1.png"
    },
    {
        name: "PCI-e Power Delivery Adapter Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PCI-e Power Delivery Adapter Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PCI-e Power Delivery Adapter Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
]

let VK_grantley_tools_data = [
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
]

let VK_brickland_tools_data = [
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "Mongoose2 MRDIMM Test Card",
        image: "nophoto-base_1.png"
    },
]

let VK_edisonville_tools_data = [
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
]

let VK_romley_tools_data = [
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Gen4 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
]

let VK_Equipment_data = [
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
]

let VK_cpu_voltage_tools_data = [
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "EMI Shield for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
]

let VK_platform_testing_and_review_services_data = [
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
    {
        name: "IPTS Technical Support",
        image: "nophoto-base_1.png"
    },
]

let VK_Interposers_data = [
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2540-PTL-UPH Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
]

var VK_IMVP9_data = [
    {
        name: "BGA1264-ADL-N Interposer for Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1781-ADL-M Interposer for Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1338-JSL Interposer for Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1341-DG1 Interposer for Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1344-ICL-UN Interposer for Low Power VR Test Tool (Internal Only)",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1377-AML-Y42 Interposer for Low Power VRTT",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1377-ICL-Y Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1421-ICL-I Interposer for Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1449-TGL-U42 Interposer for Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1598-TGL-Y42 Interposer for Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1617-KSL-I Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1693-MEV-BLUE Interposer for Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1693-MEV-RED Interposer for Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },

]

var VK_IMVP8_data = [
    {
        name: "BGA1787-TGL-H Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "LGA1151-CFL-S (Blue) Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "LGA1151-CFL-S (Red) Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1528-CFL-U Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1528-WHL-U42 (CML-U) Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1016-LKF interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1090-GLK Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1440-CFL-H Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2270-KBL-G Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1296-APL Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1356 (SKL-U) Interposer (also for KBL-U22 and 23e)",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1440 (SKL-H) Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1515 Interposer (SKL-Y/KBL-Y/AML-Y22 compatible) for Gen4 VR Test Tool",
        image: "nophoto-base_1.png"
    },
]

var VK_VR13_data = [
    {
        name: "Socket P0 (LGA3647) Bundle",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1310-DNV-16C-BLACK Interposer for the Low Power VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1310 Retention Mechanism",
        image: "nophoto-base_1.png"
    },
    {
        name: "G5-LGA2066-GCF Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Blue Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Red Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R4 (LGA2066) [Blue] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket R4 (LGA2066) [Red] Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Black Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1310-DNV-LPVRTT Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2518-SKX-DE (Blue) Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2518-SKX-DE (Red) Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA1310-DNV Interposer",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Retention Mechanism Kit for Gen4 and Gen5 VR Test Tools",
        image: "nophoto-base_1.png"
    },
    {
        name: "LGA3647-CLX Retention Mechanism Top Plate for Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
]

var VK_VR13HC_data = [
    {
        name: "LGA4189-ICX Retention Mechanism (Rev C) Back Plate for Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "LGA4189-ICX Retention Mechanism (Rev C) Kit for Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "LGA4677-SPR Retention Mechanism Kit for Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2227-ICX-D-LCC-Blue Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2227-ICX-D-LCC-Red Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2579-ICX-D-HCC-Blue Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "BGA2579-ICX-D-HCC-Red Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "LGA4189-ICX-Blue Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "LGA4189-ICX-Red Interposer for the Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Socket P0 (LGA3647) Retention Mechanism Kit for Gen4 and Gen5 VR Test Tools",
        image: "nophoto-base_1.png"
    },
    {
        name: "LGA3647-CLX Retention Mechanism Top Plate for Gen5 VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "LGA3647-CLX-RED Interposer",
        image: "nophoto-base_1.png"
    },
]

let VK_tool_heads_data = [
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit With 750A Upgrade Installed",
        image: "nophoto-base_1.png"
    },
]

let VK_male_to_male_header_data = [
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Temp 482-Pin Male-to-Male Header",
        image: "nophoto-base_1.png"
    },
]

let VK_memory_power_system_data = [
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "Riser Kit for DDR5 Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
]

let VK_ddr2_daat = [
    {
        name: "DDR2/DDR3 Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    }
]

let VK_ddr3_daat = [
    {
        name: "DDR3 SODIMM Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR3 SODIMM Memory VR Test Tool",
        image: "nophoto-base_1.png"
    },
]

let VK_ddr4_daat = [
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR4 Memory VR Test Tool Slave Module for Narrow DIMM Pitch Platforms Rev. J",
        image: "nophoto-base_1.png"
    },

]

let VK_DDR5_data = [
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },

]

let VK_point_load_voltage_data = [
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
    {
        name: "High Power Mini Slammer",
        image: "nophoto-base_1.png"
    },
]

let VK_thunderbolt_tools_data = [
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
    {
        name: "Thunderbolt™ 4 Hurricane Creek CSwitch",
        image: "nophoto-base_1.png"
    },
]

let VK_debug_tools_data = [
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Debug Cable*",
        image: "nophoto-base_1.png"
    },
]

let VK_hardware_tools_data = [
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
    {
        name: "STP DDR5 DIMM Test Card Fab 2",
        image: "nophoto-base_1.png"
    },
]

let VK_Software_tools_data = [
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® System Bring-up Toolkit NDA",
        image: "nophoto-base_1.png"
    },
]

let VK_accessories_data = [
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® 20-pin Small Form Factor Version 2 Kit*",
        image: "nophoto-base_1.png"
    },
]

let VK_internet_of_things_data = [
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
]

let VK_atom_platform_tools_data = [
    {
        name: "Intel ® Electrical Margin Tool (Intel® EMT) for Windows (Braswell/Cherry Trail Platforms)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel ® Electrical Margin Tool (Intel® EMT) for Windows (Braswell/Cherry Trail Platforms)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel ® Electrical Margin Tool (Intel® EMT) for Windows (Braswell/Cherry Trail Platforms)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel ® Electrical Margin Tool (Intel® EMT) for Windows (Braswell/Cherry Trail Platforms)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel ® Electrical Margin Tool (Intel® EMT) for Windows (Braswell/Cherry Trail Platforms)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel ® Electrical Margin Tool (Intel® EMT) for Windows (Braswell/Cherry Trail Platforms)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel ® Electrical Margin Tool (Intel® EMT) for Windows (Braswell/Cherry Trail Platforms)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel ® Electrical Margin Tool (Intel® EMT) for Windows (Braswell/Cherry Trail Platforms)",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel ® Electrical Margin Tool (Intel® EMT) for Windows (Braswell/Cherry Trail Platforms)",
        image: "nophoto-base_1.png"
    },
]

let VK_core_platform_tools_daat = [
    {
        name: "Intel® Electrical Margin Tool (Intel® EMT) for Windows",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Electrical Margin Tool (Intel® EMT) for Windows",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Electrical Margin Tool (Intel® EMT) for Windows",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Electrical Margin Tool (Intel® EMT) for Windows",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Electrical Margin Tool (Intel® EMT) for Windows",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel® Electrical Margin Tool (Intel® EMT) for Windows",
        image: "nophoto-base_1.png"
    },
]

let VK_sub_atom_platform_tools_data = [
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
    {
        name: "Intel System Trace Tool (STT) Release",
        image: "nophoto-base_1.png"
    },
]

let VK_comms_and_storage_tools_data = [
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "DDR5 High Current Memory VR Test Tool Kit",
        image: "nophoto-base_1.png"
    },
]

let VK_eagle_stream_tools_data = [
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "PEI 5.0 (PCIe 5.0 Error Injection) + CXL 2.x Card",
        image: "nophoto-base_1.png"
    },
]

let VK_whitley_platform_tools_data = [
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
    {
        name: "Gen5 VR Test Tool Base Kit",
        image: "nophoto-base_1.png"
    },
]

let VK_river_forest_tools_data = [
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
]

let VK_crystal_forest_tools_data = [
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
]

let VK_glen_forest_tools_data = [
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
]

let VK_highland_forest_tools_data = [
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
    {
        name: "DTC 8.1 (DCPMM Error Injection) Card",
        image: "nophoto-base_1.png"
    },
]

let VK_crystal_gladden_tools_data = [
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
    {
        name: "Selftest BIOS Validation Suite",
        image: "nophoto-base_1.png"
    },
]

let current_page = 1;
let limit = 12;
let fetch_data = [];
let id = '';

let VK_chk_page = () => {
    if (document.getElementById('VK_page_detect')) {
        let pageElement = document.getElementById('VK_page_detect');

        let classname = pageElement.classList.value;
        switch (classname) {

            case 'VK_Tools_service':
                id = 'VK_Tools_service_card_parent'
                fetch_data = VK_Tools_service_data;
                break;

            case 'VK_motherboard':
                id = "VK_motherboard_card_parent";
                fetch_data = VK_mother_board_data;
                break;

            case 'VK_paltform_software':
                id = "VK_paltform_card_parent";
                fetch_data = VK_palform_software_data;
                break;

            case 'VK_server_tools':
                id = "VK_server_tool_card_parent";
                fetch_data = VK_server_tools_data;
                break;

            case 'VK_Purley_tools':
                id = 'VK_Purley_tool_card_parent';
                fetch_data = VK_Purley_tools_data;
                break;

            case 'VK_purley_essential_tools':
                id = 'VK_romley_essential_card_parent'
                fetch_data = VK_purley_essential_tools_data;
                break;

            case 'VK_purley_model_tools':
                id = 'VK_romley_model_card_parent';
                fetch_data = VK_romley_model_data;
                break;

            case 'VK_purley_power_delivery':
                id = 'VK_purley_power_delivery_card_parent';
                fetch_data = VK_purley_power_delivery_data;
                break;

            case 'VK_purley_high_speed':
                id = 'VK_purley_high_speed_card_parent';
                fetch_data = VK_purley_high_speed_data;
                break;

            case 'VK_purley_bios_speed':
                id = 'VK_purley_bios_card_parent';
                fetch_data = VK_purley_bios_data;
                break;

            case 'VK_purley_thermal_engineering':
                id = 'VK_purley_thermal_card_parent';
                fetch_data = VK_purley_thermal_data;
                break;

            case 'VK_purley_validation':
                id = 'VK_purley_validation_card_parent';
                fetch_data = VK_purley_validation_data;
                break;

            case 'VK_purley_bios_firmware':
                id = 'VK_purley_bios_firmware_card_parent';
                fetch_data = VK_purley_bios_firmware_data;
                break;

            case 'VK_purley_debug':
                id = 'VK_purley_debug_card_parent';
                fetch_data = VK_purley_debug_data;
                break;

            case 'VK_purley_power_vrs':
                id = 'VK_purley_power_vrs_card_parent'
                fetch_data = VK_purley_power_vrs_data
                break;

            case 'VK_purley_tools_models':
                id = 'VK_purley_tools_model_card_parent';
                fetch_data = VK_purley_tools_model_card_parent;
                break;

            case 'VK_purley_menufacturing':
                id = 'VK_purley_menufacturing_card_parent';
                fetch_data = VK_purley_menufacturing_data
                break;

            case 'VK_Harrisonville_tools':
                id = "VK_harrisonville_card_parent";
                fetch_data = VK_harrisonville_tools_data;
                break;

            case 'VK_grangeville_tools':
                id = 'VK_grangeville_card_parent';
                fetch_data = VK_grangeville_tools_data;
                break;

            case 'VK_grantley_tools':
                id = 'VK_grantley_card_parent';
                fetch_data = VK_grantley_tools_data;
                break;

            case 'VK_brickland_tools':
                id = 'VK_brickland_card_parent';
                fetch_data = VK_brickland_tools_data;
                break;

            case 'VK_edisonville_tools':
                id = 'VK_edisonville_card_parent';
                fetch_data = VK_edisonville_tools_data;
                break;

            case 'VK_romley_tools':
                id = 'VK_romley_card_parent';
                fetch_data = VK_romley_tools_data;
                break;

            case 'VK_Equipment':
                id = 'VK_Equipment_card_parent'
                fetch_data = VK_Equipment_data;
                break

            case 'VK_cpu_voltage_tools':
                id = 'VK_cpu_voltage_card_parent';
                fetch_data = VK_cpu_voltage_tools_data;
                break;

            case 'VK_platform_testing_and_review_services_tools':
                id = 'VK_platform_testing_and_review_services_card_parent';
                fetch_data = VK_platform_testing_and_review_services_data;
                break;

            case 'VK_Interposers_tools':
                id = 'VK_Interposers_card_parent';
                fetch_data = VK_Interposers_data;
                break;

            case 'VK_IMVP9_tools':
                id = 'VK_IMVP9_card_parent'
                fetch_data = VK_IMVP9_data
                break;

            case 'VK_IMVP8_tools':
                id = 'VK_IMVP8_card_parent'
                fetch_data = VK_IMVP8_data
                break;

            case 'VK_VR13_tools':
                id = 'VK_VR13_card_parent'
                fetch_data = VK_VR13_data;
                break;

            case 'VK_VR13HC_tools':
                id = 'VK_VR13HC_card_parent';
                fetch_data = VK_VR13HC_data;
                break;

            case 'VK_tool_heads_tools':
                id = 'VK_tool_heads_card_parent';
                fetch_data = VK_tool_heads_data;
                break;

            case 'VK_male_to_male_header_tools':
                id = 'VK_male_to_male_header_card_parent';
                fetch_data = VK_male_to_male_header_data;
                break;

            case 'VK_memory_power_system_tools':
                id = 'VK_memory_power_system_card_parent';
                fetch_data = VK_memory_power_system_data;
                break;

            case 'VK_DDR2_tools':
                id = 'VK_DDR2_card_parent';
                fetch_data = VK_ddr2_daat;
                break;

            case 'VK_DDR3_tools':
                id = 'VK_DDR3_card_parent';
                fetch_data = VK_ddr3_daat;
                custom_pagination(current_page, limit, fetch_data, id);
                break;

            case 'VK_DDR4_tools':
                id = 'VK_DDR4_card_parent';
                fetch_data = VK_ddr4_daat;
                custom_pagination(current_page, limit, fetch_data, id);
                break;

            case 'VK_DDR5_tools':
                id = 'VK_DDR5_card_parent'
                fetch_data = VK_DDR5_data;
                custom_pagination(current_page, limit, fetch_data, id);
                break;

            case 'VK_point_load_voltage_tools':
                id = 'VK_point_load_voltage_card_parent'
                fetch_data = VK_point_load_voltage_data;
                custom_pagination(current_page, limit, fetch_data, id);
                break;

            case 'VK_thunderbolt_tools':
                id = 'VK_thunderbolt_tools_card_parent';
                fetch_data = VK_thunderbolt_tools_data;
                break;

            case 'VK_debug_tools':
                id = 'VK_debug_tools_card_parent';
                fetch_data = VK_debug_tools_data;
                break;

            case 'VK_hardware_tools':
                id = 'VK_hardware_tools_card_parent';
                fetch_data = VK_hardware_tools_data;
                break;

            case 'VK_Software_tools':
                id = 'VK_Software_tools_card_parent';
                fetch_data = VK_Software_tools_data;
                break;

            case 'VK_Accessories_tools':
                id = 'VK_Accessories_tools_card_parent';
                fetch_data = VK_accessories_data;
                break;

            case 'VK_internet_of_things_tools':
                id = 'VK_internet_of_things_tools_card_parent';
                fetch_data = VK_internet_of_things_data;
                break;

            case 'VK_atom_platform_tools':
                id = 'VK_atom_platform_tools_card_parent';
                fetch_data = VK_atom_platform_tools_data;
                break;

            case 'VK_core_platform_tools':
                id = 'VK_core_platform_tools_card_parent';
                fetch_data = VK_core_platform_tools_daat;
                break;

            case 'VK_sub_atom_platform_tools':
                id = 'VK_sub_atom_platform_tools_card_parent';
                fetch_data = VK_sub_atom_platform_tools_data;
                break;

            case 'VK_comms_and_storage_tools':
                id = 'VK_comms_and_storage_tools_card_parent'
                fetch_data = VK_comms_and_storage_tools_data;
                break;

            case 'VK_eagle_stream_tools':
                id = 'VK_eagle_stream_tools_card_parent';
                fetch_data = VK_eagle_stream_tools_data;
                break;

            case 'VK_whitley_platform_tools':
                id = 'VK_whitley_platform_tools_card_parent'
                fetch_data = VK_whitley_platform_tools_data
                break;

            case 'VK_river_forest_tools':
                id = 'VK_river_forest_tools_card_parent'
                fetch_data = VK_river_forest_tools_data
                break;

            case 'VK_crystal_forest_tools':
                id = 'VK_crystal_forest_tools_card_parent'
                fetch_data = VK_crystal_forest_tools_data;
                break;

            case 'VK_glen_forest_tools':
                id = 'VK_glen_forest_tools_card_parent'
                fetch_data = VK_glen_forest_tools_data;
                break;

            case 'VK_highland_forest_tools':
                id = 'VK_highland_forest_tools_card_parent'
                fetch_data = VK_highland_forest_tools_data
                break;

            case 'VK_crystal_gladden_tools':
                id = 'VK_crystal_gladden_tools_card_parent'
                fetch_data = VK_crystal_gladden_tools_data
                break;


            default:
                return;
        }
        custom_pagination(current_page, limit, fetch_data, id);
    }
    else {
        return
    }
}

function design_tools_sort() {
    let sort_order = document.getElementById('VK_design_tools_sort_by').value
    switch (sort_order) {
        case 'A-Z':
            fetch_data.sort((a, b) => a.name.localeCompare(b.name));
            break;

        case 'Z-A':
            fetch_data.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
    custom_pagination(current_page, limit, fetch_data, id);
}

let custom_pagination = (current_page, limit, fetch_data, id) => {
    let first_element = (limit * current_page) - limit;
    let last_element = limit * current_page;
    let total_page = Math.ceil(fetch_data.length / limit);

    if (document.getElementById('VK_current_page') && document.getElementById('VK_total_page')) {
        document.getElementById('VK_current_page').innerHTML = current_page;
        document.getElementById('VK_total_page').innerHTML = total_page;
        document.getElementById('VK_current_bottom_page').innerHTML = current_page;
        document.getElementById('VK_total_bottom_page').innerHTML = total_page;
    }

    let prevArrows = document.getElementsByClassName('VK_pagination_previous_arrow');
    let nextArrows = document.getElementsByClassName('VK_pagination_next_arrow');

    if (total_page == 1) {
        document.getElementById('VK_top_pagiantion')?.classList.add('d-none');
        document.getElementById('VK_bottom_pagiantion')?.classList.add('d-none');
    }

    if (current_page === 1) {
        Array.from(prevArrows).forEach(arrow => arrow.classList.add('d-none'));

    } else {
        Array.from(prevArrows).forEach(arrow => arrow.classList.remove('d-none'));
    }

    if (current_page === total_page) {
        Array.from(nextArrows).forEach(arrow => arrow.classList.add('d-none'));
    } else {
        Array.from(nextArrows).forEach(arrow => arrow.classList.remove('d-none'));
    }

    let Final_record_data = fetch_data.slice(first_element, last_element);
    print_data(Final_record_data, id);
}

let print_data = (Final_record_data, id) => {
    if (document.getElementById(id)) {
        let Parent_element = document.getElementById(id);
        let htmlContent = Final_record_data.map((ele) => {
            return `<div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 my-2 my-4 VK_board_product_cart">
                        <a href="" class="text-decoration-none d-flex flex-column VK_board_overlap_link h-100">
                            <div class="VK_board_img">
                                <img src="/img/vivek/${ele.image}" class="w-100" alt="">
                            </div>
                            <div class="d-flex align-items-stretch flex-column my-2">
                                <div class="VK_board_card_name">
                                    <p class="VK_board_card_title m-0 my-1">${ele.name}</p>
                                </div>
                                ${ele.price ? `<div class="VK_board_product_price mt-2">
                                            <span class="VK_board_price_label d-block mb-2">${ele.price}</span>
                                           </div>` : ``}
                            </div>
                            <div class="VK_board_product_link mt-auto">
                                <span class="d-block text-decoration-none VK_board_product_view_link text-center py-1">View Product</span>
                            </div>
                        </a>
                    </div>`;
        }).join('');

        Parent_element.innerHTML = htmlContent;
    } else {
        return;
    }
}

let increase_decrease_page = (ince) => {
    current_page += ince;
    if (current_page < 1) current_page = 1;
    let total_page = Math.ceil(fetch_data.length / limit);
    if (current_page > total_page) current_page = total_page;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    custom_pagination(current_page, limit, fetch_data, id);
}

function VK_change_limit() {
    limit = parseInt(document.getElementById('VK_board_select_limit').value, 10);
    current_page = 1;
    custom_pagination(current_page, limit, fetch_data, id);
}





// ------------------------------------------------------------------ ai development page js ------------------------------------------------------------


let intel_letest_card_data = [
    {
        title: "Transforming an AI Business into a Market Differentiator: the Bilic-Intel Alliance",
        name: "Adam_Wolf",
        description: "Bilic began as a crypto investigation platform, working initially on tracking and tracing crypto assets, which involved a significant amount of manual effort. To manage the growing workload, Bilic started automating tasks, developing AI agents that could analyze wallets, detect fraud, and generate reports. This pivot to automation marked the beginning of their transformation into an AI-led entity.",
        image: "Intel-Alliance-Blog.png"
    },
    {
        title: "Transforming an AI Business into a Market Differentiator: the Bilic-Intel Alliance",
        name: "Adam_Wolf",
        description: "How Bilic transitioned from a crypto investigation firm to a market leader in AI-driven compliance solutions.",
        image: "Intel-Alliance-Blog.png"
    },
    {
        title: "Learn LLM Optimization Using Transformers and PyTorch* on Intel Hardware",
        name: "Adam_Wolf",
        description: "How Bilic transitioned from a crypto investigation firm to a market leader in AI-driven compliance solutions.",
        image: "learn-llm-screen-cap.png"
    },
    {
        title: "Python* Loop Replacement: NumPy* &amp; PyTorch* Optimizations and Other Tensor Topics",
        name: "Ramya_Ravi",
        description: "This article demonstrates how and why users might want to convert to and from NumPy ND arrays.",
        image: "python-loop-adobestock-655432750-1500x471.jpeg"
    },
]

let intel_latest_cards = () => {
    if (document.getElementById('VK_latest_intel_card_row')) {
        let card_row = document.getElementById('VK_latest_intel_card_row')
        let dynamic_card = intel_letest_card_data.map((ele) => {
            return `<div class="VK_latest_intel_card align-self-stretch my-3">
                                    <a href="" class="bg-white text-decoration-none d-block h-100">
                                        <div class="VK_latestintel_img">
                                            <img src="/img/vivek/${ele.image}" class="w-100 h-100" alt="">
                                        </div>
                                        <div class="VK_latest_intel_card_desc p-3">
                                            <p class="VK_intel_card_name">
                                                ${ele.title}
                                            </p>
                                            <span class="d-block VK_intel_card_title">
                                                ${ele.name}
                                            </span>
                                            <p class="VK_latest_card_description">
                                                ${ele.description.length > 150 ? ele.description.slice(0, 150) + "..." : ele.description}
                                            </p>
                                        </div>
                                    </a>
                                </div>`;
        }).join('');
        card_row.innerHTML = dynamic_card;
    }
    else {
        return;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.VK_ai_navigation')) {
        const nav = document.querySelector('.VK_ai_navigation');
        const navLinks = document.querySelectorAll('.VK_ai_navigation a');
        const sections = document.querySelectorAll('section[id]');
        let navOffset = nav.offsetTop;

        // Add smooth scrolling to all links
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Sticky Navigation
        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= navOffset) {
                nav.classList.add('VK_sticky_nav_bar');
            } else {
                nav.classList.remove('VK_sticky_nav_bar');
            }

            // Section highlighting
            sections.forEach(section => {
                const sectionTop = section.offsetTop - nav.clientHeight;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('VK_active_link');
                        if (link.getAttribute('href') === `#${section.id}`) {
                            link.classList.add('VK_active_link');

                            // Ensure the active link is visible in the nav bar
                            const navBar = document.querySelector('.VK_ai_nav_bar');
                            const activeLink = document.querySelector('.VK_ai_nav_bar a.VK_active_link');
                            const linkRect = activeLink.getBoundingClientRect();
                            const navBarRect = navBar.getBoundingClientRect();

                            if (linkRect.left < navBarRect.left || linkRect.right > navBarRect.right) {
                                activeLink.scrollIntoView({ inline: 'center', behavior: 'smooth' });
                            }
                        }
                    });
                }
            });
        });
    }
});

const navBar = document?.querySelector('.VK_ai_nav_bar');

let isDragging = false;
let startX;
let scrollLeft;

navBar?.addEventListener('mousedown', (e) => {
    isDragging = true;
    navBar.classList.add('active');
    startX = e.pageX - navBar.offsetLeft;
    scrollLeft = navBar.scrollLeft;
});

navBar?.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - navBar.offsetLeft;
    const walk = (x - startX) * 2;
    navBar.scrollLeft = scrollLeft - walk;
});


navBar?.addEventListener('mouseup', () => {
    isDragging = false;
    navBar.classList.remove('active');
});

navBar?.addEventListener('mouseleave', () => {
    isDragging = false;
    navBar.classList.remove('active');
});



function VK_game_hide_toggle() {
    const VK_cols = document.querySelectorAll('.VK_game_hide_col');
    const showMoreElements = document.querySelector('.VK_show_game_more');
    if (window.innerWidth >= 1200) {
        if (showMoreElements) {
            showMoreElements.style.display = 'none';
            VK_cols.forEach((element, ind) => {
                if (ind >= 3) {
                    let arr = element.classList
                    if (arr.contains('VK_col_hidden')) {
                        element.classList.remove('VK_col_hidden');
                    }
                }
            });
        }
    }
    else {
        if (showMoreElements) {
            showMoreElements.style.display = 'block';
            VK_cols.forEach((element, ind) => {
                if (ind >= 3) {
                    let arr = element.classList
                    if (!arr.contains('VK_col_hidden')) {
                        element.classList.add('VK_col_hidden');
                    }
                }
            });
        }
    }
}
function VK_game_hide() {
    let VK_hide_btn = document.getElementById('VK_show_btn')
    const VK_cols = document.querySelectorAll('.VK_game_hide_col');
    VK_cols.forEach((col, index) => {
        if (window.innerWidth < 1200) {
            if (index >= 3) {
                let arr = col.classList
                if (!arr.contains('VK_col_hidden')) {
                    VK_hide_btn.innerHTML = 'show more <i class="fa-solid fa-angle-down"></i>'
                    col.classList.add('VK_col_hidden');
                }
                else {
                    col.classList.remove('VK_col_hidden');
                    VK_hide_btn.innerHTML = 'show less <i class="fa-solid fa-chevron-up"></i>'
                }
            }
        }
    });
}

// Attach the function to resize and load events
window.addEventListener('resize', VK_game_hide_toggle);
window.addEventListener('load', VK_game_hide_toggle);





// ----------------------------------------------- resource and decoumntation ----------------------------------------------






function VK_resu_active(id) {
    let accoridan_data = [
        [
            {
                data: [
                    {
                        title: "What's New",
                        desc: "What's New",
                        lunch: "",
                        status: "Released"
                    },
                    {
                        title: "Software Kits",
                        desc: "Software Kits",
                        lunch: "",
                        status: "Released"
                    },
                    {
                        title: "Restricted Documents",
                        desc: "Restricted Documents",
                        lunch: "",
                        status: "Released"
                    },
                    {
                        title: "Product Roadmaps",
                        desc: "Processors and Chipsets Product Roadmaps from Intel",
                        lunch: "",
                        status: "Released"
                    },
                    {
                        title: "Intel® oneAPI Documentation",
                        desc: "Intel® oneAPI Documentation",
                        lunch: "",
                        status: "Released"
                    },
                    {
                        title: "Intel Product Qualification Reports",
                        desc: "Product Quality and Reliability Data in support of Intel® Production Release Qualification",
                        lunch: "",
                        status: "Released"
                    },
                    {
                        title: "GPU Tuning and Optimization Guides",
                        desc: "GPU Tuning and Optimization Guides",
                        lunch: "",
                        status: "Released"
                    },
                    {
                        title: "GPU Development",
                        desc: "GPU Development",
                        lunch: "",
                        status: "Pre-release"
                    },
                    {
                        title: "Cloud Performance Optimization Tools",
                        desc: "Cloud Performance Optimization Tools",
                        lunch: "",
                        status: "Released"
                    },
                ]
            }
        ],
        [
            {
                accoridan: {
                    title: "Processors & Chipsets",
                    accoridan: [
                        {
                            title: "By Code Name",
                            data: [
                                {
                                    title: "Alder Lake N",
                                    desc: "Intel Atom® Processors x7000E Series and Intel® Core™ i3-N305 Processors for IoT edge applications",
                                    lunch: "2023 Q1",
                                    status: "Released"
                                },
                                {
                                    title: "Alder Lake N",
                                    desc: "Intel Atom® Processors x7000E Series and Intel® Core™ i3-N305 Processors for IoT edge applications",
                                    lunch: "2023 Q1",
                                    status: "Released"
                                },
                                {
                                    title: "Alder Lake N",
                                    desc: "Intel Atom® Processors x7000E Series and Intel® Core™ i3-N305 Processors for IoT edge applications",
                                    lunch: "2023 Q1",
                                    status: "Released"
                                },
                            ]
                        },
                        {
                            title: "Intel® Axxia™ Communication Processors",
                            data: [
                                {
                                    title: "Intel® Axxia™ 3400 Communication Processor Family",
                                    desc: "Intel® Axxia™ 3400 Communication Processor Family",
                                    lunch: "",
                                    status: "Released"
                                },
                            ]
                        },
                        {
                            title: "Intel® Core™ Processors",
                            data: [
                                {
                                    title: "Intel® Axxia™ 3400 Communication Processor Family",
                                    desc: "Intel® Axxia™ 3400 Communication Processor Family",
                                    lunch: "",
                                    status: "Released"
                                }
                            ]
                        }
                    ]
                },
            },
            {
                accoridan: {
                    title: "Ethernet Products",
                    data: [
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                    ]
                }
            },
            {
                accoridan: {
                    title: "Ethernet Products",
                    data: [
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                    ]
                }
            },
            {
                accoridan: {
                    title: "Ethernet Products",
                    data: [
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                    ]
                }
            },
            {
                accoridan: {
                    title: "Ethernet Products",
                    data: [
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                    ]
                }
            },
            {
                accoridan: {
                    title: "Ethernet Products",
                    data: [
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Intel® Ethernet Adapter and Controller Software",
                            desc: "Intel® Ethernet Adapter and Controller Software",
                            lunch: "",
                            status: "Released"
                        },
                    ]
                }
            },
        ],
        [
            {
                accoridan: {
                    title: "Data Center Software",
                    data: [
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        },
                    ]
                }
            },
            {
                accoridan: {
                    title: "Accordion Item #4",
                    data: [
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        },
                    ]
                }
            }
        ],
        [
            {
                accoridan: {
                    title: "AI",
                    data: [
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        }
                    ]
                }
            },
            {
                accoridan: {
                    title: "Computer Vision",
                    data: [
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        }
                    ]
                }
            }
        ],
        [
            {
                accoridan: {
                    title: "Intel vPro® Platform",
                    data: [
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        }
                    ]
                }
            },
            {
                accoridan: {
                    title: "Thunderbolt™ Technology",
                    data: [
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        }
                    ]
                }
            }
        ],
        [
            {
                accoridan: {
                    title: "Avionics",
                    data: [
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        }
                    ]
                }
            },
            {
                accoridan: {
                    title: "Industrial",
                    data: [
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        },
                        {
                            title: "Data Center Storage Analytics",
                            desc: "Data Center Storage Analytics",
                            lunch: "",
                            status: "Released"
                        }
                    ]
                }
            }
        ],
        [
            {
                data: [
                    {
                        title: "Data Center Storage Analytics",
                        desc: "Data Center Storage Analytics",
                        lunch: "",
                        status: "Released"
                    },
                    {
                        title: "Data Center Storage Analytics",
                        desc: "Data Center Storage Analytics",
                        lunch: "",
                        status: "Released"
                    }
                ]
            }
        ],
        [
            {
                data: [
                    {
                        title: "Data Center Storage Analytics",
                        desc: "Data Center Storage Analytics",
                        lunch: "",
                        status: "Released"
                    },
                    {
                        title: "Data Center Storage Analytics",
                        desc: "Data Center Storage Analytics",
                        lunch: "",
                        status: "Released"
                    }
                ]
            }
        ]
    ];
    // Remove active class from all tabs
    if (document.getElementsByClassName("VK_reso_list_item")) {
        var tabs = document.getElementsByClassName("VK_reso_list_item");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("VK_reso_active_list");
        }
        tabs[id].classList.add('VK_reso_active_list');

        // Generate HTML content
        let html_data = accoridan_data[id].map((ele, index) => {
            return `${ele.data ? `
    <table class="w-100" style="border-collapse: collapse; border: 1px solid #ddd;">
        <thead>
            <tr class="text-center VK_reso_table_th">
                <th style="border: 1px solid #ddd; padding: 20px;">Title</th>
                <th style="border: 1px solid #ddd; padding: 20px;">Description</th>
                <th style="border: 1px solid #ddd; padding: 20px;">Launch Date</th>
                <th style="border: 1px solid #ddd; padding: 20px;">Status</th>
            </tr>
        </thead>
        <tbody>
            ${ele.data.map((el) => {
                return `
                <tr class="VK_reso_table_tr">
                    <td class="VK_reso_table_td VK_reso_table_font VK_reso_table_title" style="border: 1px solid #ddd; padding: 15px;"><a href="" class="text-decoration-none">${el.title}</a></td>
                    <td class="VK_reso_table_td VK_reso_table_font" style="border: 1px solid #ddd; padding: 15px;">${el.desc}</td>
                    <td class="VK_reso_table_td VK_reso_table_font" style="border: 1px solid #ddd; padding: 15px;">${el.lunch}</td>
                    <td class="VK_reso_table_td VK_reso_table_font" style="border: 1px solid #ddd; padding: 15px;">${el.status}</td>
                </tr>`;
            }).join('')}    
        </tbody>
    </table>` : ele.accoridan ?
                `<div class="accordion-item VK_reso_accoridan" style="overflow-x: auto;">
        <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                ${ele.accoridan.title}
            </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse VK_reso_accoridan_body" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                ${ele.accoridan.data ?
                    `<table class="w-100" style="border-collapse: collapse; border: 1px solid #ddd;">
                    <thead>
                        <tr class="text-center VK_reso_table_th">
                            <th style="border: 1px solid #ddd; padding: 20px;">Title</th>
                            <th style="border: 1px solid #ddd; padding: 20px;">Description</th>
                            <th style="border: 1px solid #ddd; padding: 20px;">Launch Date</th>
                            <th style="border: 1px solid #ddd; padding: 20px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${ele.accoridan.data.map((el) => {
                        return `
                            <tr class="VK_reso_table_tr">
                                <td class="VK_reso_table_td VK_reso_table_font VK_reso_table_title" style="border: 1px solid #ddd; padding: 15px;"><a href="" class="text-decoration-none">${el.title}</a></td>
                                <td class="VK_reso_table_td VK_reso_table_font" style="border: 1px solid #ddd; padding: 15px;">${el.desc}</td>
                                <td class="VK_reso_table_td VK_reso_table_font" style="border: 1px solid #ddd; padding: 15px;">${el.lunch}</td>
                                <td class="VK_reso_table_td VK_reso_table_font" style="border: 1px solid #ddd; padding: 15px;">${el.status}</td>
                            </tr>`;
                    }).join('')}
                    </tbody>
                </table>` : ele.accoridan.accoridan ?
                        ele.accoridan.accoridan.map((sub, sub_id) => {
                            return `<div class="accordion-item VK_reso_inner_accoridan w-100">
                            <h2 class="accordion-header" id="heading${sub_id}-${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${sub_id}-${index}" aria-expanded="false" aria-controls="collapse${sub_id}-${index}">
                                    ${sub.title}
                                </button>
                            </h2>
                            <div id="collapse${sub_id}-${index}" class="accordion-collapse collapse VK_reso_inner_accoridan_body" aria-labelledby="heading${sub_id}-${index}" data-bs-parent="#accordionExample">
                                <div class="accordion-body" style="overflow-x: auto;">
                                    ${sub.data ?
                                    `<table class="w-100" style="border-collapse: collapse; border: 1px solid #ddd;">
                                        <thead>
                                            <tr class="text-center VK_reso_table_th">
                                                <th style="border: 1px solid #ddd; padding: 20px;">Title</th>
                                                <th style="border: 1px solid #ddd; padding: 20px;">Description</th>
                                                <th style="border: 1px solid #ddd; padding: 20px;">Launch Date</th>
                                                <th style="border: 1px solid #ddd; padding: 20px;">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${sub.data.map((sb_data) => {
                                        return `
                                                <tr class="VK_reso_table_tr">
                                                    <td class="VK_reso_table_td VK_reso_table_font VK_reso_table_title" style="border: 1px solid #ddd; padding: 15px;"><a href="" class="text-decoration-none">${sb_data.title}</a></td>
                                                    <td class="VK_reso_table_td VK_reso_table_font" style="border: 1px solid #ddd; padding: 15px;">${sb_data.desc}</td>
                                                    <td class="VK_reso_table_td VK_reso_table_font" style="border: 1px solid #ddd; padding: 15px;">${sb_data.lunch}</td>
                                                    <td class="VK_reso_table_td VK_reso_table_font" style="border: 1px solid #ddd; padding: 15px;">${sb_data.status}</td>
                                                </tr>`;
                                    }).join('')}
                                        </tbody>
                                    </table>` : ''}
                                </div>
                            </div>
                        </div>`;
                        }).join('') : ''}
            </div> 
        </div>
    </div>` : ''}`
        }).join('')

        document.getElementById('accordionContainer').innerHTML = html_data;
        var collapseElements = document.querySelectorAll('.accordion-item .collapse');
        collapseElements.forEach(function (element) {
            new bootstrap.Collapse(element, {
                toggle: false
            });
        });
    }
}



// ---------------------------------------------- ai scikit ------------------------------------------

function VK_scikit_acc(id) {
    let ele = document.getElementsByClassName('VK_scikit_bench_btn');
    let img = ['VK_scikit_banck_mark1.webp', 'VK_scikit_banck_mark2.webp', 'VK_scikit_banck_mark3.webp']
    for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove('VK_scikit_active');
    }
    ele[id].classList.add('VK_scikit_active');
    let el = document.getElementById('VK_scikit_mark_image');
    el.src = `/img/vivek/${img[id]}`;
}


function VK_scikit_model(id) {
    let model_img = ['VK_scikit_model1.png', 'VK_scikit_model2.png', 'VK_scikit_model3.png'];
    let el = document.getElementById('VK_scikit_img_model');
    el.src = `/img/vivek/${model_img[id]}`;
    let modal = new bootstrap.Modal(document.getElementById('VK_scikit_model'));
    modal.show();
}


function VK_aitools_model(id) {
    let model_img = ['VK_ai_tool1.png', 'VK_ai_tool2.png', 'VK_ai_tools3.png'];
    let el = document.getElementById('VK_scikit_img_model');
    el.src = `/img/vivek/${model_img[id]}`;
    let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

document?.querySelector('.btn-close')?.addEventListener('click', function (event) {
    event?.preventDefault();
    let modal = bootstrap.Modal?.getInstance(document.getElementById('exampleModal'));
    modal?.hide();
});



function VK_cpu_nav(id) {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`VK_cpu_nav${i}`).classList.add('d-none');
        document.getElementById(`VK_cpu_nav_bar${i}`).classList.remove('VK_cpu_active');
    }
    document.getElementById(`VK_cpu_nav${id}`).classList.remove('d-none');
    document.getElementById(`VK_cpu_nav_bar${id}`).classList.add('VK_cpu_active');

}


// ------------------------ grafics ------------------------

function VK_arc_img(id) {

    let img = ['VK_arc8.png', 'VK_arc9.Jpg', 'VK_arc10.png', 'VK_arc11.png'];
    let desc = [
        'Experience supercharged gaming and cutting-edge creation experiences across the Intel Arc A-series family. From high performance AAA gaming on Intel Arc 7 graphics to enhanced mainstream gaming on Intel Arc 3 graphics, there’s an Arc graphics card for your gaming adventure.'
        ,
        'Create compelling content, powered by the first graphics card with support for all current leading media formats, and keep yourself up to date with the most advanced AV1 video encode capabilities.'
        ,
        'Create stunning visual experiences for retail, education, and commercial gaming. Deploy media processing and AI-enhanced applications from smart factories to smart cities. Boost the performance of edge workloads with Intel® Arc™ GPU.'
        ,
        'Boost your workstation graphics experience with the Intel Arc professional range of GPUs. With extensive ISV certifications, this modern GPU range unites fluid viewports and the latest visual technologies with built-in ray tracing and AI acceleration in your favorite workstation software.'
    ];
    for (let i = 0; i < 4; i++) {
        document.getElementById(`VK_src_ac${i}`).classList.remove('VK_arc_active');
    }
    document.getElementById(`VK_src_ac${id}`).classList.add('VK_arc_active');
    let el = document.getElementById('VK_arc_img');
    let dsc = document.getElementById('VK_arc_img_desc');
    el.src = `/img/vivek/${img[id]}`;
    dsc.innerHTML = desc[id]
}




// -------------------------------------------------------  data center cpu  --------------------------------------------------------

function VK_data_nav(id) {
    let section = ['VK_data_tools_library', 'VK_data_ai_workflow', 'VK_data_hpc', 'VK_data_storise']
    for (let i = 0; i < 4; i++) {
        document.getElementById(section[i]).classList.add('d-none');
        document.getElementById(`VK_center_menu${i}`).classList.remove('VK_center_active');
    }
    document.getElementById(section[id]).classList.remove('d-none');
    document.getElementById("VK_center_menu" + id).classList.add('VK_center_active');
}



// -------------------------------------------------------- Vturn profiler documantation --------------------------------------------------------

var VK_vturn_profiler_data = [
    {
        title: "Performance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2023.1",
            "2020"
        ],
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "Tutorials",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "Install Intel® VTune™ Profiler",
        id: "767438",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2023.1",
            "2020"
        ],
        download: true,
        bookmark: true,
        file: "URL (487 KB)",
        content: "Installation Guides",
        description: "Learn how to install and configure Intel® VTune™ Profiler on Windows*, Linux*, and macOS* systems."
    },
    {
        title: "Performance Analysis Tutorial for Windows* OS",
        id: "762031",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2023.1",
            "2020"
        ],
        download: true,
        bookmark: true,
        file: "URL (1.32 MB)",
        content: "Tutorials",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Windows* OS environment)."
    },
    {
        title: "Get Started",
        id: "769038",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.1",
            "2023"
        ],
        download: true,
        bookmark: true,
        file: "URL (731 KB)",
        content: "Getting Started Guides",
        description: "Start profiling applications and systems with Intel® VTune™ Profiler on a Windows, Linux, or macOS host machine. Configure your first analysis and interpret results."
    },
    {
        title: "Intel® oneAPI Programming Guide",
        id: "771723",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (1.40 MB)",
        content: "Development Guides",
        description: "Programming oneAPI projects to maximize hardware abilities."
    },
    {
        title: "User Guide",
        id: "766319",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (19.4 MB)",
        content: "Development User Guides",
        description: "Get a comprehensive overview of Intel® VTune™ Profiler for performance analysis. Understand workflows and tuning methodologies to profile serial and multithreaded applications with Intel® VTune™ Profiler for execution on a variety of hardware platforms (CPU, GPU, and FPGA)."
    },
    {
        title: "Cookbook",
        id: "766316",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (24.6 MB)",
        content: "Cookbooks",
        description: "Follow tuning and configuration recipes to use analysis types in Intel® VTune™ Profiler. Analyze your code, identify ineffective algorithm and hardware usage, and get tuning advice on performance."
    },
    {
        title: "Get Started with Application Performance Snapshot for Linux* OS",
        id: "761880",
        date: "03/22/24",
        version: [
            "2024.1",
            "2024.0",
            "2023.1",
            "2021.3",
        ],
        download: true,
        bookmark: true,
        file: "URL (317 KB)",
        content: "Getting Started Guides",
        description: "Get Started with Intel® Application Performance Snapshot on Linux* OS"
    },
    {
        title: "Application Performance Snapshot User Guide for Linux* OS",
        id: "772048",
        date: "11/07/23",
        version: [
            "2024.0",
            "2023.1",
            "2023.0",
        ],
        download: true,
        bookmark: true,
        file: "URL (432 KB)",
        content: "Development User Guides",
        description: "Learn how to use Intel® Application Performance Snapshot on Linux* OS"
    },
    {
        title: "Code Sample: N-Body Simulation",
        id: "669972",
        date: "01/12/23",
        version: "1.0",
        download: false,
        bookmark: true,
        file: "URL",
        content: "Code Samples",
        description: "This demonstration applies Data Parallel C++ (DPC++) to a many-particle simulation."
    },
    {
        title: "Intel® VTune™ Profiler Tutorials",
        id: "673132",
        date: "09/13/22",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Tutorials",
        description: "Get tutorials for finding hotspots, analyzing energy use, and more for Intel® VTune™ Profiler."
    },
    {
        title: "Code Sample: Matrix Multiplication for Intel® VTune™ Profiler",
        id: "669916",
        date: "09/10/20",
        version: "1.0",
        download: false,
        bookmark: true,
        file: "URL",
        content: "Code Samples",
        description: "Learn how to profile an application using Intel® VTune™ Profiler."
    },
]

var VK_vturn_data = VK_vturn_profiler_data;

// display data
function VK_vturn_profiler_toolkit() {

    const div = document.getElementById('VK_vturn_profiler');
    // result count 
    if (document.getElementById('VK_vturn_profiler_cnt1')) {
        document.getElementById('VK_vturn_profiler_cnt1').innerHTML = VK_vturn_data.length + " results";
    }
    // display accoridan
    if (div) {
        const htmlele = VK_vturn_data.map((ele, ind) => {
            const uniqueID = `flush-collapse-${ind}`;
            const uniqueHeadingID = `flush-heading-${ind}`;

            const versionDisplay = Array.isArray(ele.version)
                ? `<select class="py-2 pe-xl-4 pe-5">${ele.version.map(v => `<option value="${v}">${v}</option>`).join('')}</select>`
                : ele.version;

            return `
            <div class="accordion-item">
                <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                    <div class="col-xxl-7 col-xl-6 col-12 align-self-center">
                        <p class="m-xl-0 mb-4">
                            <a href="#" class="VK_red_normal_font text-decoration-none VK_a">
                                ${ele.title}
                            </a>
                        </p>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-12 p-0 text-xl-center d-flex flex-column flex-xl-row justify-content-between align-items-center">
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Date :</b></span> ${ele.date}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Version: </b></span>
                            ${versionDisplay}
                        </p>
                    </div>
                    <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                        <p class="d-flex m-0 justify-content-end">
                            ${ele.download ? `
                                <button class="bg-transparent border-0 text-primary mx-2 px-3 m-xl-0">
                                    <i class="fa-solid fa-download"></i>
                                </button>
                            ` : ''}
                            ${ele.bookmark ? `
                                <button class="bg-transparent border-0 text-primary mx-2 px-3 m-xl-0">
                                    <i class="fa-regular fa-bookmark"></i>
                                </button>
                            ` : ''}
                            <button class="accordion-button collapsed mx-2 m-xl-0 px-3" type="button"
                                data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                                aria-expanded="false" aria-controls="${uniqueID}">
                                <span>&nbsp;</span>
                            </button>
                        </p>
                    </div>
                </div>
                <div id="${uniqueID}" class="accordion-collapse collapse"
                    aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="m-0">
                            <span class="d-inline-block mx-2">
                                <b>File:</b>
                                <span>${ele.file}</span>
                            </span>
                            <span class="d-inline-block mx-2">
                                <b>Content Type :</b>
                                <span>${ele.content}</span>
                            </span>
                        </p>
                        <p class="m-0">${ele.description}</p>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = htmlele.join('');

        const accordionButtons = div.querySelectorAll('.accordion-button');
        accordionButtons.forEach(button => {
            const collapseElement = document.querySelector(button.getAttribute('data-bs-target'));
            const collapseInstance = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });

            button.addEventListener('click', function () {
                collapseInstance.toggle();
            });
        });
    } else {
        return;
    }
}

// data sort by
function VK_vturn_data_softby() {
    let sort_by = document.getElementById('VK_vturn_data_sortby').value;
    if (sort_by == 'A-Z') {
        VK_vturn_data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort_by == 'Z-A') {
        VK_vturn_data.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort_by == 'Content Type') {
        VK_vturn_data.sort((a, b) => a.content.localeCompare(b.content));
    }
    VK_vturn_profiler_toolkit();
}

// data searchbox
function VK_vturn_data_search_box() {
    let search_txt = document.getElementById('VK_vturn_profiler_search_bar').value;
    VK_vturn_data = VK_vturn_profiler_data.filter((ele) => {
        return ele.title.toLowerCase().includes(search_txt.toLowerCase()) || ele.content.toLowerCase().includes(search_txt.toLowerCase())
    })
    VK_vturn_profiler_toolkit();
}

// clear all 
function VK_vturn_clear_All() {
    VK_vturn_data = VK_vturn_profiler_data;

    VK_vturn_profiler_toolkit();

    VK_vturn_content_type_checkbox()

    VK_vturn_programming_checkbox();
}



// content type checkbox
var VK_vturn_content_data = [
    "Code Samples",
    "Cookbooks",
    "Development Guides",
    "Getting Started Guides",
    "Installation Guides",
    "Tutorials"
]

var VK_vturn_content = VK_vturn_content_data

// display content type checkbox
function VK_vturn_content_type_checkbox() {
    if (document.getElementById('VK_vturn_content_checkbox')) {
        let html = VK_vturn_content.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_vturn_content_checkbox" onclick="VK_vturn_content_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_vturn_content.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_oneapi_toolkit_showmore()" id="VK_toolkit_content_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_vturn_content_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// orderby
function VK_vturn_content_order_By() {
    let orderby = document.getElementById('VK_vturn_content_type_sort').value
    if (orderby == 'A-Z') {
        VK_vturn_content.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_vturn_content.sort((a, b) => b.localeCompare(a))
    }
    VK_vturn_content_type_checkbox()
}

// content type checkbox event
function VK_vturn_content_type() {
    let checkboxes = document.querySelectorAll('.VK_vturn_content_checkbox');
    let checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (checkedBoxes.length === 0) {
        VK_vturn_data = VK_vturn_profiler_data;
    } else {
        let selectedContentTypes = checkedBoxes.map(checkbox => checkbox.value.toLowerCase());
        VK_vturn_data = VK_vturn_profiler_data.filter(item => {
            return selectedContentTypes.includes(item.content.toLowerCase());
        });
    }

    VK_vturn_profiler_toolkit();
}


//  programming language checkbx

var VK_vturn_programming_data = [
    "C C++",
    "C#",
    "Data Parallel C++ (DPC++)",
    "Fortran",
    "SYCL*"
]

var VK_vturn_programming = VK_vturn_programming_data

// display content type checkbox
function VK_vturn_programming_checkbox() {
    if (document.getElementById('VK_vturn_software_checkbox')) {
        let html = VK_vturn_programming.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_vturn_content_checkbox" onclick="VK_vturn_programming_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_vturn_programming.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_oneapi_toolkit_showmore()" id="VK_toolkit_content_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_vturn_software_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// orderby
function VK_vturn_programming_order_By() {
    let orderby = document.getElementById('VK_vturn_programming_filters').value
    if (orderby == 'A-Z') {
        VK_vturn_programming.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_vturn_programming.sort((a, b) => b.localeCompare(a))
    }
    VK_vturn_programming_checkbox()
}


// ----------------------------------------------------- celadon documentation ----------------------------------------------------

let celadon_data = [
    {
        title: "gerformance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "FAQs",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "Performance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "Development Reference Guides",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "Performance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "Getting Started Guides",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "Performance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: false,
        bookmark: true,
        file: "URL (487KB)",
        content: "News",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "aerformance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "On-Demand Training",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "zerformance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "Release Notes",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "zerformance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "Software Overviews",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "zerformance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "Technical Articles",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "zerformance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "Tutorials",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
    {
        title: "zerformance Analysis Tutorial for Linux* OS",
        id: "762029",
        date: "06/24/24",
        version: "original",
        download: true,
        bookmark: true,
        file: "URL (487KB)",
        content: "Use Cases",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    },
]


function VK_vturn_onload() {
    if (document.getElementById('VK_vturn_cnt1')) {
        document.getElementById('VK_vturn_cnt1').innerHTML = celadon_arr.length + " results"
    }
}





let celadon_arr = celadon_data;

function VK_celadon_sort() {
    let select = document.getElementById('VK_celadon_docx_select').value;
    switch (select) {
        case 'A-Z':
            sortByasscedalon(celadon_arr);
            break;
        case 'Z-A':
            sortBydescedalon(celadon_arr);
            break;
    }
    createDocumentElementforceladon();
}

// function VK_celadon_filter_sort(){
//     let select = document.getElementById('VK_celadon_filter_select')
//     select.addEventListener('change',function(){
//         console.log(select);
//     })
//     // console.log(select);
//     // switch (select) {
//     //     case 'A-Z':
//     //         sortByasscedalon(celadon_arr);
//     //         break;
//     //     case 'Z-A':
//     //         sortBydescedalon(celadon_arr);
//     //         break;
//     // }
//     // createDocumentElementforceladon();
// }

function sortByasscedalon(arr) {
    arr.sort((a, b) => a.title.localeCompare(b.title));
}

function sortBydescedalon(arr) {
    arr.sort((a, b) => b.title.localeCompare(a.title));
}


function createDocumentElementforceladon() {

    VK_vturn_onload();
    let div = document.getElementById('VK_result_div');
    if (div) {
        let htmlele = celadon_arr.map((ele, ind) => {
            let uniqueID = `flush-collapse-${ind}`;
            let uniqueHeadingID = `flush-heading-${ind}`;

            return `<div class="accordion-item">
                        <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                            <div class="col-xl-7 col-12 align-self-center">
                                <p class="m-xl-0 mb-4">
                                    <a href="" class="VK_red_normal_font text-decoration-none VK_a">
                                        ${ele.title}
                                    </a>
                                </p>
                            </div>
                            <div class="col-xl-4 col-12 d-flex flex-column flex-xl-row justify-content-between align-items-center">
                                <p class="m-0 my-1 VK_red_small_font w-100">
                                    <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                                </p>
                                <p class="m-0 my-1 VK_red_small_font w-100">
                                    <span class="d-xl-none"><b>Date :</b></span>${ele.date}
                                </p>
                                <p class="m-0 my-1 VK_red_small_font w-100">
                                    <span class="d-xl-none"><b>Version: </b></span>${ele.version}
                                </p>
                            </div>
                            <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                                <p class="d-flex m-0 justify-content-xl-between justify-content-end">
                                    ${ele.download ? `<button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                                        <i class="fa-solid fa-download"></i>
                                                    </button>` : "<button class='border-0 bg-transparent'></button>"}
                                    ${ele.bookmark ? `<button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                                        <i class="fa-regular fa-bookmark"></i>
                                                    </button>` : "<button class='border-0 bg-transparent'></button>"}
                                    <button class="accordion-button collapsed mx-2 m-xl-0" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                                        aria-expanded="false" aria-controls="${uniqueID}">
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div id="${uniqueID}" class="accordion-collapse collapse"
                            aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p class="m-0">
                                    <span class="d-inline-block mx-2">
                                        <b>File:</b>
                                        <span>${ele.file}</span>
                                    </span>
                                    <span class="d-inline-block mx-2">
                                        <b>Content Type :</b>
                                        <span>
                                            ${ele.content}
                                        </span>
                                    </span>
                                </p>
                                <p class="m-0">
                                    ${ele.description}
                                </p>
                            </div>
                        </div>
                    </div>`;
        });

        div.innerHTML = htmlele.join('');
    } else {
        return;
    }
}



function VK_celadon_open() {
    const accordions = document.querySelectorAll('#VK_result_div .accordion-collapse');
    accordions.forEach(accordion => {
        const collapseInstance = new bootstrap.Collapse(accordion, {
            toggle: false
        });
        collapseInstance.show();
    });
}

function VK_celadon_close() {
    const accordions = document.querySelectorAll('#VK_result_div .accordion-collapse');
    accordions.forEach(accordion => {
        const collapseInstance = new bootstrap.Collapse(accordion, {
            toggle: false
        });
        collapseInstance.hide();
    });
}

let original_celadon_arr = [...celadon_data];

function VK_celadon_search() {
    let search = document.getElementById('VK_celadon_search').value;
    if (search.length == 0) {
        celadon_arr = [...original_celadon_arr];
        createDocumentElementforceladon();
        return;
    } else {
        let result = original_celadon_arr.filter((ele) => {
            return ele.title.toLowerCase().includes(search.toLowerCase());
        });
        celadon_arr = result;
        createDocumentElementforceladon();
    }
}


function VK_celadon_checkbox() {
    let checkboxes = document.querySelectorAll('.VK_celadon_check_box input[type=checkbox]');
    let filtered = [];
    let anyChecked = false;

    checkboxes.forEach((ele) => {
        if (ele.checked) {
            anyChecked = true;
            let arr = original_celadon_arr.filter((el) => {
                return ele.value == el.content;
            });
            filtered = [...filtered, ...arr];
        }
    });

    if (!anyChecked) {
        celadon_arr = [...original_celadon_arr];
    } else {
        celadon_arr = filtered;
    }
    createDocumentElementforceladon();
}




// ------------------------------------------------------------------------ intel adviser -----------------------------------------------------------

let VK_intel_advier_data = [
    {
        title: "User Guide",
        id: "766319",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.1",
            "2024.1",
            "2024.1",
        ],
        download: true,
        bookmark: true,
        file: "URL (19.4 MB)",
        content: "Development User Guides",
        description: "Get a comprehensive overview of Intel® VTune™ Profiler for performance analysis. Understand workflows and tuning methodologies to profile serial and multithreaded applications with Intel® VTune™ Profiler for execution on a variety of hardware platforms (CPU, GPU, and FPGA)."
    },
    {
        title: "Cookbook",
        id: "766448",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.1",
            "2024.1",
            "2024.1",
        ],
        download: true,
        bookmark: false,
        file: "URL",
        content: "Cookbooks",
        description: "Follow tuning and configuration recipes to use analysis types in Intel® VTune™ Profiler. Analyze your code, identify ineffective algorithm and hardware usage, and get tuning advice on performance."
    },
    {
        title: "Performance Analysis Tutorial for Linux* OS",
        id: "766448",
        date: "06/24/24",
        version: "2024.1",
        download: true,
        bookmark: false,
        file: "URL",
        content: "Tutorials",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment)."
    }
]

let intel_adviser = VK_intel_advier_data;


// dispaly results
function VK_display_result_accridan() {

    const div = document.getElementById('VK_daviser_result_div');
    if (document.getElementById('VK_adviser_cnt1')) {
        document.getElementById('VK_adviser_cnt1').innerHTML = VK_intel_advier_data.length + " results"

    }

    if (div) {
        const htmlele = VK_intel_advier_data.map((ele, ind) => {
            const uniqueID = `flush-collapse-${ind}`;
            const uniqueHeadingID = `flush-heading-${ind}`;

            const versionDisplay = Array.isArray(ele.version)
                ? `<select class="py-2 pe-xl-4 pe-5">${ele.version.map(v => `<option value="${v}">${v}</option>`).join('')}</select>`
                : ele.version;

            return `
            <div class="accordion-item">
                <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                    <div class="col-xl-7 col-12 align-self-center">
                        <p class="m-xl-0 mb-4">
                            <a href="#" class="VK_red_normal_font text-decoration-none VK_a">
                                ${ele.title}
                            </a>
                        </p>
                    </div>
                    <div class="col-xl-4 col-12 d-flex flex-column flex-xl-row justify-content-between align-items-center">
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Date :</b></span> ${ele.date}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Version: </b></span>
                            ${versionDisplay}
                        </p>
                    </div>
                    <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                        <p class="d-flex m-0 justify-content-xl-between justify-content-end">
                            ${ele.download ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-solid fa-download"></i>
                                </button>
                            ` : ''}
                            ${ele.bookmark ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-regular fa-bookmark"></i>
                                </button>
                            ` : ''}
                            <button class="accordion-button collapsed mx-2 m-xl-0" type="button"
                                data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                                aria-expanded="false" aria-controls="${uniqueID}">
                            </button>
                        </p>
                    </div>
                </div>
                <div id="${uniqueID}" class="accordion-collapse collapse"
                    aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="m-0">
                            <span class="d-inline-block mx-2">
                                <b>File:</b>
                                <span>${ele.file}</span>
                            </span>
                            <span class="d-inline-block mx-2">
                                <b>Content Type :</b>
                                <span>${ele.content}</span>
                            </span>
                        </p>
                        <p class="m-0">${ele.description}</p>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = htmlele.join('');
    }
}

// searching
function VK_adviser_search() {
    let srch;
    srch = document.getElementById('VK_adviser_search').value
    VK_intel_advier_data = intel_adviser.filter((ele) => {
        return ele.title.toLowerCase().includes(srch);
    })
    VK_display_result_accridan()
}

// open accoridan
function VK_adviser_open() {
    let elements = document.querySelectorAll('#VK_daviser_result_div .accordion-collapse');

    elements.forEach(accordion => {
        const collapseInstance = new bootstrap.Collapse(accordion, {
            toggle: false
        });

        collapseInstance.show();
    });
}

// close accoridan
function VK_adviser_close() {
    let elements = document.querySelectorAll('#VK_daviser_result_div .accordion-collapse');

    elements.forEach(accordion => {
        const collapseInstance = new bootstrap.Collapse(accordion, {
            toggle: false
        });

        collapseInstance.hide();
    });
}



// ------------------------------------------------------------ software guard documantation ----------------------------------------------------------

// data
let software_guard_data = [
    {
        title: "Intel® GPU Plug-in for Red Hat OpenShift",
        id: "766448",
        date: "06/24/24",
        download: true,
        bookmark: true,
        file: "URL",
        content: "Business Briefs",
        description: "This document provides a detailed overview of the Intel® Advisor functionality and workflows."
    },
    {
        title: "Load Value Injection",
        id: "766448",
        date: "06/24/24",
        download: true,
        bookmark: false,
        file: "URL",
        content: "Development User Guides",
        description: "This document provides a detailed overview of the Intel® Advisor functionality and workflows."
    },
    {
        title: "Secure Artificial Intelligence: From Silicon to Serverless",
        id: "766448",
        date: "06/24/24",
        download: true,
        bookmark: false,
        file: "URL",
        content: "Blogs",
        description: "This document provides a detailed overview of the Intel® Advisor functionality and workflows."
    },
    {
        title: "Intel® Advisor User Guide",
        id: "766448",
        date: "06/24/24",
        download: true,
        bookmark: false,
        file: "URL",
        content: "Development User Guides",
        description: "This document provides a detailed overview of the Intel® Advisor functionality and workflows."
    },
]

let software_data = [...software_guard_data];
// print accoridand 
function VK_display_software_result_accridan() {

    if (document.getElementById('VK_guard_cnt1')) {
        document.getElementById('VK_guard_cnt1').innerHTML = software_data.length + " results"
    }

    const div = document.getElementById('VK_guard_result_div');

    if (div) {
        const htmlele = software_data.map((ele, ind) => {
            const uniqueID = `flush-collapse-${ind}`;
            const uniqueHeadingID = `flush-heading-${ind}`;

            return `
            <div class="accordion-item">
                <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                    <div class="col-xl-7 col-12 align-self-center">
                        <p class="m-xl-0 mb-4">
                            <a href="#" class="VK_red_normal_font text-decoration-none VK_a">
                                ${ele.title}
                            </a>
                        </p>
                    </div>
                    <div class="col-xl-4 col-12 d-flex flex-column flex-xl-row justify-content-between align-items-center">
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Date :</b></span> ${ele.date}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Version: </b></span>
                            ${ele.content}
                        </p>
                    </div>
                    <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                        <p class="d-flex m-0 justify-content-xl-between justify-content-end">
                            ${ele.download ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-solid fa-download"></i>
                                </button>
                            ` : ''}
                            ${ele.bookmark ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-regular fa-bookmark"></i>
                                </button>
                            ` : ''}
                            <button class="accordion-button collapsed mx-2 m-xl-0" type="button"
                                data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                                aria-expanded="false" aria-controls="${uniqueID}">
                            </button>
                        </p>
                    </div>
                </div>
                <div id="${uniqueID}" class="accordion-collapse collapse"
                    aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="m-0">
                            <span class="d-inline-block mx-2">
                                <b>File:</b>
                                <span>${ele.file}</span>
                            </span>
                        </p>
                        <p class="m-0 ps-2 mt-3">${ele.description}</p>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = htmlele.join('');
    }
}

// searching
function VK_software_field_search() {
    let serch_txt = document.getElementById('VK_software_result_search_box').value
    software_data = software_guard_data.filter(ele => ele.title.toLowerCase().includes(serch_txt.toLowerCase()))
    VK_display_software_result_accridan()
}


//  show filter 
function VK_software_sm_filter() {
    let ele = document.getElementsByClassName('VK_software_small_filter_op')
    for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove('d-none')
    }
}

// hide filter
function VK_software_sm_filter_clsoe() {
    let ele = document.getElementsByClassName('VK_software_small_filter_op')
    for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add('d-none')
    }
}


// checkbox
let contentTypes = [
    "Blogs", "Business Briefs", "Code Samples", "Datasheets, Specifications and Schematics",
    "Design Reference", "Development Guides", "Development Reference Guides",
    "Development User Guides", "FAQs", "Getting Started Guides", "How-To Training",
    "Infographics", "On-Demand Training", "Release Notes", "Solution Briefs",
    "Technical Articles", "Tutorials", "White Papers"
];

// clear all
function VK_software_clear() {
    software_data = [...software_guard_data];
    VK_display_software_result_accridan()
    VK_software_content_type(contentTypes)

}

// checkbox order by 
function VK_chk_order() {
    let order;
    if (window.innerWidth >= 1200) {
        order = document.getElementById('VK_check_full_box_order').value;
    }
    else {
        order = document.getElementById('VK_check_box_order').value;
    }
    let sortedArr = [];

    if (order === 'A-Z') {
        sortedArr = contentTypes.slice().sort((a, b) => a.localeCompare(b));
    } else if (order === 'Z-A') {
        sortedArr = contentTypes.slice().sort((a, b) => b.localeCompare(a));
    }

    VK_software_content_type(sortedArr);
}



function VK_software_chk_search() {

    let searchBox
    if (window.innerWidth >= 1200) {
        searchBox = document.getElementById('VK_guard_full_chk_search_box')
    }
    else {
        searchBox = document.getElementById('VK_guard_chk_search_box')
    }
    const searchTerm = searchBox.value.trim().toLowerCase();

    const filteredContentTypes = searchTerm
        ? contentTypes.filter(ele => ele.toLowerCase().includes(searchTerm))
        : contentTypes;

    VK_software_content_type(filteredContentTypes);
}

function VK_guard_checkbox() {
    let filteredData = [...software_guard_data];

    const checkboxes = document.querySelectorAll('.VK_guard_chk:checked');
    const checkedValues = Array.from(checkboxes).map(chk => chk.value.toLowerCase());

    if (checkedValues.length) {
        filteredData = checkedValues.map((ele) => {
            return filteredData.filter(el => el.content.toLowerCase().includes(ele))
        }).flat();
    }

    software_data = filteredData;

    VK_display_software_result_accridan();
}


function VK_software_show_more() {
    const elements = document.querySelectorAll('.VK_software_chk_box');
    const btn = document.getElementById('VK_show_more_or_less');
    const showMore = btn.textContent.trim() === "Show More";

    elements.forEach((element, index) => {
        if (index > 6) {
            element.classList.toggle('d-none', !showMore);
        }
    });

    btn.textContent = showMore ? "Show Less" : "Show More";
}

function VK_software_content_type(filteredContentTypes = contentTypes) {
    if (document.getElementById('VK_software_full_content_check')) {
        let container;
        if (window.innerWidth >= 1200) {
            container = document.getElementById('VK_software_full_content_check')
        }
        else {
            container = document.getElementById('VK_software_content_check')
        }
        const contentHTML = filteredContentTypes.map((item, index) => `
        <div class="d-flex align-items-center my-1 VK_software_chk_box ${index > 6 ? 'd-none' : ''}">
            <input type="checkbox" value="${item}" onclick="VK_guard_checkbox()" class="VK_guard_chk">
            <span class="d-inline-block ms-2">${item}</span>
        </div>
    `).join('');
        container.innerHTML = contentHTML + `
        <div class="show_more">
            <button class="text-primary ms-auto border-0 bg-transparent ${filteredContentTypes.length <= 6 ? "d-none" : ''}" onclick="VK_software_show_more()" id="VK_show_more_or_less">Show More</button>
        </div>`;
    }
    else {
        return
    }
}

window.addEventListener('resize', function () {
    VK_software_content_type()
})

VK_software_content_type();


// expand accoridan 
function VK_software_accoridan_open() {
    const accordions = document.querySelectorAll('#VK_guard_result_div .accordion-collapse');
    accordions.forEach(accordion => {
        const collapseInstance = new bootstrap.Collapse(accordion, {
            toggle: false
        });
        collapseInstance.show();
    });
}

// collapse collapse
function VK_software_accoridan_close() {
    const accordions = document.querySelectorAll('#VK_guard_result_div .accordion-collapse');
    accordions.forEach(accordion => {
        const collapseInstance = new bootstrap.Collapse(accordion, {
            toggle: false
        });
        collapseInstance.hide();
    });
}





// --------------------------------------------- ai pc dev -------------------------------------------
function VK_ai_show_more() {
    let ele = document.querySelectorAll('.VK_ai_pc_question .accordion-item')
    for (let i = 0; i < ele.length; i++) {
        if (i > 2) {
            ele[i].classList.toggle('d-none')
        }
    }
    let btn = document.getElementById('VK_ai_pc_show')
    btn.innerHTML = ' <i class="fa-solid fa-chevron-up in"></i> Show Less'
}

// ---------------------------------------------------------- show more -------------------------------------------------------
function VK_show_more(id, index) {
    let eles = document.querySelectorAll(`.${id} .VK_col`);
    for (let i = 0; i < eles.length; i++) {
        if (i >= index) {
            eles[i].classList.remove('d-none')
        }
    }
    let show = document.querySelector(`.${id} #VK_ai_pc_show`)
    let hide = document.querySelector(`.${id} #VK_ai_pc_hide`)
    show.classList.add('d-none');
    hide.classList.remove('d-none')
}

// ----------------------------------------------------- show less ----------------------------------------------------------
function VK_show_less(id, index) {
    let eles = document.querySelectorAll(`.${id} .VK_col`);
    for (let i = 0; i < eles.length; i++) {
        if (i >= index) {
            eles[i].classList.add('d-none')
        }
    }
    let show = document.querySelector(`.${id} #VK_ai_pc_show`)
    let hide = document.querySelector(`.${id} #VK_ai_pc_hide`)
    show.classList.remove('d-none');
    hide.classList.add('d-none')
}



// ------------------------------------------------------------ ai netweok ----------------------------------------------

function VK_network_show() {
    let ele = document.querySelectorAll('.VK_hide_col')
    for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove('d-none')
    }
    document.getElementById('VK_network_show').classList.add('d-none')
    document.getElementById('VK_network_hide').classList.remove('d-none')
}

function VK_network_hide() {
    let ele = document.querySelectorAll('.VK_hide_col')
    for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add('d-none')
    }
    document.getElementById('VK_network_show').classList.remove('d-none')
    document.getElementById('VK_network_hide').classList.add('d-none')
}


// ---------------------------------------------------------- tiber developer cloud ----------------------------------------------------

function VK_cloud_expands() {
    let ele = document.querySelectorAll('.VK_cloud_accoridan .accordion-collapse')
    ele.forEach(el => {
        let acc = new bootstrap.Collapse(el, {
            toggle: false
        })
        acc.show();
    })
    document.getElementById('VK_cloud_expand').classList.add('d-none')
    document.getElementById('VK_cloud_collapse').classList.remove('d-none')
}

function VK_cloud_collapses() {
    let ele = document.querySelectorAll('.VK_cloud_accoridan .accordion-collapse')
    ele.forEach(el => {
        let acc = new bootstrap.Collapse(el, {
            toggle: false
        })
        acc.hide();
    })
    document.getElementById('VK_cloud_expand').classList.remove('d-none')
    document.getElementById('VK_cloud_collapse').classList.add('d-none')
}



// -------------------------------------------------------- intel oneapi toolkit download ----------------------------------------------------------





// --------------------------------------------------- intel OneAPI toolkit documantation -------------------------------------------------

// data
let oneAPI_toolkit_documantation_data = [
    {
        title: "Intel® oneAPI DPC++/C++ Compiler Release Notes",
        id: "768207",
        date: "07/26/24",
        version: "2024.2.1",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "Intel oneAPI DPC++/C++ compiler release notes."
    },
    {
        title: "oneAPI GPU Optimization Guide",
        id: "771772",
        date: "07/18/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (7.16 MB)",
        content: "Development Guides",
        description: "Programming oneAPI projects to maximize hardware abilities."
    },
    {
        title: "Cookbook",
        id: "766316",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (24.6 MB)",
        content: "Cookbooks",
        description: "Follow tuning and configuration recipes to use analysis types in Intel® VTune™ Profiler. Analyze your code, identify ineffective algorithm and hardware usage, and get tuning advice on performance."
    },
    {
        title: "Code Sample: Hello-Encode",
        id: "670188",
        date: "05/29/24",
        version: "1.0",
        download: false,
        bookmark: true,
        file: "URL",
        content: "Code Samples",
        description: "This sample demonstrates how to use the oneAPI Video Processing Library to encode a simple video."
    },
    {
        title: "Release Notes for Intel® oneAPI Data Analytics Library",
        id: "763738",
        date: "07/25/24",
        version: "2024.6.0",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "Release Notes for Intel® oneAPI Data Analytics Library"
    },
    {
        title: "oneAPI Collective Communications Library Release Notes",
        id: "763686",
        date: "07/25/24",
        version: "2021.13.1",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "This is the Beta release of oneAPI Collective Communications Library (oneCCL) with major features supported below..."
    },
    {
        title: "oneAPI GPU Optimization Guide",
        id: "771772",
        date: "07/18/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (7.16 MB)",
        content: "Development Guides",
        description: "Programming oneAPI projects to maximize hardware abilities."
    },
    {
        title: "Intel® Distribution for GDB* Release Notes",
        id: "763674",
        date: "07/11/24",
        version: "2024.2.1",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "Provides details about new features and known issues for the Intel® oneAPI Intel-enhanced GDB*."
    },
    {
        title: "Intel® oneAPI Deep Neural Network Library Release Notes",
        id: "763685",
        date: "07/11/24",
        version: "2024.2.1 (latest)",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "Beta release notes of Intel® oneAPI Deep Neural Network Library (oneDNN) for DPC++."
    },
    {
        title: "Debugging with Intel® Distribution for GDB* on Linux* OS Host",
        id: "766459",
        date: "06/27/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (254 KB)",
        content: "Tutorials",
        description: "Go through the basic debugging scenario for SYCL applications."
    },
    {
        title: "Debugging with Intel® Distribution for GDB* on Windows* OS Host",
        id: "766461",
        date: "06/27/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (1.57 MB)",
        content: "Tutorials",
        description: "Go through the basic debugging scenario for SYCL applications."
    },
    {
        title: "Get Started with Intel® Distribution for GDB* on Linux* OS Host",
        id: "766463",
        date: "06/27/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: " URL (376 KB)",
        content: "Getting Started Guides",
        description: "Set up Intel® Distribution for GDB* to debug SYCL applications."
    },
    {
        title: "Get Started with Intel® Distribution for GDB* on Windows* OS Host",
        id: "766465",
        date: "06/27/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (1.35 MB)",
        content: "Getting Started Guides",
        description: "Set up Intel® Distribution for GDB* to debug SYCL applications."
    },
    {
        title: "Intel® oneAPI DPC++/C++ Compiler System Requirements",
        id: "768757",
        date: "06/24/24",
        version: "2024.2",
        download: false,
        bookmark: false,
        file: "URL",
        content: "System Requirements",
        description: "Intel® oneAPI System Requirements details about hardware, operating system, and software prerequisites for the Intel® oneAPI DPC++ Compiler and Library"
    },
    {
        title: "Intel® Distribution for Python* Release Notes and New Features",
        id: "763681",
        date: "06/24/24",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "This page provides the current Release Notes for the Intel® Distribution for Python*. The notes are categorized by year, from"
    },
]


let oneapi_data = oneAPI_toolkit_documantation_data;

// display data
function VK_intel_oneapi_toolkit() {

    const div = document.getElementById('VK_oneapi_toolkit');

    // result count 
    if (document.getElementById('VK_intel_oneapi_cnt1')) {
        document.getElementById('VK_intel_oneapi_cnt1').innerHTML = oneapi_data.length + " results";
    }


    // display accoridan
    if (div) {

        const htmlele = oneapi_data.map((ele, ind) => {
            const uniqueID = `flush-collapse-${ind}`;
            const uniqueHeadingID = `flush-heading-${ind}`;

            const versionDisplay = Array.isArray(ele.version)
                ? `<select class="py-2 pe-xl-4 pe-5">${ele.version.map(v => `<option value="${v}">${v}</option>`).join('')}</select>`
                : ele.version;

            return `
            <div class="accordion-item">
                <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                    <div class="col-xxl-7 col-xl-6 col-12 align-self-center">
                        <p class="m-xl-0 mb-4">
                            <a href="#" class="VK_red_normal_font text-decoration-none VK_a">
                                ${ele.title}
                            </a>
                        </p>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-12 p-0 text-xl-center d-flex flex-column flex-xl-row justify-content-between align-items-center">
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Date :</b></span> ${ele.date}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Version: </b></span>
                            ${versionDisplay}
                        </p>
                    </div>
                    <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                        <p class="d-flex m-0 justify-content-xl-between justify-content-end">
                            ${ele.download ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-solid fa-download"></i>
                                </button>
                            ` : ''}
                            ${ele.bookmark ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-regular fa-bookmark"></i>
                                </button>
                            ` : ''}
                            <button class="accordion-button collapsed mx-2 m-xl-0" type="button"
                                data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                                aria-expanded="false" aria-controls="${uniqueID}">
                            </button>
                        </p>
                    </div>
                </div>
                <div id="${uniqueID}" class="accordion-collapse collapse"
                    aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="m-0">
                            <span class="d-inline-block mx-2">
                                <b>File:</b>
                                <span>${ele.file}</span>
                            </span>
                            <span class="d-inline-block mx-2">
                                <b>Content Type :</b>
                                <span>${ele.content}</span>
                            </span>
                        </p>
                        <p class="m-0">${ele.description}</p>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = htmlele.join('');

        const accordionButtons = div.querySelectorAll('.accordion-button');
        accordionButtons.forEach(button => {
            const collapseElement = document.querySelector(button.getAttribute('data-bs-target'));
            const collapseInstance = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });

            button.addEventListener('click', function () {
                collapseInstance.toggle();
            });
        });
    } else {
        return;
    }
}

// data sort by
function VK_oneapi_data_softby() {
    let sort_by = document.getElementById('VK_oneapi_data_sortby').value;
    if (sort_by == 'A-Z') {
        oneapi_data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort_by == 'Z-A') {
        oneapi_data.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort_by == 'Content Type') {
        oneapi_data.sort((a, b) => a.content.localeCompare(b.content));
    }
    VK_intel_oneapi_toolkit();
}

// data searchbox
function VK_oneapi_data_search_box() {
    let search_txt = document.getElementById('VK_oneapi_toolkit_search_bar').value;
    oneapi_data = oneAPI_toolkit_documantation_data.filter((ele) => {
        return ele.title.toLowerCase().includes(search_txt.toLowerCase()) || ele.content.toLowerCase().includes(search_txt.toLowerCase())
    })
    VK_intel_oneapi_toolkit();
}

// clear all 
function VK_oneapi_clear_All() {
    oneapi_data = oneAPI_toolkit_documantation_data;

    VK_intel_oneapi_toolkit();

    VK_oneAPI_content_type_checkbox()

    VK_oneapi_software_checkbox();
}


// content type checkbox
let api_content_type_arr = [
    "Code Samples",
    "Cookbooks",
    "Development Guides",
    "Development Reference Guides",
    "Development User Guides",
    "Getting Started Guides",
    "How-To Training",
    "Installation Guides",
    "Release Notes",
    "System Requirements",
    "Technical Articles",
    "Training and Learning",
    "Tutorials"
];

let api_content_arr = api_content_type_arr

// display content type checkbox
function VK_oneAPI_content_type_checkbox() {
    if (document.getElementById('VK_oneapi_toolkit_checkbox')) {
        let html = api_content_arr.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_oneapi_content_checkbox" onclick="VK_oneapi_content_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (api_content_arr.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_oneapi_toolkit_showmore()" id="VK_toolkit_content_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_oneapi_toolkit_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// content type checkbox show more or less
function VK_oneapi_toolkit_showmore() {
    let showMoreButton = document.getElementById('VK_toolkit_content_show_more');
    let hiddenItems = document.querySelectorAll('#VK_oneapi_toolkit_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_oneapi_toolkit_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}

// search box
function VK_oneapi_content_search() {
    let srch = document.getElementById('VK_onepai_content_search').value
    let arr = api_content_type_arr.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    api_content_arr = arr
    VK_oneAPI_content_type_checkbox()
}

// orderby
function VK_content_order_By() {
    let orderby = document.getElementById('VK_content_type_sort').value
    if (orderby == 'A-Z') {
        api_content_arr.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        api_content_arr.sort((a, b) => b.localeCompare(a))
    }
    VK_oneAPI_content_type_checkbox()
}

// checkbox event
function VK_oneapi_content_type() {
    let checkboxes = document.querySelectorAll('.VK_oneapi_content_checkbox');
    let checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (checkedBoxes.length === 0) {
        oneapi_data = oneAPI_toolkit_documantation_data;
    } else {
        let selectedContentTypes = checkedBoxes.map(checkbox => checkbox.value.toLowerCase());
        oneapi_data = oneAPI_toolkit_documantation_data.filter(item => {
            return selectedContentTypes.includes(item.content.toLowerCase());
        });
    }

    VK_intel_oneapi_toolkit();
}



// software data checkbox
var VK_oneapi_software_data = [
    "AI Tools",
    "GNU* Debugger",
    "Intel® Advisor",
    "Intel® C++ Compiler",
    "Intel® Distribution for Python*",
    "Intel® DPC++ Compatibility Tool",
    "Intel® Extension for Scikit_learn*",
    "Intel® Fortran Compiler",
    "Intel® FPGA Add-On for oneAPI Base Toolkit",
    "Intel® HPC Toolkit",
    "Intel® Integrated Performance Primitives",
    "Intel® IoT Toolkit",
    "Intel® oneAPI Base Toolkit",
    "Intel® oneAPI Collective Communications Library",
    "Intel® oneAPI Data Analytics Library",
    "Intel® oneAPI Deep Neural Network Library",
    "Intel® oneAPI DL Framework Developer Toolkit",
    "Intel® oneAPI DPC++ C++ Compiler",
    "Intel® oneAPI DPC++ Library",
    "Intel® oneAPI Math Kernel Library",
    "Intel® oneAPI Threading Building Blocks",
    "Intel® Parallel Studio XE",
    "Intel® Rendering Toolkit",
    "Intel® Video Processing Library",
    "Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)"
]

var VK_api_software = VK_oneapi_software_data

// software checkboxs
function VK_oneapi_software_checkbox() {
    if (document.getElementById('VK_oneapi_toolkit_software_checkbox')) {
        let html = VK_api_software.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 w-100 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_oneapi_software_checkbox w-auto" onclick="VK_oneapi_software_type()">
            <span class="w-auto d-inline-block">${ele}</span>
        </div>
        `;
        }).join(' ');

        if (api_content_arr.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_oneapi_toolkit_software_showmore()" id="VK_toolkit_software_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_oneapi_toolkit_software_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// content type checkbox show more or less
function VK_oneapi_toolkit_software_showmore() {
    let showMoreButton = document.getElementById('VK_toolkit_software_show_more');
    let hiddenItems = document.querySelectorAll('#VK_oneapi_toolkit_software_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_oneapi_toolkit_software_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}

// orderby
function VK_software_order_By() {
    let orderby = document.getElementById('VK_oneapi_software_filters').value
    if (orderby == 'A-Z') {
        VK_api_software.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_api_software.sort((a, b) => b.localeCompare(a))
    }
    VK_oneapi_software_checkbox()
}

// software search
function VK_oneapi_software_search() {
    let srch = document.getElementById('VK_onepai_software_search').value
    let arr = VK_oneapi_software_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_api_software = arr
    VK_oneapi_software_checkbox()
}


// expand all 
function VK_expand_All(id) {
    let ele = document.querySelectorAll(`#${id} .accordion-collapse`)
    ele.forEach(el => {
        let acc = new bootstrap.Collapse(el, {
            toggle: false
        })
        acc.show();
    })
}

// collapse all
function VK_collapese_All(id) {
    let accoridan = document.querySelectorAll(`#${id} .accordion-collapse`)
    accoridan.forEach(el => {
        let acco = new bootstrap.Collapse(el, {
            toggle: false
        })
        acco.hide();
    })
}


// ------------------------------------------------- hpc toolkit documantation ---------------------------------------------------

// data
let hpc_toolkit_data = [
    {
        title: "Intel® oneAPI DPC++/C++ Compiler Release Notes",
        id: "768207",
        date: "07/26/24",
        version: "2024.2.1",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "Intel oneAPI DPC++/C++ compiler release notes."
    },
    {
        title: "oneAPI GPU Optimization Guide",
        id: "771772",
        date: "07/18/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: " URL (7.16 MB)",
        content: "Development Guides",
        description: "Programming oneAPI projects to maximize hardware abilities."
    },
    {
        title: "Intel® MPI Library System Requirements",
        id: "690041",
        date: "06/25/24",
        version: "2021.13",
        download: false,
        bookmark: false,
        file: "URL",
        content: "System Requirements",
        description: "System Requirements for Intel® MPI Library"
    },
    {
        title: "Intel® Fortran Compiler for oneAPI System Requirements",
        id: "765569",
        date: "06/24/24",
        version: "2024.2.0",
        download: false,
        bookmark: false,
        file: "URL",
        content: "System Requirements",
        description: "This document provides details about hardware, operating system, and software prerequisites for the Intel® Fortran compiler for oneAPI."
    },
    {
        title: "Intel® MPI Library Developer Guide for Linux* OS",
        id: "768728",
        date: "06/24/24",
        version: [
            "2021.13",
            "2021.12",
            "2021.11",
            "2021.10",
            "2021.6"
        ],
        download: true,
        bookmark: true,
        file: "URL (346 KB)",
        content: "Development Guides",
        description: "This Developer Guide contains instructions for running, debugging, and tuning the Intel® MPI Library."
    },
    {
        title: "Intel® Fortran Compiler Classic and Intel® Fortran Compiler Developer Guide and Reference",
        id: "767251",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (12.6 MB)",
        content: "Development Reference Guides",
        description: "Developer guide and reference for users of the Intel® Fortran Compiler Classic and Intel® Fortran Compiler"
    },
    {
        title: "Intel® MPI Library Developer Guide for Windows* OS",
        id: "768730",
        date: "06/24/24",
        version: [
            "2021.13",
            "2021.12",
            "2021.11",
            "2021.10",
            "2021.9",
            "2021.6"
        ],
        download: true,
        bookmark: true,
        file: "URL (259 KB)",
        content: "Development Guides",
        description: "This Developer Guide contains instructions for running, debugging, and tuning the Intel® MPI Library."
    },
    {
        title: "Intel® MPI Library Developer Reference for Windows* OS",
        id: "768734",
        date: "06/24/24",
        version: [
            "2021.13",
            "2021.12",
            "2021.11",
            "2021.10",
            "2021.9",
            "2021.8"
        ],
        download: true,
        bookmark: true,
        file: "URL (259 KB)",
        content: "Development Guides",
        description: "This Developer Guide contains instructions for running, debugging, and tuning the Intel® MPI Library."
    },
    {
        title: "Intel® MPI Library Developer Reference for Linux* OS",
        id: "768732",
        date: "06/24/24",
        version: [
            "2021.13",
            "2021.12",
            "2021.11",
            "2021.10",
            "2021.9",
            "2021.8"
        ],
        download: true,
        bookmark: true,
        file: "URL (935 KB)",
        content: "Development Reference Guides",
        description: "This Developer Reference provides you with the complete reference for the Intel(R) MPI Library."
    },
    {
        title: "Intel® oneAPI DPC++/C++ Compiler Developer Guide and Reference",
        id: "767253",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (3.84 MB)",
        content: "Development Reference Guides",
        description: "Developer guide and reference for users of the Intel® oneAPI DPC++/C++ Compiler."
    },
    {
        title: "Intel® oneAPI Programming Guide",
        id: "771723",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (1.40 MB)",
        content: "Development Guides",
        description: "Programming oneAPI projects to maximize hardware abilities."
    },
    {
        title: "Intel® Compilers compatibility with Microsoft Visual Studio* and...",
        id: "658720",
        date: "06/21/24",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Software Reference Implementations",
        description: "Intel compilers usually support the latest available update of Microsoft Visual Studio and Xcode*/macOS* available at the rel"
    },
    {
        title: "Intel® oneAPI HPC Toolkit Release Notes",
        id: "768266",
        date: "06/14/24",
        version: "2024.2.0",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "Release notes for Intel® oneAPI HPC Toolkit."
    },
    {
        title: "Intel® oneAPI HPC Toolkit Release Notes",
        id: "829871",
        date: "06/14/24",
        version: [
            "2024.2.0",
            "2022.3.1",
            "2021.4"
        ],
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "Release notes for Intel® oneAPI HPC Toolkit."
    },
    {
        title: "Intel® oneAPI HPC Toolkit Release Notes",
        id: "829871",
        date: "06/14/24",
        version: [
            "2024.2.0",
            "2022.3.1",
            "2021.4"
        ],
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "Release notes for Intel® oneAPI HPC Toolkit."
    },
]

var hpc_data = hpc_toolkit_data;

// display data
function VK_hpc_toolkit_display_accoridan() {

    const div = document.getElementById('VK_hpc_toolkit');

    // result count 
    if (document.getElementById('VK_intel_hpc_cnt1')) {
        document.getElementById('VK_intel_hpc_cnt1').innerHTML = hpc_data.length + " results";
    }


    // display accoridan
    if (div) {

        const htmlele = hpc_data.map((ele, ind) => {
            const uniqueID = `flush-collapse-${ind}`;
            const uniqueHeadingID = `flush-heading-${ind}`;

            const versionDisplay = Array.isArray(ele.version)
                ? `<select class="py-2 pe-xl-4 pe-5">${ele.version.map(v => `<option value="${v}">${v}</option>`).join('')}</select>`
                : ele.version;

            return `
            <div class="accordion-item">
                <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                    <div class="col-xxl-7 col-xl-6 col-12 align-self-center">
                        <p class="m-xl-0 mb-4">
                            <a href="#" class="VK_red_normal_font text-decoration-none VK_a">
                                ${ele.title}
                            </a>
                        </p>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-12 p-0 text-xl-center d-flex flex-column flex-xl-row justify-content-between align-items-center">
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Date :</b></span> ${ele.date}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Version: </b></span>
                            ${versionDisplay}
                        </p>
                    </div>
                    <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                        <p class="d-flex m-0 justify-content-xl-between justify-content-end">
                            ${ele.download ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-solid fa-download"></i>
                                </button>
                            ` : ''}
                            ${ele.bookmark ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-regular fa-bookmark"></i>
                                </button>
                            ` : ''}
                            <button class="accordion-button collapsed mx-2 m-xl-0" type="button"
                                data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                                aria-expanded="false" aria-controls="${uniqueID}">
                            </button>
                        </p>
                    </div>
                </div>
                <div id="${uniqueID}" class="accordion-collapse collapse"
                    aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="m-0">
                            <span class="d-inline-block mx-2">
                                <b>File:</b>
                                <span>${ele.file}</span>
                            </span>
                            <span class="d-inline-block mx-2">
                                <b>Content Type :</b>
                                <span>${ele.content}</span>
                            </span>
                        </p>
                        <p class="m-0 my-2">${ele.description}</p>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = htmlele.join('');

        const accordionButtons = div.querySelectorAll('.accordion-button');
        accordionButtons.forEach(button => {
            const collapseElement = document.querySelector(button.getAttribute('data-bs-target'));
            const collapseInstance = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });

            button.addEventListener('click', function () {
                collapseInstance.toggle();
            });
        });
    } else {
        return;
    }
}

// data sort by
function VK_hpc_data_softby() {
    let sort_by = document.getElementById('VK_hpc_data_sortby').value;
    if (sort_by == 'A-Z') {
        hpc_data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort_by == 'Z-A') {
        hpc_data.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort_by == 'Content Type') {
        hpc_data.sort((a, b) => a.content.localeCompare(b.content));
    }
    VK_hpc_toolkit_display_accoridan();
}

// data searchbox
function VK_hpc_data_search_box() {
    let search_txt = document.getElementById('VK_hpc_toolkit_search_bar').value;
    hpc_data = hpc_toolkit_data.filter((ele) => {
        return ele.title.toLowerCase().includes(search_txt.toLowerCase()) || ele.content.toLowerCase().includes(search_txt.toLowerCase())
    })
    VK_hpc_toolkit_display_accoridan();
}

// clear all 
function VK_hpc_clear_All() {
    hpc_data = hpc_toolkit_data;
    document.getElementById('VK_hpc_toolkit_search_bar').blur();
    document.getElementById('VK_hpc_toolkit_search_bar').value = '';

    VK_hpc_toolkit_display_accoridan();

    VK_hpc_content_type_checkbox()

    VK_hpc_software_checkbox();
}



// content type checkbox
var VK_hpc_content_data = [
    "Code Samples",
    "Design Reference",
    "Development Guides",
    "Development Reference Guides",
    "Development User Guides",
    "Getting Started Guides",
    "Installation Guides",
    "Release Notes",
    "Software Reference Implementations",
    "System Requirements",
    "Technical Articles",
    "Tutorials"
]

var VK_hpc_content_arr = VK_hpc_content_data

// display content type checkbox
function VK_hpc_content_type_checkbox() {
    if (document.getElementById('VK_hpc_toolkit_checkbox')) {
        let html = VK_hpc_content_arr.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_overflow_checkbox VK_hpc_content_checkbox" onclick="VK_hpc_content_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_hpc_content_arr.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_hpc_toolkit_showmore()" id="VK_toolkit_content_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_hpc_toolkit_checkbox').innerHTML = html;
    } else {
        return;
    }
}


// content type checkbox show more or less
function VK_hpc_toolkit_showmore() {
    let showMoreButton = document.getElementById('VK_toolkit_content_show_more');
    let hiddenItems = document.querySelectorAll('#VK_hpc_toolkit_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_hpc_toolkit_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}


// search box
function VK_hpc_content_search() {
    let srch = document.getElementById('VK_hpc_content_search').value
    let arr = VK_hpc_content_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_hpc_content_arr = arr
    VK_hpc_content_type_checkbox()
}

// orderby
function VK_content_order_By() {
    let orderby = document.getElementById('VK_hpc_content_type_sort').value
    if (orderby == 'A-Z') {
        VK_hpc_content_arr.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_hpc_content_arr.sort((a, b) => b.localeCompare(a))
    }
    VK_hpc_content_type_checkbox()
}


// checkbox event
function VK_hpc_content_type() {
    let checkboxes = document.querySelectorAll('.VK_hpc_content_checkbox');
    let checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (checkedBoxes.length === 0) {
        hpc_data = hpc_toolkit_data;
    } else {
        let selectedContentTypes = checkedBoxes.map(checkbox => checkbox.value.toLowerCase());
        hpc_data = hpc_toolkit_data.filter(item => {
            return selectedContentTypes.includes(item.content.toLowerCase());
        });
    }
    VK_hpc_toolkit_display_accoridan();
}




// software type checkox
var VK_hpc_software_checkbox_data = [
    "AI Tools",
    "Compilers",
    "Development Tools",
    "Intel® Advisor",
    "Intel® C++ Compiler",
    "Intel® Cluster Checker",
    "Intel® DPC++ Compatibility Tool",
    "Intel® Fortran Compiler",
    "Intel® HPC Toolkit",
    "Intel® Inspector",
    "Intel® IoT Toolkit",
    "Intel® MPI Library",
    "Intel® oneAPI Base Toolkit",
    "Intel® oneAPI DL Framework Developer Toolkit",
    "Intel® oneAPI DPC++ C++ Compiler",
    "Intel® oneAPI Math Kernel Library",
    "Intel® Parallel Studio XE",
    "Intel® Parallel Studio XE Cluster Edition",
    "Intel® Rendering Toolkit",
    "Intel® System Bring-Up Toolkit",
    "Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)"
]


var VK_hpc_software_arr = VK_hpc_software_checkbox_data

// software checkboxs
function VK_hpc_software_checkbox() {
    if (document.getElementById('VK_hpc_toolkit_software_checkbox')) {
        let html = VK_hpc_software_arr.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 w-100 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_hpc_software_checkbox VK_overflow_checkbox w-auto" onclick="VK_hpc_software_type()">
            <span class="w-auto d-inline-block">${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_hpc_software_arr.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_hpc_toolkit_software_showmore()" id="VK_toolkit_software_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_hpc_toolkit_software_checkbox').innerHTML = html;
    } else {
        return;
    }
}


// content type checkbox show more or less
function VK_hpc_toolkit_software_showmore() {
    let showMoreButton = document.getElementById('VK_toolkit_software_show_more');
    let hiddenItems = document.querySelectorAll('#VK_hpc_toolkit_software_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_hpc_toolkit_software_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}


// orderby
function VK_hpc_software_order_By() {
    let orderby = document.getElementById('VK_hpc_software_filters').value
    if (orderby == 'A-Z') {
        VK_hpc_software_arr.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_hpc_software_arr.sort((a, b) => b.localeCompare(a))
    }
    VK_hpc_software_checkbox()
}


// software search
function VK_hpc_software_search() {
    let srch = document.getElementById('VK_hpc_software_search').value
    let arr = VK_hpc_software_checkbox_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_hpc_software_arr = arr
    VK_hpc_software_checkbox()
}


// ---------------------------------------------------- intel hcp toolkit download ---------------------------------------------------------
function VK_hpc_btn(name) {
    if (document.getElementById('VK_download_btn_parent').classList.contains('d-none')) {
        document.getElementById('VK_download_btn_parent').classList.remove('d-none')
    }

    if (name == 'window') {

        let html = document.querySelectorAll('.VK_hpc_linux_installer_desc')
        html.forEach((it) => {
            it.classList.add('d-none')
        })
        document.getElementById('VK_installer').classList.remove('d-none')

        // button
        document.getElementById('VK_op_window_bt').classList.add('VK_op_active_btn')
        document.getElementById('VK_op_linux_bt').classList.remove('VK_op_active_btn')

        // packages 
        document.getElementById('VK_window_packages').classList.remove('d-none')
        document.getElementById('VK_linux_packages').classList.add('d-none')

        let el = document.querySelectorAll('#VK_linux_packages button')
        for (let i = 0; i < el.length; i++) {
            el[i].classList.remove('VK_op_active_btn')
        }

    } else if (name == 'linux') {

        let html = document.querySelectorAll('.VK_hpc_window_installer_desc')
        html.forEach((it) => {
            it.classList.add('d-none')
        })
        document.getElementById('VK_installer').classList.remove('d-none')

        // button
        document.getElementById('VK_op_window_bt').classList.remove('VK_op_active_btn')
        document.getElementById('VK_op_linux_bt').classList.add('VK_op_active_btn')

        // packages
        document.getElementById('VK_window_packages').classList.add('d-none')
        document.getElementById('VK_linux_packages').classList.remove('d-none')

        let el = document.querySelectorAll('#VK_window_packages button')
        for (let i = 0; i < el.length; i++) {
            el[i].classList.remove('VK_op_active_btn')
        }
    }
}

function VK_hpc_window_installer(id) {
    let ele = document.querySelectorAll('.VK_hpc_window_installer_btn')
    let html = document.querySelectorAll('.VK_hpc_window_installer_desc')
    document.getElementById('VK_installer').classList.add('d-none')
    html.forEach(itm => {
        itm.classList.add('d-none')
    })
    html[id].classList.remove('d-none')
    ele.forEach((e) => {
        e.classList.remove('VK_op_active_btn')
    })
    ele[id].classList.add('VK_op_active_btn')
}

function VK_hpc_linux_installer(id) {
    let ele = document.querySelectorAll('.VK_hpc_linux_installer_btn')
    let html = document.querySelectorAll('.VK_hpc_linux_installer_desc')
    document.getElementById('VK_installer').classList.add('d-none')
    html.forEach(itm => {
        itm.classList.add('d-none')
    })
    html[id].classList.remove('d-none')
    ele.forEach((e) => {
        e.classList.remove('VK_op_active_btn')
    })
    ele[id].classList.add('VK_op_active_btn')
}




// ----------------------------------------------- ai tools documantaiton -------------------------------------------------

var VK_ai_tools_dcoumantation_data = [
    {
        title: "Get Started with the AI Tools for Linux*",
        id: "766885",
        date: "08/11/24",
        version: [
            "2024.2",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.1"
        ],
        download: true,
        bookmark: true,
        file: "URL (132 KB)",
        content: "Getting Started Guides",
        description: "Build and run your first sample project using the AI Tools"
    },
    {
        title: "Intel® AI Tools Release Notes",
        id: "767619",
        date: "07/31/24",
        version: "2024.2.0",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "Release Notes for Intel® AI Tools."
    },
    {
        title: "oneAPI GPU Optimization Guide",
        id: "771772",
        date: "07/18/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: "URL (7.16 MB)",
        content: "Development Guides",
        description: "Programming oneAPI projects to maximize hardware abilities."
    },
    {
        title: "Intel® oneAPI Programming Guide",
        id: "771723",
        date: "06/24/24",
        version: [
            "2024.2",
            "2024.1",
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.0"
        ],
        download: true,
        bookmark: true,
        file: " URL (1.40 MB)",
        content: "Development Guides",
        description: "Programming oneAPI projects to maximize hardware abilities."
    },
    {
        title: "Intel® AI Tools System Requirements",
        id: "678721",
        date: "03/15/24",
        version: "2024.1",
        download: false,
        bookmark: false,
        file: "URL",
        content: "System Requirements",
        description: "System requirements listing for Intel® AI Tools."
    },
    {
        title: "Get Started With Intel® Distribution for Python*",
        id: "768369",
        date: "11/07/23",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Getting Started Guides",
        description: "Intel® Distribution for Python* is a cluster of pacakeges includes Numba, NumPy and more. All these pacakeges are optimized via oneMKL and oneDAL to make your python application more efficient."
    },
    {
        title: "Get Started with the Intel® AI Tools for Windows*",
        id: "766879",
        date: "11/07/23",
        version: [
            "2024.0",
            "2023.2",
            "2023.1",
            "2023.1"
        ],
        download: true,
        bookmark: true,
        file: "URL (105 KB)",
        content: "Getting Started Guides",
        description: "Build and run your first sample project using the Intel® AI Tools"
    },
    {
        title: "Installation Guide for Intel® oneAPI Toolkits",
        id: "671998",
        date: "07/17/23",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Installation Guides",
        description: "This document contains the instructions to download and install Intel® oneAPI Toolkits for both Windows* and Linux*."
    },
    {
        title: "Code Sample: Intel® Neural Compressor Examples",
        id: "777051",
        date: "04/19/23",
        version: "Original",
        download: false,
        bookmark: true,
        file: "URL",
        content: "Code Samples",
        description: "Intel® Neural Compressor validated examples with multiple compression techniques, including quantization, pruning, knowledge distillation and orchestration."
    },
    {
        title: "Intel® Neural Compressor API Documentation",
        id: "777042",
        date: "04/19/23",
        version: "Original",
        download: false,
        bookmark: true,
        file: "URL",
        content: "API Reference Manuals",
        description: "API Documentation on GitHub* for Intel® Neural Compressor"
    },
    {
        title: "Intel® Neural Compressor Installation Guide",
        id: "777041",
        date: "04/19/23",
        version: "Original",
        download: false,
        bookmark: true,
        file: "URL",
        content: "Installation Guides",
        description: "Installation Guide for Intel® Neural Compressor"
    },
    {
        title: "Intel® Neural Compressor System Requirements",
        id: "777033",
        date: "04/19/23",
        version: "Original",
        download: false,
        bookmark: true,
        file: "URL",
        content: "System Requirements",
        description: "System Requirements for Intel® Neural Compressor"
    },
    {
        title: "Intel® Neural Compressor Release Notes",
        id: "777030",
        date: "04/19/23",
        version: "2.1",
        download: false,
        bookmark: true,
        file: "URL",
        content: "Release Notes",
        description: "Release Notes on GitHub* for Intel® Neural Compressor"
    },
    {
        title: "Code Sample: Tutorials on numba-dppy",
        id: "710077",
        date: "03/04/23",
        version: "2.0",
        download: false,
        bookmark: true,
        file: "URL",
        content: "Code Samples",
        description: "Get training on the essentials of the numby-dppy extension using a Jupyter* notebook."
    },
    {
        title: "Code Sample: Get Started with Training Multinodes Using Intel® Extension for PyTorch* and Intel® Collective Communications Library",
        id: "669999",
        date: "03/03/23",
        version: "2.0",
        download: false,
        bookmark: true,
        file: "URL",
        content: "Code Samples",
        description: "Learn how to scale deep-learning training for multinodes using bindings."
    },
]

var VK_ai_tools_data = VK_ai_tools_dcoumantation_data

// display data
function VK_ai_tools_documantaion() {
    const div = document.getElementById('VK_ai_tools_docx');

    // result count 
    if (document.getElementById('VK_intel_ai_tools_cnt1')) {
        document.getElementById('VK_intel_ai_tools_cnt1').innerHTML = VK_ai_tools_data.length + " results";
    }


    // display accoridan
    if (div) {

        const htmlele = VK_ai_tools_data.map((ele, ind) => {
            const uniqueID = `flush-collapse-${ind}`;
            const uniqueHeadingID = `flush-heading-${ind}`;

            const versionDisplay = Array.isArray(ele.version)
                ? `<select class="py-2 pe-xl-4 pe-5">${ele.version.map(v => `<option value="${v}">${v}</option>`).join('')}</select>`
                : ele.version;

            return `
            <div class="accordion-item">
                <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                    <div class="col-xxl-7 col-xl-6 col-12 align-self-center">
                        <p class="m-xl-0 mb-4">
                            <a href="#" class="VK_red_normal_font text-decoration-none VK_a">
                                ${ele.title}
                            </a>
                        </p>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-12 p-0 text-xl-center d-flex flex-column flex-xl-row justify-content-between align-items-center">
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Date :</b></span> ${ele.date}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Version: </b></span>
                            ${versionDisplay}
                        </p>
                    </div>
                    <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                        <p class="d-flex m-0 justify-content-xl-between justify-content-end">
                            ${ele.download ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-solid fa-download"></i>
                                </button>
                            ` : ''}
                            ${ele.bookmark ? `
                                <button class="bg-transparent border-0 text-primary mx-2 m-xl-0">
                                    <i class="fa-regular fa-bookmark"></i>
                                </button>
                            ` : ''}
                            <button class="accordion-button collapsed mx-2 m-xl-0" type="button"
                                data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                                aria-expanded="false" aria-controls="${uniqueID}">
                            </button>
                        </p>
                    </div>
                </div>
                <div id="${uniqueID}" class="accordion-collapse collapse"
                    aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="m-0">
                            <span class="d-inline-block mx-2">
                                <b>File:</b>
                                <span>${ele.file}</span>
                            </span>
                            <span class="d-inline-block mx-2">
                                <b>Content Type :</b>
                                <span>${ele.content}</span>
                            </span>
                        </p>
                        <p class="m-0 my-2">${ele.description}</p>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = htmlele.join('');

        const accordionButtons = div.querySelectorAll('.accordion-button');
        accordionButtons.forEach(button => {
            const collapseElement = document.querySelector(button.getAttribute('data-bs-target'));
            const collapseInstance = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });

            button.addEventListener('click', function () {
                collapseInstance.toggle();
            });
        });
    } else {
        return;
    }
}

// data sort by
function VK_ai_tools_data_softby() {
    let sort_by = document.getElementById('VK_ai_tools_data_sortby').value;
    if (sort_by == 'A-Z') {
        VK_ai_tools_data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort_by == 'Z-A') {
        VK_ai_tools_data.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort_by == 'Content Type') {
        VK_ai_tools_data.sort((a, b) => a.content.localeCompare(b.content));
    }
    VK_ai_tools_documantaion();
}

// data searchbox
function VK_ai_tools_data_search() {
    let search_txt = document.getElementById('VK_ai_tool_search_bar').value;
    VK_ai_tools_data = VK_ai_tools_dcoumantation_data.filter((ele) => {
        return ele.title.toLowerCase().includes(search_txt.toLowerCase()) || ele.content.toLowerCase().includes(search_txt.toLowerCase())
    })
    VK_ai_tools_documantaion();
}

// clear all 
function VK_ai_tools_clear_All() {
    VK_ai_tools_data = VK_ai_tools_dcoumantation_data;
    document.getElementById('VK_ai_tool_search_bar').blur();
    document.getElementById('VK_ai_tool_search_bar').value = '';

    VK_ai_tools_documantaion();

    VK_ai_tools_content_checkbox()

    VK_ai_software_checkbox();
}




// content type checkbox
var VK_ai_tools_content_data = [
    "API Reference Manuals",
    "Code Samples",
    "Development Guides",
    "Getting Started Guides",
    "Installation Guides",
    "Release Notes",
    "System Requirements",
    "Tuning and Optimization Guides"
]

var VK_ai_tools_content = VK_ai_tools_content_data

// display content type checkbox
function VK_ai_tools_content_checkbox() {
    if (document.getElementById('VK_api_tools_checkbox')) {
        let html = VK_ai_tools_content.map((ele, ind) => {
            return `
        <div class="${ind > 9 ? "d-none" : ""} my-1 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_ai_content_chkbox VK_overflow_checkbox" onclick="VK_ai_content_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_ai_tools_content.length > 9) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_ai_tools_showmore()" id="VK_toolkit_content_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_api_tools_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// checkbox search box
function VK_ai_content_search() {
    let srch = document.getElementById('VK_ai_content_search').value
    let arr = VK_ai_tools_content_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_ai_tools_content = arr
    VK_ai_tools_content_checkbox()
}

// checkbox orderby
function VK_ai_content_order_By() {
    let orderby = document.getElementById('VK_ai_content_type_sort').value
    if (orderby == 'A-Z') {
        VK_ai_tools_content.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_ai_tools_content.sort((a, b) => b.localeCompare(a))
    }
    VK_ai_tools_content_checkbox()
}

// checkbox event
function VK_ai_content_type() {
    let checkboxes = document.querySelectorAll('.VK_ai_content_chkbox');
    let checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (checkedBoxes.length === 0) {
        VK_ai_tools_data = VK_ai_tools_dcoumantation_data;
    } else {
        let selectedContentTypes = checkedBoxes.map(checkbox => checkbox.value.toLowerCase());
        VK_ai_tools_data = VK_ai_tools_dcoumantation_data.filter(item => {
            return selectedContentTypes.includes(item.content.toLowerCase());
        });
    }
    VK_ai_tools_documantaion();
}


// ai tools software checkbox
var ai_tools_software_checkbox = [
    "AI Tools",
    "Intel® Advisor",
    "Intel® C++ Compiler",
    "Intel® Distribution for Python*",
    "Intel® Distribution of Modin*",
    "Intel® DPC++ Compatibility Tool",
    "Intel® Extension for Scikit_learn*",
    "Intel® HPC Toolkit",
    "Intel® IoT Toolkit",
    "Intel® Neural Compressor",
    "Intel® oneAPI Base Toolkit",
    "Intel® oneAPI Data Analytics Library",
    "Intel® oneAPI Deep Neural Network Library",
    "Intel® oneAPI DL Framework Developer Toolkit",
    "Intel® oneAPI DPC++ C++ Compiler",
    "Intel® oneAPI DPC++ Library",
    "Intel® oneAPI Math Kernel Library",
    "Intel® Optimization for PyTorch*",
    "Intel® Optimization for TensorFlow*",
    "Intel® Optimization for XGBoost*",
    "Intel® Rendering Toolkit",
    "Intel® System Bring-Up Toolkit",
    "Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)"
]

var ai_tools_software = ai_tools_software_checkbox

// software checkboxs
function VK_ai_software_checkbox() {
    if (document.getElementById('VK_ai_toolkit_software_checkbox')) {
        let html = ai_tools_software.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 w-100 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_ai_software_checkbox VK_overflow_checkbox w-auto" onclick="VK_ai_software_type()">
            <span class="w-auto d-inline-block">${ele}</span>
        </div>
        `;
        }).join(' ');

        if (ai_tools_software.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_ai_software_showmore()" id="VK_toolkit_software_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_ai_toolkit_software_checkbox').innerHTML = html;
    } else {
        return;
    }
}


// content type checkbox show more or less
function VK_ai_software_showmore() {
    let showMoreButton = document.getElementById('VK_toolkit_software_show_more');
    let hiddenItems = document.querySelectorAll('#VK_ai_toolkit_software_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_ai_toolkit_software_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}


// checkbox orderby
function VK_ai_software_order_By() {
    let orderby = document.getElementById('VK_ai_software_filters').value
    if (orderby == 'A-Z') {
        ai_tools_software_checkbox.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        ai_tools_software_checkbox.sort((a, b) => b.localeCompare(a))
    }
    VK_ai_software_checkbox()
}

// software checkbox search
function VK_ai_software_search() {
    let srch = document.getElementById('VK_ai_software_search').value
    let arr = ai_tools_software_checkbox.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    ai_tools_software = arr
    VK_ai_software_checkbox()
}










// --------------------------------------------------- Explore Training for oneAPI -----------------------------------

let VK_training_oneapi_data = [
    {
        image: "VK_59.jpg",
        title: "Intel® OSPRay Essentials",
        date: "09/03/24",
        contentType: "On-Demand Training",
        description: "Learn the basics of Intel oneAPI, Intel® Rendering Toolkit, and Intel® OSPRay, an industry-leading, ray tracing rendering library.",
        bookmark: false,
        download: false
    },
    {
        image: "VK_60.png",
        title: "Code Sample: Two-Dimensional Finite-Difference Wave Propagation in...",
        date: "08/12/24",
        contentType: "Code Samples",
        description: "Intel® oneAPI DPC++ Compiler Example-Basic structures of the language:Two-Dimensional Finite-Difference Wave Propagation in Isotropic Media (ISO2DFD)",
        bookmark: false,
        download: false
    },
    {
        image: "VK_61.svg",
        title: "Get Started with the AI Tools for Linux*",
        date: "08/11/24",
        contentType: "Getting Started Guides",
        description: "Build and run your first sample project using the AI Tools",
        bookmark: true,
        download: true
    },
    {
        image: "VK_61.svg",
        title: "Debugging with Intel® Distribution for GDB* on Linux* OS Host",
        date: "06/27/24",
        contentType: "Tutorials",
        description: "Go through the basic debugging scenario for SYCL applications.",
        bookmark: true,
        download: true
    },
    {
        image: "VK_61.svg",
        title: "Debugging with Intel® Distribution for GDB* on Windows* OS Host",
        date: "06/27/24",
        contentType: "Tutorials",
        description: "Go through the basic debugging scenario for SYCL applications.",
        bookmark: true,
        download: true
    },
    {
        image: "VK_61.svg",
        title: "Cookbook",
        date: "06/24/24",
        contentType: "Cookbooks",
        description: "Follow tuning and configuration recipes to use analysis types in Intel® VTune™ Profiler. Analyze your code, identify ineffective algorithm and hardware usage, and get tuning advice on performance.",
        bookmark: true,
        download: true
    },
    {
        image: "VK_61.svg",
        title: "Performance Analysis Tutorial for Linux* OS",
        date: "06/24/24",
        contentType: "Tutorials",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Linux* OS environment).",
        bookmark: true,
        download: true
    },
    {
        image: "VK_61.svg",
        title: "Performance Analysis Tutorial for Windows* OS",
        date: "06/24/24",
        contentType: "Tutorials",
        description: "Follow this tutorial to identify and resolve common performance bottlenecks in a sample matrix multiplication application (Windows* OS environment).",
        bookmark: true,
        download: true
    },
    {
        image: "VK_61.svg",
        title: "Intel® oneAPI Deep Neural Network Developer Guide and Reference",
        date: "06/20/24",
        contentType: "Development Reference Guides",
        description: "For developers wanting to use the Intel® oneAPI Deep Neural Network Developer Guide and Reference.",
        bookmark: true,
        download: true
    },
    {
        image: "VK_59.jpg",
        title: "Essentials of SYCL",
        date: "05/31/24",
        contentType: "On-Demand Training",
        description: "Learn the essentials of SYCL* for use in heterogeneous computing through hand-on practice.",
        bookmark: false,
        download: false
    },
    {
        image: "VK_59.jpg",
        title: "Performance, Portability, and Productivity with oneAPI and DPC++",
        date: "05/30/24",
        contentType: "Tutorials",
        description: "Learn how to use oneAPI and Data Parallel C++ (DPC++) to build cross-platform, performant, portable code on Intel® Developer Cloud.",
        bookmark: false,
        download: false
    },
    {
        image: "VK_62.png",
        title: "Workflow for a CUDA* to SYCL* Migration using Jacobi sample code",
        date: "05/21/24",
        contentType: "Training and Learning",
        description: "Use Jacobi sample code to learn a basic workflow for how to migrate CUDA* applications to SYCL* and optimize kernels for Intel GPUs.",
        bookmark: false,
        download: false
    },
    {
        image: "VK_61.svg",
        title: "Get Started with the Intel® Rendering Toolkit for macOS*",
        date: "03/22/24",
        contentType: "Getting Started Guides",
        description: "Build and run your first sample project using the Intel® Rendering Toolkit for macOS*.",
        bookmark: true,
        download: true
    },
    {
        image: "VK_61.svg",
        title: "Get Started with the Intel® Rendering Toolkit for Linux*",
        date: "03/22/24",
        contentType: "Getting Started Guides",
        description: "Build and run your first sample project using the Intel® Rendering Toolkit for Linux* OS.",
        bookmark: true,
        download: true
    },
    {
        image: "VK_61.svg",
        title: "Get Started with the Intel® Rendering Toolkit for Windows*",
        date: "03/22/24",
        contentType: "Getting Started Guides",
        description: "Build and run your first sample project using the Intel® Rendering Toolkit for Windows*.",
        bookmark: true,
        download: true
    },
]

var VK_training_oneapi = VK_training_oneapi_data

function VK_api_training_card_display() {
    if (document.getElementById('VK_api_skill_display_card')) {

        document.getElementById('VK_api_training_cnt1').innerText = VK_training_oneapi.length + ' results'

        let div = document.getElementById('VK_api_skill_display_card');

        let html = VK_training_oneapi.map((ele) => {
            return `
                <div class="col-12 col-md-4 col-xxl-3 my-3">
                    <div class="bg-white px-3 h-100 d-flex flex-column">
                        <div class="VK_api_training_card_img">
                            <img src="/img/vivek/${ele.image}" class="w-100 h-100 pt-2 VK_object-cover" alt="">
                        </div>
                        <div class="d-flex flex-column flex-grow-1 mt-3 pb-3">
                            <p>
                                <a href="" class="VK_a text-decoration-none d-inline-block">
                                    ${ele.title}
                                </a>
                            </p>
                            <span class="d-inline-block">
                                <strong>Date:</strong> ${ele.date}
                            </span>
                            <span class="d-inline-block">
                                <strong>Content Type:</strong> ${ele.contentType}
                            </span>
                            <p class="mt-3">${ele.description}</p>
                            <div class="mt-auto text-end">
                                <span>
                                    ${ele.bookmark ? `<button class="VK_a border-0 bg-transparent mx-2">
                                        <i class="fa-regular fa-bookmark"></i>
                                    </button>` : ""}
                                    ${ele.download ? `<button class="VK_a border-0 bg-transparent mx-2">
                                        <i class="fa-solid fa-download"></i>
                                    </button>` : ""}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        div.innerHTML = html;
    } else {
        return;
    }
}


// api training sortby
function VK_api_training_sortby() {
    let sortby = document.getElementById('VK_api_training_data_sortby').value
    if (sortby == 'A-Z') {
        VK_training_oneapi_data.sort((a, b) => a.title.localeCompare(b.title))
    }
    else if (sortby == 'Z-A') {
        VK_training_oneapi_data.sort((a, b) => b.title.localeCompare(a.title))
    }
    else if (sortby == 'Content Type') {
        VK_training_oneapi_data.sort((a, b) => a.contentType.localeCompare(b.contentType))
    }
    VK_api_training_card_display();
}


// api training search box
function VK_api_training_data_search_box() {
    let search = document.getElementById('VK_api_training_search_bar').value
    let arr = VK_training_oneapi_data.filter((ele) => {
        return ele.title.toLowerCase().includes(search.toLowerCase())
    })
    console.log(arr);
    VK_training_oneapi = arr
    VK_api_training_card_display();
}



// software checkbox
var VK_api_taining_checkbox_data = [
    "AI Tools",
    "Development Tools",
    "GNU* Debugger (GDB)",
    "Intel® Advisor",
    "Intel® Distribution for Python*",
    "Intel® Distribution of Modin*",
    "Intel® Distribution of OpenVINO™ toolkit",
    "Intel® DPC++ Compatibility Tool",
    "Intel® Extension for Scikit_learn*",
    "Intel® Fortran Compiler",
    "Intel® FPGA Add-On for oneAPI Base Toolkit",
    "Intel® HPC Toolkit",
    "Intel® Inspector",
    "Intel® Integrated Performance Primitives",
    "Intel® IoT Toolkit",
    "Intel® MPI Library",
    "Intel® Neural Compressor",
    "Intel® oneAPI Base Toolkit",
    "Intel® oneAPI Collective Communications Library",
    "Intel® oneAPI Data Analytics Library",
    "Intel® oneAPI Deep Neural Network Library",
    "Intel® oneAPI DL Framework Developer Toolkit",
    "Intel® oneAPI DPC++ C++ Compiler",
    "Intel® oneAPI Math Kernel Library",
    "Intel® oneAPI Threading Building Blocks",
    "Intel® oneAPI Toolkits",
    "Intel® Open Image Denoise",
    "Intel® Optimization for PyTorch*",
    "Intel® Optimization for TensorFlow*",
    "Intel® Optimization for XGBoost*",
    "Intel® OSPRay",
    "Intel® Parallel Studio XE",
    "Intel® Rendering Toolkit",
    "Intel® System Bring-Up Toolkit",
    "Intel® Trace Analyzer and Collector",
    "Intel® Video Processing Library",
    "Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)"
]

var api_training_software = VK_api_taining_checkbox_data

// software checkboxes
function VK_api_training_software_checkbox() {
    if (document.getElementById('VK_api_training_software_checkbox')) {
        let html = api_training_software.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 w-100 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_api_training_software_checkbox VK_overflow_checkbox w-auto" onclick="VK_ai_software_type()">
            <span class="w-auto d-inline-block">${ele}</span>
        </div>
        `;
        }).join(' ');

        if (api_training_software.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_api_training_software_showmore()" id="VK_toolkit_software_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_api_training_software_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// software checkbox show more or less
function VK_api_training_software_showmore() {
    let showMoreButton = document.getElementById('VK_toolkit_software_show_more');
    let hiddenItems = document.querySelectorAll('#VK_api_training_software_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_api_training_software_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}

// checkbox search box
function VK_api_training_software_search() {
    let srch = document.getElementById('VK_api_training_software_search').value
    let arr = VK_api_taining_checkbox_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    api_training_software = arr
    VK_api_training_software_checkbox()
}

// checkbox orderby
function VK_api_software_order_By() {
    let orderby = document.getElementById('VK_api_software_sort').value
    if (orderby == 'A-Z') {
        VK_api_taining_checkbox_data.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_api_taining_checkbox_data.sort((a, b) => b.localeCompare(a))
    }
    VK_api_training_software_checkbox()
}


// programming language 
var VK_api_programming_checkbox_data = [
    "C C++",
    "C#",
    "CUDA*",
    "Data Parallel C++ (DPC++)",
    "Fortran",
    "Python*",
    "SYCL*"
]

var VK_api_programming_checkbox = VK_api_programming_checkbox_data


// programming language checkbox
function VK_api_training_programming_checkbox() {
    if (document.getElementById('VK_api_programming_checkbox')) {
        let html = VK_api_programming_checkbox.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 w-100 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_api_training_software_checkbox VK_overflow_checkbox w-auto" onclick="VK_ai_software_type()">
            <span class="w-auto d-inline-block">${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_api_programming_checkbox.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_api_training_software_showmore()" id="VK_toolkit_software_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_api_programming_checkbox').innerHTML = html;
    } else {
        return;
    }
}


// checkbox orderby
function VK_api_programming_sortby() {
    let orderby = document.getElementById('VK_api_programming_filters').value
    if (orderby == 'A-Z') {
        VK_api_programming_checkbox_data.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_api_programming_checkbox_data.sort((a, b) => b.localeCompare(a))
    }
    VK_api_training_programming_checkbox()
}


var VK_api_training_skill_checkbox_data = [
    "Advanced",
    "Beginner",
    "Intermediate"
]

var VK_api_training_skill_checkbox = VK_api_training_skill_checkbox_data

// skill checkbox
function VK_api_training_skill_checkboxes() {
    if (document.getElementById('VK_api_skill_checkbox')) {
        let html = VK_api_training_skill_checkbox.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 w-100 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_api_training_skill_checkbox VK_overflow_checkbox w-auto" onclick="VK_ai_software_type()">
            <span class="w-auto d-inline-block">${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_api_training_skill_checkbox.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_api_training_software_showmore()" id="VK_toolkit_software_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_api_skill_checkbox').innerHTML = html;
    } else {
        return;
    }
}


// checkbox orderby
function VK_api_skill_order_By() {
    let orderby = document.getElementById('VK_api_skills_filters').value
    if (orderby == 'A-Z') {
        VK_api_training_skill_checkbox_data.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_api_training_skill_checkbox_data.sort((a, b) => b.localeCompare(a))
    }
    VK_api_training_skill_checkboxes()
}




// ------------------------------------------------- Technical Library -----------------------------------------------

var VK_techical_library_data = [
    {
        title: "Case Study: Emotion Detection & Classification from Audio Samples",
        id: "771106",
        date: "09/10/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Tutorials",
        description: "Use a deep neural network to detect underlying emotions in recorded speech samples.",
        status: "Updated"
    },
    {
        title: "GeekBench Execution Environments and Optimization",
        id: "832658",
        date: "09/09/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Technical Articles",
        description: "A Deep Dive into GeekBench Execution Environments and Performance Optimization",
        status: "New"
    },
    {
        title: "Gaming Workloads in VMs through Guest Halt Polling",
        id: "832657",
        date: "09/09/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Technical Articles",
        description: "Enhancing Performance of Gaming Workloads in Virtual Machines through Guest Halt Polling Optimization",
        status: "New"
    },
    {
        title: "Optimization Guide for ChromeOS Libraries",
        id: "832654",
        date: "09/09/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Technical Articles",
        description: "Hardware Profile Guided Optimization Usage Guide for ChromeOS Libraries",
        status: "New"
    },
    {
        title: "Optimizing LLC for Steam Gaming on ChromeOS",
        id: "832650",
        date: "09/09/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Technical Articles",
        description: "Optimizing Last-Level Cache Allocation for Enhanced Steam Gaming Performance on ChromeOS",
        status: "New"
    },
    {
        title: "Optimizing Mining and Extraction Operations and Improving Ore Grade Management with NTWIST’s nVision POSOC Application",
        id: "832561",
        date: "09/09/24",
        version: "361291-001",
        bookmark: true,
        download: true,
        file: "pdf (1.65 MB)",
        content: "Use Cases",
        description: "NTWIST nVision Prediction of Oil Sands Ore Characteristics (POSOC) Application helps extraction and processing operators enhance productivity and quality control through real-time data-driven insights",
        status: "New"
    },
    {
        title: "The Gamma TITANUS EYEoT Solution Accelerates Smart Transformation of Transportation",
        id: "832529",
        date: "09/08/24",
        version: "1",
        bookmark: true,
        download: true,
        file: "pdf (3.53 MB)",
        content: "White Papers",
        description: "Gamma's TITANUS EYEoT smart transportation solution integrates algorithms such as number plate and vehicle recognition to efficiently analyze video in smart parking and traffic behavior situations.",
        status: "New"
    },
    {
        title: "Hummingbirds AI Guacamole",
        id: "832523",
        date: "09/08/24",
        version: "1",
        bookmark: true,
        download: true,
        file: "Partner Briefs",
        content: "Tutorials",
        description: "Using a suite of advanced vision AI algorithms, Guacamole processes webcam footage in real-time to support continuous re-authentication of users through facial biometrics.",
        status: "New"
    },
    {
        title: "Siena Analytics - Siena Insights Solution Brief",
        id: "832503",
        date: "09/07/24",
        version: "1",
        bookmark: true,
        download: true,
        file: "pdf (610 KB)",
        content: "Solution Briefs",
        description: "Improving and optimizing logistics for smarter utilization and understanding available space with Siena Analytics.",
        status: "New"
    },
    {
        title: "Top Tips and Tricks for LLM Fine-tuning and Inference",
        id: "830925",
        date: "09/07/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Technical Articles",
        description: "This guide provides top tips and tricks for LLM Fine-tuning and Inference",
        status: "Updated"
    },
    {
        title: "How to deploy AI applications on AI PCs",
        id: "830175",
        date: "09/07/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Technical Articles",
        description: "An Easy Guide to deploying AI Applications on AI PCs",
        status: "Updated"
    },
    {
        title: "Developer's Guide to Adapting to Enterprise AI",
        id: "832269",
        date: "09/07/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Technical Articles",
        description: "Developer's Guide to Adapting to Enterprise AI",
        status: "Updated"
    },
    {
        title: "Detect Dynamic Shapes",
        id: "832481",
        date: "09/06/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Technical Articles",
        description: "Tools can detect dynamic inputs and operations for dynamic shapes—model behaviors that affect how variable-output tensor shapes generate.",
        status: "New"
    },
    {
        title: "When You Have to Fork a Project: All About Valkey",
        id: "832417",
        date: "09/06/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Blogs",
        description: "AWS Engineer Madelyn Olson talks with Open at Intel host Katherine Druckman about the creation of Valkey, what’s next for the popular project, when to fork a project, and how to handle maintainer burn",
        status: "New"
    },
    {
        title: "Become a Certified Instructor",
        id: "817869",
        date: "09/06/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Instructor-Led Training",
        description: "Register for the Intel® Certified Instructor Program to access high-quality curriculum and the Intel® Tiber™ Developer Cloud.",
        status: "Updated"
    },
    {
        title: "Decoupling Non-Critical Workloads",
        id: "819066",
        date: "09/05/24",
        version: "Original",
        bookmark: false,
        download: false,
        file: "URL",
        content: "Technical Articles",
        description: "How to get more out of modern compute platforms by decoupling non-critical workloads.",
        status: "Updated"
    },
]

var VK_techical_data = VK_techical_library_data

// display data
function VK_technical_accoridan() {

    const div = document.getElementById('VK_technical_library');

    // result count 
    if (document.getElementById('VK_technical_library_cnt1')) {
        document.getElementById('VK_technical_library_cnt1').innerHTML = VK_techical_data.length + " results";
    }


    // display accoridan
    if (div) {

        const htmlele = VK_techical_data.map((ele, ind) => {
            const uniqueID = `flush-collapse-${ind}`;
            const uniqueHeadingID = `flush-heading-${ind}`;

            const versionDisplay = Array.isArray(ele.version)
                ? `<select class="py-2 pe-xl-4 pe-5">${ele.version.map(v => `<option value="${v}">${v}</option>`).join('')}</select>`
                : ele.version;

            return `
            <div class="accordion-item">
                <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                    <div class="col-xxl-7 col-xl-6 col-12 align-self-center">
                        <p class="m-xl-0 mb-4">
                            <a href="#" class="VK_red_normal_font text-decoration-none VK_a">
                                ${ele.title}
                            </a>
                        </p>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-12 p-0 text-xl-center d-flex flex-column flex-xl-row justify-content-between align-items-center">
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Date :</b></span> ${ele.date}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Version: </b></span>
                            ${versionDisplay}
                        </p>
                    </div>
                    <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                        <p class="d-flex m-0 justify-content-end justify-content-end">
                            ${ele.download ? `
                                <button class="bg-transparent border-0 text-primary px-2 mx-2 m-xl-0">
                                    <i class="fa-solid fa-download"></i>
                                </button>
                            ` : ''}
                            ${ele.bookmark ? `
                                <button class="bg-transparent border-0 text-primary px-2 mx-2 m-xl-0">
                                    <i class="fa-regular fa-bookmark"></i>
                                </button>
                            ` : ''}
                            <button class="accordion-button collapsed mx-2 m-xl-0 px-2" type="button"
                                data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                                aria-expanded="false" aria-controls="${uniqueID}">
                                <span>&nbsp;</span>
                            </button>
                        </p>
                    </div>
                </div>
                <div id="${uniqueID}" class="accordion-collapse collapse"
                    aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="m-0">
                            <span class="d-inline-block mx-2">
                                <b>File:</b>
                                <span>${ele.file}</span>
                            </span>
                            <span class="d-inline-block mx-2">
                                <b>Content Type :</b>
                                <span>${ele.content}</span>
                            </span>
                        </p>
                        <p class="m-0">${ele.description}</p>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = htmlele.join('');

        const accordionButtons = div.querySelectorAll('.accordion-button');
        accordionButtons.forEach(button => {
            const collapseElement = document.querySelector(button.getAttribute('data-bs-target'));
            const collapseInstance = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });

            button.addEventListener('click', function () {
                collapseInstance.toggle();
            });
        });
    } else {
        return;
    }
}

// data sort by
function VK_technical_data_softby() {
    let sort_by = document.getElementById('VK_technical_data_sortby').value;
    if (sort_by == 'A-Z') {
        VK_techical_data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort_by == 'Z-A') {
        VK_techical_data.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort_by == 'Content Type') {
        VK_techical_data.sort((a, b) => a.content.localeCompare(b.content));
    }
    VK_technical_accoridan();
}

// data searchbox
function VK_technical_data_search_box() {
    let search_txt = document.getElementById('VK_technical_library_search_bar').value;
    VK_techical_data = VK_techical_library_data.filter((ele) => {
        return ele.title.toLowerCase().includes(search_txt.toLowerCase()) || ele.content.toLowerCase().includes(search_txt.toLowerCase())
    })
    VK_technical_accoridan();
}




// software checkbox
var VK_technical_software_data = [
    "AI Tools",
    "Assistive Context-Aware Toolkit (ACAT)",
    "BigDL",
    "BIOS",
    "BIOS and Firmware",
    "Boot Loader Development Kit",
    "C for Metal Software Development Kit (CM SDK)",
    "Cluster Tools",
    "Compilers",
    "Components & Products",
    "Data Center Software",
    "Data Plane Development Kit (DPDK)",
    "Development Tools",
    "Firmware",
    "GNU* Debugger (GDB)",
    "GStreamer* Video Analytics (GVA) Plugin",
    "Hyperscan",
    "Intel in Cloud Native (Kubernetes*)",
    "Intel Unite® Plugin SDK",
    "Intel® Active Management Technology SDK",
    "Intel® Advisor",
    "Intel® Architecture Code Analyzer",
    "Intel® C++ Compiler",
    "Intel® Cilk™ Plus",
    "Intel® Cluster Checker",
    "Intel® Collaboration Suite for WebRTC",
    "Intel® CPU Runtime for OpenCL™ Applications",
    "Intel® Cryptography Primitives Library",
    "Intel® Data Analytics Acceleration Library (Intel® DAAL)",
    "Intel® Data Center Manager Console",
    "Intel® Debug Extensions for WinDbg*",
    "Intel® Distribution for Python*",
    "Intel® Distribution of Modin*",
    "Intel® Distribution of OpenVINO™ toolkit",
    "Intel® DPC++ Compatibility Tool",
    "Intel® Embree",
    "Intel® Extension for Scikit_learn*",
    "Intel® Firmware Support Package (Intel® FSP)",
    "Intel® Fortran Compiler",
    "Intel® FPGA Add-On for oneAPI Base Toolkit",
    "Intel® Graphics Performance Analyzers",
    "Intel® Homomorphic Encryption Toolkit (Intel® HE Toolkit)",
    "Intel® HPC Toolkit",
    "Intel® Inspector",
    "Intel® Integrated Performance Primitives",
    "Intel® Integrated Simulation Infrastructure with Modeling (Intel® ISIM)",
    "Intel® Intelligent Storage Acceleration Library (ISA-L)",
    "Intel® IoT Toolkit",
    "Intel® License Manager for FLEXlm*",
    "Intel® Math Kernel Library",
    "Intel® Media SDK",
    "Intel® Media Server Studio",
    "Intel® Media Server Studio Essentials Edition",
    "Intel® Media Server Studio Professional Edition",
    "Intel® MPI Library",
    "Intel® Neural Compressor",
    "Intel® oneAPI Base Toolkit",
    "Intel® oneAPI Collective Communications Library",
    "Intel® oneAPI Data Analytics Library",
    "Intel® oneAPI Deep Neural Network Library",
    "Intel® oneAPI DL Framework Developer Toolkit",
    "Intel® oneAPI DPC++ C++ Compiler",
    "Intel® oneAPI DPC++ Library",
    "Intel® oneAPI Math Kernel Library",
    "Intel® oneAPI Threading Building Blocks",
    "Intel® oneAPI Toolkits",
    "Intel® Open Image Denoise",
    "Intel® Open Path Guiding Library (Intel® Open PGL)",
    "Intel® Open Volume Kernel Library (Intel® Open VKL)",
    "Intel® OpenSWR",
    "Intel® Optimization for PyTorch*",
    "Intel® Optimization for TensorFlow*",
    "Intel® Optimization for XGBoost*",
    "Intel® OSPRay",
    "Intel® Parallel Studio XE",
    "Intel® Parallel Studio XE Cluster Edition",
    "Intel® Parallel Studio XE Composer Edition",
    "Intel® Parallel Studio XE Professional Edition",
    "Intel® Platform Analysis Library",
    "Intel® Platform Service Record (Intel® PSR)",
    "Intel® RealSense™ SDK",
    "Intel® Rendering Toolkit",
    "Intel® SDK for OpenCL™ Applications",
    "Intel® Secure Device Onboard",
    "Intel® Smart Edge Open",
    "Intel® SoC Watch",
    "Intel® Software Development Emulator",
    "Intel® Software Development Products Registration Center",
    "Intel® Software Guard Extensions SDK",
    "Intel® System Bring-Up Toolkit",
    "Intel® System Debugger",
    "Intel® System Studio",
    "Intel® System Studio Composer Edition",
    "Intel® System Studio for Microcontrollers",
    "Intel® System Studio Professional Edition",
    "Intel® System Studio Professional Edition",
    "Intel® Threading Building Blocks",
    "Intel® Time Coordinated Computing Tools (Intel® TCC Tools)",
    "Intel® Trace Analyzer and Collector",
    "Intel® vCMTS Reference Dataplane",
    "Intel® Video Pro Analyzer",
    "Intel® Video Processing Library",
    "Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)",
    "Key Management Reference Application (KMRA)",
    "Legacy Products",
    "Libraries and SDKs",
    "NumaTOP",
    "OP-TEE* for Intel® Architecture",
    "Open Source Media Framework",
    "Open Source Software Projects",
    "OpenVINO™ Toolkit",
    "Other Software Tools",
    "Performance Analyzers",
    "Pin",
    "PM-Graph",
    "Program Record Replay Toolkit",
    "SDK for Intel® Dynamic Application Loader (Intel® DAL)",
    "Simics",
    "Software Development Platform",
    "Software Quality",
    "Storage Performance Development Kit (SPDK)",
    "System Tools",
    "UEFI",
    "Useful Packages & Modules (UPM) MRAA Library"
]

var VK_technical_software = VK_technical_software_data

// display software type checkbox
function VK_technical_software_checkbox() {
    if (document.getElementById('VK_technical_software_checkbox')) {
        let html = VK_technical_software.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_overflow_checkbox" onclick="VK_oneapi_content_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_technical_software.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_oneapi_toolkit_software_showmore()" id="VK_toolkit_software_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_technical_software_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// software checkbox show more or less
function VK_oneapi_toolkit_software_showmore() {
    let showMoreButton = document.getElementById('VK_toolkit_software_show_more');
    let hiddenItems = document.querySelectorAll('#VK_technical_software_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_technical_software_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}

// checkbox search box
function VK_techincal_software_search() {
    let srch = document.getElementById('VK_technical_software_search').value
    let arr = VK_technical_software_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_technical_software = arr
    VK_technical_software_checkbox()
}

// orderby
function VK_technical_software_order_By() {
    let orderby = document.getElementById('VK_technical_software_sort').value
    if (orderby == 'A-Z') {
        VK_technical_software.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_technical_software.sort((a, b) => b.localeCompare(a))
    }
    VK_technical_software_checkbox()
}




// programming language
var VK_techical_programming_data = [
    "C C++",
    "C#",
    "CUDA*",
    "Data Parallel C++ (DPC++)",
    "Fortran",
    "Go*",
    "Hack HHVM",
    "HTML5",
    "Java*",
    "JavaScript*",
    "Julia*",
    "Microsoft .NET*",
    "Node.js*",
    "PHP",
    "Python*",
    "R*",
    "ROCm*",
    "SYCL*"
]

var VK_technical_programming = VK_techical_programming_data

// display programming type checkbox
function VK_technical_programming_checkbox() {
    if (document.getElementById('VK_technical_programming_checkbox')) {
        let html = VK_technical_programming.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_overflow_checkbox" onclick="VK_oneapi_content_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_technical_programming.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_technical_programming_showmore()" id="VK_toolkit_programming_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_technical_programming_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// programming checkbox show more or less
function VK_technical_programming_showmore() {
    let showMoreButton = document.getElementById('VK_toolkit_programming_show_more');
    let hiddenItems = document.querySelectorAll('#VK_technical_programming_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_technical_programming_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}


// checkbox search box
function VK_techincal_programming_search() {
    let srch = document.getElementById('VK_technical_programming_search').value
    let arr = VK_techical_programming_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_technical_programming = arr
    VK_technical_programming_checkbox()
}

// orderby
function VK_technical_programming_order_By() {
    let orderby = document.getElementById('VK_technical_programming_filters').value
    if (orderby == 'A-Z') {
        VK_technical_programming.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_technical_programming.sort((a, b) => b.localeCompare(a))
    }
    VK_technical_programming_checkbox()
}




// content Type
var VK_technical_content_type_data = [
    "Analyst Reports",
    "Application Notes",
    "Applications",
    "Architecture Guides",
    "Architecture Specifications",
    "Benchmarks",
    "Best Practices",
    "Biographies",
    "BIOS Specifications",
    "Blogs",
    "Briefs",
    "Business Briefs",
    "Case Studies",
    "Certification",
    "Code Samples",
    "Communications",
    "Conference Sessions",
    "Conferences and Events",
    "Configuration Guides",
    "Cookbooks",
    "Courseware",
    "Customer Presentations",
    "Datasheets",
    "Dear Customer Letters (DCL)",
    "Demo Videos",
    "Demos",
    "Design Reference",
    "Development Guides",
    "Development Reference Guides",
    "Development User Guides",
    "Device Overviews",
    "Drivers",
    "Event Overviews",
    "Event Schedules",
    "FAQs",
    "Feature Lists",
    "Firmware",
    "Getting Started Guides",
    "How-To Training",
    "Implementation Guides",
    "Infographics",
    "Installation Guides",
    "Instructional Materials",
    "Instructor-Led Training",
    "Internal Training",
    "Known Issues",
    "Learning Plans and Paths",
    "Machine Learning Models",
    "Marketing Guides",
    "Marketing Tools",
    "On-Demand Training",
    "Partner Briefs",
    "Playbooks",
    "Product Briefs",
    "Product Snapshots",
    "Product Specifications",
    "Product Updates",
    "Programming Reference",
    "Release Notes",
    "Sales and Marketing Materials",
    "Sales Quick Reference",
    "Sales Tools",
    "Sample Applications",
    "Schematic and Layout Files",
    "Scripts",
    "Software Containers",
    "Software Development Kits (SDKs)",
    "Software Downloads",
    "Software Kits",
    "Software Packages",
    "Software Patches",
    "Software Reference Implementations",
    "Software, Drivers and Utilities",
    "Solution Briefs",
    "Stock Video",
    "Success Stories",
    "Support Articles",
    "System Requirements",
    "Technical Advisories",
    "Technical Articles",
    "Technical Documentation Kits",
    "Technical Specifications",
    "Testimonials",
    "Training and Learning",
    "Training Manuals",
    "Troubleshooting",
    "Tuning and Optimization Guides",
    "Tutorials",
    "Use Cases",
    "User Guides",
    "Validation and Debug Guides",
    "White Papers",
    "Workshop Events"
]

var VK_technical_content_type = VK_technical_content_type_data

// display content type checkbox
function VK_technical_content_type_checkbox() {
    if (document.getElementById('VK_technical_content_type_checkbox')) {
        let html = VK_technical_content_type.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_overflow_checkbox VK_technical_content_checkbox" onclick="VK_oneapi_content_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_technical_content_type.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_technical_content_showmore()" id="VK_technical_content_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_technical_content_type_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// content checkbox show more or less
function VK_technical_content_showmore() {
    let showMoreButton = document.getElementById('VK_technical_content_show_more');
    let hiddenItems = document.querySelectorAll('#VK_technical_content_type_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_technical_content_type_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}

// checkbox search box
function VK_techincal_content_search() {
    let srch = document.getElementById('VK_technical_content_search').value
    let arr = VK_technical_content_type_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_technical_content_type = arr
    VK_technical_content_type_checkbox()
}

// orderby
function VK_technical_content_order_By() {
    let orderby = document.getElementById('VK_technical_content_filters').value
    if (orderby == 'A-Z') {
        VK_technical_content_type.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_technical_content_type.sort((a, b) => b.localeCompare(a))
    }
    VK_technical_content_type_checkbox()
}

// content type checkbox event
function VK_oneapi_content_type() {
    let checkboxes = document.querySelectorAll('.VK_technical_content_checkbox');
    let checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (checkedBoxes.length === 0) {
        VK_techical_data = VK_techical_library_data;
    } else {
        let selectedContentTypes = checkedBoxes.map(checkbox => checkbox.value.toLowerCase());
        VK_techical_data = VK_techical_library_data.filter(item => {
            return selectedContentTypes.includes(item.content.toLowerCase());
        });
    }

    VK_technical_accoridan();
}





// ----------------------------------------------    ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementsByClassName('VK_all_sections section') && document.getElementsByClassName('VK_sidebar_dropdown')) {
        const sections = document.querySelectorAll('.VK_all_sections section');
        const navLinks = document.querySelectorAll('.VK_sidebar_dropdown a');
        const detailsElements = document.querySelectorAll('.VK_sidebar_dropdown details');

        function removeActiveClass() {
            navLinks.forEach(link => link.classList.remove('VK_sidebar_active_link'));
            detailsElements.forEach(details => {
                details.removeAttribute('open');
                details.setAttribute('close', ''); // Optional: to visually indicate it's closed
            });
        }

        function activateLinkAndDetails(targetId) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${targetId}`) {
                    link.classList.add('VK_sidebar_active_link');
                    let parentDetails = link.closest('details');

                    // Open all ancestor details elements
                    while (parentDetails) {
                        parentDetails.setAttribute('open', '');
                        parentDetails.removeAttribute('close'); // Optional: remove the closed indicator
                        parentDetails = parentDetails.parentElement.closest('details');
                    }
                }
            });
        }

        function onScroll() {
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;

                // Check if the section is in view
                if (sectionTop <= 100 && sectionBottom >= 0) {
                    currentSection = section.getAttribute('id');
                }
            });

            if (currentSection) {
                removeActiveClass();
                activateLinkAndDetails(currentSection);
            } else {
                removeActiveClass();
            }
        }

        window.addEventListener('scroll', onScroll);
    } else {
        return
    }
});



// ----------------------------------------------------- GameDev Technical Library --------------------------------------------------


var VK_gamedev_techincal_data = [
    {
        title: "Decoupling Non-Critical Workloads",
        id: "819066",
        date: "09/05/24",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Technical Articles",
        description: "How to get more out of modern compute platforms by decoupling non-critical workloads."
    },
    {
        title: "Intel® XeSS Inspector",
        id: "829080",
        date: "08/01/24",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Technical Articles",
        description: "Learning and using Intel® XeSS Inspector"
    },
    {
        title: "Integrating XeSS with Velocity and Luminance Adaptive Rasterization",
        id: "783953",
        date: "06/12/24",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Technical Articles",
        description: "Integrating XeSS with Velocity and Luminance Adaptive Rasterization"
    },
    {
        title: "Optimizing Threading for Gaming Performance",
        id: "818689",
        date: "04/13/24",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Technical Articles",
        description: "Learn how to optimize P and E cores threading for gaming performance."
    },
    {
        title: "oneAPI DPC++/C++ Compiler and Optimization Usage Guide for Unreal...",
        id: "818856",
        date: "04/13/24",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Technical Articles",
        description: "Learning the Intel® oneAPI DPC++/C++ compiler and optimizing usage for Unreal Engine® 5."
    },
    {
        title: "Intel® Arc™ Graphics Developer Guide for Real-Time Ray Tracing in...",
        id: "766813",
        date: "04/09/24",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Technical Articles",
        description: "Intel® Arc™ GPUs support DirectX* 12 Ultimate features with variable-rate shading (VRS), mesh shading, and DirectX* Raytracing (DXR) through new built-in hardware acceleration blocks."
    },
    {
        title: "Intel® Graphics Performance Analyzers 2024.2 Release Notes",
        id: "764276",
        date: "03/15/23",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Release Notes",
        description: "This article contains the online version of the Release Notes for the Intel® Graphics Performance Analyzers (Intel® GPA). You'll find system requirements, installation instructions, issues and limitations, and legal information for the product."
    },
    {
        title: "Intel® Xe Super Sampling (XeSS) API Developer Guide",
        id: "758579",
        date: "11/17/22",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Technical Articles",
        description: "This developer guide is intended to supplement the XᵉSS API Reference Guide."
    },
    {
        title: "Introduction to the Xe-HPG Architecture",
        id: "758306",
        date: "11/05/22",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Getting Started Guides",
        description: "Current Release Notes for Intel® vCMTS Reference Dataplane. The notes are categorized by major version, from newest to oldest, with individual releases listed within each version section."
    },
    {
        title: "DirectStorage on Intel GPUs",
        id: "757350",
        date: "11/05/22",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "News",
        description: "DirectStorage on Intel GPUs"
    },
    {
        title: "Velocity and Luminance Adaptive Rasterization Using VRS Tier 2",
        id: "726907",
        date: "03/18/22",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Technical Articles",
        description: "The goal of VRS Tier 2 is to give developers additional control of where shading resources are used to produce an image."
    },
    {
        title: "Removing CPU-GPU sync stalls in Galactic Civilizations* 3",
        id: "671632",
        date: "02/03/22",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Case Studies",
        description: "Galactic Civilizations* 3 is a turn-based 4X strategy game recently released by Stardock Entertainment. This article describes how Intel® Graphics Performance Analyzer's (GPA) Platform Analyzer was used to improve the game's performance by finding and removing several CPU-GPU sync stalls that had caused a loss of parallelism between the CPU and GPU."
    },
    {
        title: "Developing OpenVINO Object Detection Inferencing Plugin for Unity*...",
        id: "774978",
        date: "10/25/21",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Development User Guides",
        description: "Demonstrate how to create a Unity* project to access the DLL as a plugin."
    },
    {
        title: "Developing OpenVINO™ Object Detection Inferencing Plugin for Unity* :...",
        id: "676377",
        date: "10/05/21",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: " Installation Guides",
        description: "How similar development methodologies can be used to implement AI object detection technology in games."
    },
    {
        title: "Developing OpenVINO Inferencing Plugin for Unity*",
        id: "673109",
        date: "08/10/21",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Tutorials",
        description: "To create a plugin that leverages the OpenVINO™ Toolkit for the Unity* game engine."
    },
    {
        title: "Developer and Optimization Guide for Intel® Processor Graphics Gen11...",
        id: "671957",
        date: "08/03/21",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Tuning and Optimization Guides",
        description: "This document presents developer guidance and optimization methods for the graphics hardware architecture of Intel® Processor Graphics Gen11."
    },
    {
        title: "Setting up Unity* Barracuda to Enable AI Style Transfer",
        id: "672572",
        date: "07/19/21",
        version: "Original",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Technical Articles",
        description: "AI Tutorial series Part 1, covering Setting up Unity* Barracuda to enable AI Style transfer"
    },
    {
        title: "Developing OpenVINO Inferencing Plugin for Unity*",
        id: "676389",
        date: "07/18/21",
        version: "Latest",
        download: false,
        bookmark: false,
        file: "URL",
        content: "Tutorials",
        description: "To create a plugin that leverages the OpenVINO™ Toolkit for the Unity* game engine."
    },
]

var VK_gamedev_technical = VK_gamedev_techincal_data

// display data
function VK_gamedev_technical_accoridan() {

    const div = document.getElementById('VK_gamedev_technical_library');

    // result count 
    if (document.getElementById('VK_technical_library_cnt1')) {
        document.getElementById('VK_technical_library_cnt1').innerHTML = VK_gamedev_technical.length + " results";
    }


    // display accoridan
    if (div) {

        const htmlele = VK_gamedev_technical.map((ele, ind) => {
            const uniqueID = `flush-collapse-${ind}`;
            const uniqueHeadingID = `flush-heading-${ind}`;

            const versionDisplay = Array.isArray(ele.version)
                ? `<select class="py-2 pe-xl-4 pe-5">${ele.version.map(v => `<option value="${v}">${v}</option>`).join('')}</select>`
                : ele.version;

            return `
            <div class="accordion-item">
                <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                    <div class="col-xxl-7 col-xl-6 col-12 align-self-center">
                        <p class="m-xl-0 mb-4">
                            <a href="#" class="VK_red_normal_font text-decoration-none VK_a">
                                ${ele.title}
                            </a>
                        </p>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-12 p-0 text-xl-center d-flex flex-column flex-xl-row justify-content-between align-items-center">
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Date :</b></span> ${ele.date}
                        </p>
                        <p class="m-0 my-1 VK_red_small_font w-100">
                            <span class="d-xl-none"><b>Version: </b></span>
                            ${versionDisplay}
                        </p>
                    </div>
                    <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                        <p class="d-flex m-0 justify-content-end justify-content-end">
                            ${ele.download ? `
                                <button class="bg-transparent border-0 text-primary px-2 mx-2 m-xl-0">
                                    <i class="fa-solid fa-download"></i>
                                </button>
                            ` : ''}
                            ${ele.bookmark ? `
                                <button class="bg-transparent border-0 text-primary px-2 mx-2 m-xl-0">
                                    <i class="fa-regular fa-bookmark"></i>
                                </button>
                            ` : ''}
                            <button class="accordion-button collapsed mx-2 m-xl-0 px-2" type="button"
                                data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                                aria-expanded="false" aria-controls="${uniqueID}">
                                <span>&nbsp;</span>
                            </button>
                        </p>
                    </div>
                </div>
                <div id="${uniqueID}" class="accordion-collapse collapse"
                    aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p class="m-0">
                            <span class="d-inline-block mx-2">
                                <b>File:</b>
                                <span>${ele.file}</span>
                            </span>
                            <span class="d-inline-block mx-2">
                                <b>Content Type :</b>
                                <span>${ele.content}</span>
                            </span>
                        </p>
                        <p class="m-0">${ele.description}</p>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = htmlele.join('');

        const accordionButtons = div.querySelectorAll('.accordion-button');
        accordionButtons.forEach(button => {
            const collapseElement = document.querySelector(button.getAttribute('data-bs-target'));
            const collapseInstance = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });

            button.addEventListener('click', function () {
                collapseInstance.toggle();
            });
        });
    } else {
        return;
    }
}

// data sort by
function VK_gamedev_technical_data_softby() {
    let sort_by = document.getElementById('VK_gamedev_technical_data_sortby').value;
    if (sort_by == 'A-Z') {
        VK_gamedev_technical.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort_by == 'Z-A') {
        VK_gamedev_technical.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort_by == 'Content Type') {
        VK_gamedev_technical.sort((a, b) => a.content.localeCompare(b.content));
    }
    VK_gamedev_technical_accoridan();
}

// data searchbox
function VK_gamedev_technical_data_search_box() {
    let search_txt = document.getElementById('VK_gamedev_technical_search_bar').value;
    VK_gamedev_technical = VK_gamedev_techincal_data.filter((ele) => {
        return ele.title.toLowerCase().includes(search_txt.toLowerCase()) || ele.content.toLowerCase().includes(search_txt.toLowerCase())
    })
    VK_gamedev_technical_accoridan();
}

// clear all 
function VK_gamedev_technical_clear_All() {
    VK_gamedev_technical = VK_gamedev_techincal_data
    document.getElementById('VK_gamedev_technical_search_bar').blur();
    document.getElementById('VK_gamedev_technical_search_bar').value = '';

    VK_gamedev_technical_accoridan();

    VK_gamedev_technical_content_checkbox()

    VK_gamedev_technical_software_checkbox();
}





// content type checkbox
var VK_gamedev_content_chkbox_data = [
    "Case Studies",
    "Code Samples",
    "Development Guides",
    "Development User Guides",
    "Event Overviews",
    "Getting Started Guides",
    "How-To Training",
    "Implementation Guides",
    "Installation Guides",
    "News",
    "On-Demand Training",
    "Product Updates",
    "Release Notes",
    "Software Overviews",
    "Success Stories",
    "Technical Articles",
    "Troubleshooting",
    "Tuning and Optimization Guides",
    "Tutorials",
    "Use Cases"
]

var VK_gamedev_content = VK_gamedev_content_chkbox_data

// display content type checkbox
function VK_gamedev_technical_content_checkbox() {
    if (document.getElementById('VK_gamedev_technical_content_checkbox')) {
        let html = VK_gamedev_content.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_overflow_checkbox VK_gamedev_content_checkbox" onclick="VK_oneapi_content_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_gamedev_content.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_gamedev_content_showmore()" id="VK_gamedev_content_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_gamedev_technical_content_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// content checkbox show more or less
function VK_gamedev_content_showmore() {
    let showMoreButton = document.getElementById('VK_gamedev_content_show_more');
    let hiddenItems = document.querySelectorAll('#VK_gamedev_technical_content_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_gamedev_technical_content_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}

// content type checkbox search box
function VK_gamedev_techincal_content_search() {
    let srch = document.getElementById('VK_gamedev_technical_content_search').value
    let arr = VK_gamedev_content_chkbox_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_gamedev_content = arr
    VK_gamedev_technical_content_checkbox()
}

// orderby
function VK_gamedev_technical_content_order_By() {
    let orderby = document.getElementById('VK_gamedev_technical_content_sort').value
    if (orderby == 'A-Z') {
        VK_gamedev_content.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_gamedev_content.sort((a, b) => b.localeCompare(a))
    }
    VK_gamedev_technical_content_checkbox()
}

// content type checkbox event
function VK_oneapi_content_type() {
    let checkboxes = document.querySelectorAll('.VK_gamedev_content_checkbox');
    let checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (checkedBoxes.length === 0) {
        VK_gamedev_technical = VK_gamedev_techincal_data
    } else {
        let selectedContentTypes = checkedBoxes.map(checkbox => checkbox.value.toLowerCase());
        VK_gamedev_technical = VK_gamedev_techincal_data.filter(item => {
            return selectedContentTypes.includes(item.content.toLowerCase());
        });
    }

    VK_gamedev_technical_accoridan();
}





// software checkbox
var VK_gamedev_software_chkbox_data = [
    "Compilers",
    "Development Tools",
    "Intel® Distribution of OpenVINO™ toolkit",
    "Intel® Embree",
    "Intel® Graphics Performance Analyzers",
    "Intel® Math Kernel Library",
    "Intel® Open Image Denoise",
    "Intel® OSPRay",
    "Intel® SDK for OpenCL™ Applications",
    "Intel® Threading Building Blocks",
    "Intel® Trace Analyzer and Collector",
    "Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)",
    "OpenVINO™ Toolkit",
    "Performance Analyzers"
]

var VK_gamedev_softeare = VK_gamedev_software_chkbox_data

// display software checkbox
function VK_gamedev_technical_software_checkbox() {
    if (document.getElementById('VK_technical_software_checkbox')) {
        let html = VK_gamedev_softeare.map((ele, ind) => {
            return `
        <div class="${ind > 7 ? "d-none" : ""} my-1 VK_white_space"> 
            <input type="checkbox" value="${ele}" class="me-2 VK_overflow_checkbox VK_gamedev_software_checkbox" onclick="VK_oneapi_content_type()">
            <span>${ele}</span>
        </div>
        `;
        }).join(' ');

        if (VK_gamedev_softeare.length > 7) {
            html += `
        <button class="border-0 bg-transparent VK_a" onclick="VK_gamedev_software_showmore()" id="VK_gamedev_software_show_more">
            <span>Show More</span>
        </button>
        `;
        }

        document.getElementById('VK_technical_software_checkbox').innerHTML = html;
    } else {
        return;
    }
}

// content software show more or less
function VK_gamedev_software_showmore() {
    let showMoreButton = document.getElementById('VK_gamedev_software_show_more');
    let hiddenItems = document.querySelectorAll('#VK_technical_software_checkbox .d-none');
    let visibleItems = document.querySelectorAll('#VK_technical_software_checkbox > div:not(.d-none)');

    if (showMoreButton.innerText.trim() === "Show More") {
        showMoreButton.innerHTML = "<span>Show Less</span>";
        hiddenItems.forEach(item => item.classList.remove('d-none'));
    } else {
        showMoreButton.innerHTML = "<span>Show More</span>";
        visibleItems.forEach((item, ind) => {
            if (ind > 7) {
                item.classList.add('d-none');
            }
        });
    }
}

// software checkbox search box
function VK_gamedev_techincal_software_search() {
    let srch = document.getElementById('VK_gamedev_technical_software_search').value
    let arr = VK_gamedev_software_chkbox_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_gamedev_softeare = arr
    VK_gamedev_technical_software_checkbox()
}

// software checkbox search box
function VK_gamedev_techincal_software_search() {
    let srch = document.getElementById('VK_gamedev_technical_software_search').value
    let arr = VK_gamedev_software_chkbox_data.filter((ele) => {
        return ele.toLowerCase().includes(srch.toLowerCase())
    })
    VK_gamedev_softeare = arr
    VK_gamedev_technical_software_checkbox()
}

// orderby
function VK_gamedev_technical_software_order_By() {
    let orderby = document.getElementById('VK_gamedev_technical_software_order').value
    if (orderby == 'A-Z') {
        VK_gamedev_softeare.sort((a, b) => a.localeCompare(b))
    }
    else if (orderby == 'Z-A') {
        VK_gamedev_softeare.sort((a, b) => b.localeCompare(a))
    }
    VK_gamedev_technical_software_checkbox()
}



// ------------------------------  Intel® Arc™ Graphics Developer Guide for Real-Time Ray Tracing in Games ---------------------------------

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".VK_arc_navbar a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
                    navLinks.forEach(link => link.classList.remove("VK_active_arc_link"));

                    const activeLink = document.querySelector(`.VK_arc_navbar a[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add("VK_active_arc_link");
                    }
                }
            });
        },

    );

    sections.forEach(section => observer.observe(section));
});




// ------------------------------------------------------ gpu research publisher ------------------------------------------------------

var VK_gpu_research_publisher_data = [
    {
        title: "New Publications and Tools for GenAI",
        date: "07/26/24",
        description: "Get the latest on generative AI (GenAI) from researcher presentations at SIGGRAPH and High-Performance Graphics (HPG) 2024.",
        image: "VK_139.png",
        link: "",
    },
    {
        title: "Concurrent Binary Trees for Large-Scale Game Components",
        date: "07/02/24",
        description: "Process large sceneries (like planetary scales) at high speeds while making the system easier to use for developers and artists.",
        image: "VK_140.png",
        link: "",
    },
    {
        title: "Nonorthogonal Reduction for Rendering Fluorescent Materials",
        date: "06/26/24",
        description: "Learn how a research team used nonorthogonal functions to accurately render fluorescent materials in nonspectral engines.",
        image: "VK_141.png",
        link: "",
    },
    {
        title: "N-dimensional Gaussians for Fitting of High-Dimensional Functions",
        date: "05/31/24",
        description: "Learn about a research team's method to optimize N-dimensional Gaussians to approximate high-dimensional anisotropic functions in a few minutes.",
        image: "VK_142.png",
        link: "",
    },
    {
        title: "Transform Rasterizers with Stochastic Gradient Estimation",
        date: "05/14/24",
        description: "Learn how a research team used stochastic gradient estimation to transform a nondifferentiable rasterizer into a differentiable rasterizer.",
        image: "VK_143.png",
        link: "",
    },
    {
        title: "Physically Based Lighting for 3D Generative Models of Cars",
        date: "04/30/24",
        description: "Computing physically based lighting for car models created from a 3D-aware generative model creates realistic imagery with accurate reflections.",
        image: "VK_144.png",
        link: "",
    },
    {
        title: "ExtraSS: A Framework for Joint Spatial Super Sampling and Frame...",
        date: "12/12/23",
        description: "We introduce ExtraSS, a novel framework that combines spatial super sampling and frame extrapolation to enhance real-time rendering performance.",
        image: "VK_145.png",
        link: "",
    },
    {
        title: "The effect of display capabilities on the gloss consistency",
        date: "12/12/23",
        description: "A faithful reproduction of gloss is inherently difficult because of the limited dynamic range, peak luminance, and 3D capabilities of display devices.",
        image: "VK_146.png",
        link: "",
    },
    {
        title: "Raycasting for Memory Constrained Isosurface Visualization",
        date: "12/07/23",
        description: "We propose an isosurface-rendering algorithm for visualization of volumes by traversing rays through data to perform ray-isosurface intersections.",
        image: "VK_147.png",
        link: "",
    },
    {
        title: "VESTEC",
        date: "08/03/23",
        description: "Learn about the VESTEC framework and how it can help public authorities plan for and respond to natural disasters and epidemics.",
        image: "VK_148.jpg",
        link: "",
    },
    {
        title: "Real-Time Rendering of Glinty Appearances using Distributed Binomial...",
        date: "08/03/23",
        description: "We render in real-time glittery materials caused by discrete flakes on the surface. One has to count the number of flakes reflecting the light towards the camera within every texel covered.",
        image: "VK_149.png",
        link: "",
    },
    {
        title: "Sampling Visible GGX Normals with Spherical Caps",
        date: "08/03/23",
        description: "In computer graphics, the most common way to capture the distribution of these reflected directions is to rely on a mathematical function called GGX.",
        image: "VK_150.jpg",
        link: "",
    },
    {
        title: "Real-Time Ray Tracing of Micro-Poly Geometry with Hierarchical Level...",
        date: "08/03/23",
        description: "In recent work, Nanite has demonstrated how to rasterize virtualized micro-poly geometry in real time, thus enabling immense geometric complexity.",
        image: "VK_151.png",
        link: "",
    },
    {
        title: "Neural Prefiltering for Correlation-Aware Levels of Detail",
        date: "07/27/23",
        description: "Introducing the latest research of Intel Graphics Research at SIGGRAPH 2023, the premier conference for computer graphics.",
        image: "VK_152.jpg",
        link: "",
    },
    {
        title: "Iterative α-(de)Blending: a Minimalist Deterministic Diffusion Model",
        date: "07/23/23",
        description: "At the core of tools such as Dall.E or Stable Diffusion are a recent family of methods known as diffusion models. Diffusion models aim at reproducing content from noise.",
        image: "VK_153.png",
        link: "",
    },
    {
        title: "Instant Neural Representation for Interactive Volume Rendering",
        date: "07/08/23",
        description: "By simultaneously leveraging modern GPU tensor cores, a native CUDA neural network framework, and a well-designed rendering algorithm we can interactively ray trace volumetric neural",
        image: "VK_154.png",
        link: "",
    },
    {
        title: "Intel's Latest Research for Graphics and Generative AI",
        date: "06/24/23",
        description: "Find out about Intel's latest research for graphics and generative AI.",
        image: "VK_155.png",
        link: "",
    },
    {
        title: "Stochastic Subsets for BVH Construction",
        date: "05/24/23",
        description: "BVH construction is a critical component of real-time and interactive ray-tracing systems.",
        image: "VK_156.png",
        link: "",
    },
    {
        title: "SynPeDS: Synthetic Dataset for Pedestrian Detection",
        date: "12/09/22",
        description: "Learn about SynPeDS, a synthetic dataset that helps with pedestrian detection tasks in urban scenes.",
        image: "VK_157.jpg",
        link: "",
    },
    {
        title: "Temporally Stable Real-Time Joint Neural Denoising and Supersampling",
        date: "07/27/22",
        description: "Given noisy, low-resolution input, our network performs spatiotemporal filtering to produce denoised and antialiased output at twice the resolution.",
        image: "VK_158.png",
        link: "",
    },
    {
        title: "PLOC++, Parallel Locally-Ordered Clustering for Bounding Volume",
        date: "07/27/22",
        description: "We propose a novel version of the GPU-oriented massively parallel locally-ordered clustering (PLOC) algorithm for constructing bounding volume hierarchies (BVHs)",
        image: "VK_159.png",
        link: "",
    },
    {
        title: "Scalable Ray Tracing for In Situ Visualization Using Intel® OSPRay",
        date: "05/06/22",
        description: "In situ visualization entails rendering images for post hoc exploration. We cover developments in Intel® OSPRay support for MPI-parallel applications.",
        image: "VK_160.jpg",
        link: "",
    },
    {
        title: "Wide BVH Traversal with a Short Stack",
        date: "05/02/22",
        description: "In this paper we discuss an algorithm for wide bounding volume hierarchy (BVH) traversal",
        image: "VK_161.png",
        link: "",
    },
    {
        title: "ANARI: A 3D Rendering API Standard",
        date: "03/31/22",
        description: "Learn about ANARI, a 3D rendering API that enables state-of-the-art rendering techniques across hardware platforms and rendering engines.",
        image: "VK_162.jpg",
        link: "",
    },
    {
        title: "Lazy Build of Acceleration Structures with Traversal Shaders",
        date: "11/17/20",
        description: "In this paper, we propose multi-pass lazy build (MPLB), an algorithm for real-time ray tracing that resolves this problem with an extended programming model called traversal shader",
        image: "VK_163.png",
        link: "",
    },
    {
        title: "Flexible Ray Traversal with an Extended Programming Model",
        date: "11/17/19",
        description: "In this paper, we propose an extended programming model for ray tracing which includes an additional programmable stage called the traversal shader th",
        image: "VK_164.png",
        link: "",
    },
    {
        title: "Coarse Pixel Shading with Temporal Supersampling",
        date: "05/16/18",
        description: "In this paper we extend coarse pixel shading with a temporal supersampling scheme that notably improves image quality and provides substantial reduction in shading cost compared to",
        image: "VK_165.png",
        link: "",
    },
    {
        title: "Bandwidth-Efficient BVH Layout for Incremental Hardware Traversal",
        date: "06/21/16",
        description: "The memory footprint of bounding volume hierarchies (BVHs) can be significantly reduced using incremental encoding, which enables the coarse quantization of bounding volumes. However, this",
        image: "VK_166.png",
        link: "",
    },
    {
        title: "Watertight Ray Traversal with Reduced Precision",
        date: "06/20/16",
        description: "Reduced precision bounding volume hierarchies and ray traversal can significantly improve the efficiency of ray tracing through low-cost dedicated hardware. A key approach to enabling reduced precision computations during traversal is to translate the ray origin closer to the bounding volume hierarchy node after each traversal step. However, this approach precludes sharing of intersection computations between a parent node and its two children, which is an important optimization. In this paper, we introduce a novel traversal algorithm that addresses this limitation and achieves a significant reduction in the computational complexity of traversal compared to previous approaches. We also include an analysis that shows how our algorithm guarantees watertight intersections which is a key requirement for robust image quality, especially with reduced precision traversal where numerical errors can be large.",
        image: "VK_167.png",
        link: "",
    },
    {
        title: "Masked Software Occlusion Culling",
        date: "06/20/16",
        description: "An efficient occlusion culling algorithm targeting SIMD architectures. The algorithm supports interleaving occluder rendering and occlusion queries, and outperforms previous work by a factor 3x.",
        image: "VK_168.png",
        link: "",
    },
]

var VK_gpu_publisher = VK_gpu_research_publisher_data


function VK_gpu_publishr_display_card() {
    if (document.getElementById('VK_gpu_publish_result_div')) {
        document.getElementById('VK_gpu_publish_results_cnt').innerHTML = VK_gpu_publisher.length + " Results"

        let html = VK_gpu_publisher.map((ele) => {
            return ` 
            <div class="col-md-4 col-xxl-3 my-3">
                <div class="bg-white h-100">
                    <div class="text-center VK_border_bottom VK_gpu_card_img">
                        <img src="/img/vivek/${ele.image}" class="h-100 w-100 VK_object-cover" alt="">
                    </div>
                    <div class="mt-4 pb-3 px-3">
                        <p class="d-block">
                            <a href="${ele.link}" class="VK_a text-decoration-none">
                                ${ele.title}
                            </a>
                        </p>
                        <p>
                            <b>
                                Date:
                            </b>
                            ${ele.date}
                        </p>
                        <p>
                            ${ele.description.length >= 200 ? ele.description.slice(0,200)+'...' : ele.description}
                        </p>
                    </div>
                </div>
            </div>`
        }).join('');
        document.getElementById('VK_gpu_publish_result_div').innerHTML = html
    }
    else {
        return
    }
}

function VK_gpu_publisher_sortby() {
    let orderby = document.getElementById('VK_gpu_publisher_sortby').value
    console.log(orderby);
    if (orderby == 'A-Z') {
        VK_gpu_publisher.sort((a, b) => a.title.localeCompare(b.title))
    }
    else if (orderby == 'Z-A') {
        VK_gpu_publisher.sort((a, b) => b.title.localeCompare(a.title))
    }
    VK_gpu_publishr_display_card();
}

function VK_gpu_publisher_search() {
    let search = document.getElementById('VK_gpu_publisher_result_search').value;
    VK_gpu_publisher = VK_gpu_research_publisher_data.filter((ele) => {
        return ele.title.toLowerCase().includes(search.toLowerCase())
    })
    VK_gpu_publishr_display_card();
}




document.addEventListener('DOMContentLoaded',function(){
    VK_code_liner();
})

function VK_code_liner(){
     // Select all code blocks and their corresponding line number containers
     const codeBlocks = document.querySelectorAll('.VK_code-block');
     const lineNumberContainers = document.querySelectorAll('.VK_line-number');
     
     // Ensure that the number of code blocks matches the number of line number containers
     if (codeBlocks.length !== lineNumberContainers.length) {
         console.error('Mismatch between code blocks and line number containers.');
         return;
     }
 
     // Iterate over each code block and line number container pair
     codeBlocks.forEach((codeBlock, index) => {
         const lineNumberContainer = lineNumberContainers[index];
         
         // Split code into lines
         const lines = codeBlock.textContent.split('\n');
         
         // Clear existing line numbers (if any)
         lineNumberContainer.innerHTML = '';
 
         // Generate line numbers
         lines.forEach((_, lineIndex) => {
             const p = document.createElement('p');
             p.className = 'VK_line-number-item m-0';
             p.textContent = lineIndex + 1;
             lineNumberContainer.appendChild(p);
         });
 
         // Adjust height of line number container to match code block height
         // lineNumberContainer.style.height = `${codeBlock.scrollHeight}px`;
     });
}





