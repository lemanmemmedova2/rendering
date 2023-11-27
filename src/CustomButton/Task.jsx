import React from 'react';
import './Task.css';
import  { useState,useEffect} from 'react';
const Task = () => {
    const [text1, setText1] = useState('');
  const [text2, setColor] = useState('white');
  const [text3, setText3] = useState('');

  const click1 = () => {
    setText1((a) => (a === '' ? 'Hello' : ''));
  };
     
  const click2 = () => {
    if (text3 === '') {
      setColor('red');
      setText3('Warn');
    } else {
      setColor('white');
      setText3('');
    }
}
    useEffect(() => {
        const mouse = () => {
            show();
        };
        document.querySelector('.text3').addEventListener('mouseover', mouse);
        return () => {
            document.querySelector('.text3').removeEventListener('mouseover', mouse);
        };
      }, []);
      useEffect(() => {
        const mouse1 = () => {
            hide();
        };
        document.querySelector('.text3').addEventListener('mouseout', mouse1);
        return () => {
            document.querySelector('.text3').removeEventListener('mouseout', mouse1);
        };
      }, []);
    
    function show() {
        document.getElementById('three').style.display = 'block';
    }
    function hide() {
        document.getElementById('three').style.display = 'none';
    }

  return (
    <div className='main'>
        <button className='text1' onClick={click1}> Text </button>
      <button className="text2"  onClick={click2} style={{ backgroundColor: text2 }}>
        Warning
      </button>
      <button className='text3' >Hint</button>
      <div id='three'>
    <p>World</p>
</div>
        <p >{text1}</p>
        <p className='last'>{text3}</p>
    </div>
  )
}

export default Task