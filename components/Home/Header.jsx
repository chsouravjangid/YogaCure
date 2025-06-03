import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserDetailContext } from '../../context/UserDetailContext'
import { Image } from 'expo-image';

export default function Header() {
    const { userDetail } = useContext(UserDetailContext);

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <View>
                <Text style={{
                    fontFamily: 'outfit-Bold',
                    fontSize: 25
                }}>
                    Hello, {userDetail?.name ? userDetail.name : "User"} 
                </Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 15
                }}>Let's Get Started! 🚀🔥</Text>
            </View>
            <Image source={require('./../../assets/images/avatar.webp')} style={{
                height: 50,
                width: 50,
                contentFit: 'contain',
                borderWidth: 1,
                borderRadius: 50
            }} />
        </View>
    )
}
