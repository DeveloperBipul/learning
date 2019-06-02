import {
    StyleSheet
  } from 'react-native';

export default styles = StyleSheet.create({
// or export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    top_bar:{
        backgroundColor:'#f1f2f6',
    },
    bottom_bar:{
        backgroundColor:'#ffffff',
        height:60,
        flexDirection: 'row',
        shadowOffset:{  width: 10,  height: 10,  },
shadowColor: 'black',
shadowOpacity: 1.0,
    },
    btm_barIcon:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      color: '#ffffff'
    },
    iconbar:{
        width:26,
        height:26,
 
    },
    iconbar_text:{
        fontSize:10,
        color:'#B9C1CD',
        marginTop:4,
    },
    Icon:{
        width:26,
        height:26,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#10ac84',
        padding:10
      },
      contentContainer: {
        paddingVertical:1
      }

  })
