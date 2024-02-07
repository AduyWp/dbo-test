import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useStyles from './style';
import classNames from 'classnames';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Table, TableHead, TableRow, TableBody, TableCell, TableContainer, TablePagination, Paper,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import moment from "moment";
import ScrollDialog from '@/commons/ScrollDialog';
import ConfirmDialog from '@/commons/ConfirmDialog';
import Button from '@/commons/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';

const getComponentOrString = (param) => (typeof param === 'function' ? param() : param);

const generateColumnTable = (data) => {
  const keys = Object.keys(data[0]).map((value) => ({ id: value, label: value.replaceAll('_', ' ') }));
  return keys;
};

const Home = (props) => {
  const {
    formik,
    formikEdit,
    formikSupplier,
    fullWidth,
    maxWidth,
    // customer
    users,
    total,
    pageUser,
    setPageUser,
    rowsPerPageUser,
    setRowsPerPageUser,
    TablePaginationActionsUser,
    handleClickOpenModalCustomer,
    handleCloseModalCustomer,
    handleCloseEditModalCustomer,
    handleEdit,
    handleChangePageUser,
    handleChangeRowsPerPageUser,
    // supplier
    supplier,
    TablePaginationActionsSupplier,
    totalSupplier,
    pageSupplier,
    setPageSupplier,
    rowsPerPageSupplier,
    setRowsPerPageSupplier,
    openSupplierModal,
    handleClickOpenModalSupplier,
    handleCloseModalSupplier,
    handleChangePageSupplier,
    handleChangeRowsPerPageSupplier,
    formikEditSupplier,
    openEditSupplierModal,
    handleCloseEditModalSupplier,
    handleEditSupplier,
    // order
    order,
    TablePaginationActionsOrder,
    totalOrder,
    pageOrder,
    setPageOrder,
    rowsPerPageOrder,
    setRowsPerPageOrder,
    openCustomerModal,
    openEditCustomerModal,
    handleChangePageOrder,
    handleChangeRowsPerPageOrder,
    // delete
    openDeleteRowNotif,
    cancelDeleteRowNotif,
    actionDeleteUser,
    openConfirmDialog,
    openDeleteRowNotifSupplier,
    cancelDeleteRowNotifSupplier,
    actionDeleteSupplier,
    openConfirmDialogDeleteSupplier
  } = props;

  const styles = useStyles();
  const router = useRouter();

  const columns = [
      { field: 'name', headerName: 'Name', hideable: true, initialSort: 'ASC', sortable: true },
      { field: 'company_name', headerName: 'Company Name', hideable: true, },
      { field: 'email', headerName: 'Email', hideable: true, },
      { field: 'phone', headerName: 'Phone', hideable: true, },
      { field: 'website', headerName: 'Website', hideable: true },
      { field: 'address', headerName: 'Address', hideable: true },
      { field: 'actions', headerName: 'Actions', hideable: true },
  ];

  const rows = users.map((user) => ({
    ...user,
    name: user.name,
    company_name: user.company.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
    address: user.address.street +' '+ user.address.suite +', '+ user.address.city +', '+ user.address.zipcode,
    actions: () => (
      <>
        <div className={styles.flex}>
          <ScrollDialog
            title="Details Customer"
            linkText="Details"
            message={(
              <>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Name</p>
                  <p>{user.name}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Username</p>
                  <p>{user.username}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Email</p>
                  <p>{user.email}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Phone</p>
                  <p>{user.phone}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">website</p>
                  <p>{user.website}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Company Name</p>
                  <p>{user.company.name}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Address</p>
                  <p>{user.address.city}</p>
                </div>
              </>
            )}
          />
          <IconButton 
            color="secondary" 
            component="span" 
            className={styles.marginLeft}
            onClick={() => handleEdit(user.id, user)}
          >
            <EditIcon />
          </IconButton>
          <IconButton 
            color="secondary" 
            component="span"
            onClick={() => openDeleteRowNotif(user.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </>
    ),
  }));

  const columnsSupplier = [
      { field: 'supplier_id', headerName: 'Supplier ID', hideable: true, initialSort: 'ASC', sortable: true },
      { field: 'supplier_name', headerName: 'Supplier Name', hideable: true, },
      { field: 'city', headerName: 'City', hideable: true, },
      { field: 'country', headerName: 'Country', hideable: true, },
      { field: 'actions', headerName: 'Actions', hideable: true },
  ];

  const rowsSupplier = supplier.map((data) => ({
    ...data,
    supplier_id: data.supplierId,
    supplier_name: data.supplierName,
    city: data.city,
    country: data.country,
    actions: () => (
      <>
        <div className={styles.flex}>
          <ScrollDialog
            title="Details Supplier"
            linkText="Details"
            message={(
              <>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Supplier Id</p>
                  <p>{data.supplierId}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Supplier Name</p>
                  <p>{data.supplierName}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Address</p>
                  <p>{data.address}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">City</p>
                  <p>{data.city}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">State</p>
                  <p>{data.state}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Postal Code</p>
                  <p>{data.zip}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Country</p>
                  <p>{data.country}</p>
                </div>
              </>
            )}
          />
          <IconButton 
            color="secondary" 
            component="span" 
            className={styles.marginLeft}
            onClick={() => handleEditSupplier(data.supplierId, data)}
          >
            <EditIcon />
          </IconButton>
          <IconButton 
            color="secondary" 
            component="span"
            onClick={() => openDeleteRowNotifSupplier(data.supplierId)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </>
    ),
  }));

  const columnsOrder = [
      { field: 'order_id', headerName: 'Supplier ID', hideable: true, initialSort: 'ASC', sortable: true },
      { field: 'status', headerName: 'Status', hideable: true, },
      { field: 'amount', headerName: 'Amount', hideable: true, },
      { field: 'created_at', headerName: 'Purchase At', hideable: true, },
      { field: 'processed_at', headerName: 'Process At', hideable: true, },
      { field: 'actions', headerName: 'Actions', hideable: true },
  ];

  const rowsOrder = order.map((data) => ({
    ...data,
    order_id: data.order_id,
    status: data.status,
    amount: data.amount,
    created_at: moment(data.created_at).format("DD MMMM YYYY"),
    processed_at: moment(data.processed_at).format("DD MMMM YYYY"),
    actions: () => (
      <>
        <div className={styles.flex}>
          <ScrollDialog
            title="Details Order"
            linkText="Details"
            message={(
              <>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Order Id</p>
                  <p>{data.order_id}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Status</p>
                  <p>{data.status}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">message</p>
                  <p>{data.message}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Created At</p>
                  <p>{moment(data.created_at).format("DD MMMM YYYY")}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Processed At</p>
                  <p>{moment(data.processed_at).format("DD MMMM YYYY")}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Amount</p>
                  <p>{data.amount}</p>
                </div>
                <div className="grid gap-4 grid-cols-2 mb-2">
                  <p className="font-semibold">Currency</p>
                  <p>{data.currency}</p>
                </div>
              </>
            )}
          />
        </div>
      </>
    ),
  }));

  // table styling
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  // pagination
  const emptyRowsUser = rowsPerPageUser - Math.min(rowsPerPageUser, rows.length - pageUser * rowsPerPageUser);
  const emptyRowsSupplier = rowsPerPageSupplier - Math.min(rowsPerPageSupplier, rowsSupplier.length - pageSupplier * rowsPerPageSupplier);
  const emptyRowsOrder = rowsPerPageOrder - Math.min(rowsPerPageOrder, rowsOrder.length - pageOrder * setRowsPerPageOrder);

  return (
    <>
      <main className={classNames(styles.background, 'min-h-screen')}>
        <div className="lg:p-10 md:p-10 p-5">
          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-3">
            <Card className={classNames(styles.backgroundBox, 'px-4 py-3')}>
              <CardContent>
                <Typography className={classNames(styles.boxTitle, 'text-white')} align="center" component="h2" variant="h5">
                  Total Customer
                </Typography>
                <Typography className="text-white" align="center" component="p" variant="h4">
                  {total}
                </Typography>
              </CardContent>
            </Card>
            <Card className={classNames(styles.backgroundBox, 'px-4 py-3')}>
              <CardContent>
                <Typography className={classNames(styles.boxTitle, 'text-white')} align="center" component="h2" variant="h5">
                  Total Supplier
                </Typography>
                <Typography className="text-white" align="center" component="p" variant="h4">
                  {totalSupplier}
                </Typography>
              </CardContent>
            </Card>
            <Card className={classNames(styles.backgroundBox, 'px-4 py-3')}>
              <CardContent>
                <Typography className={classNames(styles.boxTitle, 'text-white')} align="center" component="h2" variant="h5">
                  Total Order
                </Typography>
                <Typography className="text-white" align="center" component="p" variant="h4">
                  {totalOrder}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10">
            <div className="flex items-ccecnter justify-between mb-5">
              <h2 className="text-2xl font-semibold text-left">
                Customer
              </h2>
              <Button className={styles.button} color="primary" onClick={handleClickOpenModalCustomer}>
                Add Customer
              </Button>
              <Dialog
                open={openCustomerModal}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
              >
                <DialogTitle id="alert-dialog-slide-title">Add Customer</DialogTitle>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <TextField 
                        id="outlined-adornment-password"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange} 
                        className={classNames(styles.margin, "w-full rounded")} 
                        placeholder="Enter Name"
                        error={!!(formik.touched.name && formik.errors.name)}
                        helperText={(formik.touched.name && formik.errors.name) || ''}
                      />
                      <TextField 
                        id="outlined-adornment-password"
                        name="company_name"
                        value={formik.values.company_name}
                        onChange={formik.handleChange} 
                        className={classNames(styles.margin, "w-full rounded")}
                        placeholder="Enter Company Name"
                        error={!!(formik.touched.company_name && formik.errors.company_name)}
                        helperText={(formik.touched.company_name && formik.errors.company_name) || ''}
                      />
                      <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                        <TextField 
                          id="outlined-adornment-password"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange} 
                          className={classNames(styles.margin, "w-full rounded")}
                          placeholder="Enter Email"
                          error={!!(formik.touched.email && formik.errors.email)}
                          helperText={(formik.touched.email && formik.errors.email) || ''}
                        />
                        <TextField 
                          id="outlined-adornment-password"
                          name="phone"
                          type="number"
                          value={formik.values.phone}
                          onChange={formik.handleChange} 
                          className={classNames(styles.margin, "w-full rounded")}
                          placeholder="Enter Phone Number"
                          error={!!(formik.touched.phone && formik.errors.phone)}
                          helperText={(formik.touched.phone && formik.errors.phone) || ''}
                        />
                      </div>
                      <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                        <TextField 
                          id="outlined-adornment-password"
                          name="website"
                          value={formik.values.website}
                          onChange={formik.handleChange} 
                          className={classNames(styles.margin, "w-full rounded")}
                          placeholder="Enter Website"
                          error={!!(formik.touched.website && formik.errors.website)}
                          helperText={(formik.touched.website && formik.errors.website) || ''}
                        />
                        <TextField 
                          id="outlined-adornment-password"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange} 
                          className={classNames(styles.margin, "w-full rounded")}
                          placeholder="Enter City"
                          error={!!(formik.touched.city && formik.errors.city)}
                          helperText={(formik.touched.city && formik.errors.city) || ''}
                        />
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseModalCustomer} color="primary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      Save
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns.map((column, columnIndex) => (
                        <TableCell key={columnIndex} style={{ whiteSpace: 'nowrap' }} className={styles.fontBold}>
                          {column.headerName}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {(rowsPerPageUser > 0
                      ? rows.slice(pageUser * rowsPerPageUser, pageUser * rowsPerPageUser + rowsPerPageUser)
                      : rows
                    ).map((row, rowIndex) => (
                      <StyledTableRow
                          key={rowIndex}
                      >
                        {columns.map((column, columnIndex) => (
                            <TableCell key={columnIndex}>
                                {getComponentOrString(row[column.field]) || '-'}
                            </TableCell>
                        ))}
                      </StyledTableRow>
                    ))}

                    {emptyRowsUser > 0 && (
                      <TableRow style={{ height: 53 * emptyRowsUser }}>
                        <TableCell colSpan={7} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPageUser}
                page={pageUser}
                onPageChange={handleChangePageUser}
                onRowsPerPageChange={handleChangeRowsPerPageUser}
                ActionsComponent={TablePaginationActionsUser}
              />
            </Paper>
          </div>
          <div className="mt-10 lg:grid lg:gap-4 lg:grid-cols-2 md:grid-cols-1">
            <div>
              <div className="flex items-ccecnter justify-between mb-5">
                <h2 className="text-2xl font-semibold text-left">
                  Supplier
                </h2>
                <Button className={styles.button} color="primary" onClick={handleClickOpenModalSupplier}>
                  Add Supplier
                </Button>
                <Dialog
                  open={openSupplierModal}
                  fullWidth={fullWidth}
                  maxWidth={maxWidth}
                >
                  <DialogTitle id="alert-dialog-slide-title">Add Supplier</DialogTitle>
                  <form onSubmit={formikSupplier.handleSubmit} className={styles.form}>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description">
                        <TextField 
                          id="outlined-adornment-password"
                          name="supplierId"
                          value={formikSupplier.values.supplierId}
                          onChange={formikSupplier.handleChange} 
                          className={classNames(styles.margin, "w-full rounded")} 
                          placeholder="Enter Supplier ID"
                          error={!!(formikSupplier.touched.supplierId && formikSupplier.errors.supplierId)}
                          helperText={(formikSupplier.touched.supplierId && formikSupplier.errors.supplierId) || ''}
                        />
                        <TextField 
                          id="outlined-adornment-password"
                          name="supplier_name"
                          value={formikSupplier.values.supplier_name}
                          onChange={formikSupplier.handleChange} 
                          className={classNames(styles.margin, "w-full rounded")}
                          placeholder="Enter Supplier Name"
                          error={!!(formikSupplier.touched.supplier_name && formikSupplier.errors.supplier_name)}
                          helperText={(formikSupplier.touched.supplier_name && formikSupplier.errors.supplier_name) || ''}
                        />
                        <TextField 
                          id="outlined-adornment-password"
                          name="address"
                          value={formikSupplier.values.address}
                          onChange={formikSupplier.handleChange} 
                          className={classNames(styles.margin, "w-full rounded")}
                          placeholder="Enter Address"
                          error={!!(formikSupplier.touched.address && formikSupplier.errors.address)}
                          helperText={(formikSupplier.touched.address && formikSupplier.errors.address) || ''}
                        />
                        <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                          <TextField 
                            id="outlined-adornment-password"
                            name="city"
                            value={formikSupplier.values.city}
                            onChange={formikSupplier.handleChange} 
                            className={classNames(styles.margin, "w-full rounded")}
                            placeholder="Enter City"
                            error={!!(formikSupplier.touched.city && formikSupplier.errors.city)}
                            helperText={(formikSupplier.touched.city && formikSupplier.errors.city) || ''}
                          />
                          <TextField 
                            id="outlined-adornment-password"
                            name="country"
                            value={formikSupplier.values.country}
                            onChange={formikSupplier.handleChange} 
                            className={classNames(styles.margin, "w-full rounded")}
                            placeholder="Enter Country"
                            error={!!(formikSupplier.touched.country && formikSupplier.errors.country)}
                            helperText={(formikSupplier.touched.country && formikSupplier.errors.country) || ''}
                          />
                        </div>
                        <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                          <TextField 
                            id="outlined-adornment-password"
                            name="state"
                            value={formikSupplier.values.state}
                            onChange={formikSupplier.handleChange} 
                            className={classNames(styles.margin, "w-full rounded")}
                            placeholder="Enter State"
                            error={!!(formikSupplier.touched.state && formikSupplier.errors.state)}
                            helperText={(formikSupplier.touched.state && formikSupplier.errors.state) || ''}
                          />
                          <TextField 
                            id="outlined-adornment-password"
                            name="zip"
                            value={formikSupplier.values.zip}
                            onChange={formikSupplier.handleChange} 
                            className={classNames(styles.margin, "w-full rounded")}
                            placeholder="Enter Postal Code"
                            error={!!(formikSupplier.touched.zip && formikSupplier.errors.zip)}
                            helperText={(formikSupplier.touched.zip && formikSupplier.errors.zip) || ''}
                          />
                        </div>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseModalSupplier} color="primary">
                        Cancel
                      </Button>
                      <Button type="submit" color="primary">
                        Save
                      </Button>
                    </DialogActions>
                  </form>
                </Dialog>
              </div>
              <Paper>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {columnsSupplier.map((column, columnIndex) => (
                          <TableCell key={columnIndex} style={{ whiteSpace: 'nowrap' }} className={styles.fontBold}>
                            {column.headerName}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {(rowsPerPageSupplier > 0
                        ? rowsSupplier.slice(pageSupplier * rowsPerPageSupplier, pageSupplier * rowsPerPageSupplier + rowsPerPageSupplier)
                        : rowsSupplier
                      ).map((row, rowIndex) => (
                        <StyledTableRow
                            key={rowIndex}
                        >
                          {columnsSupplier.map((column, columnIndex) => (
                              <TableCell key={columnIndex}>
                                  {getComponentOrString(row[column.field]) || '-'}
                              </TableCell>
                          ))}
                        </StyledTableRow>
                      ))}

                      {emptyRowsSupplier > 0 && (
                        <TableRow style={{ height: 53 * emptyRowsSupplier }}>
                          <TableCell colSpan={5} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15]}
                  component="div"
                  count={rowsSupplier.length}
                  rowsPerPage={rowsPerPageSupplier}
                  page={pageSupplier}
                  onPageChange={handleChangePageSupplier}
                  onRowsPerPageChange={handleChangeRowsPerPageSupplier}
                  ActionsComponent={TablePaginationActionsSupplier}
                />
              </Paper>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-2xl font-semibold mb-5 text-left">
                Order
              </h2>
              <Paper>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {columnsOrder.map((column, columnIndex) => (
                          <TableCell key={columnIndex} style={{ whiteSpace: 'nowrap' }} className={styles.fontBold}>
                            {column.headerName}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {(rowsPerPageOrder > 0
                        ? rowsOrder.slice(pageOrder * rowsPerPageOrder, pageOrder * rowsPerPageOrder + rowsPerPageOrder)
                        : rowsOrder
                      ).map((row, rowIndex) => (
                        <StyledTableRow
                            key={rowIndex}
                        >
                          {columnsOrder.map((column, columnIndex) => (
                              <TableCell key={columnIndex}>
                                  {getComponentOrString(row[column.field]) || '-'}
                              </TableCell>
                          ))}
                        </StyledTableRow>
                      ))}

                      {emptyRowsOrder > 0 && (
                        <TableRow style={{ height: 53 * emptyRowsOrder }}>
                          <TableCell colSpan={5} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15]}
                  component="div"
                  count={rowsOrder.length}
                  rowsPerPage={rowsPerPageOrder}
                  page={pageOrder}
                  onPageChange={handleChangePageOrder}
                  onRowsPerPageChange={handleChangeRowsPerPageOrder}
                  ActionsComponent={TablePaginationActionsOrder}
                />
              </Paper>
            </div>
          </div>
        </div>
        {/*customer*/}
        <Dialog
          open={openEditCustomerModal}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
        >
          <DialogTitle id="alert-dialog-slide-title">Edit Customer</DialogTitle>
          <form onSubmit={formikEdit.handleSubmit} className={styles.form}>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <TextField 
                  id="outlined-adornment-password"
                  name="name"
                  value={formikEdit.values.name}
                  onChange={formikEdit.handleChange} 
                  className={classNames(styles.margin, "w-full rounded")} 
                  placeholder="Enter Name"
                  error={!!(formikEdit.touched.name && formikEdit.errors.name)}
                  helperText={(formikEdit.touched.name && formikEdit.errors.name) || ''}
                />
                <TextField 
                  id="outlined-adornment-password"
                  name="company_name"
                  value={formikEdit.values.company_name}
                  onChange={formikEdit.handleChange} 
                  className={classNames(styles.margin, "w-full rounded")}
                  placeholder="Enter Company Name"
                  error={!!(formikEdit.touched.company_name && formikEdit.errors.company_name)}
                  helperText={(formikEdit.touched.company_name && formikEdit.errors.company_name) || ''}
                />
                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                  <TextField 
                    id="outlined-adornment-password"
                    name="email"
                    value={formikEdit.values.email}
                    onChange={formikEdit.handleChange} 
                    className={classNames(styles.margin, "w-full rounded")}
                    placeholder="Enter Email"
                    error={!!(formikEdit.touched.email && formikEdit.errors.email)}
                    helperText={(formikEdit.touched.email && formikEdit.errors.email) || ''}
                  />
                  <TextField 
                    id="outlined-adornment-password"
                    name="phone"
                    value={formikEdit.values.phone}
                    onChange={formikEdit.handleChange} 
                    className={classNames(styles.margin, "w-full rounded")}
                    placeholder="Enter Phone Number"
                    error={!!(formikEdit.touched.phone && formikEdit.errors.phone)}
                    helperText={(formikEdit.touched.phone && formikEdit.errors.phone) || ''}
                  />
                </div>
                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                  <TextField 
                    id="outlined-adornment-password"
                    name="website"
                    value={formikEdit.values.website}
                    onChange={formikEdit.handleChange} 
                    className={classNames(styles.margin, "w-full rounded")}
                    placeholder="Enter Website"
                    error={!!(formikEdit.touched.website && formikEdit.errors.website)}
                    helperText={(formikEdit.touched.website && formikEdit.errors.website) || ''}
                  />
                  <TextField 
                    id="outlined-adornment-password"
                    name="city"
                    value={formikEdit.values.city}
                    onChange={formikEdit.handleChange} 
                    className={classNames(styles.margin, "w-full rounded")}
                    placeholder="Enter City"
                    error={!!(formikEdit.touched.city && formikEdit.errors.city)}
                    helperText={(formikEdit.touched.city && formikEdit.errors.city) || ''}
                  />
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEditModalCustomer} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        <ConfirmDialog
          open={openConfirmDialog}
          onCancel={() => cancelDeleteRowNotif()}
          onConfirm={() => actionDeleteUser()}
          title="Confirmation"
          message="Are you sure want to delete selected items? (1 record)"
        />

        {/*supplier*/}
        <Dialog
          open={openEditSupplierModal}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
        >
          <DialogTitle id="alert-dialog-slide-title">Edit Supplier</DialogTitle>
          <form onSubmit={formikEditSupplier.handleSubmit} className={styles.form}>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <TextField 
                  id="outlined-adornment-password"
                  name="supplierId"
                  value={formikEditSupplier.values.supplierId}
                  onChange={formikEditSupplier.handleChange} 
                  className={classNames(styles.margin, "w-full rounded")} 
                  placeholder="Enter Supplier ID"
                  error={!!(formikEditSupplier.touched.supplierId && formikEditSupplier.errors.supplierId)}
                  helperText={(formikEditSupplier.touched.supplierId && formikEditSupplier.errors.supplierId) || ''}
                />
                <TextField 
                  id="outlined-adornment-password"
                  name="supplier_name"
                  value={formikEditSupplier.values.supplier_name}
                  onChange={formikEditSupplier.handleChange} 
                  className={classNames(styles.margin, "w-full rounded")}
                  placeholder="Enter Supplier Name"
                  error={!!(formikEditSupplier.touched.supplier_name && formikEditSupplier.errors.supplier_name)}
                  helperText={(formikEditSupplier.touched.supplier_name && formikEditSupplier.errors.supplier_name) || ''}
                />
                <TextField 
                  id="outlined-adornment-password"
                  name="address"
                  value={formikEditSupplier.values.address}
                  onChange={formikEditSupplier.handleChange} 
                  className={classNames(styles.margin, "w-full rounded")}
                  placeholder="Enter Address"
                  error={!!(formikEditSupplier.touched.address && formikEditSupplier.errors.address)}
                  helperText={(formikEditSupplier.touched.address && formikEditSupplier.errors.address) || ''}
                />
                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                  <TextField 
                    id="outlined-adornment-password"
                    name="city"
                    value={formikEditSupplier.values.city}
                    onChange={formikEditSupplier.handleChange} 
                    className={classNames(styles.margin, "w-full rounded")}
                    placeholder="Enter City"
                    error={!!(formikEditSupplier.touched.city && formikEditSupplier.errors.city)}
                    helperText={(formikEditSupplier.touched.city && formikEditSupplier.errors.city) || ''}
                  />
                  <TextField 
                    id="outlined-adornment-password"
                    name="country"
                    value={formikEditSupplier.values.country}
                    onChange={formikEditSupplier.handleChange} 
                    className={classNames(styles.margin, "w-full rounded")}
                    placeholder="Enter Country"
                    error={!!(formikEditSupplier.touched.country && formikEditSupplier.errors.country)}
                    helperText={(formikEditSupplier.touched.country && formikEditSupplier.errors.country) || ''}
                  />
                </div>
                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                  <TextField 
                    id="outlined-adornment-password"
                    name="state"
                    value={formikEditSupplier.values.state}
                    onChange={formikEditSupplier.handleChange} 
                    className={classNames(styles.margin, "w-full rounded")}
                    placeholder="Enter State"
                    error={!!(formikEditSupplier.touched.state && formikEditSupplier.errors.state)}
                    helperText={(formikEditSupplier.touched.state && formikEditSupplier.errors.state) || ''}
                  />
                  <TextField 
                    id="outlined-adornment-password"
                    name="zip"
                    value={formikEditSupplier.values.zip}
                    onChange={formikEditSupplier.handleChange} 
                    className={classNames(styles.margin, "w-full rounded")}
                    placeholder="Enter Postal Code"
                    error={!!(formikEditSupplier.touched.zip && formikEditSupplier.errors.zip)}
                    helperText={(formikEditSupplier.touched.zip && formikEditSupplier.errors.zip) || ''}
                  />
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEditModalSupplier} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        <ConfirmDialog
          open={openConfirmDialogDeleteSupplier}
          onCancel={() => cancelDeleteRowNotifSupplier()}
          onConfirm={() => actionDeleteSupplier()}
          title="Confirmation"
          message="Are you sure want to delete selected items? (1 record)"
        />
      </main>
    </>
  );
}

export default Home;