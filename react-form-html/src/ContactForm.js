import React, { Component } from 'react';

class ContactForm extends Component {

    // addNewContact=(event)=>{
    //     console.log("done");
    //     const name=this.refs.name.value;
    //     const picture=this.refs.picture.value;
    //     const phonenumber=this.refs.phonenumber.value;

    //     const p1={name,picture,phonenumber};

    //     this.refs.name.value='';
    //     this.refs.picture.value='';
    //     this.refs.phonenumber.value='';

    //     console.log(p1);


    //     event.preventDefault();

    // }


    state = {name:'',
             phonenumber:'',
            picture:'',
            formErrors:{
                name:'name is required',
                phonenumber:'phone is required'

            },
            errormessages:null,
            }

    tfHandler = (evt) => {


        let{name,value}=evt.target;
        let{formErrors}=this.state;

        switch(name){

            case 'name':
                if(!value || value.length===0){
                    formErrors.name = 'name is required';
                }else if(value.length<3 || value.length>20){
                    formErrors.name='Name must be between 3 to 20 hours';
                }else{
                    formErrors.name='';
                }
                break;
                case 'phonenumber':
                    if(!value || value.length===0){
                        formErrors.phonenumber = 'phone is required';
                    }else if(!value.match(/^\d{10,12}$/)){
                        formErrors.phonenumber='not a valid number';
                    }else{
                        formErrors.phonenumber='';
                    }
                  break;
                default:
                    break;
                }

                this.setState({[name]:value,formErrors});
              

        

        // this.setState({[evt.target.name]:evt.target.value});

        // let name = evt.target.name;
        // let value = evt.target.value;
        // // console.log(evt.target);
        // // console.log(name,value);
        // let modify={};
        // modify[name]=value;
        // console.log(this.state);
        // this.setState(modify);
            
    }

    validateForm=(formErrors)=>{
        let valid=true;
        Object.values(formErrors).forEach(err=>valid=valid && err.length===0)
        return valid;
    }

    submitHandler=(evt)=>{
        evt.preventDefault();

        let {formErrors}=this.state;
        
        if(this.validateForm(this.state.formErrors)){
            alert('done');
        }
        let errormessages=Object.values(formErrors).map((err,index)=>err.length===0?null:<li key={index}>{err}</li>)
        
        this.setState({errormessages});


    }

    render() {
        return (
            <div className="row">
            
            <div className="col">
                <h3>Add a Contact</h3>
                <form className="form" onSubmit={this.submitHandler}>
                <div className="form-group row">
                    <label htmlFor="" className="control-label col-md-4">
                        Name
                    </label>
                    <div className="col-md-8">
                        <input value={this.state.name} onChange={this.tfHandler} name="name" type="text" className="form-control"/>

                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="control-label col-md-4">
                        Phone number
                    </label>
                    <div className="col-md-8">
                        <input value={this.state.email} onChange={this.tfHandler} name="phonenumber" type="text" className="form-control"/>

                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="control-label col-md-4">
                    Picture
                    </label>
                    <div className="col-md-8">
                        <input value={this.state.picture} onChange={this.tfHandler} name="picture" type="text" className="form-control"/>

                    </div>
                </div>
                <button className="btn btn-primary">Save data</button>
                </form>
                <ul>
                    {this.state.errormessages}
                </ul>
                
            </div>

            <div className="col">
                <pre>{JSON.stringify(this.state,null,3)}</pre>
                </div>
            </div>
        );
    }
}

export default ContactForm;