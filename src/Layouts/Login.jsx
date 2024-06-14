import React from 'react'
import { s } from 'react-native-wind'
import {
    Text, 
    View
} from 'react-native'
import { Button, CircleImage, GilText, Input } from '../components'
import { logo } from '../assets'
import { theme } from '../constants'
import { Lock, User } from 'react-native-feather'

const Login = () => {
    const [usernameInputFocused, setUsernameInputFocused] = React.useState(false);
    const [passwordInputFocused, setPasswordInputFocused] = React.useState(false);
    function focusMethod(type, boolean) {
        if ( type == 'username' ) {
            setUsernameInputFocused(boolean);
        }
        if ( type == 'password' ) {
            setPasswordInputFocused(boolean);
        }
    }
    return (
        <View style={[s`flex flex-column justify-center items-center min-h-full px-3`]}>
            <View style={s`flex justify-end items-center h-3/6`}>
                <CircleImage source={logo} size={200} />
                <GilText 
                    color={theme.colors.dark} 
                    weight='medium'
                    fontSize={30}
                    className='pt-2 pb-5'
                >
                    Gold Arts
                </GilText>
            </View>
            <View style={s`flex justify-between items-center pt-6 h-3/6`}>
                <View style={s`flex justify-center items-center`}>
                    <Input 
                        className='mb-3'
                        onFocus={() => focusMethod('username', true)} 
                        onBlur={() => focusMethod('username', false)} 
                        focused={usernameInputFocused}
                        placeholder="Username" 
                        icon={<User height={20} width={20} color={theme.colors.Orange400} />}
                    />
                    <Input 
                        className='mb-3'
                        onFocus={() => focusMethod('password', true)} 
                        onBlur={() => focusMethod('password', false)} 
                        focused={passwordInputFocused}
                        placeholder="Password" 
                        icon={<Lock height={20} width={20} color={theme.colors.Orange400} />}
                    />
                    <Button className='rounded-full py-2 min-w-2/5 mt-3 flex items-center'>
                        <GilText 
                            color={theme.colors.white} 
                            weight='semiBold'
                        >
                            Login
                        </GilText>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Login