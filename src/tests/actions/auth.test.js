import {logIn,logOut} from '../../actions/auth'

test('Should set the user id to whatever was provided',()=>{
    const userId = 234
    const result = logIn(userId)
    expect(result).toEqual({
        type:"LOGIN",
        uid:userId
    })
})

test('Should remove the user id,',()=>{
    const result = logOut()
    expect(result).toEqual({
        type:"LOGOUT"
    })
})