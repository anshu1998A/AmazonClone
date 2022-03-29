import { StyleSheet } from 'react-native';
// import react from 'react';
const Styles = StyleSheet.create({

  linearGradient: {
    height:'100%',
    width: '100%',
  },
  searchBar: {
    // backgroundColor:'blue',
    marginLeft: 15,
    marginTop: 10,
    marginRight: 18,
    height: 30,
    width: 30,
  },
  searchView: {
    marginTop: 20,
    marginLeft: 20,
    marginRight:70,
    justifyContent: 'space-around',
    backgroundColor: '#232F3E',
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  searchText: {
    marginHorizontal: 10,
    width: "40%",
    color: 'white',
  },
  marginStyle: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  textStyle: {
    fontWeight: '800',
    marginBottom: 20,
    color: 'white',
    fontSize: 18,
  },
  gridView: {
    position: 'relative',
    flex: 0.5,
    height: 50,
    backgroundColor: '#232F3E',
    marginRight: 20,
    color: 'white',
    width: '40%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textGerne: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  listStyle: {
    flexDirection: 'column',
    color: 'grey'
  },
  listMarginStyle: {
    marginTop: 20,
  },
  style1: {
    marginTop: 10,
    fontSize: 15,
    color: '#00BFFF'
  },
  arrowStyle: {
    height: 20,
    width: 20,
  },
  MenuContainerStyle: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  MenuText: {
    color: 'white',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center'
  },
  menuStyle: {
    height: 20,
    width: 20,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
  },
  listViewStyle: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  HeaderText:{
    fontWeight:'800',
    color:'white',
    fontSize:20,
  },
  HeaderView:{
    justifyContent:'center',
    alignItems:'center'
  },
  settingDataTittle:{
    color:'white',
    fontWeight:'600',
    fontSize:20
  },
  settingDataDetails:{
    color:'grey',
    fontSize:15
  },
  tittleView:{
    paddingHorizontal:20,
    paddingTop:10
    
  },
  detailsView:{
    paddingLeft:20,
    paddingBottom:10
  },
});

export default Styles;