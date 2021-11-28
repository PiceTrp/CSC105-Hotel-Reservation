import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import axios from "../utils/axios";
import qs from "qs";

// const rows = [
//     {
//         rooms: "P101,P102",
//         checkin: 1620864000000,
//         price: 0,
//         checkout: 1620950400000,
//     },
//     {
//         rooms: "E208",
//         checkin: 1621900800000,
//         price: 19800,
//         checkout: 1622073600000,
//     },
// ];

const useStyles = makeStyles({
    root: {
        width: "100%",
        boxShadow: "5px 10px 18px #888888",
        marginBottom: "50px",
    },
    container: {
        maxHeight: "440px",
        overflow: "hidden",
        //marginTop: "130px",
    },
});

const UserTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = useState([]);

    const handleHistory = async () => {
        const user = await axios.get("http://localhost:8080/history");
        if (user.data.success) {
            setRows(user.data.list);
            console.log(user.data);
        } else {
            alert("Server error.");
        }
    };

    useEffect(() => {
        handleHistory();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div
            style={{
                backgroundColor: "#fafafa",
                height: "1000px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "1px",
                        height: "40px",
                        backgroundColor: "#877249",
                        marginTop: "130px",
                    }}
                ></div>
                <p
                    style={{
                        fontFamily: "Cinzel Decorative",
                        color: "black",
                        fontSize: "28px",
                    }}
                >
                    Booking History
                </p>
                <div
                    style={{
                        width: "1px",
                        height: "40px",
                        backgroundColor: "#877249",
                        marginBottom: "20px",
                    }}
                ></div>
            </div>

            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Rooms</TableCell>
                                <TableCell>Check-in</TableCell>
                                <TableCell>Check-out</TableCell>
                                <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row) => {
                                    return (
                                        <TableRow hover tabIndex={-1}>
                                            <TableCell>{row.rooms}</TableCell>
                                            <TableCell>
                                                {new moment(row.checkin).format(
                                                    "LL"
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {new moment(
                                                    row.checkout
                                                ).format("LL")}
                                            </TableCell>
                                            <TableCell>{row.price}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default UserTable;
