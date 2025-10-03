
import {View,Image,Text} from "react-native"
import Illustration from "../../assets/illustration.png"
import {StylesSignIn} from "./styles";

export function SigInin (){
  
  return (
    <View style={StylesSignIn.container}>
      <Image source={Illustration} style={StylesSignIn.image} resizeMode="stretch"/>

      <View  style={StylesSignIn.content}>
        <Text style={StylesSignIn.title}>
         Organize suas {`\n`}
         jogatinas {`\n`}
         facilmente
       </Text>
       <Text style={StylesSignIn.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
       </Text>
      </View>
      </View>

        )
       }