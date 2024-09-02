var sys = 1;
var ver = 1;
var d = 1;
var e = 1;
var env = false;
let version_data = [
    [{ id: 1, name: '2024.3', def: "Recommented" }, { id: 2, name: 'Nightly Build', def: "" }, { id: 3, name: '2023.3 LTS', def: "" }, { id: 4, name: '2022.3.2 LTS', def: "Includes NCS2/HDDL support" }],
    [{ id: 5, name: '2024.3', def: "Recommented" }, { id: 6, name: 'Nightly Build', def: "" }],
]
let dis_data = [
    {
        system: 1,
        version: 1,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: "Includes NPU plugin"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },
        {
            id: 5,
            name: 'Docker',
            def: ""
        },
        {
            id: 6,
            name: 'Conda',
            def: ""
        },
        {
            id: 7,
            name: 'vcpkg',
            def: "Source"
        },
        {
            id: 8,
            name: 'Conan',
            def: ""
        },
        {
            id: 9,
            name: 'npm',
            def: "JavaScript API only"
        },]
    },
    {
        system: 1,
        version: 2,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },]
    },
    {
        system: 1,
        version: 3,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },
        {
            id: 5,
            name: 'Docker',
            def: ""
        },
        {
            id: 6,
            name: 'Conda',
            def: ""
        },
        {
            id: 8,
            name: 'Conan',
            def: ""
        },]
    },
    {
        system: 1,
        version: 4,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },]
    },
    {
        system: 1,
        version: 5,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: "Includes NPU plugin"
        },]
    },
    {
        system: 1,
        version: 6,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },]
    },
    {
        system: 2,
        version: 1,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: "Includes NPU plugin"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },
        {
            id: 6,
            name: 'Conda',
            def: ""
        },
        {
            id: 10,
            name: 'Homebrew',
            def: ""
        },
        {
            id: 7,
            name: 'vcpkg',
            def: "Source"
        },
        {
            id: 8,
            name: 'Conan',
            def: ""
        },
        {
            id: 9,
            name: 'npm',
            def: "JavaScript API only"
        },]
    },
    {
        system: 2,
        version: 2,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },]
    },
    {
        system: 2,
        version: 3,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },
        {
            id: 6,
            name: 'Conda',
            def: ""
        },
        {
            id: 8,
            name: 'Conan',
            def: ""
        },]
    },
    {
        system: 2,
        version: 4,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },]
    },
    {
        system: 2,
        version: 5,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },]
    },
    {
        system: 2,
        version: 6,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },]
    },
    {
        system: 3,
        version: 1,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: "Includes NPU plugin"
        },
        {
            id: 11,
            name: 'APT',
            def: ""
        },
        {
            id: 12,
            name: 'YUM',
            def: "C++ API only"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },
        {
            id: 5,
            name: 'Docker',
            def: ""
        },
        {
            id: 6,
            name: 'Conda',
            def: ""
        },
        {
            id: 10,
            name: 'Homebrew',
            def: ""
        },
        {
            id: 7,
            name: 'vcpkg',
            def: "Source"
        },
        {
            id: 8,
            name: 'Conan',
            def: ""
        },
        {
            id: 9,
            name: 'npm',
            def: "JavaScript API only"
        },
        {
            id: 13,
            name: 'ZYPPER',
            def: "C++ API only"
        },
        {
            id: 14,
            name: 'Snap',
            def: "C++ API only"
        },]
    },
    {
        system: 3,
        version: 2,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },]
    },
    {
        system: 3,
        version: 3,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },
        {
            id: 11,
            name: 'APT',
            def: ""
        },
        {
            id: 12,
            name: 'YUM',
            def: "C++ API only"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },
        {
            id: 5,
            name: 'Docker',
            def: ""
        },
        {
            id: 6,
            name: 'Conda',
            def: ""
        },
        {
            id: 8,
            name: 'Conan',
            def: ""
        },]
    },
    {
        system: 3,
        version: 4,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },
        {
            id: 5,
            name: 'Docker',
            def: ""
        },]
    },
    {
        system: 3,
        version: 5,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: "Includes NPU plugin"
        },]
    },
    {
        system: 3,
        version: 6,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: ""
        },]
    },
    {
        system: 1,
        version: 7,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: "Includes NPU plugin"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },
        {
            id: 5,
            name: 'Docker',
            def: ""
        },]
    },
    {
        system: 2,
        version: 7,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: "Includes NPU plugin"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },]
    },
    {
        system: 3,
        version: 7,
        dis: [{
            id: 1,
            name: 'PIP',
            def: "Includes NPU plugin Python API only"
        },
        {
            id: 2,
            name: 'OpenVINO Archives',
            def: "Includes NPU plugin"
        },
        {
            id: 11,
            name: 'APT',
            def: ""
        },
        {
            id: 12,
            name: 'YUM',
            def: "C++ API only"
        },
        {
            id: 3,
            name: 'GitHub',
            def: "Source"
        },
        {
            id: 4,
            name: 'Gitee',
            def: "Source"
        },
        {
            id: 5,
            name: 'Docker',
            def: ""
        },]
    },
]
let main_data = [
    {
        dis: 1,
        install: [
            { title: '# Step 1: Create virtual environment', def: ['python -m venv openvino_env'] },
            { title: '# Step 2: Activate virtual environment', def: ['openvino_env\Scripts\activate'] },
            { title: '# Step 3: Upgrade pip to latest version', def: ['python -m pip install --upgrade pip'] },
            { title: '# Step 4: Download and install the package', def: ['pip install openvino==2024.3.0'] }
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 2,
        install: [
            { title: '# Step 1: # Use the following link:', def: ['Download Archives'], },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 3,
        install: [
            { title: '# Step 1: Use Git to clone the OpenVINO toolkit repository', def: ['git clone -b 2024.3.0 https://github.com/openvinotoolkit/openvino.git'] },
            { title: '# Step 2: Follow the', def: ['instructions to build from source'] },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'OpenVINO Toolkit GitHub Repository' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 4,
        install: [
            { title: '# Step 1: Use Git to clone the OpenVINO toolkit repository', def: ['git clone -b 2024.3.0 https://gitee.com/openvinotoolkit-prc/openvino.git']},
            { title: '# Step 2: Follow the', def: ['instructions to build from source'] },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'OpenVINO Toolkit Gitee Repository' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 5,
        install: [
            { title: '# Use the following link:', def: ['Go to Docker'], },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 6,
        install: [
            { title: '# Step 1: Create the Anaconda environment (Python 3.10 used as an example)', def: ['conda create --name py310 python=3.10'] },
            { title: '# Step 2: Activate the Anaconda environment', def: ['conda activate py310'] },
            { title: '# Step 3: Update the Anaconda environment to the latest version', def: ['conda update --all'] },
            { title: '# Step 4: Download and install the package', def: ['conda install -c conda-forge openvino=2024.3.0'] }
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 7,
        install: [
            { title: '# Download and install the package', def: ['vcpkg install openvino'], },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 8,
        install: [
            { title: '# Step 1: Create a conanfile.txt file for your OpenVINO project and add “openvino” dependency in there', def: ['[requires]', 'openvino/2024.3.0', '[generators]', 'CMakeDeps', 'CMakeToolchain', '[layout]', 'cmake_layout'] },
            { title: '# Step 2: Run the command below to create conan_toolchain.cmake file, which will be used to compile your project with OpenVINO', def: ['conan install conanfile.txt --build=missing'] },
            { title: '# Step 3: Configure and compile your project with OpenVINO', def: ['cmake -DCMAKE_TOOLCHAIN_FILE=<path to conan_toolchain.cmake> -', 'DCMAKE_BUILD_TYPE=Release -S <path to CMakeLists.txt of your project> -B \<build dir>', 'cmake --build <build dir> --parallel'] },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 9,
        install: [
            { title: '# Download and install the package', def: ['npm install openvino-node@2024.3.0'], },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 10,
        install: [
            { title: '# Download and install the package', def: ['brew install openvino'], },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 11,
        install: [
            { title: '# Step 1: Download the GPG-PUB-KEY-INTEL-SW-PRODUCTS.PUB. You can also use the following command', def: ['wget https://apt.repos.intel.com/intel-gpg-keys/GPG-PUB-KEY-INTEL-SW-PRODUCTS.PUB'], },
            { title: '# Step 2: Add this key to the system keyring', def: ['brew install openvino'], },
            { title: '# Step 3: Add the repository via the following command', def: ['# Ubuntu 20 echo "deb https://apt.repos.intel.com/openvino/2024 ubuntu20 main" | sudo tee /etc/apt/sources.list.d/intel-openvino-2024.list', '# Ubuntu 22 echo "deb https://apt.repos.intel.com/openvino/2024 ubuntu22 main" | sudo tee /etc/apt/sources.list.d/intel-openvino-2024.list', '# Ubuntu 24 echo "deb https://apt.repos.intel.com/openvino/2024 ubuntu24 main" | sudo tee /etc/apt/sources.list.d/intel-openvino-2024.list'] },
            { title: '# Step 4: Update the list of packages via the update command', def: ['sudo apt update'], },
            { title: '# Step 5: Verify that the APT repository is properly set up. Run the apt-cache command to see a list of all available OpenVINO packages and components', def: ['apt-cache search openvino'], },
            { title: '# Step 6: Install OpenVINO Runtime', def: ['sudo apt install openvino-2024.3.0'], },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 12,
        install: [
            { title: '# Step 1: Create the YUM repo file in the /tmp directory as a normal user', def: ['tee > /tmp/openvino-2024.repo << EOF', '[OpenVINO]', 'name=Intel(R) Distribution of OpenVINO 2024', 'baseurl=https://yum.repos.intel.com/openvino/2024', 'enabled=1', 'gpgcheck=1', 'repo_gpgcheck=1', 'gpgkey=https://yum.repos.intel.com/intel-gpg-keys/GPG-PUB-KEY-INTEL-SW-', 'PRODUCTS.PUB', 'EOF'], },
            { title: '# Step 2: Move the new openvino-2024.repo file to the YUM configuration directory /etc/yum.repos.d', def: ['sudo mv /tmp/openvino-2024.repo /etc/yum.repos.d'], },
            { title: '# Step 3: Verify that the new repo is properly set up by running the following command', def: ['yum repolist | grep -i openvino'] },
            { title: '# Step 4: Install OpenVINO Runtime', def: ['sudo yum install openvino-2024.3.0'], },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 13,
        install: [
            { title: '# Step 1: Create a ZYPPER repository file with the command below', def: ['https://download.opensuse.org/repositories/science', 'Go to Installation Instructions'], },
            { title: '# Step 2: Refresh repositories', def: ['sudo zypper refresh'], },
            { title: '# Step 3: Install OpenVINO', def: ['sudo zypper install openvino-devel-2024.3.0 openvino-sample-2024.3.0'], },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
    {
        dis: 14,
        install: [
            { title: '# Use the following link:', def: ['Go to Installation Instructions'], },
        ],
        resource: [
            { link: '#', title: 'Installation Instructions' },
            { link: '#', title: 'Previous Releases' },
            { link: '#', title: 'System Requirements' },
            { link: '#', title: 'Get Started Guide' },
            { link: '#', title: 'Troubleshooting Guide' },
        ],
        related: [
            { link: '#', title: 'Ready to run OpenVINO Notebooks', other: '' },
            { link: '#', title: 'Hugging Face + Optimum Intel', other: '' },
            { link: '#', title: 'OpenVINO Tokenizers', other: 'to streamline tokenizer conversion' },
            { link: '#', title: 'NNCF', other: 'for implementing compression algorithms on models' },
            { link: '#', title: 'OVMS', other: 'for serving models optimized for deployment' },
        ]
    },
]

function loaddata() {
    var id = document.getElementById('dynamic_data');
    id.innerHTML = `<div class="bg-light p-3 my-5">
                    <div class="row  d-flex px-2  mb-1" style="border-left: 2px solid grey;">
                        <div class="col-3 d-flex gx-0">Package</div>
                        <div class="col-9 gx-0">
                            <div class="d-flex text-center">
                                <div class=" flex-fill  p-1 pb-0">
                                    <div class="border p-2 b_active_btn b_special_box b_package" id="package1" onclick="btnhanddler('package1',1)">
                                        <p class="mb-0">OpenVINO Base Package</p>
                                        <small class="b_small_text">Full inference with basic GenAI</small>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0 " >
                                    <div class="border p-2 b_special_box b_package" id="package2" onclick="btnhanddler('package2',1)">
                                        <p class="mb-0">OpenVINO with GenAI</p>
                                        <small class="b_small_text">Full inference + complete GenAI package</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row  d-flex px-2  mb-1" style="border-left: 2px solid grey;">
                        <div class="col-3 d-flex gx-0">Version</div>
                        <div class="col-9 gx-0">
                            <div class="d-flex text-center " id="version">
                            </div>
                        </div>
                    </div>
                    <div class="row  d-flex px-2  mb-1 d-none" style="border-left: 2px solid grey;" id="environment">
                        <div class="col-3 d-flex gx-0 " >Environment</div>
                        <div class="col-9 gx-0">
                            <div class="d-flex text-center ">
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2 h-100 d-flex align-items-center justify-content-center b_active_btn b_special_box b_env" id="env1" onclick="btnhanddler('env1',5,4)">
                                        <div>
                                            <p class="mb-0">Development Tools</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2 h-100 d-flex align-items-center justify-content-center b_special_box b_env" id="env2" onclick="btnhanddler('env2',5,7)">
                                        <div>
                                            <p class="mb-0">Runtime</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row  d-flex px-2  mb-1" style="border-left: 2px solid grey;">
                        <div class="col-3 d-flex gx-0">Operating System</div>
                        <div class="col-9 gx-0">
                            <div class="d-flex text-center ">
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2 h-100 d-flex align-items-center justify-content-center b_active_btn b_special_box b_system" id="system1" onclick="btnhanddler('system1',3,1)">
                                        <div>
                                            <p class="mb-0">Windows</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2 h-100 d-flex align-items-center justify-content-center b_special_box b_system" id="system2" onclick="btnhanddler('system2',3,2)">
                                        <div>
                                            <p class="mb-0">macOS</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2 h-100 d-flex align-items-center justify-content-center b_special_box b_system" id="system3" onclick="btnhanddler('system3',3,3)">
                                        <div>
                                            <p class="mb-0">Linux</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row  d-flex px-2  mb-1" style="border-left: 2px solid grey;">
                        <div class="col-3 d-flex gx-0">Distribution</div>
                        <div class="col-9 gx-0">
                            <div class=" d-flex text-center flex-wrap" id="distrubution">
   
                               
                            </div>
                        </div>
                    </div>
                    <div class="row  d-flex px-2  mb-1 d-none" style="border-left: 2px solid grey;" id="frame">
                        <div class="col-3 d-flex gx-0">Framework</div>
                        <div class="col-9 gx-0">
                            <div class=" d-flex text-center flex-wrap d-none" id="framework" onclick=showframe()>
                                <div class=" flex-fill  p-1 pb-0 " >
                                    <div
                                        class="border p-2 px-3 h-100 d-flex align-items-center justify-content-center b_active_btn b_special_box b_system" id="s1" onclick="btnhanddler('s1',6)">
                                        <div>
                                            <p class="mb-0">Caffe</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2 px-3 h-100 d-flex align-items-center justify-content-center  b_special_box b_system" id="s2" onclick="btnhanddler('s2',6)">
                                        <div>
                                            <p class="mb-0">Kaldi</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2 px-3 h-100 d-flex align-items-center justify-content-center  b_special_box b_system" id="s3" onclick="btnhanddler('s3',6)">
                                        <div>
                                            <p class="mb-0">Apache MXNet</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2 px-3 h-100 d-flex align-items-center justify-content-center  b_special_box b_system" id="s4" onclick="btnhanddler('s4',6)">
                                        <div>
                                            <p class="mb-0">Open Neural Network Exchange (ONNX)</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2  px-3 h-100 d-flex align-items-center justify-content-center  b_special_box b_system" id="s5" onclick="btnhanddler('s5',6)">
                                        <div>
                                            <p class="mb-0">PyTorch</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2 px-3 h-100 d-flex align-items-center justify-content-center  b_special_box b_system" id="s6" onclick="btnhanddler('s6',6)">
                                        <div>
                                            <p class="mb-0">TensorFlow 1.x</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-fill  p-1 pb-0">
                                    <div
                                        class="border p-2  px-3 h-100 d-flex align-items-center justify-content-center  b_special_box b_system" id="s7" onclick="btnhanddler('s7',6)">
                                        <div>
                                            <p class="mb-0">TensorFlow 2.x</p>
                                            <p class="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row  d-flex px-2  mb-1" style="border-left: 2px solid #0054ae;">
                        <div class="col-3 d-flex gx-0">Distribution</div>
                        <div class="col-9 gx-0">
                            <div class=" text-center" id="install">
                               
                            </div>
                        </div>
                    </div>
                    <div class="row  d-flex px-2  mb-1" style="border-left: 2px solid #0054ae;">
                        <div class="col-3 d-flex gx-0">Resources</div>
                        <div class="col-9 gx-0">
                            <div class="d-flex flex-wrap" id="resource">
                               
                            </div>
                        </div>
                    </div>
                    <div class="row  d-flex px-2  mb-1" style="border-left: 2px dashed #0054ae;">
                        <div class="col-3 d-flex gx-0">Related Tools</div>
                        <div class="col-9 gx-0" id="related">
                        </div>
                    </div>
                </div>`;
}

function btnhanddler(n, n1, n2) {
    if (n1 == 1) {
        var val = document.getElementsByClassName("b_package")
        for (var j = 0; j < val.length; j++) {
            val[j].classList.remove('b_active_btn');
        }
        document.getElementById(n).classList.add('b_active_btn');
        if (n == 'package1') {
            dis(1, 1);
        }
        else {
            dis(5, 1);
        }
        version(n);
        environment(n);
        all_data(1);
        env = false;
    }
    if (n1 == 2) {
        var val = document.getElementsByClassName("b_version")
        for (var j = 0; j < val.length; j++) {
            val[j].classList.remove('b_active_btn');
        }
        document.getElementById(n).classList.add('b_active_btn');
        if(n2==4){
            var value123= document.getElementById('frame');
            value123.classList.remove('d-none');
        }
        else{
            var value123= document.getElementById('frame');
            value123.classList.add('d-none');
        }
        ver = n2;
        console.log(ver);
        environment(n);
        dis(ver, sys);
        all_data(1);
        env = false;
    }
    if (n1 == 3) {
        var val = document.getElementsByClassName("b_system")
        for (var j = 0; j < val.length; j++) {
            val[j].classList.remove('b_active_btn');
        }
        document.getElementById(n).classList.add('b_active_btn');
        sys = n2;
        dis(ver, sys);
        all_data(1);
    }
    if (n1 == 4) {
        var val = document.getElementsByClassName("b_dis")
        for (var j = 0; j < val.length; j++) {
            val[j].classList.remove('b_active_btn');
        }
        document.getElementById(n).classList.add('b_active_btn');
        d = n2;
        all_data(n2);
    }
    if (n1 == 5) {
        var val = document.getElementsByClassName("b_env");
        for (var j = 0; j < val.length; j++) {
            val[j].classList.remove('b_active_btn');
        }
        document.getElementById(n).classList.add('b_active_btn');
        ver = n2;
        dis(ver, sys);
        if(n2!=4){
            var value123= document.getElementById('frame');
            value123.classList.add('d-none');
        }
        else{
            var value123= document.getElementById('frame');
            value123.classList.remove('d-none');
        }
    }
    if ( n1 == 6) {
        var val= document.getElementById(n);
        val.classList.add('b_active_btn');
    }
}

function version(package) {
    if (package == 'package1') {
        var version_id = 0;
    }
    else {
        var version_id = 1;
    }
    console.log('version', version_data[version_id]);
    let id = document.getElementById('version');
    id.innerHTML = version_data[version_id].map((ele, ind) => {
        return `<div class="flex-fill  p-1 pb-0 " >
            <div class="border p-2 h-100 d-flex align-items-center justify-content-center b_special_box  ${ind == 0 ? 'b_active_btn' : ''} b_version" id="version${ind}" onclick=btnhanddler('version${ind}','2','${ele.id}')>
            <div>
                 <p class="mb-0">${ele.name}</p>
                    <small class="b_small_text">${ele.def}</small>
                </div>
            </div>
        </div>`
    }).join('');
}
function dis(x, y) {
    console.log('version', x);
    console.log('system', y);
    const data = dis_data.filter(ele => ele.system == y && ele.version == x);
    console.log('data', data[0].dis);
    let id = document.getElementById('distrubution');
    id.innerHTML = data[0].dis.map((ele, ind) => {
        return `<div class=" flex-fill  p-1 pb-0">
                <div
        class="border p-2 h-100 d-flex align-items-center justify-content-center ${ind == 0 ? 'b_active_btn' : ''} b_special_box b_dis" id="dis${ind}" onclick=btnhanddler('dis${ind}','4','${ele.id}')>
        <div>
            <p class="mb-0">${ele.name}</p>
            <p class="mb-0"><small class="b_small_text">${ele.def}</small></p>
        </div>
        </div>
        </div>`
    }).join('');
}
function environment(x) {
    if (x == 'version3') {
        var data = document.getElementById('environment');
        data.classList.remove('d-none');
    }
    else {
        var data = document.getElementById('environment');
        data.classList.add('d-none');
    }
}
function all_data(d) {
    console.log('v', d);
    const data = main_data.filter(ele => ele.dis == d);
    console.log('data', data);
    var install = document.getElementById('install');
    install.innerHTML = data[0].install.map((ele, ind) => {
        console.log('def', ele.def.length);
        return `
             <div class=" p-1 pb-0">
<div class="border p-2 h-100" style="background-color: #E9EAEB;">
    <div class="d-flex align-items-center justify-content-between text-start">
        <div>
            <i class="text-success">${ele.title}</i>
            ${ele.def.map((def, ind) => {
            return `<p class="mb-0">${def}</p>`;
        }).join('')}
        </div>
        <div>
            <svg version="1.1" width="24" height="24" viewBox="0 0 205 205"
                xmlns="http://www.w3.org/2000/svg" class="svg-icon">
                <path fill="none" stroke="currentColor" stroke-width="10"
                    d="M 50 145 a 15 15 0 0 1 -15 -15 v -90 a 15 15 0 0 1 15 -15 h 70 a 15 15 0 0 1 15 15 v 5">
                </path>
                <rect x="65" y="60" width="100" height="120" rx="15" fill="none"
                    stroke="currentColor" stroke-width="10"></rect>
            </svg>
        </div>
    </div>
</div>
</div> 
        `
    }).join('');
    var resource = document.getElementById('resource');
    resource.innerHTML = data[0].resource.map((ele, ind) => {
        return `
            <p class="p-2 mb-0">
                <a href="${ele.link}" class="b_primary">
                     ${ele.title}
                </a>
            </p> 
        `
    }).join('');
    var related = document.getElementById('related');
    related.innerHTML = data[0].related.map((ele, ind) => {
        return `
            <p class="p-2 mb-0">
                <a href="${ele.link}" class="b_primary">
                     ${ele.title} 
                </a>
                ${ele.other}
            </p> 
        `
    }).join('');

}
window.onload = function () {
    loaddata();
    version('package1');
    dis(1, 1);
    all_data(1)
}
{/* <div class=" flex-fill  p-1 pb-0">
<div
    class="border p-2 h-100 d-flex align-items-center justify-content-center b_special_box">
    <p class="mb-0">Nightly</p>
</div>
</div>
<div class=" flex-fill  p-1 pb-0 ">
<div
    class="border p-2 h-100 d-flex align-items-center justify-content-center b_special_box">
    <p class="mb-0">2023.3 LTS</p>
</div>
</div>
<div class=" flex-fill  p-1 pb-0">
<div class="border p-2 h-100 b_special_box">
    <p class="mb-0">2022.3.2 LTS</p>
    <small class="b_small_text">Includes NCS2/HDDl support</small>
</div>
</div> */}
{/* <div class=" flex-fill  p-1 pb-0">
<div
    class="border p-2 h-100 d-flex align-items-center justify-content-center b_active_btn b_special_box">
    <div>
        <p class="mb-0">PIP</p>
        <p class="mb-0"><small class="b_small_text">Includes NPU plugin
                Python API only</small></p>
    </div>
</div>
</div> */}
{/* <div class=" p-1 pb-0">
<div class="border p-2 h-100" style="background-color: #E9EAEB;">
    <div class="d-flex align-items-center justify-content-between text-start">
        <div>
            <i class="text-success"># Step 1: Create virtual environment</i>
            <p class="mb-0">python -m venv openvino_env</p>
        </div>
        <div>
            <svg version="1.1" width="24" height="24" viewBox="0 0 205 205"
                xmlns="http://www.w3.org/2000/svg" class="svg-icon">
                <path fill="none" stroke="currentColor" stroke-width="10"
                    d="M 50 145 a 15 15 0 0 1 -15 -15 v -90 a 15 15 0 0 1 15 -15 h 70 a 15 15 0 0 1 15 15 v 5">
                </path>
                <rect x="65" y="60" width="100" height="120" rx="15" fill="none"
                    stroke="currentColor" stroke-width="10"></rect>
            </svg>
        </div>
    </div>
</div>
</div> */}
{/* <p class="p-2 mb-0"><a href="#" class="b_primary">
                                        Installation Instructions</a></p> */}

//     <div class="d-flex flex-wrap">
//     <p class="p-2 mb-0"><a href="#" class="b_primary">
//         Ready to run OpenVINO Notebooks</a></p>
// </div>