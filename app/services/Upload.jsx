import Camera from '@/components/Camera'
import UploadInput from '@/components/UploadInput'
import { Link } from 'expo-router'
import { ArrowLeft, CameraIcon, FileText } from 'lucide-react-native'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
// LogBox.ignoreAllLogs(false)



const ToggleBar = ({ isCamera, setIsCamera }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#f3f3f5',
        borderRadius: 30,
        padding: 5,
        marginVertical: 10,
      }}
    >
      {/* Upload Button */}
      <TouchableOpacity
        onPress={() => setIsCamera(false)}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: !isCamera ? '#fff' : 'transparent',
          borderRadius: 25,
          paddingVertical: 10,
        }}
      >
        <FileText size={18} color="#000" />
        <Text style={{ marginLeft: 6, fontWeight: '600', color: '#000' }}>Upload</Text>
      </TouchableOpacity>

      {/* Camera Button */}
      <TouchableOpacity
        onPress={() => setIsCamera(true)}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isCamera ? '#fff' : 'transparent',
          borderRadius: 25,
          paddingVertical: 10,
        }}
      >
        <Camera size={18} color="#000" />
        <Text style={{ marginLeft: 6, fontWeight: '600', color: '#000' }}>Camera</Text>
      </TouchableOpacity>
    </View>
  );
};


const Upload = () => {

  const [isCamera, setIsCamera] = useState(false)

  return (
    <ScrollView className='min-h-screen p-5 bg-[#FF482208]'>
      <View className='min-h-screen '>
        <Link href="/" className='my-5'>
          <View className="bg-muted mt-5 p-2 items-center flex-row border rounded-2xl" >
            <ArrowLeft color="#717182" />
          </View>
        </Link>
        <View className='bg-card p-5'>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#f3f3f5',
              borderRadius: 30,
              padding: 5,
              marginVertical: 10,
            }}
          >
            {/* Upload Button */}
            <TouchableOpacity
              onPress={() => setIsCamera(false)}
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: !isCamera ? '#fff' : 'transparent',
                borderRadius: 25,
                paddingVertical: 10,
              }}
            >
              <FileText size={18} color="#000" />
              <Text style={{ marginLeft: 6, fontWeight: '600', color: '#000' }}>Upload</Text>
            </TouchableOpacity>

            {/* Camera Button */}
            <TouchableOpacity
              onPress={() => setIsCamera(true)}
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isCamera ? '#fff' : 'transparent',
                borderRadius: 25,
                paddingVertical: 10,
              }}
            >
              <CameraIcon size={18} color="#000" />
              <Text style={{ marginLeft: 6, fontWeight: '600', color: '#000' }}>Camera</Text>
            </TouchableOpacity>
          </View>
          <View>
            {!isCamera ? (<Text>Upload a photo of textbook page or blackboard</Text>) : (<Text>Take a photo to scan text</Text>)}
          </View>
          {!isCamera ? (
            <View>
              <UploadInput onFileSelected={(file) => { console.log("Selected") }} />
            </View>
          ) : (
            <View>
              <Camera />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  )
}

export default Upload