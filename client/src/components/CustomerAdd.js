import React from 'react'
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


function styles(theme) {
  return {
    hidden: {
      display: 'none'
    }
  };
};


class CustomerAdd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    }
    
    this.handlerFormSubmit = this.handlerFormSubmit.bind(this)
    this.handlerFileChange = this.handlerFileChange.bind(this)
    this.handlerValueChange = this.handlerValueChange.bind(this)
    this.addCustomer = this.addCustomer.bind(this)
    this.handlerClickOpen = this.handlerClickOpen.bind(this)
    this.handlerClose = this.handlerClose.bind(this);
  }

  handlerFormSubmit(e) {
    e.preventDefault()
    this.addCustomer()
    .then((response) => {
      console.log(response.data);
      this.props.stateRefresh();
    })
    this.setState({
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    })
  }

  handlerFileChange(e) {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    });
  }
  
  handlerValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addCustomer(){
    const url = '/api/customers';
    const formData = new FormData();
    formData.append('image', this.state.file)
    formData.append('name', this.state.userName)
    formData.append('birthday', this.state.birthday)
    formData.append('gender', this.state.gender)
    formData.append('job', this.state.job)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config)
  }

  handlerClickOpen() {
    this.setState({
      open: true
    });
  }

  handlerClose() {
    this.setState({
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    })
  }

  render() {
    const { classes } = this.props;
    return (
        <div>
          <Button variant="contained" color="primary" onClick={this.handlerClickOpen}>
            고객 추가하기
          </Button>
          <Dialog open={this.state.open} onClose={this.handlerClose}>
            <DialogTitle>고객 추가</DialogTitle>
            <DialogContent>
              <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handlerFileChange} />
              <label htmlFor="raised-button-file"> 
                <Button variant="contained" color="primary" component="span" name="file">
                  {this.state.fileName === ''? "프로필 이미지 선택" : this.state.fileName}
                </Button>
              </label><br/>
              <TextField label="이름" type="text" name="userName" value={this.state.userName} onChange={this.handlerValueChange} /><br/>
              <TextField label="생년월일" type="text" name="birthday" value={this.state.birthday} onChange={this.handlerValueChange} /><br/>
              <TextField label="성별" type="text" name="gender" value={this.state.gender} onChange={this.handlerValueChange} /><br/>
              <TextField label="직업" type="text" name="job" value={this.state.job} onChange={this.handlerValueChange} /><br/>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={this.handlerFormSubmit}>추가</Button>
              <Button variant="outlined" color="primary" onClick={this.handlerClose}>닫기</Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    }
  }

export default withStyles(styles)(CustomerAdd)