import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import OtpInputs from "react-native-otp-inputs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { attemptOtpActions } from "../actions/OtpScreen";

const OtpPassword = ({ attemptOtpScreen, OtpData, attemptUserRegister }) => {
  const [otpPassword, setOtpPassword] = useState("");

  const VarifiedOtp = () => {
    attemptOtpScreen({
      user_id: "1234",
      otp: otpPassword,

      extraData: async (loginRespo) => {
        console.log("loginResposss", loginRespo);
        //   AppStorage.saveKey(
        //     key.SAVE_CLIENT_ID,
        //     JSON.stringify(loginRespo?.user_id),
        //   );
      },
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <OtpInputs
        handleChange={({ code }) => setOtpPassword(code)}
        numberOfInputs={6}
        // style={{ width: "80%" }}
        // style={{ borderWidth: 1, backgroundColor: "red" }}
      />

      <TouchableOpacity onPress={() => VarifiedOtp()}>
        <Text>Register</Text>
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

const styles = StyleSheet.create({});
