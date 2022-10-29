import Clock from 'react-live-clock';
import './Content.css'
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchInput from './SearchInput';


export default function Menu() {

    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
   
  return (
    <div className='articleHeader' >

        <div className='slice0' >
            <div className='DateTime' >
                <p><Clock format={'HH:mm:ss'} ticking={true}/></p>
                <p>{date}</p>
            </div>
            
            <div className='main-article-content' > 
              <SearchInput/>
            </div>

            <div className='menuOptions' >
            <div className='account' >
            </div>
            <Button style={{color: 'white'}}><SettingsIcon/></Button> 
            </div>
            
        </div>
        
       
    </div>
  )
}
