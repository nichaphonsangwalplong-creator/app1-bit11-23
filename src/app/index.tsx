//นำเข้า วิว ข้อความ จาก ชื่อไลบรารี่
import {View, Text, StyleSheet, Image} from 'react-native';

//ส่งออก เริ่มต้น ฟังก์ชัน ชื่อฟังก์ชัน
export default function App(){
  return(
    <View style={homeStyle.container}>

{/* ใส่ภาพจากไฟล์ */}
     <Image source={require('@/assets/yok.png')} 
     style={{
      width: 200, // กว้าง
      height: 200, // สูง
      borderRadius: 100, // มุมโค้ง
      borderWidth: 8, // ขอบหนา
      borderColor: "lightblue", // สีขอบ
     }}
     />

     <Text style={homeStyle.title}>Nichaphon Sangwalplong</Text>
     <Text style={homeStyle.title2}>Rak fan</Text>

     <View style={homeStyle.card}>
      <Text>ห้อง BIT.1/1 เลขที่ 23</Text>
      <Text>Email : nichaphon.sangwalplong@e-tech.ac.th</Text>
      <Text>Phone : 09x-xxx-xxxx</Text>
     </View>

     <View style={homeStyle.card2}>
      <Text style={homeStyle.title3}>ภาพกิจกรรม</Text>
     </View>

     <View style={homeStyle.png}>
      <Image source={require('@/assets/pig.jpg')}
      style={{
      width: 120, // กว้าง
      height: 120, // สูง
      borderRadius: 20,
      }}
      />
      <Image source={require('@/assets/images.jpeg')}
      style={{
      width: 120, // กว้าง
      height: 120, // สูง
      borderRadius: 20,
      }}
      />
      <Image source={require('@/assets/m.png')}
      style={{
      width: 120, // กว้าง
      height: 120, // สูง
      borderRadius: 20,
      }}
      />
     </View>
     
     </View>

  )
}

const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "white", 
    flex:1, 
    alignItems: "center"
  },
  title:{
    color: "black", // สีอักษร
    fontSize: 28, // ขนาดอักษร
    fontWeight: 700, // ความหนาอักษร 100-900
    fontStyle: "italic", // เอียง
    textAlign: "center", // 
  },
  title2:{
    color: "gray", // สีอักษร
    fontSize: 18, // ขนาดอักษร
    fontWeight: 500, // ความหนาอักษร 100-900
    textAlign: "center", // 
  },
  card:{
    backgroundColor: "lightgray",
    width: 330,
    height: 115,
    borderRadius: 10,
    textAlign: "center",
    margin:15,
    padding:10,
    gap:13,
  
  },
  card2:{
    backgroundColor: "white",
    width: 330,
    height: 50,
    borderRadius: 10,
    textAlign: "center",
    margin:15,
    padding:10,
    gap:10,
  },
  title3:{
    fontSize: 20,
    fontWeight: 600,
  },
  png:{
    flexDirection:"row",
    gap:20,
  }
})