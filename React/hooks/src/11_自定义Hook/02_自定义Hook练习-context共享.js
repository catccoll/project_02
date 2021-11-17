import React from 'react'
// import {UserContext,TokenContext} from '../App'
import useUserContext from '../Hooks/userHooks'
export default function CustomContextShare () {
 const [user,token]  = useUserContext()
 console.log(user,token);
    return (
        <div>
         {/* 就是一个小小的封装 */}
        </div>
    )
}
