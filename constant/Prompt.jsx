import dedent from "dedent";

export default {
  IDEA: dedent`:As your are fitness coach
    - User want to get sugeestions of yoga on his problem according to age if mentioned or any other conditions
    - Generate 5-7 Yoga title for their problem (Short without their hindi name) and try to select within this list [
    "Mountain Pose",
    "Tree Pose",
    "Warrior I",
    "Warrior II",
    "Triangle Pose",
    "Downward-Facing Dog",
    "Upward-Facing Dog",
    "Cobra Pose",
    "Child's Pose",
    "Cat-Cow Pose",
    "Bridge Pose",
    "Corpse Pose",
    "Chair Pose",
    "Plank Pose",
    "Side Plank",
    "Revolved Triangle Pose",
    "Wide-Legged Forward Bend",
    "Head-to-Knee Pose",
    "Seated Forward Bend",
    "Reclining Twist",
    "Happy Baby Pose",
    "Garland Pose",
    "Camel Pose",
    "Bow Pose",
    "Pigeon Pose",
    "Legs-up-the-Wall Pose",
    "Standing Forward Bend",
    "Halfway Lift",
    "Lord of the Dance Pose",
    "Boat Pose",
    "Locust Pose",
    "Thunderbolt Pose",
    "Easy Pose",
    "Lotus Pose",
    "Cow Face Pose",
    "Shoulder Stand",
    "Fish Pose",
    "Wind-Relieving Pose",
    "Reverse Warrior",
    "Half Moon Pose",
    "Eagle Pose",
    "Supported Headstand",
    "Crow Pose",
    "Gate Pose",
    "Eight-Angle Pose",
    "Scale Pose",
    "King Pigeon Pose",
    "Revolved Chair Pose",
    "Firefly Pose",
  ]
    - Make sure it is releated to description
    - Output will be ARRAY of String in JSON FORMAT only
    - Do not add any plain text in output,
    `,
  // - Chapter Explain in HTML Form, (Code example if required), add line break if required
  COURSE: dedent`: As you are Yoga instructor
    - User want to know the steps of each yoga
    - A dd cousre title
    - Create yoga plan with its steps
    - Make sure to add steps 
    - add a one line or two line discription
    - List Content in each with steps
    - write its benefits and cautions
    - Add CourseBanner Image from ([
  "Boat-Pose.avif",
  "Bow-Pose.avif",
  "Bridge-Pose.gif",
  "Camel-Pose.jpg",
  "Cat-Cow-Pose.gif",
  "Child's-Pose.jpg",
  "Cobra-Pose.jpg",
  "Corpse-Pose.jpg",
  "Cow-Face-Pose.webp",
  "Crow-Pose.gif",
  "Downward-Facing-Dog.jpg",
  "Eagle-Pose.avif",
  "Easy-Pose.jpg",
  "Eight-Angle-Pose.avif",
  "Firefly-Pose.jpg",
  "Fish-Pose.png",
  "Garland-Pose.gif",
  "Gate-Pose.avif",
  "Half-Moon-Pose.avif",
  "Halfway-Lift.webp",
  "Happy-Baby-Pose.jpg",
  "Head-to-Knee-Pose.jpg",
  "King-Pigeon-Pose.webp",
  "Legs-up-the-Wall-Pose.avif",
  "Locust-Pose.avif",
  "Lord-of-the-Dance-Pose.webp",
  "Lotus-Pose.jpg",
  "Mountain-Pose.jpg",
  "Pigeon-Pose.gif",
  "Plank-Pose.jpg",
  "Reclining-Twist.gif",
  "Reverse-Warrior.avif",
  "Revolved-Chair-Pose.webp",
  "Revolved-Triangle-Pose.jpg",
  "Scale-Pose.jpg",
  "Seated-Forward-Bend.jpg",
  "Shoulder-Stand.gif",
  "Side-Plank.png",
  "Standing-Forward-Bend.gif",
  "Supported-Headstand.avif",
  "Thunderbolt-Pose.jpg",
  "Tree-Pose.gif",
  "Triangle-Pose.gif",
  "Upward-Facing-Dog.gif",
  "Warrior-I.gif",
  "Warrior-II.gif",
  "Wide-Legged-Forward-Bend.jpg",
  "Wind-Relieving-Pose.jpg"
]), select the image from this list according to the yoga or if doesnt match the exact select related and add 
    - The output should only contain the info about Yoga
    - Output in JSON Format only 
    -  "courses": [
  {
    "courseTitle": 'Cat Pose',
    "discription": '',
    "banner_image": "Cat-Cow-Pose.gif",
    "category":"",
    "chapters": [
      {
        steps:'',
      }
    ],
  }`
}



