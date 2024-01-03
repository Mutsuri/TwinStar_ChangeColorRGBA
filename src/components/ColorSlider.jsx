
import { React,useState } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ColorSlider({ onDeleteTab }){
  const  [colorHeader, setColorHeader] = useState('#1C2060');
  const  [colorHeaderTextTitle, setColorHeaderTextTitle] = useState('#FFFFFF');
  const  [colorIcon, setColorIcon] = useState('#FFFFFF');
  const  [colorMenuBackground, setColorMenuBackground] = useState('#F1F1F1');
  const  [colorMenuText, setColorMenuText] = useState('#2A2A2A');
  const  [colorButtonBackground, setColorButtonBackground] = useState('#1C2060');
  const  [colorButtonText, setColorButtonText] = useState('#FFFFFF');

  function handleColorChangeHeader(event){
    setColorHeader(event.target.value);
  }

  function handleColorChangeHeaderTextTitle(event){
    setColorHeaderTextTitle(event.target.value);
  }

  function handleColorChangeColorIcon(event){
    setColorIcon(event.target.value);
  }

  function handleColorChangeMenuBackground(event){
    setColorMenuBackground(event.target.value);
  }

  function handleColorChangeMenuText(event){
    setColorMenuText(event.target.value);
  }

  function handleColorChangeButtonBackground(event){
    setColorButtonBackground(event.target.value);
  }

  function handleColorChangeButtonText(event){
    setColorButtonText(event.target.value);
  }

  const inputBoxStyle = {
    marginBottom: '20px',
    width: '100%',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '900px',
    height: '35px',
    padding: '5px',
    border: '1px solid hsl(0, 0%, 100%)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
  };

  return(
    <>
      <Grid container spacing={2}>
      {/* ข้อมูลหน้าส่วนซ้าย */}
      <Grid item xs={6} >
        <Paper style={{ height: '100vh', padding: '20px', boxShadow: 'none' }}>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>Header Background</label>
              <input style={ inputStyle } type="color" value={colorHeader} onChange={handleColorChangeHeader}/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>Header TextTitle</label>
              <input style={ inputStyle } type="color" value={colorHeaderTextTitle} onChange={handleColorChangeHeaderTextTitle}/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>Icon</label>
              <input style={ inputStyle } type="color" value={colorIcon} onChange={handleColorChangeColorIcon}/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>Menu Background</label>
              <input style={ inputStyle } type="color" value={colorMenuBackground} onChange={handleColorChangeMenuBackground}/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>Menu Text</label>
              <input style={ inputStyle } type="color" value={colorMenuText} onChange={handleColorChangeMenuText}/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>Button Background</label>
              <input style={ inputStyle } type="color" value={colorButtonBackground} onChange={handleColorChangeButtonBackground}/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>Button Text</label>
              <input style={ inputStyle }  type="color" value={colorButtonText} onChange={handleColorChangeButtonText}/>
              <br/>
            </Box>
        </Paper>
      </Grid>

      {/* Right Section */}
      <Grid item xs={6}>
        <Paper style={{ height: '100vh', padding: '20px', boxShadow: 'none' }}>
          <div>
            <label style={{ fontSize: '26px', fontWeight: 'bold', marginRight: '10px' }}>Preview</label>
            <Button variant="contained" 
                    style={{ backgroundColor: '#1C2060', borderRadius: '5px', marginRight: '10px' }} 
                    startIcon={<DeleteIcon/>}
                    onClick={onDeleteTab}
                    >DELETE
            </Button> 
            <Button variant="contained" style={{ backgroundColor: '#1C2060', borderRadius: '5px' }} startIcon={<SaveIcon/>}>SAVE</Button>
          </div>

          

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px'}}>
            <Grid style={{display: 'flex', flexDirection: 'row', marginRight: '20px' }} >
                <Paper style={{width: '400px', height: '650px', backgroundColor: '#DEDEDE', border: '1px solid hsl(0, 0%, 20%)'}} >
                  <div style={{width: '400px', height: '25px', transition: '0.25s ease',display: 'grid', gridTemplateColumns: '1fr auto', 
                        alignItems: 'center', backgroundColor: colorHeader}} >
                          <Typography style={{ color: colorHeaderTextTitle, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >HeaderTextTitel</Typography>
                          <DehazeIcon style={{ color: colorIcon }} />
                  </div>
                  <div style={{width: '400px', height: '200px', transition: '0.25s ease',display: 'flex', marginTop: '30px', alignItems: 'center',
                        backgroundColor: 'white',}} >
                          <div style={{
                              width: '160px',
                              height: '160px',
                              margin: 'auto',
                              backgroundColor: colorMenuBackground,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
                              <AccessTimeIcon fontSize="large" style={{ color: colorMenuText }}/>
                              <GroupsIcon fontSize="large" style={{ color: colorMenuText }}/>
                              <Typography style={{ margin: '20px', color: colorMenuText }}>menuText</Typography>
                            </div>
                          </div>

                          <div style={{
                              width: '160px',
                              height: '160px',
                              margin: 'auto',
                              backgroundColor: colorMenuBackground,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
                              <AccessTimeIcon fontSize="large" style={{ color: colorMenuText }}/>
                              <GroupsIcon fontSize="large" style={{ color: colorMenuText }}/>
                              <Typography style={{ margin: '20px', color: colorMenuText }}>menuText</Typography>
                              
                            </div>
                          </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                    <Button variant="contained" style={{ backgroundColor: colorButtonBackground, color: colorButtonText }}>BUTTON BACKGROUND & BUTTON TEXT</Button>
                  </div>
                </Paper>
            </Grid>

            <Grid style={{display: 'flex', flexDirection: 'row',}} >
                <Paper style={{width: '400px', height: '650px', backgroundColor: '#DEDEDE', border: '1px solid hsl(0, 0%, 20%)'}} >
                  <div style={{width: '400px', height: '25px', transition: '0.25s ease',display: 'grid', gridTemplateColumns: '1fr auto', 
                        alignItems: 'center', backgroundColor: colorHeader}} >
                          <Typography style={{ color: colorHeaderTextTitle, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >HeaderTextTitel</Typography>
                          <DehazeIcon style={{ color: colorIcon }} />
                  </div>
                  <div style={{width: '400px', height: '200px', transition: '0.25s ease',display: 'flex', marginTop: '30px', alignItems: 'center',
                        backgroundColor: 'white',}} >
                          <div style={{
                              width: '160px',
                              height: '160px',
                              margin: 'auto',
                              backgroundColor: colorMenuBackground,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
                              <AccessTimeIcon fontSize="large" style={{ color: colorMenuText }}/>
                              <GroupsIcon fontSize="large" style={{ color: colorMenuText }}/>
                              <Typography style={{ margin: '20px', color: colorMenuText }}>menuText</Typography>
                            </div>
                          </div>

                          <div style={{
                              width: '160px',
                              height: '160px',
                              margin: 'auto',
                              backgroundColor: colorMenuBackground,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
                              <AccessTimeIcon fontSize="large" style={{ color: colorMenuText }}/>
                              <GroupsIcon fontSize="large" style={{ color: colorMenuText }}/>
                              <Typography style={{ margin: '20px', color: colorMenuText }}>menuText</Typography>
                              
                            </div>
                          </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                    <Button variant="contained" style={{ backgroundColor: colorButtonBackground, color: colorButtonText }}>BUTTON BACKGROUND & BUTTON TEXT</Button>
                  </div>
                </Paper>
            </Grid>
          </div>
          
        </Paper>
      </Grid>
      
      </Grid>
    </>
  );
}