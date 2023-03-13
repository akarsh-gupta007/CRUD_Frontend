import React, { useEffect, useState } from 'react'
import axios from "axios";
// import "./App.css";
import { useNavigate } from "react-router-dom"
// // import { useParams } from 'react-router-dom';
// const Alldetail = () => {
// const navigate = useNavigate();
// const [storedata, setStoredata] = useState([]);


// useEffect(() => {
//     axios.get("https://backend-api-murex.vercel.app/getalldetails")
//         .then((res) => res.data)
//         .then(res => { setStoredata(res) })
// }, [storedata])
// // console.log(storedata)
// // consz
// const deletemanyfunc = () => {
//     alert("All The Data Will be Deleted");
//     fetch('https://backend-api-murex.vercel.app/deletemany', {
//         method: 'DELETE'
//     })
//         .then((response) => response.json())
// }
// const deletefunc = (id) => {
//     console.log(id)
//     alert("All The Data Will be Deleted");
//     fetch(`https://backend-api-murex.vercel.app/delete/${id}`, {
//         method: 'DELETE'
//     })
//         .then((response) => response.json())
//         // .then(res => { setStoredata(res) })
// }



//     return (

//         <div className='main_div' >
// <div className='second_div'>
//     <h1 className='head'>All Users Details</h1>
//     <button className='btn' onClick={deletemanyfunc}>Delete the all the user</button>
//     <button className='btn' onClick={() => { navigate("/") }} >Goback</button>
// </div>
//             <div className='tableflex'>
//             <table className="table table-hover table-dark" >
//                 <thead>
//                 <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Ranking</th>
//                     <th scope="col">Email I'D</th>
//                     <th scope="col">Stack</th>

//                     <th scope="col">Delete</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {storedata.map((e) => {
//                     return (
//                         <tr key={e._id}>
//                             <td>{e.name}</td>
//                             <td>{e.ranking}</td>
//                             <td>{e.email}</td>
//                             <td>{e.tech}</td>

//                             <td><button className='btn1' onClick={() => { deletefunc(e._id.toString()) }}>Delete</button></td>
//                         </tr>

//                     )

//                 })}


//                 </tbody>
//             </table>

//             </div>

//         </div>
//     )
// }

// export default Alldetail



import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


export default function Alldetail() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));



    const navigate = useNavigate();
    const [storedata, setStoredata] = useState([]);


    useEffect(() => {
        axios.get("https://backend-api-murex.vercel.app/getalldetails")
            .then((res) => res.data)
            .then(res => { setStoredata(res) })
    }, [storedata])
    // console.log(storedata)
    // consz
    const deletemanyfunc = () => {
        alert("All The Data Will be Deleted");
        fetch('https://backend-api-murex.vercel.app/deletemany', {
            method: 'DELETE'
        })
            .then((response) => response.json())
    }
    const deletefunc = (id) => {
        console.log(id)
        alert("All The Data Will be Deleted");
        fetch(`https://backend-api-murex.vercel.app/delete/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
        // .then(res => { setStoredata(res) })
    }

    return (

        <div className='main_div1'>
            <div className='main_div' >


                <div className='second_div'>
                    <h1 className='head'>All Users Details</h1>
                    <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                    >
                        <Button className='btn' onClick={() => { navigate("/") }} >Goback</Button>
                        <Button className='btn' onClick={deletemanyfunc}>Delete ALL</Button>
                    </ButtonGroup>

                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 50 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                {/* <StyledTableCell >Email</StyledTableCell> */}
                                <StyledTableCell >Rating</StyledTableCell>
                                <StyledTableCell >Tech</StyledTableCell>
                                <StyledTableCell >Delete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {storedata.map((row) => (
                                <StyledTableRow key={row._id}>
                                    {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
                                    <StyledTableCell >{row.name}</StyledTableCell>
                                    {/* <StyledTableCell >{row.email}</StyledTableCell> */}
                                    <StyledTableCell >{row.ranking}</StyledTableCell>
                                    <StyledTableCell >{row.tech}</StyledTableCell>
                                    <StyledTableCell ><button className='btn1' onClick={() => { deletefunc(row._id.toString()) }}>Delete</button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </div>
    );
}
