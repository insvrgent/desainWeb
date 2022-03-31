import React from "react";
import AlertProps from '../component/alert_props'
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
        type: "",
        a : 0.0,
        b : 0.0,
        c : null,
        hasil: "",
        hitung: "bmi",
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  hitung = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
    if(this.state.hitung === "bmi"){
      this.state.bmi =  this.state.a / ( this.state.b / 100 *  this.state.b / 100);
      let status;
      let tipe;
      if (this.state.bmi < 18.5) {
        status = "kurang";
        tipe = "warning";
      } else if (this.state.bmi >= 18.5 && this.state.bmi < 23) {
        status = "normal";
        tipe = "success";
      } else if (this.state.bmi >= 23 && this.state.bmi < 25) {
        status = "kelebihan dikit";
        tipe = "warning";
      } else if (this.state.bmi >= 25 && this.state.bmi < 30) {
          status = "obesitas tingkat 1";
          tipe = "danger";
      } else if (this.state.bmi >= 30.0) {
        status = "obesitas tingkat 2";
        tipe = "danger";
      }
      this.setState({
        hasil: status,
        type: tipe,
      });
    }
    else if(this.state.hitung === "cicilan"){
      this.setState({
        hasil:  (this.state.a / Number(this.state.c)) + (this.state.a * (this.state.b/100)) / Number(this.state.c).toString(),
        type: "success"
      });
    }
    else if(this.state.hitung === "harga"){
      this.setState({
        hasil:  this.state.a -  ((this.state.a * (this.state.c / 100)) - ( this.state.a * (this.state.b / 100))),
        type: "success"
      });
    }
    else if(this.state.hitung === "biner"){
      this.setState({type: "success"});
      if(this.state.c === "oktal") this.setState({hasil:  parseInt(Number(this.state.a), 2).toString(8)});
      if(this.state.c === "hex") this.setState({hasil:  parseInt(Number(this.state.a), 2).toString(16).toUpperCase(8)});
      if(this.state.c === "desimal") this.setState({hasil:  parseInt(Number(this.state.a), 2)});
      
    }
    else if(this.state.hitung === "oktal"){
      this.setState({type: "success"});
      if(this.state.c === "hex") this.setState({hasil:  parseInt(Number(this.state.a), 8).toString(16).toUpperCase()});
      if(this.state.c === "desimal") this.setState({hasil:  parseInt(Number(this.state.a), 8)});
      if(this.state.c === "biner") this.setState({hasil:  parseInt(Number(this.state.a), 8).toString(2)});
      
    }
    else if(this.state.hitung === "desimal"){
      this.setState({type: "success"});
      if(this.state.c === "hex") this.setState({hasil:  parseInt(Number(this.state.a)).toString(16).toUpperCase()});
      if(this.state.c === "biner") this.setState({hasil:  parseInt(Number(this.state.a)).toString(2)});
      if(this.state.c === "oktal") this.setState({hasil:  parseInt(Number(this.state.a)).toString(8)});
      
    }
    else if(this.state.hitung === "hex"){
      this.setState({type: "success"});
      if(this.state.c === "biner") this.setState({hasil:  parseInt(this.state.a,16).toString(2)});
      if(this.state.c === "oktal") this.setState({hasil:  parseInt(this.state.a,16).toString(8)});
      if(this.state.c === "desimal") this.setState({hasil:  parseInt(this.state.a,16)});
      
    }
  }
  };
  render() {
      if(this.state.hitung === "bmi")
        return (
        <div className="container mt-3">
          <div className="row mt-3">
            <div className="col-4">
              <select className="form-control" name="hitung" value = {this.state.hitung} onChange={this.handleChange}>
                <option value="bmi">BMI</option>
                <option value="cicilan">CICILAN</option>
                <option value="harga">HARGA</option>
                <option value="biner">BINER</option>
                <option value="oktal">OKTAL</option>
                <option value="desimal">DESIMAL</option>
                      <option value="hex">HEX</option>
              </select>
                <div>
                    <input type="text" name="a" className="form-control" placeholder="berat" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                    <input type="text" name="b" className="form-control" placeholder="tinggi" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                    <AlertProps type={this.state.type} title = {this.state.bmi}>{this.state.hasil}</AlertProps>
                </div>
              </div>
            </div>
        </div>
        );
        else if(this.state.hitung === "cicilan")
        return (
          <div className="container mt-3">
            <div className="row mt-3">
              <div className="col-4">
              <select className="form-control" name="hitung" value = {this.state.hitung} onChange={this.handleChange}>
                <option value="bmi">BMI</option>
                <option value="cicilan">CICILAN</option>
                <option value="harga">HARGA</option>
                <option value="biner">BINER</option>
                <option value="oktal">OKTAL</option>
                <option value="desimal">DESIMAL</option>
                <option value="hex">HEX</option>
              </select>
              <div>
                  <input type="text" name="a" className="form-control" placeholder="nominal" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                  <input type="text" name="b" className="form-control" placeholder="bunga" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                  <select className="form-control" name="c" value = {this.state.c}  onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <AlertProps type={this.state.type} title = {this.state.hasil}></AlertProps>
              </div>
              </div>
              </div>
        </div>
        );
        else if(this.state.hitung === "harga")
        return (
          <div className="container mt-3">
            <div className="row mt-3">
              <div className="col-4">
                <select className="form-control" name="hitung" value = {this.state.hitung} onChange={this.handleChange}>
                  <option value="bmi">BMI</option>
                  <option value="cicilan">CICILAN</option>
                  <option value="harga">HARGA</option>
                  <option value="biner">BINER</option>
                  <option value="oktal">OKTAL</option>
                  <option value="desimal">DESIMAL</option>
                  <option value="hex">HEX</option>
                </select>
                <div>
                    <input type="text" name="a" className="form-control" placeholder="harga" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                    <input type="text" name="b" className="form-control" placeholder="ppn" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                    <input type="text" name="c" className="form-control" placeholder="diskon" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                    <AlertProps type={this.state.type} title = {this.state.hasil}></AlertProps>
                </div>
              </div>
            </div>
        </div>
        );
        
        else if(this.state.hitung === "biner")
        return (
          <div className="container mt-3">
            <div className="row mt-3">
              <div className="col-4">
                <select className="form-control" name="hitung" value = {this.state.hitung} onChange={this.handleChange}>
                  <option value="bmi">BMI</option>
                  <option value="cicilan">CICILAN</option>
                  <option value="harga">HARGA</option>
                  <option value="biner">BINER</option>
                  <option value="oktal">OKTAL</option>
                  <option value="desimal">DESIMAL</option>
                  <option value="hex">HEX</option>
                </select>
                <div>
                    <input type="text" name="a" className="form-control" placeholder="biner" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                    <select className="form-control" name="c" value = {this.state.c}  onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)}>
                      <option></option>
                      <option value="oktal">oktal</option>
                      <option value="hex">hex</option>
                      <option value="desimal">desimal</option>
                    </select>
                    <AlertProps type={this.state.type} title = {this.state.hasil}></AlertProps>
                </div>
              </div>
            </div>
        </div>
        );

        else if(this.state.hitung === "oktal")
        return (
          <div className="container mt-3">
            <div className="row mt-3">
              <div className="col-4">
                <select className="form-control" name="hitung" value = {this.state.hitung} onChange={this.handleChange}>
                  <option value="bmi">BMI</option>
                  <option value="cicilan">CICILAN</option>
                  <option value="harga">HARGA</option>
                  <option value="biner">BINER</option>
                  <option value="oktal">OKTAL</option>
                  <option value="desimal">DESIMAL</option>
                  <option value="hex">HEX</option>
                </select>
                <div>
                    <input type="text" name="a" className="form-control" placeholder="biner" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                    <select className="form-control" name="c" value = {this.state.c}  onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)}>
                      <option></option>
                      <option value="hex">hex</option>
                      <option value="desimal">desimal</option>
                      <option value="biner">biner</option>
                    </select>
                    <AlertProps type={this.state.type} title = {this.state.hasil}></AlertProps>
                </div>
              </div>
            </div>
        </div>
        );
        else if(this.state.hitung === "desimal")
        return (
          <div className="container mt-3">
            <div className="row mt-3">
              <div className="col-4">
                <select className="form-control" name="hitung" value = {this.state.hitung} onChange={this.handleChange}>
                  <option value="bmi">BMI</option>
                  <option value="cicilan">CICILAN</option>
                  <option value="harga">HARGA</option>
                  <option value="biner">BINER</option>
                  <option value="oktal">OKTAL</option>
                  <option value="desimal">DESIMAL</option>
                  <option value="hex">HEX</option>
                </select>
                <div>
                    <input type="text" name="a" className="form-control" placeholder="biner" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                    <select className="form-control" name="c" value = {this.state.c}  onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)}>
                      <option></option>
                      <option value="hex">hex</option>
                      <option value="biner">biner</option>
                      <option value="oktal">oktal</option>
                    </select>
                    <AlertProps type={this.state.type} title = {this.state.hasil}></AlertProps>
                </div>
              </div>
            </div>
        </div>
        );
        else if(this.state.hitung === "hex")
        return (
          <div className="container mt-3">
            <div className="row mt-3">
              <div className="col-4">
                <select className="form-control" name="hitung" value = {this.state.hitung} onChange={this.handleChange}>
                  <option value="bmi">BMI</option>
                  <option value="cicilan">CICILAN</option>
                  <option value="harga">HARGA</option>
                  <option value="biner">BINER</option>
                  <option value="oktal">OKTAL</option>
                  <option value="desimal">DESIMAL</option>
                  <option value="hex">HEX</option>
                </select>
                <div>
                    <input type="text" name="a" className="form-control" placeholder="biner" onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)} />
                    <select className="form-control" name="c" value = {this.state.c}  onChange={this.handleChange} onKeyUp={(e) => this.hitung(e)}>
                      <option></option>
                      <option value="biner">biner</option>
                      <option value="oktal">oktal</option>
                      <option value="desimal">desimal</option>
                    </select>
                    <AlertProps type={this.state.type} title = {this.state.hasil}></AlertProps>
                </div>
                
              </div>
              
            </div>
        </div>
        );
  }
}