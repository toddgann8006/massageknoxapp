import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class Services extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Services
                    </Text>
                </View>
                <View style={styles.view}>
                    <View style={styles.textContainer}>
                        <Text style={styles.smallheader}>
                            Customized Massage:
                        </Text>
                        <Text style={styles.body}>
                            Whether you enjoy a relaxing massage with light to medium pressure, a more vigorous deep tissue treatment, or something in between, we can design a session that is right for you, tailoring pressure, focus and techniques to meet your needs!
                        </Text>
                        <Text style={styles.body}>
                            Hot towels can be included in your service upon request!
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.smallheader}>
                            Pregnancy Massage:
                        </Text>
                        <Text style={styles.body}>
                            Get comfy and let your tension melt away with this relaxing escape for expectant mothers! If you are currently pregnant, please book this massage. We will still be able to customize as needed.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0,
        marginBottom: 30,
        paddingHorizontal: '1%'
    },
    header: {
        fontSize: 40,
        color: 'yellow',
        marginTop: 30
    },
    headerContainer: {
        backgroundColor: 'black',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 10
    },
    textContainer: {
        alignItems: "flex-start",
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: '5%',
        marginVertical: 20,
        paddingVertical: '1%',
        marginHorizontal: '5%'
    },
    smallheader: {
        fontSize: 25,
        color: 'yellow',
        marginTop: '4%'
    },
    body: {
        color: 'yellow',
        marginTop: 20,
        fontSize: 18,
        lineHeight: 30
    },
    price: {
        color: 'white',
        marginTop: 20,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'bold'
    }
})

export default Services;