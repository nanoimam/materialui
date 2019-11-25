import React, {Component} from 'react';

import './App.css';

import Nama from './state/State';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nama   : '',
        
    }
}
handleSubmit = (event) => {
  
  let nama   = event.target.name;
  let val = event.target.value;
  this.setState({
    [nama]  : val
    
});
}

handelNama = (event) => {
  let nama   = event.target.name;
  let val = event.target.value;
  this.setState({
      [nama]  : val,
   
  });
}

  render(){
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <Box component="span" display="block">
          <TextField
            name="nama"
            id="standart-with-placeholder"
            label="Nama Lengkap"
            placeholder="Masukan Nama"
            margin="normal"
            value={this.state.nama}
            onChange={this.handelNama}
          />
          </Box>
          <Box component="span" display="block">
            <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>
              Ganti Nama
            </Button>
          </Box>

      </form>
      <Nama nama={this.state.nama}/>
    </div>
  );
  }
}

export default App;
