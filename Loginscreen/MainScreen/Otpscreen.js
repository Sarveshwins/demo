import React,{useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { attemptUserRegisterActions } from '../actions/UserRegister'

const Otpscreen = ({attemptUserRegister ,UserRegisterData}) => {

    useEffect(  () => {
        attemptUserRegister({
            email: 'pramod36@softoasistech.com', //getData.username,
            password: 'ssp@2020', 
            First_name: "Pradeep",
            last_name: "Kumar",
            phone :"9431140126",
            country_code :"+91",
            company_name :"Shivam",
            // getData.password,
      
            extraData: async loginRespo => {
              console.log('loginRespo', loginRespo);
            //   AppStorage.saveKey(
            //     key.SAVE_CLIENT_ID,
            //     JSON.stringify(loginRespo?.user_id),
            //   );
            //   navigation.navigate('LoginFF');
            },
          });
    }, [])
    console.log("dataalert",UserRegisterData)
    return (
        <View style={{flex:1,}}>
            <Text
            style={{
              color: '#3d7490',
              fontWeight: 'bold',
              marginTop: 40,
              fontSize: 30,
              textAlign:"center"
            }}>
            Sign Up
          </Text>
            <View
                style={styles.gat}>
                <TextInput
                    style={{
                        flex: 1,
                    }}
                    // onSubmitEditing={submitHandler}
                    //   textContentType="emailAddress"
                    //   clearButtonMode="always"
                    //   defaultValue={data.username}
                    placeholder=" First-name"
                //   onChangeText={val => handleUsenameChange(val)}
                //   keyboardType={'email-address'}
                //   value={data.username === '' ? '' : data.username}
                />
            </View>

            <View
                style={styles.gat}>
                <TextInput
                    style={{
                        flex: 1,
                    }}
                    placeholder=" Last-name" />
            </View>
            <View
                style={styles.gat}>
                <TextInput
                    style={{
                        flex: 1,
                    }}
                    placeholder=" Company-name" />
            </View>
            <View
                style={styles.gat}>
                <TextInput
                    style={{
                        flex: 1,
                    }}
                    placeholder=" Phone" />
            </View>
            <View
                style={styles.gat}>
                <TextInput
                    style={{
                        flex: 1,
                    }}
                    placeholder=" Country-code" />
            </View>
            <View
                style={styles.gat}>
                <TextInput
                    style={{
                        flex: 1,
                    }}
                    placeholder=" Email" />
            </View>
            <View
                style={styles.gat}>
                <TextInput
                    style={{
                        flex: 1,
                    }}
                    placeholder="Password" />
            </View>

            <TouchableOpacity onPress={() => {}} style={styles.flow}>
                <Text style={{ fontSize: 20, color: 'white' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

// export default Otpscreen

const mapStateToProps = function (state) {
    return {
      ...state.UserRegisterReducer,
    };
  };
  export default connect(mapStateToProps, dispatch => ({
    attemptUserRegister: bindActionCreators(attemptUserRegisterActions.start, dispatch),
  }))(Otpscreen);

const styles = StyleSheet.create({

    gat: {
        width: '80%',
        height: 40,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderColor: '#9B9B9B',
        borderRadius: 10,
        marginTop: 20,
        alignSelf: "center"
    },
    flow: {
        backgroundColor: '#3d7490',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '80%',
        fontSize: 40,
        borderRadius: 20,
        height: 40,
        alignSelf:"center"
      },
})
