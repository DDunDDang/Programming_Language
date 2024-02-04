// import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)

// const CE = React.createElement

// const rootVirtualDOM = CE('ul', null, [
//   CE('li', null, [
//     CE('a', {href: 'http://www.google.com', target: '_blank'}, [
//       CE('p', null, 'go to google')
//     ])
//   ])
// ])

//   const children = [
//     <li>
//       <a href="http://www.google.com" target="_blank">
//         <p>go to google</p>
//       </a>
//     </li>,
//     <li>
//       <a href="http://www.facebook.com" target='_blank'>
//         <p>go to FaceBook</p>
//       </a>
//     </li>,
//     <li>
//       <a href="http://www.twitter.com" target='_blank'>
//         <p>go to Twitter</p>
//       </a>
//     </li>
//   ]

// const rootVirtualDOM = <ul>{children}</ul>

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)
