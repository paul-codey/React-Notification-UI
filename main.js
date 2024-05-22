//App.js
const { useState } = React;

const notificationData = [
  {
    name: "Mark Webber",
    profilePic: "/Images/avatar-mark-webber.webp",
    action: "reacted to your recent post",
    actionDestination: "My first tournament today!",
    time: "1m ago",
    picture: false,
    comment: false,
    unread: true,
  },

  {
    name: "Angela Gray",
    profilePic: '/Images/avatar-angela-gray.webp',
    action: "followed you",
    actionDestination: false,
    time: "5m ago",
    picture: false,
    comment: false,
    unread: true,
  },

  {
    name: "Jacob Thompson",
    profilePic: "/Images/avatar-jacob-thompson.webp",
    action: "has joined your group",
    actionDestination: "Chess club",
    time: "1 day ago",
    picture: false,
    comment: false,
    unread: true,
  },

  {
    name: "Rizky Hasanuddin",
    profilePic: "/Images/avatar-rizky-hasanuddin.webp",
    action: "sent you a private message",
    time: "5 days ago",
    comment: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and  I'm already having lots of fun and improving my game.",
    unread: false
  },

  {
    name: "Kimberly Smith",
    profilePic: "/Images/avatar-kimberly-smith.webp",
    action: "commented on your picture",
    time: "1 week ago",
    picture: "/Images/image-chess.webp",
    unread: false,
  },

  {
    name: "Nathan Peterson",
    profilePic: "/Images/avatar-nathan-peterson.webp",
    action: "reacted to your recent post",
    actionDestination: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    unread: false
  },

  {
    name: "Anna Kim",
    profilePic: "/Images/avatar-anna-kim.webp",
    action: "left the group",
    actionDestination: "Chess Club",
    time: "2 weeks ago",
    unread: false
  }
] 

/*export default*/
function App() {
  const [notifications, setNotificationData] = useState(notificationData);
  
  const markAllAsRead = () => {
    const updatedData = notificationData.map(notification => ({
      ...notification,
      unread: false,
    }))
    
    setNotificationData(updatedData);
  };
  
  
  return (
    <div className='container'>
      <Header markAllAsRead={markAllAsRead} notification={ notifications }/>
      <Main notifications={notifications}/>
    </div>
  )
}


// /////index.js//////////

//Import React, { useState } from "react";
//Import ReactDOM from "react-dom/client";
//Import "./index.css";
//Import App from "./App";







function Header({ markAllAsRead, notification }) {
  const unreadNumber = notification.filter(notification => notification.unread).length;
  return (
    <div className="notification__header">
      <h4>Notifications <span className="notification__number">{unreadNumber}</span></h4>
      <button onClick={markAllAsRead}>Mark all as read</button>
    </div>
  )
}

function Main({notifications}) {
  return (
    <>
      {notifications.map(notification => ( <NotificationContent 
          data={notification} key={notification.name}
        />
      ))
      }
    </>
  )
}


function NotificationContent({data: {name, profilePic, action, actionDestination, time, picture, comment, unread}}) {
  //console.log(name);
  return (
    <div className={`notification__main ${unread ? 'unread' : ''}`}>
      <img className='profile-pic' src={profilePic} alt='profile picture' />
      <div>
        <p className='message'>
          <span className='name'>{name}</span> 
          <span>  {action} </span>
          {actionDestination && <span className='action__destination'><a href='#'>  {actionDestination}</a> </span>}
          { unread && <span className='unread__mark'></span>}
        </p>
        <p className='time'>{time}</p>
      </div>
      
      {picture && <img className='pic' src={picture} alt='your picture'/>}
      
      
      {comment && <p className='comment'>{comment}</p>}
    
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( /*<React.StrictMode>*/ <App /> /*</React.StrictMode>*/ );