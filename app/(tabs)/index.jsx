import { Link } from "expo-router";
import { Calendar, Image, Library, Mic, Upload, WandSparkles } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
export default function Index() {

  const today = new Date();

  const quickActions = [
    {
      icon: WandSparkles,
      title: "Generate Content",
      desc: "Create stories, games & more",
      color: "#8059FF",
      href: '/Generate'
    },
    {
      icon: Upload,
      title: "Upload Textbook",
      desc: "Scan & create worksheets",
      color: "#FF4822",
      href: '/services/Upload'
    },
    {
      icon: Image,
      title: "Visual Aid",
      desc: "Generate diagrams & drawings",
      color: "#00C08D",
      href: '/'
    },
    {
      icon: Mic,
      title: "Reading Assessment",
      desc: "Record & evaluate students",
      color: "#F93088",
      href: '/'
    },
    {
      icon: Library,
      title: "View Library",
      desc: "Access Saved materials",
      color: "#FFBC00",
      href: '/'
    },
  ]

  const options = {
    weekday: 'long', // "Saturday"
    day: 'numeric',  // "1"
    month: 'long'  // "November"
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);
  const role = "Teacher"
  return (
    <ScrollView>
      <View className="min-h-screen bg-white pt-5">
        <View className=" bg-white p-6 space-y-2" >
          <View>

            <Text className="text-xl font-bold text-gray-500">
              {formattedDate}
            </Text>
            <Text className="text-4xl font-bold text-blue-500 mt-4">
              Welcome back!
            </Text>
            <Text className="text-lg font-bold">
              {role}
            </Text>
          </View>

          <View className="my-5 mt-10 rounded-lg shadow-2xl justify-center gap-2.5 shadow-black p-5 min-h-40 bg-blue-600 ">
            <View className="flex flex-row items-center gap-2">
              <Calendar color="#fff" size={30} />
              <Text className="text-primary-foreground text-3xl font-semibold">
                Today's Plan
              </Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text className="text-primary-foreground text-lg">
                Organize your multi-grade lessons
              </Text>
            </View>
          </View>
          <Text className="italic text-xl mt-5 font-bold">Quick Actions</Text>


          <View className="flex-row flex-wrap gap-4 mt-5 mb-[100px]">
            {quickActions.map((action, index) => (
              <Link href={action.href} key={index} className="bg-card shadow-sm rounded-2xl shadow-black w-full min-h-20 border-border border p-5">
                <View className="p-3 w-fit rounded-2xl" style={{
                  backgroundColor: action.color,
                }}>
                  <action.icon size={25} color="#fff"  />
                </View>
                <View className="">
                  <Text className="text-xl ml-5 font-semibold">
                    {action.title}
                  </Text>
                  <Text className="text-sm ml-5">
                    {action.desc}
                  </Text>
                </View>
              </Link>

            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
