import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
           


function Systems() {
 const [system, setSystem] = useState(10);

  const handleChange = (event) => {
    setSystem(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 90 }}>
      <FormControl size='small'>
        <Select
          id='select'
          style={{background: 'none', fontSize: 14}}
          value={system}
          onChange={handleChange}
        >
          <MenuItem value={10}>Google</MenuItem>
          <MenuItem value={20}>Yandex</MenuItem>
          <MenuItem value={30}>Yahoo!</MenuItem>
          <MenuItem value={40}>Baidu</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default function SearchInput() {

    const [searchTxt,setSearchTxt] = useState('');
    const selected = document.getElementsByClassName('MuiInputBase-input css-mnn31');
    const search = (e) => {
        e.preventDefault()
        if(searchTxt==='') return null
        if(selected[0].innerHTML==='Google') window.location.href = `https://www.google.com/search?q=${searchTxt}&oq=${searchTxt}&aqs`;
        if(selected[0].innerHTML==='Yandex') window.location.href = `https://yandex.ru/search/?text=${searchTxt}&clid`;
        if(selected[0].innerHTML==='Yahoo!') window.location.href = `https://search.yahoo.com/search?p=${searchTxt}&fr`;
        if(selected[0].innerHTML==='Baidu') window.location.href = `https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${searchTxt}&fenlei`;
    }

  return (
    <div className='main-article-content'>  
        <Paper
            id='Paper'
            component="form"
            sx={{ background: 'rgba(255, 255, 255, 0.558)',p: '3px 5px', display: 'flex', alignItems: 'center', width: '60%' }}>
                <Systems/>
            <InputBase
                value={searchTxt}
                onChange={(e)=>setSearchTxt(e.target.value)}
                sx={{ ml: 1, flex: 1}}
                placeholder="Search"
            />
            <IconButton type="submit" sx={{ p: '10px' }} onClick={search} >
            <SearchIcon />
            </IconButton>
        </Paper>
    </div>
  )
}
