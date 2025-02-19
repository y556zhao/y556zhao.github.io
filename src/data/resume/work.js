/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'University of Toronto',
    position: 'Research Associate',
    url: 'https://web.cs.toronto.edu/',
    startDate: '2021-07-01',
    endDate: '2024-08-01',
    highlights: [
      'Researched in robot vision and manipulation toward self-driving labs supervised by Prof. Alán Aspuru- Guzik, Prof. Florian Shkurti, and Prof. Animesh Garg.',
      'Constructed a general-purpose robotic framework by integrating language planner, perception and robot control that is capable with conducting electrochemical experiments without human intervention.',
      'Developed a novel multiview-based transparent object pose estimation method that achieves the state-of-art performance and enables robot to manipulate transparent vessels for chemistry experiments.',
    ],
  },
  {
    name: 'Huawei Technologies Co., Ltd.',
    position: 'Computer Vision Research Intern',
    url: 'https://www.huawei.com/ca/',
    startDate: '2020-09-01',
    endDate: '2020-12-31',
    highlights: [
      'Led research in self-supervised representation learning and class-agnostic counting, and co-authored the paper about contrastive learning. Mentored by Dr. Hailin Hu and Yuhao Zhou.',
      'Designed and built the new framework based on supervised contrastive methods that pretrained backbones to improve performance on downstream tasks and alleviate relies on labeled data.',
    ],
  },
  {
    name: 'Ford Motor Company',
    position: 'Firmware Developer',
    url: 'https://www.ford.ca/',
    startDate: '2021-05-01',
    endDate: '2021-08-31',
    highlights: [
      'Developed code in C for bootloader and BSP on Qualcomm 5G chips used in the telematic control unit (TCU) of vehicles.',
      'Designed the token verification pipeline for new version of TCU that secures devices from being hacked and flashing images without authorization.',
      'Supported image flashing, partition and bootchain updates on NAND-based devices so that OTA update can perform smoothly.',
    ],
  },
  {
    name: 'Miovision Technologies Inc.',
    position: 'Computer Vision Engineer',
    url: 'https://miovision.com/',
    startDate: '2020-01-01',
    endDate: '2020-04-31',
    highlights: [
      'Built the first fisheye semantic segmentation dataset from scratch with custom annotation pipeline using AWS and Python libraries.',
      'Researched in modern semantic segmentation models, conducted experiments using fisheye images, and delivered reports on different architectures for further research.',
      'Implemented and trained the DeepLabV3+ model in TensorFlow as proof-of-concept to perform scene understanding on traffic intersection.',
    ],
  },
  {
    name: 'Eagle Vision Systems',
    position: 'Deep Learning Engineer',
    url: 'https://mcneilusgarbagetrucks.com/news/mcneilus-acquires-cartseeker-vehicle-automation-technology',
    startDate: '2019-07-01',
    endDate: '2020-01-31',
    highlights: [
      'Designed and built a convolutional neural net using Keras and OpenCV in Python to classify garbage bins by colors and achieved 98.8% accuracy.',
      'Wrote scripts that convert input data to TFRecord format and implemented TensorRT to increase the processing speed by 30%.',
    ],
  },
  {
    name: 'HiRide Share Ltd',
    position: 'Full Stack App Developer',
    url: 'https://hiride.ca/',
    startDate: '2019-07-01',
    endDate: '2020-01-31',
    highlights: [
      'Led a group of two co-op students to build the front-end for an in-app messaging feature that allows real-time messaging between users using React Native, Redux, and Socket.io.',
      'Built a new screen for a navigation feature that renders users’ information, fetches data from third party APIs, shows their real-time location and navigates drivers using Socket.io.',
      'Designed and developed a new RESTful API for messaging and navigation features that can insert, update, and remove data in MongoDB using Node.js, Express.js, and Mongoose.',
    ],
  },
];

export default work;
