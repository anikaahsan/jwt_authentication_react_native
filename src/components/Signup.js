import React from 'react'
import { useState,useEffect } from 'react'
import { TextInput,View,Text ,StyleSheet,TouchableOpacity} from 'react-native'
import axios from 'react-native-axios'

const Signup=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    
    const post=async ()=>{
        try{
           const response=await axios.post(url='http://10.0.2.2:8000/token/' , data={username:username,password:password})
           setUsername(response.data['refresh'])
           setPassword(response.data['access'])
           
        }
        catch(error){
            return(<Text>{error}</Text>)
        }
       

    }
    

   return(
    <View style={{alignItems:'center',flex:1,justifyContent:'center'}} >
        <View>
            <Text style={{fontSize:40,fontWeight:'bold',}}>Sign Up</Text>
        </View>
        <View style={{marginTop:20}}>
            <TextInput
                    style={styles.textstyle}
                    value={username}
                    onChangeText={(e)=>setUsername(e)}
                    placeholder='Username'
                    placeholderTextColor={'black'}/>
            <TextInput 
                       style={styles.textstyle}
                       value={password}
                       onChangeText={(e)=>setPassword(e)}
                       placeholder='password'
                       placeholderTextColor={'black'}/>
        </View>
        <TouchableOpacity 
                        style={{ width:300,marginTop:15}}
                        onPress={post}>
                 <Text style={{fontSize:25,backgroundColor:'slateblue',padding:10,borderRadius:10,textAlign:'center',color:'white'}}>Sign Up</Text>
        </TouchableOpacity>
        <Text>{username}</Text>
        <Text>{password}</Text>
    </View>
   )
}
export default Signup

const styles=StyleSheet.create({
   textstyle:{
       borderWidth:1,
       borderRadius:8,
       width:300,
       fontSize:18,
       margin:8,
       padding:10

   }
})