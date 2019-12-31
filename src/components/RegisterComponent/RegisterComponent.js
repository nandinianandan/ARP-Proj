import React, { Component } from "react";
import "./RegisterComponent.css";
import DatePicker from "react-datepicker";

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            email: "",
            dob: "",
            iNo: "",
            pNo: "",
            gender: "",
            address: "",
            confirmPwd: "",
            registerClicked: false,
            errorData: {
                errorName: "",
                errorPassword: "",
                errorConfirmPwd: "",
                errorDob: "",
                errorEmail: "",
                errorGender: "",
                errorIno: "",
                errorPno: "",
                errorAddr: ""
            }
        };
        this.onChange = this.onChange.bind(this);
        this.validData = this.validData.bind(this);
        this.login = this.login.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
            if (this.state.loginClicked) {
                this.validData();
            }
        });
    }
    login(e) {
        e.preventDefault();
        this.setState({ loginClicked: true });
        if (this.validData()) {
            console.log("SUCCESS");
        }
    }
    validData() {
        this.setState({
            errorData: {
                errorUserName: "",
                errorPassword: ""
            }
        });
        var isValid = true;
        if (this.state.name === "" || this.state.name === undefined) {
            this.setState(prevState => ({
                errorData: {
                    ...prevState.errorData,
                    errorName: "Name cannot be empty"
                }
            }));
            isValid = false;
        }

        if (
            this.state.email === "" ||
            this.state.email === undefined ||
            !/\S+@\S+\.\S+/.test(this.state.email)
        ) {
            this.setState(prevState => ({
                errorData: {
                    ...prevState.errorData,
                    errorEmail: "Please enter a valid Email Address"
                }
            }));
            isValid = false;
        }
        if (this.state.iNo === "" || this.state.iNo === undefined) {
            this.setState(prevState => ({
                errorData: {
                    ...prevState.errorData,
                    errorIno: "Insurance number cannot be empty"
                }
            }));
            isValid = false;
        }
        if (this.state.pNo === "" || this.state.pNo === undefined) {
            this.setState(prevState => ({
                errorData: {
                    ...prevState.errorData,
                    errorPno: "Phone number cannot be empty"
                }
            }));
            isValid = false;
        }
        if (this.state.dob === "" || this.state.dob === undefined) {
            this.setState(prevState => ({
                errorData: {
                    ...prevState.errorData,
                    errorDob: "Date of birth cannot be empty"
                }
            }));
            isValid = false;
        }
        if (this.state.gender === "" || this.state.gender === undefined) {
            var radios = document.getElementsByName("gender");
            var formValid = false;
            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) { formValid = true; break; }
                i++;
            }
            if (!formValid) {

                this.setState(prevState => ({
                    errorData: {
                        ...prevState.errorData,
                        errorGender: "Please select a gender"
                    }
                }));
                isValid = false;
            }
        }
        if (this.state.address === "" || this.state.address === undefined) {
            this.setState(prevState => ({
                errorData: {
                    ...prevState.errorData,
                    errorAddr: "Address cannot be empty"
                }
            }));
            isValid = false;
        }
        if (this.state.password === "" || this.state.password === undefined) {
            this.setState(prevState => ({
                errorData: {
                    ...prevState.errorData,
                    errorPassword: "Password cannot be empty"
                }
            }));
            isValid = false;
        }
        if (this.state.password !== this.state.confirmPwd) {
            this.setState(prevState => ({
                errorData: {
                    ...prevState.errorData,
                    errorConfirmPwd: "Password does not match"
                }
            }));
            isValid = false;
        }
        return isValid;
    }
    render() {
        return (
            //   <div className="wrapper">
            //     <div className="form-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Registration</h5>
                                <form className="form-signin">
                                    {/* <h1>Registration</h1> */}

                                    <div className="form-label-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control text-center"
                                            placeholder="Enter full name"
                                            name="name"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    {this.state.errorData.errorName !== "" && (
                                        <div className="errormsg mb-2">
                                            {this.state.errorData.errorName}
                                        </div>
                                    )}

                                    <div className="form-label-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            id="email"
                                            className="form-control text-center"
                                            placeholder="E-mail"
                                            name="email"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    {this.state.errorData.errorEmail !== "" && (
                                        <div className="errormsg mb-2">
                                            {this.state.errorData.errorEmail}
                                        </div>
                                    )}
                                    <div className="form-label-group">
                                        <label htmlFor="iNo">Insurance No</label>
                                        <input
                                            type="text"
                                            id="iNo"
                                            className="form-control text-center"
                                            placeholder="In-No."
                                            name="iNo"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    {this.state.errorData.errorIno !== "" && (
                                        <div className="errormsg mb-2">
                                            {this.state.errorData.errorIno}
                                        </div>
                                    )}
                                    <div className="form-label-group">
                                        <label htmlFor="dob" className="mx-2">Date of Birth</label>
                                        <input
                                            type="date"
                                            id="dob"
                                            placeholder="DD/MM/YYYY"
                                            name="dob"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    {this.state.errorData.errorDob !== "" && (
                                        <div className="errormsg mb-2">
                                            {this.state.errorData.errorDob}
                                        </div>
                                    )}
                                    <div className="form-label-group">
                                        <label htmlFor="gender" className="mx-2">Gender</label>
                                        <input type="radio" id="gender" name="gender" value="male" checked />
                                        <label for="male" className="mx-2">Male</label>
                                        <input
                                            type="radio"
                                            id="gender"
                                            name="gender"
                                            value="female"
                                        />
                                        <label for="female" className="mx-2">Female</label>
                                    </div>
                                    {this.state.errorData.errorGender !== "" && (
                                        <div className="errormsg mb-2">
                                            {this.state.errorData.errorGender}
                                        </div>
                                    )}
                                    <div className="form-label-group">
                                        <label htmlFor="pNo">Phone No.</label>
                                        <input
                                            type="text"
                                            id="pNo"
                                            className="form-control text-center"
                                            placeholder="P-No."
                                            name="pNo"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    {this.state.errorData.errorPno !== "" && (
                                        <div className="errormsg mb-2">
                                            {this.state.errorData.errorPno}
                                        </div>
                                    )}
                                    <div className="form-label-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea
                                            id="address"
                                            className="form-control text-center"
                                            placeholder="Address"
                                            name="address"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    {this.state.errorData.errorAddr !== "" && (
                                        <div className="errormsg mb-2">
                                            {this.state.errorData.errorAddr}
                                        </div>
                                    )}
                                    <div className="form-label-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control text-center"
                                            placeholder="Enter password"
                                            name="password"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    {this.state.errorData.errorPassword !== "" && (
                                        <div className="errormsg mb-2">
                                            {this.state.errorData.errorPassword}
                                        </div>
                                    )}
                                    <div className="form-label-group">
                                        <label htmlFor="confirmPwd">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirmPwd"
                                            className="form-control text-center"
                                            placeholder="Repeat password"
                                            name="confirmPwd"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    {this.state.errorData.errorConfirmPwd !== "" && (
                                        <div className="errormsg mb-2">
                                            {this.state.errorData.errorConfirmPwd}
                                        </div>
                                    )}
                                    <div className="login">
                                        <button type="submit" onClick={this.login}>
                                            Register
                    </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RegisterComponent;
