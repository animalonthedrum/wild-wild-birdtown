import React, { Component } from 'react';
import axios from 'axios';


function validate( name, value) {
    // true means invalid, so our conditions got reversed
    return {
      name: name.length === 0,
      value: value.length === 0,
    };
  }


class Form extends Component {
    constructor(){
        super()

        this.state= {
            name:'',
            guest:'',
            value:'yes',
            message:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    async handleSubmit(evt){
           if (!this.canBeSubmitted()) {
        evt.preventDefault();
        return;
      }
    
        
        const  { name, guest, value, message } = this.state;
        alert(`Thanks ${name}. Stay Funky`);


        const form = await axios.post('/', {
            name,
            guest,
            value,
            message
        });
        this.inputName.value = '';
        this.inputGuest.value = '';
        this.inputValue.value = '';
        this.inputMessage.value = '';

    }
    canBeSubmitted() {
        const errors = validate(this.state.name, this.state.value);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
      }

    render() {
        const errors = validate(this.state.name, this.state.value);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="value">Will you join us?</label>
                <div className="select">
            <select name='value' ref={el => this.inputValue = el} value={this.state.value} onChange={this.handleChange}>
                <option value="disabled" disabled>Please Choose</option>
                <option name='value' value="Yes">Yes</option>
                <option name='value' value="No">No</option>
                <option value="Maybe">Maybe</option>
            </select>
            </div>
           
                <label htmlFor="name" className="labelName">Name</label>
                    <input type="text"  name="name" className="name" ref={el => this.inputName = el} onChange={this.handleChange}/>
                <label htmlFor="guest" className="labelEmail">Guest<i>optional</i></label>
                    <input type="text" name="guest" className="guest"  ref={el => this.inputGuest = el} onChange={this.handleChange}/>
                <label htmlFor="message" className="labelMessage">Message<i>optional</i></label>
                    <textarea placeholder="Drink the Kool-Aid" rows="5" type="textarea" name="message" className="message"  ref={el => this.inputMessage = el} onChange={this.handleChange}/>
            <button disabled={isDisabled} className="submit">Send</button>
            </form>
        );
    }
}

export default Form;