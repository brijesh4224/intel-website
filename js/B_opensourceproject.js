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
        system: "Linux*, macOS*, Microsoft Windows*, Celadon",
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
        system: "Ubuntu Family*",
        content: "Software Overviews",
        description: "This library operating system provides a flexible and modular architecture for securing unmodified Linux* applications/binaries on Intel® Software Guard Extensions...",
        image: "default-document.svg",
        status: false
    },
    {
        name: "eBPF",
        system: "Ubuntu Family*",
        content: "Software Overviews",
        description: "This technology originated in the Linux* kernel. It runs sandboxed programs in an operating system kernel",
        image: "default-document.svg",
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
    VK_vturn_onload();

    // celadon documantation
    createDocumentElementforceladon();

    // intel adviser documantation
    VK_display_result_accridan();

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
