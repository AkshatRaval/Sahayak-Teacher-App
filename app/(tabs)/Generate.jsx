import { Link } from 'expo-router';
import { ArrowDown, ArrowLeft, Book, Gamepad, Lightbulb, Sparkles, WandSparkles } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  ScrollView, Text,
  View
} from 'react-native';

const Generate = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const OPTIONS = [
    { key: "story", label: "Story", Icon: Book },
    { key: "explanation", label: "Explanation", Icon: Lightbulb },
    { key: "game", label: "Game", Icon: Gamepad },
    { key: "poem", label: "Poem", Icon: Sparkles },
  ];

  return (
    <ScrollView className='min-h-screen p-5 bg-[#FBF8FB]'>
      <View className='min-h-screen'>
        <Link href="/" className='my-5'>
          <View className="bg-muted mt-5 p-2 items-center flex-row border rounded-2xl">
            <ArrowLeft color="#717182" />
          </View>
        </Link>
        <View className='flex-row items-center mb-8 gap-2'>
          <Text className='p-4 rounded-2xl bg-[#735CFF]'>
            <WandSparkles color="#fff" />
          </Text>
          <Text className='text-2xl font-semibold'>Generate Content</Text>
        </View>
        <View>

        </View>
      </View>
    </ScrollView>
  )
}

export default Generate