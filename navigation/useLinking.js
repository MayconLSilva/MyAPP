import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

//import Login from '../src/LoginScreen';


export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Login: 'login',
          navigationOptions:{
            header:null
          }
          //Dashboard: 'dashboard',
          //Home: 'home',
          //Links: 'links',          
          //Settings: 'settiengs',
        },
      },
    },
  });
}
