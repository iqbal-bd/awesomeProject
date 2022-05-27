import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable
 } from 'react-native';

 export const Button = ({title}) => {
   return (
   <Pressable
   style ={{backgroundColor:"blue", height: 60,alignItems: "center", padding: 10,borderRadius: 20}}
    onPress={() =>{
    alert("Pressed")
  }}>
    <Text style={{color:"white", fontSize: 24}}>{title}</Text>
  </Pressable>
  )}

export default function App() {
  return (
    <SafeAreaView style={{marginTop:40, flex: 1}}>
      <ScrollView>
      <View style ={{height: 60, backgroundColor: 'blue'}}>
        <Text>This is a text</Text>
      </View>
      <View style ={{marginTop:100,height: 60, backgroundColor: 'red'}}>
        <Text style={{
          fontSize: 24,
          color: 'white',
          fontWeight: 'bold',
          padding: 10
        }}>
          This is a text
        </Text>
      </View>

        <View style={{marginTop:100}}>
          <Image style ={{
            height: 60,
            width: 80,
            marginTop: 20,
            marginLeft: 40
          }} 
          source={require("./assets/favicon.png")}
          resizeMode ="contain"
          />
        </View>
        <View style={{marginTop:100}}>
          <Image style ={{
            height: 60,
            width: 80,
            marginTop: 20,
            marginLeft: 40
          }} 
          source={{uri:"https://media.istockphoto.com/photos/imge-taken-in-tileston-street-near-the-freedom-trail-in-downtown-picture-id1328666729?s=612x612"}}
          resizeMode ="contain"
          />
        </View>
        
          <View>
            <Text>
            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </Text>
          </View>
      </ScrollView>
      <Button title="Press"/>
    
      <View style ={{flex: 1, justifyContent:"center", alignItems: "center"}}> 
      <View style = {styles.view1}/>
      <View style = {styles.view2}/>
      <View style = {styles.view3}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  view1 : {
    height: 100,
    width: 100,
    backgroundColor: 'orange'
  },
  view2 : {
    height: 100,
    width: 100,
    backgroundColor: 'blue'
  },
  view3 : {
    height: 100,
    width: 100,
    backgroundColor: 'green'
  }
});

