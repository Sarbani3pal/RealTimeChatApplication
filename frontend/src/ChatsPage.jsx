import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
       
    return (
        <div style = {{ height : '100vh' }}> 
            <PrettyChatWindow
                projectId = '27cbbe85-a874-4156-a005-9c74e35071e2' 
                username = {props.user.username}
                secret = {props.user.secret}
                style = {{height : '100%'}}
            />             
    </div>
  )

}
export default ChatsPage