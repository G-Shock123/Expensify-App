import authReducer from '../../reducers/auth'

test('should setup default suth values', () => {
    const state = authReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({})

})

test('should set user id when case is login,',()=>{
    const uid = 123
    const action = {type:'LOGIN',uid}
    const state = authReducer(undefined,action)
    expect(state).toEqual({uid})

})

test('should remove uersID when logging out',()=>{
    const currentState = {uid:234}
    const state = authReducer(currentState,{type:'LOGOUT'})
    expect(state).toEqual({})
})