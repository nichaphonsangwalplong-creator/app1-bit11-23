//นำเข้า วิว ข้อความ จาก ชื่อไลบรารี่
import {View, Text, StyleSheet, Image} from 'react-native';

//ส่งออก เริ่มต้น ฟังก์ชัน ชื่อฟังก์ชัน
export default function App(){
  return(
    <View style={homeStyle.container}>
     <Text style={homeStyle.title}>Nichaphon</Text>

     {/* ใส่ภาพจากไฟล์ */}
     <Image source={require('@/assets/pig.jpg')} 
     style={{
      width: 300, // กว้าง
      height: 300, // สูง
      borderRadius: 150, // มุมโค้ง
      borderWidth: 8, // ขอบหนา
      borderColor: "lightblue", // สีขอบ
     }}
     />
     {/* ใส่รูปจากเว็บ */}
     <View>
      <Text></Text>
      <Text></Text>
     </View>

    </View>
  )
}

//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "pink", // สีพื้นหลัง
    flex:1, // ขยายเต็มพื้นที่
    alignItems: "center"
  },
  title:{
    color: "white", // สีอักษร
    fontSize: 32, // ขนาดอักษร
    fontWeight: 700, // ความหนาอักษร 100-900
    fontStyle: "italic", // เอียง
    textAlign: "center", // 
  }
})