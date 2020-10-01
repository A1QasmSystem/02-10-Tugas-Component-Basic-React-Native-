// memasukan component atau menghubungkan ke React
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Button,
  Switch,
  ActivityIndicator,
  Picker,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#28df99',
          flex: 1,
        }}>
        <Image
          style={styles.tinyLogo}
          source={require('./src/components/assets/fb.jpg')}
        />
        <TextInput
          placeholder="Email"
          style={styles.TextInput2}
          maxLength={40}
        />
        <TextInput
          placeholder="Password"
          style={styles.TextInput2}
          maxLength={40}
        />
        <Button title="Log in" onPress={() => alert('Right button pressed')} />
        <Switch />
        <ActivityIndicator size="small" color="#0000ff" />
        <Text style={styles.title}> Sign Up for Facebook</Text>
        <Picker
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => alert(itemValue)}>
          <Picker.Item label="React" value="Assalamu'alaikum" />
          <Picker.Item label="Native" value="Haii" />
        </Picker>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>
            {' '}
            Tampilan baru di Facebook desktop berganti cukup signifikan. Dimana
            hampir semua menunya berubah dan lebih menyerupai tampilan di
            ponsel. Namun navigasi yang disediakan masih sama seperti
            sebelumnya, dimana tindakan dalam membuka pemberitahuan, pesan, dan
            permintaan teman, masih berada disisi kanan atas.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 85,
    alignSelf: 'center',
    margin: 50,
    tintColor: 'white',
  },
  TextInput2: {
    margin: 10,
    marginHorizontal: 30,
    marginTop: 1,
    backgroundColor: '#f1f3f8',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 5,
    opacity: 0.5,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
  },
  title: {
    // shadowRadius: 5,
    margin: 20,
    marginTop: 30,
    // paddingVertical: 8,
    // borderWidth: 7,
    // borderColor: '#20232a',
    // borderRadius: 20,
    // backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  scrollView: {
    backgroundColor: '#145374',
  },
});

export default App;
// =====================================
// =====================================
// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Header from './src/components/Header.js';

// const App = () => {
//   return (
//     <View>
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

// // =============================================================
// // =============================================================

// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow strict-local
// //  */

// // import React from 'react';
// // import {
// //   SafeAreaView,
// //   StyleSheet,
// //   ScrollView,
// //   View,
// //   Text,
// //   StatusBar,
// // } from 'react-native';

// // import {
// //   Header,
// //   LearnMoreLinks,
// //   Colors,
// //   DebugInstructions,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // const App: () => React$Node = () => {
// //   return (
// //     <>
// //       <StatusBar barStyle="dark-content" />
// //       <SafeAreaView>
// //         <ScrollView
// //           contentInsetAdjustmentBehavior="automatic"
// //           style={styles.scrollView}>
// //           <Header />
// //           {global.HermesInternal == null ? null : (
// //             <View style={styles.engine}>
// //               <Text style={styles.footer}>Engine: Hermes</Text>
// //             </View>
// //           )}
// //           <View style={styles.body}>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Yahya</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Edit <Text style={styles.highlight}>App.js</Text> to change this
// //                 screen and then come back to see your edits.
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>See Your Changes</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <ReloadInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Pondok_Programmer</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <DebugInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Learn More</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Read the docs to discover what to do next:
// //               </Text>
// //             </View>
// //             <LearnMoreLinks />
// //           </View>
// //         </ScrollView>
// //       </SafeAreaView>
// //     </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   scrollView: {
// //     backgroundColor: Colors.lighter,
// //   },
// //   engine: {
// //     position: 'absolute',
// //     right: 0,
// //   },
// //   body: {
// //     backgroundColor: Colors.white,
// //   },
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //     color: Colors.black,
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //     color: Colors.dark,
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// //   footer: {
// //     color: Colors.dark,
// //     fontSize: 12,
// //     fontWeight: '600',
// //     padding: 4,
// //     paddingRight: 12,
// //     textAlign: 'right',
// //   },
// // });

// // export default App;
