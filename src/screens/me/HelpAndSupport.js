import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import React, { useState, useRef } from 'react';
import data from '../../components/accordion/data';
import Accordion from '../../components/accordion/Accordion';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';


const HelpAndSupport = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState('');
    const handleClick = () => {
        if (inputValue.trim() === '') {
            // Hiển thị cảnh báo khi người dùng không nhập gì
            alert('Please enter something before submitting.');
        } else {
            alert('Your question has been recorded');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ROUTES.SETTINGS_SCREEN)
                    }}>
                    <View style={{
                        width: 100,
                        alignItems: 'flex-start',
                        //    backgroundColor: 'red',
                        marginLeft: -80,
                    }}><MaterialCommunityIcon name='chevron-left' size={30}></MaterialCommunityIcon></View>
                </TouchableOpacity>
                <View><Text style={[styles.headerText,]}>Help And Support</Text></View>

            </View>
            <View style={styles.boxUnit}>
                <Text style={[styles.headerText, { fontWeight: 'bold' }]}>FAQs</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((value, index) => {
                    return <Accordion value={value} key={index} type={value.type} />;
                })}

                <View style={styles.boxUnit}>
                    <Text style={[styles.headerText, { fontWeight: 'bold' }]}>Send Your Question</Text>
                </View>
                <View style={styles.boxTextInput}>
                    <TextInput
                        placeholder="You are have a question?"
                        value={inputValue}
                        style={{ paddingLeft: 15, }}
                        onChangeText={(text) => setInputValue(text)}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={handleClick}>
                    <View style={styles.next}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Send</Text>
                        <Image source={require("../../assets/icons/paperlane.png")}
                            style={{
                                height: 40,
                                width: 40,
                            }}></Image>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HelpAndSupport;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#9d9d9d',
        backgroundColor: 'white'
    },
    headerText: {
        color: 'black',
        fontSize: 24,
    },
    boxUnit: {
        height: 45,
        //    backgroundColor: 'red',
        marginTop: 10,
        marginLeft: 10,
    },
    boxTextInput: {
        height: 55,
        borderWidth: 1,
        borderColor: '#81acff',
        marginHorizontal: 10,
        borderRadius: 15,
    },
    next: {
        backgroundColor: '#81ACFF',
        borderRadius: 35,
        height: 55,
        width: 300,
        marginTop: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
});