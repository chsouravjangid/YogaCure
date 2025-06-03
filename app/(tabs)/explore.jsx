import { Image } from 'expo-image';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constant/Colors';
import { imageAssets } from '../../constant/Option';

const BasicYoga = [
  'Mountain-Pose.jpg', 'Downward-Facing-Dog.jpg', 'Child\'s-Pose.jpg', 'Bridge-Pose.gif',
  'Seated-Forward-Bend.jpg', 'Cobra-Pose.jpg', 'Triangle-Pose.gif', 'Tree-Pose.gif',
  'Warrior-I.gif', 'Cat-Cow-Pose.gif', 'Easy-Pose.jpg', 'Plank-Pose.jpg', 'Happy-Baby-Pose.jpg',
  'Head-to-Knee-Pose.jpg', 'Thunderbolt-Pose.jpg'
];

const AdvancedYoga = [
  'Crow-Pose.gif', 'Firefly-Pose.jpg', 'Eight-Angle-Pose.avif', 'Scale-Pose.jpg',
  'Shoulder-Stand.gif', 'Upward-Facing-Dog.gif', 'King-Pigeon-Pose.webp', 'Supported-Headstand.avif',
  'Reverse-Warrior.avif', 'Revolved-Triangle-Pose.jpg', 'Lord-of-the-Dance-Pose.webp',
  'Side-Plank.png', 'Locust-Pose.avif', 'Wind-Relieving-Pose.jpg'
];


export default function Explore() {


  const renderYogaCard = (item) => (
    
    <TouchableOpacity
      style={{
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        padding: 10,
        marginRight: 15,
        alignItems: "center",
        width: 120
      }}
    >
      <Image 
        source={imageAssets[item]}
        style={{ width: 100, height: 100, borderRadius: 10 }} 
      />
      <Text style={{ marginTop: 5, fontSize: 14, fontWeight: "bold" }}>
      {item.replace(/\.(jpg|jpeg|png|gif|webp|avif)$/, '').replace(/-/g, ' ')}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
    <Image source={require('./../../assets/images/wave1.png')}
      style={{
        width:'100%',
        height:150,
      }}
    />
    <View style={{ flex: 1, backgroundColor: Colors.WHITE, paddingHorizontal:25 }}>

    
      
      {/* Header Section */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'tektur', fontSize: 30, paddingTop: 10 }}>
          Want {'\n'}To  {'\n'}EXPLORE  {'\n'}more!
        </Text>
        <Image 
          source={require('./../../assets/images/yoga-pixel.png')}
          style={{ height: 150, width: 150, marginTop: 20 }}
        />
      </View>

      {/* Basic Yoga Section */}
      <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 20 }}>🔥 Basic Yoga Poses</Text>
      <FlatList
        data={BasicYoga}
        renderItem={({ item }) => renderYogaCard(item)}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Advanced Yoga Section */}
      <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 20 }}>🚀 Advanced Yoga Poses</Text>
      <FlatList
        data={AdvancedYoga}
        renderItem={({ item }) => renderYogaCard(item)}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      
    </View>
    </View>
  );
}
