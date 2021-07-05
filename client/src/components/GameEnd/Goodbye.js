
import { useHistory } from 'react-router';

export default function Goodbye(){
  const logo='https://i.ytimg.com/vi/9pKkgKK3Hag/maxresdefault.jpg'
  const history = useHistory();
  return (
    <div class='text-center d-flex flex-column justify-content-center align-items-center wv-150 vh-100 mx-3'>
  <>
    <img src={logo} alt={"logo"} width='500' height='350'/> 
    <div className='mx-1'>
   <button onClick={(()=>history.push('/'))}
    > уходишь .....й        </button>
    </div>
   </>
   </div>
  )
}
