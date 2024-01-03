import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box, Button,Select, FormControl, MenuItem, } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import BackspaceIcon from '@mui/icons-material/Backspace';
import HomeIcon from '@mui/icons-material/Home';
import InputColor from 'react-input-color';

export default function ColorSilderKey({ onDeleteTab }){
  const  [colorMainbackground, setcolorMainbackground] = React.useState({});
  const  [colorBackground, setcolorBackground] = React.useState({});
  const  [colorBottombackground, setcolorBottombackground] = React.useState({});

  const  [colorIncomponent, setcolorIncomponent] = React.useState({});
  const  [colorTextonmainbackground, setcolorTextonmainbackground] = React.useState({});
  const  [colorTextonbackground, setcolorTextonbackground] = React.useState({});

  const  [colorThemecolorend, setcolorThemecolorend] = React.useState({});
  const  [colorThemecolorstart, setcolorThemecolorstart] = React.useState({});
  const  [colorTextbutton, setcolorTextbutton] = React.useState({});

  const  [colorIdlecolorend, setcolorIdlecolorend] = React.useState({});
  const  [colorIdlecolorstart, setcolorIdlecolorstart] = React.useState({});
  const  [colorInusecolorstart, setcolorInusecolorstart] = React.useState({});
  const  [colorInusecolorend, setcolorInusecolorend] = React.useState({});
  const  [colorTextinlangbtinuse, setcolorTextinlangbtinuse] = React.useState({});
  const  [colorTextinlangbtidle, setcolorTextinlangbtidle] = React.useState({});

  const  [colorSpinnercolor, setcolorSpinnercolor] = React.useState({});
  const  [colorSpinnerpopupcolor, setcolorSpinnerpopupcolor] = React.useState({});

  const  [colorBtpincolorend, setcolorBtpincolorend] = React.useState({});
  const  [colorBtpincolorstart, setcolorBtpincolorstart] = React.useState({});
  const  [colorPininputcolor, setcolorPininputcolor] = React.useState({});

  const  [colorIclockeretint, setcolorIclockeretint] = React.useState({});

  function handleColorChangeMainbackground(event){
    setcolorMainbackground(event.target.value);
  }

  function handleColorChangeBackground(event){
    setcolorBackground(event.target.value);
  }

  function handleColorChangeBottombackground(event){
    setcolorBottombackground(event.target.value);
  }

  function handleColorChangeIncomponent(event){
    setcolorIncomponent(event.target.value);
  }

  function handleColorChangeTextonmainbackground(event){
    setcolorTextonmainbackground(event.target.value);
  }

  function handleColorChangeTextonbackground(event){
    setcolorTextonbackground(event.target.value);
  }

  function handleColorChangeThemecolorend(event){
    setcolorThemecolorend(event.target.value);
  }

  function handleColorChangeThemecolorstart(event){
    setcolorThemecolorstart(event.target.value);
  }

  function handleColorChangeTextbutton(event){
    setcolorTextbutton(event.target.value);
  }

  function handleColorChangeIdlecolorend(event){
    setcolorIdlecolorend(event.target.value);
  }

  const handleColorChangeIdlecoclorstart = (event) => {
    setcolorIdlecolorstart(event.target.value);
  }

  function handleColorChangeInusecolorstart(event){
    setcolorInusecolorstart(event.target.value);
  }

  function handleColorChangeInusecolorend(event){
    setcolorInusecolorend(event.target.value);
  }

  function handleColorChangeTextinlangbtinuse(event){
    setcolorTextinlangbtinuse(event.target.value);
  }

  function handleColorChangeTextinlangbtidle(event){
    setcolorTextinlangbtidle(event.target.value);
  }

  function handleColorChangeSpinnercolor(event){
    setcolorSpinnercolor(event.target.value);
  }

  function handleColorChangeSpinnerpopupcolor(event){
    setcolorSpinnerpopupcolor(event.target.value);
  }

  function handleColorChangeBtpincolorend(event){
    setcolorBtpincolorend(event.target.value);
  }

  function handleColorChangeBtpincolorstart(event){
    setcolorBtpincolorstart(event.target.value);
  }

  function handleColorChangePininputcolor(event){
    setcolorPininputcolor(event.target.value);
  }

  function handleColorChangeIclockeretint(event){
    setcolorIclockeretint(event.target.value);
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
    height: '30px',
    padding: '8px',
    border: '1px solid hsl(0, 0%, 100%)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => { 
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return (
      <div div style={{ color: '#55A4A9' }}>
        <div>{`${hours}:${minutes}:${seconds}`}</div>
        <div>{`${dayOfWeek} ${day} ${month} ${year}`}</div>
      </div>
    );
  };

  const changeLangugeTHButton_Off = {
    backgroundColor: colorIdlecolorstart.rgba,
    color: colorTextinlangbtidle.rgba,
    padding: '10px 20px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px 0 0 20px',
    cursor: 'pointer',
    marginRight: '5px',
    width: '32px',
    height: '32px'
  };

  const changeLangugeTHButton_On = {
    backgroundColor: colorInusecolorstart.rgba,
    color: colorTextinlangbtinuse.rgba,
    padding: '10px 20px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px 0 0 20px',
    cursor: 'pointer',
    marginRight: '5px',
    width: '32px',
    height: '32px'
  };

  const changeLangugeENButton_On = {
    backgroundColor: colorInusecolorstart.rgba,
    color: colorTextinlangbtinuse.rgba,
    padding: '10px 20px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 20px 20px 0',
    cursor: 'pointer',
    fontSize: '14px',
    width: '32px',
    height: '32px'
  };

  const changeLangugeENButton_Off = {
    backgroundColor: colorIdlecolorend.rgba,
    color: colorTextinlangbtidle.rgba,
    padding: '10px 20px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 20px 20px 0',
    cursor: 'pointer',
    fontSize: '14px',
    width: '32px',
    height: '32px'
  };

  const [language, setLanguage] = useState('EN');

  const switchToThai = () => {
    if (language !== 'TH') {
      setLanguage('TH');
      setIsThButtonClicked(true);
      setIsEnButtonClicked(false);
    }
  };

  const switchToEnglish = () => {
    if (language !== 'EN') {
      setLanguage('EN');
      setIsEnButtonClicked(true);
      setIsThButtonClicked(false);
    }
  };

  const [isThButtonClicked, setIsThButtonClicked] = useState(false);
  const [isEnButtonClicked, setIsEnButtonClicked] = useState(true);

  const handleThButtonClick = () => {
    if (!isThButtonClicked) {
      setIsThButtonClicked(true);
      setIsEnButtonClicked(false);
    }
  };

  const handleEnButtonClick = () => {
    if (!isEnButtonClicked) {
      setIsEnButtonClicked(true);
      setIsThButtonClicked(false);
    }
  };

  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleNumberButtonClick = (number) => {
    const emptyIndex = inputValues.findIndex((value) => value === '');
    if (emptyIndex !== -1) {
      handleInputChange(emptyIndex, number.toString());
    }
  };

  const handleDeleteButtonClick = () => {
    const lastNonEmptyIndex = inputValues.reduceRight((acc, value, index) => {
      if (value !== '' && acc === -1) {
        return index;
      }
      return acc;
    }, -1);

    if (lastNonEmptyIndex !== -1) {
      handleInputChange(lastNonEmptyIndex, '');
    }
  };

  const [selectedMember, setSelectedMember] = useState('');
  const handleMemberChange = (event) => {
    const value = event.target.value;
    setSelectedMember(value);
  };

  const [selectedResidence, setSelectedResidence] = useState('');
  const handleResidenceChange = (event) => {
    const value = event.target.value;
    setSelectedResidence(value);
  };

  const [selectedUser, setSelectedUser] = useState('');
  const handleUserChange = (event) => {
    const value = event.target.value;
    setSelectedUser(value);
  };

  return(
    <>
      <Grid container spacing={2}>
      {/* ข้อมูลหน้าส่วนซ้าย */}
      <Grid item xs={5} style={{ height: '780px'}} >
        <Paper style={{ height: '700px', padding: '20px', boxShadow: 'none', overflowY: 'auto' }}>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>main_background</label>
              <InputColor initialValue="#18191B" onChange={setcolorMainbackground} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>background</label>
              <InputColor initialValue="#29445E" onChange={setcolorBackground} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>bottom_background</label>
              <InputColor initialValue="#846145" onChange={setcolorBottombackground} style={ inputStyle }/>
              <br/>
            </Box>

            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>in_component</label>
              <InputColor initialValue="#FFFFFF" onChange={setcolorIncomponent} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>text__onmain_background</label>
              <InputColor initialValue="#00FFFF" onChange={setcolorTextonmainbackground} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>text_on_background</label>
              <InputColor initialValue="#FFF000" onChange={setcolorTextonbackground} style={ inputStyle }/>
              <br/>
            </Box>

            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>theme_color_end</label>
              <InputColor initialValue="#3403AC" onChange={setcolorThemecolorend} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>theme_color_start</label>
              <InputColor initialValue="#FFB258" onChange={setcolorThemecolorstart} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>text_button</label>
              <InputColor initialValue="#FFFFFF" onChange={setcolorTextbutton} style={ inputStyle }/>
              <br/>
            </Box>

            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>idle_color_end</label>
              <InputColor initialValue="#808080" onChange={setcolorIdlecolorend} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>idle_color_start</label>
              <InputColor initialValue="#808080" onChange={setcolorIdlecolorstart} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>in_use_color_start</label>
              <InputColor initialValue="#45A735" onChange={setcolorInusecolorstart} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>in_use_color_end</label>
              <InputColor initialValue="#00FCCC" onChange={setcolorInusecolorend} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>text_in_lang_bt_in_use</label>
              <InputColor initialValue="#FFFFFF" onChange={setcolorTextinlangbtinuse} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>text_in_lang_bt_idle</label>
              <InputColor initialValue="#99999B" onChange={setcolorTextinlangbtidle} style={ inputStyle }/>
              <br/>
            </Box>

            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>spinner_color</label>
              <InputColor initialValue="#FFCCCC" onChange={setcolorSpinnercolor} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>spinner_popup_color</label>
              <InputColor initialValue="#999DDD" onChange={setcolorSpinnerpopupcolor} style={ inputStyle }/>
              <br/>
            </Box>

            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>bt_pin_color_end</label>
              <InputColor initialValue="#404040" onChange={setcolorBtpincolorend} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>bt_pin_color_start</label>
              <InputColor initialValue="#0D0D0D" onChange={setcolorBtpincolorstart} style={ inputStyle }/>
              <br/>
            </Box>
            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>pin_input_color</label>
              <InputColor initialValue="#1D1E20" onChange={setcolorPininputcolor} style={ inputStyle }/>
              <br/>
            </Box>

            <Box style={ inputBoxStyle }>
              <label style={ labelStyle }>ic_lockere_tint</label>
              <InputColor initialValue="#3C3C45" onChange={setcolorIclockeretint} style={ inputStyle }/>
              <br/>
            </Box>
        </Paper>
      </Grid>

      {/* ข้อมูลหน้าส่วนขวา */}
      <Grid item xs={6} >
        <Paper style={{ height: '730px', padding: '20px', boxShadow: 'none' }}>
          <div>
            <label style={{ fontSize: '26px', fontWeight: 'bold', marginRight: '10px' }}>Preview</label>
            <Button variant="contained" 
                    style={{ backgroundColor: '#1C2060', borderRadius: '5px', marginRight: '10px' }} 
                    startIcon={<DeleteIcon/>}
                    onClick={onDeleteTab}>
                  DELETE
            </Button> 
            <Button variant="contained" style={{ backgroundColor: '#1C2060', borderRadius: '5px' }} startIcon={<SaveIcon/>}>SAVE</Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px'}}>
            <Grid style={{display: 'flex', flexDirection: 'row', marginRight: '20px' }} >
                <Paper style={{width: '413px', height: '650px', backgroundColor: colorBackground.rgba, border: '1px solid hsl(0, 0%, 20%)'}} >
                  <div style={{ width: '413px', height: '75px', transition: '0.25s ease', display: 'flex', alignItems: 'center', backgroundColor: colorMainbackground.rgba }}>
                    <div style={{ flex: 1, height: '100%' }}>
                      <div style={{marginRight: '10px', transform: 'translate(10px, 10px)' }}>
                        {formatTime(currentTime)}
                      </div>
                    </div>
                    <div style={{ flex: 1, height: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '10px', marginRight: '5px' }}>
                      <Button style={isThButtonClicked ? changeLangugeTHButton_On : changeLangugeTHButton_Off}
                              variant="contained" onClick={() => { switchToThai(); handleThButtonClick();}}>
                        TH
                      </Button>
                      <Button style={isEnButtonClicked ? changeLangugeENButton_On : changeLangugeENButton_Off}
                              variant="contained" onClick={() => { switchToEnglish(); handleEnButtonClick();}}>
                        EN
                      </Button>
                    </div>                         
                  </div>

                  <div style={{width: '413px', height: '510px'}} >  
                    <div style={{ width: '413px', height: '75px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <Typography style={{ color: colorTextonbackground.rgba, fontSize: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{language === 'EN' ? 'Please Select' : 'กรุณากดเลือก'}</Typography>
                    </div>
                    <div style={{ width: '400px' , height: '275px', display: 'flex', marginTop: '20px'}}>
                    
                      <button style={{ marginLeft: '10px',backgroundColor: '#302F35',width: '220px', height: '230px', display: 'flex', justifyContent: 'flex-end', borderRadius: '50px 0 0 50px', border: 'none'}}>
                      </button>
                      <button style={{ marginLeft: '10px',backgroundColor: '#302F35',width: '220px', height: '230px', display: 'flex', justifyContent: 'flex-end', borderRadius: '0 50px 50px 0', border: 'none'}}>
                        
                      </button>
                    </div>

                    <div style={{ width: '413px' , height: '160px', display: 'flex', justifyContent: 'center'}}>
                      <button style={{ backgroundColor: '#302F35',width: '190px', height: '85px', display: 'flex', justifyContent: 'flex-end', borderRadius: '30px 0 0 30px', border: 'none'}}>
                        
                      </button>
                      <button style={{ marginLeft: '10px',backgroundColor: '#302F35',width: '190px', height: '85px', display: 'flex', justifyContent: 'flex-end', borderRadius: '0 30px 30px 0', border: 'none'}}>
                        
                      </button>
                    </div>
                  </div>

                  <div style={{width: '413px', height: '65px', transition: '0.25s ease',display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', backgroundColor: colorBottombackground.rgba }} />
                </Paper>
            </Grid>

            <Grid style={{display: 'flex', flexDirection: 'row', marginRight: '20px' }} >
                <Paper style={{width: '420px', height: '720px', backgroundColor: colorBackground.rgba, border: '1px solid hsl(0, 0%, 20%)'}} >
                  <div style={{ width: '413px', height: '75px', transition: '0.25s ease', display: 'flex', alignItems: 'center', backgroundColor: colorMainbackground.rgba }}>
                    <div style={{ flex: 1, height: '100%' }}>
                      <div style={{marginRight: '10px', transform: 'translate(10px, 10px)' }}>
                        {formatTime(currentTime)}
                      </div>
                    </div>
                    <div style={{ flex: 1, height: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '10px', marginRight: '5px' }}>
                      <Button style={isThButtonClicked ? changeLangugeTHButton_On : changeLangugeTHButton_Off}
                              variant="contained" onClick={() => { switchToThai(); handleThButtonClick();}}>
                        TH
                      </Button>
                      <Button style={isEnButtonClicked ? changeLangugeENButton_On : changeLangugeENButton_Off}
                              variant="contained" onClick={() => { switchToEnglish(); handleEnButtonClick();}}>
                        EN
                      </Button>
                    </div>                         
                  </div>
                  
                  <div style={{ width:"413px", height:"60px", display: 'flex', justifyContent: 'center'}}>
                    <text style={{ color: colorTextonbackground.rgba, fontSize: '28px', marginTop: '10px'}} >{language === 'EN' ? 'Verify passcode' : 'ยืนยันรหัสผ่าน'}</text><br/>
                  </div>

                  <div style={{ width: "413px", height: "100px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: "413px", height: "30px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <text style={{ color: colorTextonbackground.rgba, fontSize: '22px' }}>{language === 'EN' ? 'Select Floor' : 'เลือกชั้น'}</text>
                    </div>
                    <div style={{ width: "413px", height: "100px" }}>
                      <FormControl fullWidth>
                        <Select
                          value={selectedMember}
                          onChange={handleMemberChange}
                          style={{
                            borderTopLeftRadius: "1px",
                            borderTopRightRadius: "1px",
                            borderStartEndRadius: "1.5rem",
                            borderStartStartRadius: "1.5rem",
                            padding: "1rem",
                            height: "1rem",
                            width: "12rem",
                            color: "#ffffff",
                            position: 'relative',
                            right: '-110px',
                            marginTop: '15px',
                            backgroundColor: selectedMember ? colorSpinnerpopupcolor.rgba : colorSpinnercolor.rgba,
                          }}
                        >
                          <MenuItem value={''}>Select</MenuItem>
                          <MenuItem value={'member1'}>member1</MenuItem>
                          <MenuItem value={'member2'}>member2</MenuItem>
                          <MenuItem value={'member3'}>member3</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
      
                  <div style={{ width: "413px", height: "100px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: "413px", height: "30px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <text style={{ color: colorTextonbackground.rgba, fontSize: '22px' }}>{language === 'EN' ? 'Select Residence' : 'เลือกที่อยู่อาศัย'}</text>
                      </div>
                      <div style={{ width: "413px", height: "100px" }}>
                        <FormControl fullWidth>
                          <Select
                          value={selectedResidence}
                          onChange={handleResidenceChange}
                            style={{
                              display: "flex",
                              backgroundColor: selectedResidence ? colorSpinnerpopupcolor.rgba : colorSpinnercolor.rgba,
                              padding: "1rem",
                              height: "1rem",
                              width: "12rem",
                              color: "#ffffff",
                              position: 'relative',
                              right: '-110px',
                              marginTop: '15px'
                          }}  >
                            <MenuItem value={''}>Select</MenuItem>
                            <MenuItem value={10}>member1</MenuItem>
                            <MenuItem value={20}>member2</MenuItem>
                            <MenuItem value={30}>member3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                  </div>

                  <div style={{ width: "413px", height: "100px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: "413px", height: "30px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <text style={{ color: colorTextonbackground.rgba, fontSize: '22px' }}>{language === 'EN' ? 'Select User' : 'เลือกผู้ใช้'}</text>
                      </div>
                      <div style={{ width: "413px", height: "100px" }}>
                        <FormControl fullWidth>
                          <Select
                          value={selectedUser}
                          onChange={handleUserChange}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: selectedUser ? colorSpinnerpopupcolor.rgba : colorSpinnercolor.rgba,
                              padding: "1rem",
                              borderTopLeftRadius: "1px",
                              borderTopRightRadius: "1px",
                              borderEndEndRadius: "1.5rem",
                              borderEndStartRadius: "1.5rem",
                              height: "4rem",
                              width: "12rem",
                              color: colorIncomponent.rgba,
                              margin: "0 auto",

                            }}
                          >
                            <MenuItem value={''}>Select</MenuItem>
                            <MenuItem value={10}>member1</MenuItem>
                            <MenuItem value={20}>member2</MenuItem>
                            <MenuItem value={30}>member3</MenuItem>
                          </Select>
                          <br />
                          
                        </FormControl>
                      </div>
                  </div>

                  <Box width="413px" height="215px" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
                        <Box display="flex" justifyContent="center" alignItems="center" width="413px" height="50px" >
                          {[0, 1, 2, 3, 4, 5].map((index) => (
                            <Box
                              key={index}
                              width="30px"
                              height="45px"
                              borderRadius="4px"
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              marginX="4px"
                              bgcolor="#132231"
                              color="#ffffff"
                            >
                              {inputValues[index]}
                            </Box>
                          ))}
                        </Box>
                        <Box width="413px" height="165px">
                          <Box width="413px" height="41.25px"display="flex" justifyContent="center" alignItems="center">
                              {[1, 2, 3].map((number) => (
                                <Button
                                  key={number}
                                  onClick={() => handleNumberButtonClick(number)}
                                  style={{ 
                                    width: "20px", 
                                    height: "30px",
                                    fontSize: "12px", 
                                    backgroundColor: "#1D1D1D",
                                    color: "#FFFFFF",
                                    borderRadius: "20%",
                                  }}
                                >
                                  {number}
                                </Button>
                              ))}
                          </Box>
                          <Box width="413px" height="41.25px" display="flex" justifyContent="center" alignItems="center">
                              {[4, 5, 6].map((number) => (
                                <Button
                                  key={number}
                                  variant="contained"
                                  onClick={() => handleNumberButtonClick(number)}
                                  style={{
                                    width: "20px", 
                                    height: "30px",
                                    fontSize: "12px", 
                                    backgroundColor: "#1D1D1D",
                                    color: "#FFFFFF",
                                    borderRadius: "20%",
                                  }}
                                >
                                  {number}
                                </Button>
                              ))}
                          </Box>
                          <Box width="413px" height="41.25px" display="flex" justifyContent="center" alignItems="center">
                              {[7, 8, 9].map((number) => (
                                <Button
                                  key={number}
                                  variant="contained"
                                  onClick={() => handleNumberButtonClick(number)}
                                  style={{
                                    width: "20px", 
                                    height: "30px",
                                    fontSize: "12px", 
                                    backgroundColor: "#1D1D1D",
                                    color: "#FFFFFF",
                                    borderRadius: "20%",
                                  }}>
                                  {number}
                                </Button>
                              ))}
                          </Box>
                          <Box width="413px" height="41.25px" display="flex" justifyContent="center" alignItems="center">
                            <Button
                            variant="contained"
                            style={{ 
                              width: "20px", 
                                    height: "30px",
                                    fontSize: "12px", 
                                    backgroundColor: "#1D1D1D",
                                    color: "#FFFFFF",
                                    borderRadius: "20%"
                            }}
                          >
                            
                              </Button>
                              <Button
                                variant="contained"
                                onClick={() => handleNumberButtonClick(0)}
                                style={{ 
                                  width: "20px", 
                                    height: "30px",
                                    fontSize: "12px", 
                                    backgroundColor: "#1D1D1D",
                                    color: "#FFFFFF",
                                    borderRadius: "20%"
                                }}
                                marginX={1}
                              >
                                0
                              </Button>
                              <Button
                                variant="contained"
                                onClick={handleDeleteButtonClick}
                                style={{ 
                                  width: "20px", 
                                    height: "30px",
                                    fontSize: "12px", 
                                    backgroundColor: "#1D1D1D",
                                    color: "#FFFFFF",
                                    borderRadius: "20%"
                                }}
                              >
                                <BackspaceIcon />
                            </Button>
                          </Box>
                        </Box>

                        
                  </Box>

                  <Box width="413px" height="70px" display="flex" justifyContent="flex-end" alignItems="flex-end">
                  <Box width="180px" height="70px" display="flex" justifyContent="flex-end">
                    <Button variant="contained"
                      style={{
                        width: "180px",
                        height: "50px",
                        fontSize: "14px",
                        background: "linear-gradient(to bottom, #331098, #946197)",
                        color: colorTextbutton,
                        borderRadius: "40px",
                        textTransform: "none",
                      }}
                    >
                      Forget?
                    </Button>
                  </Box>
                  <Box width="53px"
                      height="70px"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="flex-end" >
                      <HomeIcon style={{ fontSize: '30px', color: 'yellow' }} />
                  </Box>
                  <Box width="180px" height="70px">
                      <Button variant="contained"
                        style={{
                          width: "180px",
                          height: "50px", 
                          fontSize: "14px", 
                          margin: "0 auto",
                          background: "linear-gradient(to bottom, #331098, #946197)", 
                          color: colorTextbutton.rgba,
                          borderRadius: "40px",
                          textTransform: "none",
                        }}>
                          Change passcode
                      </Button>
                  </Box>
                  </Box>
                  
                </Paper>
            </Grid>
          </div>

        </Paper>
      </Grid>
      </Grid>
      
    </>
  );
}
