
import React, { useState, useEffect } from 'react';

export default function App() {

  const [search, setSearch] = useState([]);

  let array = [
    'Asmita',
    'Good Mornming',
    'good Afternoon',
    'My name is',
    'Congratulations',
    'All the best',
    'Hello',
    'Hi',
    'How are you',
  ]
          
         
            useEffect(() => {
              setSearch(array);
            }, []);
            
            function handleSearch(e) {
              const temp = e.target.value;
              if (temp == '') {
                setSearch(array);
              } else {
                if (temp.length > 2) {
                  const newData = array.filter((item) => item.startsWith(temp));
                  if (newData == '') {
                    setSearch(['NotFound']);
                  } else {
                    setSearch(newData);
                  }
                }
              }
            }
          
            return (
              <div
                style={{
                  textAlign: 'center',
                  margin: 'auto',
                  marginTop: '100px',
                  padding: '100px',
                  width: '50%',
                }}
              >
                <h1 style={{ color: 'tomato' }}>Make a Searchable Dropdown!</h1>
                <p> Search the data whatever you want.</p>
                <input
                  type="text"
                  onChange={(e) => handleSearch(e)}
                  placeholder="Search"
                  style={{ padding: '10px', fontSize: '30px' }}
                  list="allDataHere"
                />
          
                <datalist id="allDataHere" style={{ fontSize: '30px' }}>
                  {search.map((item) => (
                    <option style={{fontSize: '30px' }} value={item}>
                      {item}
                    </option>
                  ))}
                </datalist>
              </div>
            );
          }
          

  return (
    <div
      style={{
        textAlign: 'center',
        margin: 'auto',
        marginTop: '100px',
        border: '5px solid tomato',
        padding: '100px',
        width: '50%',
      }}
    >
      <h1>Searchable Dropdown!</h1>
      <p> Search the data whatever you want.</p>
      <input
        type="text"
        placeholder="Search"
        style={{ padding: '10px', fontSize: '30px' }}
        list="allDataHere"
      />

      <datalist id="allDataHere" style={{ fontSize: '30px' }}>
        {search.map((item) => (
          <option value={item}>
            {item}
          </option>
        ))}
      </datalist>
    </div>
  );
}
