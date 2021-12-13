import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import OtpInputs from "react-native-otp-inputs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { attemptOtpActions } from "../actions/OtpScreen";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { AppStorage } from "../AsynStorage/asyncStorage";

const OtpPassword = ({ attemptOtpScreen, OtpData, attemptUserRegister }) => {
  const [otpPassword, setOtpPassword] = useState("");
  const [ClientId, setClientId] = useState();

  useEffect(async () => {
    const id = await AppStorage.getClientId__();
    // alert(id);
    setClientId(id);
  }, [ClientId]);

  const VarifiedOtp = async () => {
    attemptOtpScreen({
      user_id: ClientId,
      otp: otpPassword,

      extraData: async (loginRespo) => {
        console.log("loginResposss", loginRespo.data.message);
        //   AppStorage.saveKey(
        //     key.SAVE_CLIENT_ID,
        //     JSON.stringify(loginRespo?.user_id),
        //   );
      },
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <OTPInputView
        style={{ width: "80%", height: 200, alignSelf: "center" }}
        pinCount={6}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          setOtpPassword(code);
        }}
      />
      <TouchableOpacity
        onPress={() => VarifiedOtp()}
        style={{
          width: "49%",
          height: 50,
          backgroundColor: "dodgerblue",
          borderRadius: 10,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = function (state) {
  return {
    ...state.OtpScreenReducer,
  };
};
export default connect(mapStateToProps, (dispatch) => ({
  attemptOtpScreen: bindActionCreators(attemptOtpActions.start, dispatch),
}))(OtpPassword);

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 3,
    borderColor: "black",
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
