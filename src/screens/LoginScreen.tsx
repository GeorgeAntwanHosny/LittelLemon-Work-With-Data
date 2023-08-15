import React from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import {validateEmail} from '../utils';
import {Icon, Input} from 'react-native-elements';
function LoginScreen(): JSX.Element {
  const [email, setEmail] = React.useState<String>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [validFristName, setValidFristName] = React.useState<Boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [validEmail, setValidEmail] = React.useState<Boolean>(false);
  const [fristName, setFristName] = React.useState<String>('');
  const onChangeEmail = e => {
    setEmail(e);
    if (validateEmail(e)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const onChangeFristName = (e: string | React.SetStateAction<String>) => {
    setFristName(e);
    if (e !== '') {
      setValidFristName(true);
    } else {
      setValidFristName(false);
    }
  };
  const onPressSubmit = () => {
    if (validEmail && validFristName) {
      Alert.alert('sucess', 'Thanks for Subscribing stay tuned!', [
        {
          text: 'OK',
          onPress: async () => {
            // await storeData('userData', {
            //   fristName,
            //   email,
            // });
            // navigation.navigate('Profile');
          },
        },
      ]);
    } else if (!validEmail) {
      Alert.alert('error', "Plase, check your Email isn't correct", [
        {text: 'OK'},
      ]);
    } else {
      Alert.alert('error', "Plase, check your Frist Name isn't correct", [
        {text: 'OK'},
      ]);
    }
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.LogoContainer}>
          <Image
            style={styles.logoImage}
            resizeMode="contain"
            source={require('../assets/logo.png')}
          />
        </View>
        <Text style={styles.headerText}>
          Reach More & Achieve Target Easier
        </Text>
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.textForm}>Frist Name</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType="default"
              value={fristName}
              onChangeText={onChangeFristName}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.textForm}>Email</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType="email-address"
              value={email}
              onChangeText={onChangeEmail}
            />
          </View>
          import Icon from 'react-native-vector-icons/FontAwesome'; import from
          'react-native-elements';
          <Input placeholder="BASIC INPUT" />
          <Input
            placeholder="INPUT WITH ICON"
            leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
          />
          <Input
            placeholder="INPUT WITH CUSTOM ICON"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
          <Input
            placeholder="Comment"
            leftIcon={{type: 'font-awesome', name: 'comment'}}
            //style={styles}
            // onChangeText={value => this.setState({comment: value})}
          />
          <Input
            placeholder="INPUT WITH ERROR MESSAGE"
            errorStyle={{color: 'red'}}
            errorMessage="ENTER A VALID ERROR HERE"
          />
          <Input placeholder="Password" secureTextEntry={true} />
        </View>
        <View>
          <Pressable style={styles.submitLoginButton} onPress={onPressSubmit}>
            <Text style={styles.textButton}>Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  LogoContainer: {
    paddingTop: 5,
  },
  headerWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
  },
  logoImage: {
    height: 180,
    width: 250,
    alignSelf: 'center',
  },
  formContainer: {
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  textForm: {
    fontSize: 20,
    paddingVertical: 15,
    alignSelf: 'flex-start',
    color: 'black',
  },
  formGroup: {
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
  },

  submitLoginButton: {
    paddingTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'gold',
    marginVertical: 15,
    width: 200,
    textAlign: 'center',
    padding: 15,
  },
  textButton: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'gold',
    padding: 10,
    borderRadius: 10,
    width: 300,
    fontSize: 18,
  },
});
export default LoginScreen;
