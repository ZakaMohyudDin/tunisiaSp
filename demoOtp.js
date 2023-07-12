import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const OTPScreen = () => {
  const [otp, setOTP] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleOTPChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    // Move focus to the next input field
    if (text !== '' && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerifyOTP = () => {
    // Here, you can implement the logic to verify the OTP
    // For example, you can join the otp array values and send it to a server for verification

    const joinedOTP = otp.join('');
    console.log('Verifying OTP:', joinedOTP);
    // Perform further actions based on the verification result
  };

  const handleResendOTP = () => {
    // Logic to resend OTP
    console.log('Resending OTP...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleOTPChange(text, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
            onSubmitEditing={() => {
              // Move focus to the next input field when the user presses enter
              if (index < 4) {
                inputRefs.current[index + 1].focus();
              }
            }}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResendOTP}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    width: 48,
    textAlign: 'center',
    marginRight: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default OTPScreen;
