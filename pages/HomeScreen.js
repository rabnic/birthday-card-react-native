import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Input } from '@rneui/base';

const HomeScreen = () => {
    return (
        <View style={{width:300, paddingTop:50}}>
            {/* <TextInput style={{fontSize: '26', color:'tomato', borderColor:'green', borderWidth:1,borderRadius:5, padding:5, marginBottom: 5}} placeholder='Title'/>
            <TextInput style={{fontSize: '26', color:'tomato', borderColor:'green', borderWidth:1,borderRadius:5, padding:5, marginBottom: 5}} placeholder='Author'/>
            <Button style={{fontSize: '26', color:'tomato', borderColor:'green', borderWidth:1,borderRadius:5, padding:5, marginBottom: 5}} placeholder='Author' /> */}
            <Input
                placeholder='Title' style={{padding: 10, width: 30}}
            />
            <Input
                placeholder='Author' style={{padding: 10, width: 30}}
            />
            <Button title="Add" type='outline' />

        </View>
    )
}

export default HomeScreen