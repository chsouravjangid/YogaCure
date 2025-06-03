const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const GenerateTopicsAiModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "backpain ::As your are fitness coach\n    - User want to get sugeestions of yoga on his problem according to age if mentioned or any other conditions\n    - Generate 5-7 Yoga title for their problem (Short)\n    - Make sure it is releated to description\n    - Output will be ARRAY of String in JSON FORMAT only\n    - Do not add any plain text in output,"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"yoga_suggestions\": [\n    \"Cobra Pose (Bhujangasana)\",\n    \"Child's Pose (Balasana)\",\n    \"Cat-Cow Pose (Marjaryasana to Bitilasana)\",\n    \"Downward-Facing Dog (Adho Mukha Svanasana) - Modified\",\n    \"Supported Bridge Pose (Setu Bandhasana)\",\n    \"Reclining Twist (Supta Matsyendrasana)\",\n    \"Pigeon Pose (Eka Pada Rajakapotasana) - Gentle variation\"\n  ]\n}\n```\n"},
          ],
        },
      ],
    });


    export const GenerateCourseAiModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "[\"Cobra Pose\", \"Cat-Cow Pose\"]: As you are Yoga instructor\n    - User want to know the steps of each yoga\n    - Create yoga plan with its steps\n    - Make sure to add steps \n    - add a one line or two line discription\n    - List Content in each with steps\n    - write its benefits and cautions\n    - Add CourseBanner Image from the website that have that pic of yoga pose and you have to return the url of that image\n    - The output should only contain the info about Yoga\n    - Output in JSON Format only \n    -  \"courses\": [\n  {\n    \"courseTitle\": '<Cat Pose>',\n    \"discription\": '',\n    \"banner_image\": \"/banner1.png\",\n    \"category\":\"\",\n    \"chapters\": [\n      {\n        steps:'',\n      }\n    ],\n  }"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courses\": [\n    {\n      \"courseTitle\": \"Cobra Pose (Bhujangasana)\",\n      \"description\": \"A gentle backbend that strengthens the spine, opens the chest, and stretches the shoulders and abdomen. It improves posture and can relieve stress and fatigue.\",\n      \"banner_image\": \"https://www.yogajournal.com/wp-content/uploads/sites/2/2023/02/Cobra-pose.jpg?resize=768,432\",\n      \"category\": \"Backbend, Chest Opener\",\n      \"chapters\": [\n        {\n          \"title\": \"Steps\",\n          \"steps\": [\n            \"1. Lie prone on the floor with your legs extended and the tops of your feet flat on the ground.\",\n            \"2. Place your hands under your shoulders, close to your ribs, with your fingers pointing forward.\",\n            \"3. Engage your glutes and press your pubic bone down into the floor.\",\n            \"4. Inhale deeply, and gently lift your head and chest off the floor, using your back muscles.\",\n            \"5. Keep your elbows slightly bent and close to your body. Avoid locking your elbows.\",\n            \"6. Broaden your chest and draw your shoulder blades down your back.\",\n            \"7. Keep your gaze forward or slightly upward, but avoid straining your neck.\",\n            \"8. Hold the pose for 15-30 seconds, breathing deeply.\",\n            \"9. Exhale and slowly lower your body back to the floor.\",\n            \"10. Repeat 2-3 times, resting briefly between each repetition.\"\n          ]\n        },\n        {\n          \"title\": \"Benefits\",\n          \"benefits\": [\n            \"Strengthens the spine\",\n            \"Stretches the chest, shoulders, and abdomen\",\n            \"Stimulates abdominal organs\",\n            \"Helps relieve stress and fatigue\",\n            \"Opens the heart and lungs\",\n            \"Soothes sciatica\",\n            \"Therapeutic for asthma\"\n          ]\n        },\n        {\n          \"title\": \"Cautions\",\n          \"cautions\": [\n            \"Avoid this pose if you have back injuries, carpal tunnel syndrome, or a recent abdominal surgery.\",\n            \"Pregnant women should avoid this pose.\",\n            \"If you have neck problems, keep your gaze down to avoid straining your neck.\",\n            \"Listen to your body and do not force the pose. If you feel any pain, stop immediately.\",\n            \"Those with headaches might want to approach this pose carefully, as it can sometimes aggravate headaches.\"\n          ]\n        }\n      ]\n    },\n    {\n      \"courseTitle\": \"Cat-Cow Pose (Marjaryasana to Bitilasana)\",\n      \"description\": \"A gentle, flowing sequence that warms the body and brings flexibility to the spine. It improves posture, balance, and coordination while relieving stress and calming the mind.\",\n      \"banner_image\": \"https://www.yogajournal.com/wp-content/uploads/sites/2/2023/02/Cat-Cow-pose.jpg?resize=768,432\",\n      \"category\": \"Spinal Flexibility, Warm-up\",\n      \"chapters\": [\n        {\n          \"title\": \"Steps\",\n          \"steps\": [\n            \"1. Start on your hands and knees in a tabletop position. Make sure your wrists are directly under your shoulders and your knees are directly under your hips. Keep your back flat and your head in a neutral position.\",\n            \"2. **Cat Pose (Marjaryasana):** As you inhale, round your spine toward the ceiling, tuck your tailbone, and draw your pubic bone forward. Release your head toward the floor, but don't force your chin to your chest.\",\n            \"3. **Cow Pose (Bitilasana):** As you exhale, arch your back, draw your shoulder blades together, and lift your chest and tailbone toward the ceiling. Lift your head and gaze forward.\",\n            \"4. Continue flowing between Cat and Cow pose for 5-10 breaths, coordinating your movement with your breath.\",\n            \"5. Inhale into Cow, exhale into Cat.\",\n            \"6. After your final repetition, return to a neutral tabletop position.\"\n          ]\n        },\n        {\n          \"title\": \"Benefits\",\n          \"benefits\": [\n            \"Increases coordination\",\n            \"Improves posture and balance\",\n            \"Massages and stimulates abdominal organs\",\n            \"Creates emotional balance\",\n            \"Relieves stress and calms the mind\"\n          ]\n        },\n        {\n          \"title\": \"Cautions\",\n          \"cautions\": [\n            \"Avoid this pose if you have neck injuries or knee injuries, consult doctor before performing it.\",\n            \"Listen to your body and do not force the pose. If you feel any pain, stop immediately.\",\n            \"If you have a wrist injury, modify the pose by placing a rolled towel or blanket under your wrists for support.\"\n          ]\n        }\n      ]\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 