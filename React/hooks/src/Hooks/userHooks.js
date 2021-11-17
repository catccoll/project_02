import {UserContext,TokenContext} from '../App'
import {useContext} from 'react'
export default  function useUserContext(props){
    const user=useContext(UserContext)
    const token=useContext(TokenContext)
    return  [user,token]
}



