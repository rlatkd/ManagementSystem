import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';


class CustomerDelete extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          open: false
        }
        this.handlerClickOpen = this.handlerClickOpen.bind(this)
        this.handlerClose = this.handlerClose.bind(this);
    }

    handlerClickOpen() {
        this.setState({
          open: true
        });
    }
    
    handlerClose() {
        this.setState({
          open: false
        })
    }

    deleteCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
           method: 'DELETE' 
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handlerClickOpen}>
                    삭제
                </Button>
                <Dialog onClose={this.handlerClose} open={this.state.open}>
                    <DialogTitle onClose={this.handlerClose}>
                        삭제 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 고객 정보가 삭제됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handlerClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomerDelete;