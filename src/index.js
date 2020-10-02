import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useFormik} from 'formik';

const validateEmployee=empInfo=>{
    const errors = {};

    if(!empInfo.Name)
    {
        errors.Name="Please enter Employee Name";
    }

    else if(empInfo.Name.length>20)
    {
        errors.Name = "Employee Name should not exceed 20 characters";
    }

    if(!empInfo.Designation)
    {
        errors.Designation="Please enter Designation";
    }

    if(!empInfo.Salary)
    {
        errors.Salary="Please enter Salary";
    }

    return errors;
}

const Shane=()=>{
    const formik = useFormik({
        initialValues:{
            Id:'',
            Name:'',
            Designation:'',
            Salary:''
        },
        validate:validateEmployee,
        onSubmit:values=>
        {
            alert(JSON.stringify(values));
        }
    })

    return (
        <div>

          <form onSubmit={formik.handleSubmit}>
<p>
    <label htmlFor="Id">Employee Id</label>
    <input type="text" id="Id" name = "Id" value={formik.values.Id} onChange={formik.handleChange}></input>
</p>

<p>
    <label htmlFor="Name">Employee Name</label>
    <input type="text" id="Name" name = "Name" value={formik.values.Name} onChange={formik.handleChange}
    onBlur={formik.handleBlur}></input>
    {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}> {formik.errors.Name}</span> : null}
</p>

<p>
    <label htmlFor="Designation">Designation</label>
    <input type="text" id="Designation" name = "Designation" value={formik.values.Designation} 
    onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
    {formik.touched.Designation && formik.errors.Designation ? <span style={{color:'red'}}>{formik.errors.Designation} </span> : null}
</p>

<p>
    <label htmlFor="Salary">Salary</label>
    <input type="text" id="Salary" name = "Salary" value={formik.values.Salary} onChange={formik.handleChange}
    onBlur={formik.handleBlur}></input>
    {formik.touched.Salary && formik.errors.Salary ?  <span style={{color:'red'}}> { formik.errors.Salary} </span> : null}
</p>

<button type="submit">Create</button>
          </form>

        </div>
    )
}

const element = <Shane></Shane>;
ReactDOM.render(element,document.getElementById("root"));