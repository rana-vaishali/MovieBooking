import React from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import moviesData from '../../common/moviesData';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ListSubheader from '@mui/material/ListSubheader';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
moviesData : moviesData,
    };
  }
   
    render() { 
        return (
            <div>
<div><Header/></div>
<span class="heading-tag">Upcoming Movies</span>

<ImageList cols={6} rowHeight={250} sx={{display:'flex', overflowX:'scroll'}}>
      {this.state.moviesData.map((item) => (
        <ImageListItem key={item.id} className='upcoming-imagelist' >
          <img 
            src={`${item.poster_url}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    <div className='flex-container'>
      <div className='left'>
      <ImageList cols={4} className='flex-imagelist'>
      
      {this.state.moviesData.map((item) => (
        <ImageListItem key={item.id} className='flex-image'>
          <img
            src={`${item.poster_url}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={`Release Date : ${new Date(
                      item.release_date
                    ).toDateString()}`}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
               
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
      </div>
      <div className='right'></div>
    </div>
            </div>
        );
    }
}
 
export default Home;