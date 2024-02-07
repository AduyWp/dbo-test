import React, { useState, useEffect } from 'react';
import api from '@/helpers/axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Layout from '@/app/theme/layout';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


function TablePaginationActionsUser(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className="flex">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

function TablePaginationActionsSupplier(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className="flex">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

function TablePaginationActionsOrder(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className="flex">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActionsUser.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

TablePaginationActionsSupplier.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

TablePaginationActionsOrder.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const supplierData = [  
   {  
    "supplierId":"100001530",
    "supplierName":"VILLAGES APARTMENTS",
    "address":"1100 N 6TH ST OFC",
    "city":"WACO",
    "state":"TX",
    "zip":"76707",
    "country":"USA"
   },
   {  
    "supplierId":"100001531",
    "supplierName":"SPRING city ELECTRICAL MANUFACTURING CO",
    "address":"1 S MAIN ST",
    "city":"SPRING city",
    "state":"PA",
    "zip":"19475",
    "country":"USA"
   },
   {  
    "supplierId":"100001532",
    "supplierName":"PIONEER BUILDING MATERIALS INC",
    "address":"321 DENTON AVE",
    "city":"NEW HYDE PARK",
    "state":"NY",
    "zip":"11040",
    "country":"USA"
   },
   {  
    "supplierId":"100001533",
    "supplierName":"FLUID MECHANISMS OF HAUPPAUGE INC",
    "address":"225 ENGINEERS RD",
    "city":"HAUPPAUGE",
    "state":"NY",
    "zip":"11788",
    "country":"USA"
   },
   {  
    "supplierId":"100001534",
    "supplierName":"ART PRECISION METAL PRODUCTS INC",
    "address":"1465 STRONG AVE S",
    "city":"COPIAGUE",
    "state":"NY",
    "zip":"11726",
    "country":"USA"
   },
   {  
    "supplierId":"100001538",
    "supplierName":"ROSENBERG HOUSING GROUP INC",
    "address":"125 E 23RD ST",
    "city":"NEW YORK",
    "state":"NY",
    "zip":"10010",
    "country":"USA"
   },
   {  
    "supplierId":"100001539",
    "supplierName":"STEFAN SYDOR OPTICS INC",
    "address":"31 JET VW DR",
    "city":"ROCHESTER",
    "state":"NY",
    "zip":"14624",
    "country":"USA"
   },
   {  
    "supplierId":"100001540",
    "supplierName":"BUDSGUNSHOP.COM LLC",
    "address":"1105 INDUSTRY RD",
    "city":"LEXINGTON",
    "state":"KY",
    "zip":"40505",
    "country":"USA"
   },
   {  
    "supplierId":"100001541",
    "supplierName":"TEDCO INDUSTRIES INC",
    "address":"4730 HOLLINS FRY RD",
    "city":"HALETHORPE",
    "state":"MD",
    "zip":"21227",
    "country":"USA"
   },
   {  
    "supplierId":"100001542",
    "supplierName":"ALMAG PLATING CORP",
    "address":"1800 CHERRY HL RD",
    "city":"BALTIMORE",
    "state":"MD",
    "zip":"21230",
    "country":"USA"
   }
]

const orderData = [
  {
    "id": "100023",
    "order_id": "OR9921243",
    "kind": "sale",
    "gateway": "manual",
    "status": "pending",
    "message": "Pending the manual payment from the buyer",
    "created_at": "2019-01-02T11:57:43-12:00",
    "user_id": 9,
    "processed_at": "2019-01-02T11:57:43-12:00",
    "receipt": {},
    "source_name": "2632381",
    "amount": "100.00",
    "currency": "USD",
  },
  {
    "id": "100025",
    "order_id": "OR9921244",
    "kind": "sale",
    "gateway": "manual",
    "status": "pending",
    "message": "Pending the manual payment from the buyer",
    "created_at": "2019-01-03T11:57:43-12:00",
    "user_id": 9,
    "processed_at": "2019-01-03T11:57:43-12:00",
    "receipt": {},
    "source_name": "2632381",
    "amount": "50.00",
    "currency": "USD",
  },
  {
    "id": "100026",
    "order_id": "OR9921245",
    "kind": "sale",
    "gateway": "manual",
    "status": "pending",
    "message": "Pending the manual payment from the buyer",
    "created_at": "2019-01-04T11:57:43-12:00",
    "user_id": 9,
    "processed_at": "2019-01-04T11:57:43-12:00",
    "receipt": {},
    "source_name": "2632381",
    "amount": "150.00",
    "currency": "USD",
  },
  {
    "id": "100027",
    "order_id": "OR9921246",
    "kind": "sale",
    "gateway": "manual",
    "status": "pending",
    "message": "Pending the manual payment from the buyer",
    "created_at": "2019-01-05T11:57:43-12:00",
    "user_id": 9,
    "processed_at": "2019-01-05T11:57:43-12:00",
    "receipt": {},
    "source_name": "2632381",
    "amount": "200.00",
    "currency": "USD",
  },
  {
    "id": "100028",
    "order_id": "OR9921247",
    "kind": "sale",
    "gateway": "manual",
    "status": "pending",
    "message": "Pending the manual payment from the buyer",
    "created_at": "2019-01-08T11:57:43-12:00",
    "user_id": 9,
    "processed_at": "2019-01-08T11:57:43-12:00",
    "receipt": {},
    "source_name": "2632381",
    "amount": "200.00",
    "currency": "USD",
  },
  {
    "id": "100029",
    "order_id": "OR9921248",
    "kind": "sale",
    "gateway": "manual",
    "status": "pending",
    "message": "Pending the manual payment from the buyer",
    "created_at": "2019-01-08T11:57:43-12:00",
    "user_id": 9,
    "processed_at": "2019-01-08T11:57:43-12:00",
    "receipt": {},
    "source_name": "2632381",
    "amount": "50.00",
    "currency": "USD",
  }
]

const Core = (props) => {
  const {
      Content,
  } = props;

  const router = useRouter();
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');

  // customer
  const [users, setUsers] = useState([])
  const [total, setTotal] = useState("")
  const [pageUser, setPageUser] = useState(0);
  const [rowsPerPageUser, setRowsPerPageUser] = useState(5);
  const [openCustomerModal, setOpenCustomerModal] = useState(false);
  const [openEditCustomerModal, setOpenEditCustomerModal] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [idUser, setIdUser] = useState();
  const [openConfirmDialog, setOpenConfirmDialog] = useState();

  // supplier
  const [supplier, setSupplier] = useState([])
  const [totalSupplier, setTotalSupplier] = useState("")
  const [pageSupplier, setPageSupplier] = useState(0);
  const [rowsPerPageSupplier, setRowsPerPageSupplier] = useState(5);
  const [openSupplierModal, setOpenSupplierModal] = useState(false);
  const [idSupplier, setIdSupplier] = useState();
  const [openConfirmDialogDeleteSupplier, setOpenConfirmDialogDeleteSupplier] = useState();
  const [editSupplier, setEditSupplier] = useState({});
  const [openEditSupplierModal, setOpenEditSupplierModal] = useState(false);

  // order
  const [order, setOrder] = useState([])
  const [totalOrder, setTotalOrder] = useState("")
  const [pageOrder, setPageOrder] = useState(0);
  const [rowsPerPageOrder, setRowsPerPageOrder] = useState(5);

  
  // Customer
  const fetchData = async () => {
    try {
        const response = await api.get(`/users`);
        if (!response) throw response;
        setUsers(response.data)
        setTotal(response.data.length)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickOpenModalCustomer = () => {
    setOpenCustomerModal(true);
  };

  const handleCloseModalCustomer = () => {
    setOpenCustomerModal(false);
  };

  const handleCloseEditModalCustomer = () => {
    setOpenEditCustomerModal(false);
  };
  
  const handleEdit = (idx, user) => {
    setOpenEditCustomerModal(true);
    setEditUser(user)
  }

  const openDeleteRowNotif = (idx) => {
    setOpenConfirmDialog(true);
    setIdUser(idx);
  }

  const cancelDeleteRowNotif = () => {
      setOpenConfirmDialog(false);
      window.toastMessage({
          open: true,
          text: 'Canceled!',
          variant: 'error',
      });
  };

  const handleChangePageUser = (event, newPage) => {
    setPageUser(newPage);
  };

  const handleChangeRowsPerPageUser = (event) => {
    setRowsPerPageUser(parseInt(event.target.value, 10));
    setPageUser(0);
  };


  // supplier
  const fetchDataSupplier = async () => {
    try {
      setSupplier(supplierData)
      setTotalSupplier(supplierData.length)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickOpenModalSupplier = () => {
    setOpenSupplierModal(true);
  };

  const handleCloseModalSupplier = () => {
    setOpenSupplierModal(false);
  };

  const openDeleteRowNotifSupplier = (idx) => {
    setOpenConfirmDialogDeleteSupplier(true);
    setIdSupplier(idx);
  }

  const cancelDeleteRowNotifSupplier = () => {
      setOpenConfirmDialogDeleteSupplier(false);
      window.toastMessage({
          open: true,
          text: 'Canceled!',
          variant: 'error',
      });
  };

  const handleChangePageSupplier = (event, newPage) => {
    setPageSupplier(newPage);
  };

  const handleChangeRowsPerPageSupplier = (event) => {
    setRowsPerPageSupplier(parseInt(event.target.value, 10));
    setPageSupplier(0);
  };

  const handleCloseEditModalSupplier = () => {
    setOpenEditSupplierModal(false);
  };
  
  const handleEditSupplier = (idx, user) => {
    setOpenEditSupplierModal(true);
    setEditSupplier(user)
  }

  // Order
  const fetchDataOrder = async () => {
    try {
      setOrder(orderData)
      setTotalOrder(orderData.length)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChangePageOrder = (event, newPage) => {
    setPageOrder(newPage);
  };

  const handleChangeRowsPerPageOrder = (event) => {
    setRowsPerPageOrder(parseInt(event.target.value, 10));
    setPageSupplier(0);
  };
  
  // customer formik
  const formik = useFormik({
    initialValues: {
        name: '',
        company_name: '',
        email: '',
        phone: '',
        website: '',
        city: '',
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name required'),
        company_name: Yup.string().required('Company Name required'),
        email: Yup.string().required('Email required'),
        phone: Yup.string().required('Phone required'),
        website: Yup.string().required('Website required'),
        city: Yup.string().required('City required'),
    }),
    onSubmit: (values) => {
      const valueToSubmit = {
        ...values,
      };

      handleSubmit(valueToSubmit);
    },
  });

  const formikEdit = useFormik({
    initialValues: {
        name: '',
        company_name: '',
        email: '',
        phone: '',
        website: '',
        city: '',
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name required'),
        company_name: Yup.string().required('Company Name required'),
        email: Yup.string().required('Email required'),
        phone: Yup.string().required('Phone required'),
        website: Yup.string().required('Website required'),
        city: Yup.string().required('City required'),
    }),
    onSubmit: (values) => {
      const valueToSubmit = {
        ...values,
      };

      handleEditSubmit(valueToSubmit);
    },
  });

  // supplier formik
  const formikSupplier = useFormik({
    initialValues: {
        supplierId: '',
        supplier_name: '',
        address: '',
        city: '',
        country: '',
        state: '',
        zip: '',
    },
    validationSchema: Yup.object().shape({
        supplierId: Yup.string().required('Supplier ID required'),
        supplier_name: Yup.string().required('Supplier Name required'),
        address: Yup.string().required('Address required'),
        city: Yup.string().required('City required'),
        country: Yup.string().required('Country required'),
        state: Yup.string().required('State required'),
        zip: Yup.string().required('zip required'),
    }),
    onSubmit: (values) => {
      const valueToSubmit = {
        ...values,
      };

      handleSubmitSupplier(valueToSubmit);
    },
  });

  const formikEditSupplier = useFormik({
    initialValues: {
        supplierId: '',
        supplier_name: '',
        address: '',
        city: '',
        country: '',
        state: '',
        zip: '',
    },
    validationSchema: Yup.object().shape({
        supplierId: Yup.string().required('Supplier ID required'),
        supplier_name: Yup.string().required('Supplier Name required'),
        address: Yup.string().required('Address required'),
        city: Yup.string().required('City required'),
        country: Yup.string().required('Country required'),
        state: Yup.string().required('State required'),
        zip: Yup.string().required('zip required'),
    }),
    onSubmit: (values) => {
      const valueToSubmit = {
        ...values,
      };

      handleEditSubmitSupplier(valueToSubmit);
    },
  });

  // submit customer
  const handleSubmit = async () => {
    try {
        const response = await api.post('/api/user/add', {
          name: formik.values.name,
          company_name: formik.values.company_name,
          email: formik.values.email,
          website: formik.values.website,
          city: formik.values.city,
        });
        if (!response) throw response;
        if (response.data.message === 'User has been created successfully') {
          window.toastMessage({
            open: true,
            variant: 'success',
            text: response.data.message,
          });
          setTimeout(() => {
            router.push('/dashboard');
          }, 1000);
        } else {
          window.toastMessage({
            open: true,
            variant: 'error',
            text: response.data.message,
          });
        }
    } catch (err) {
      console.log(err)
    }
  };

  const handleEditSubmit = async (e) => {
    try {
        const response = await api.put('/api/customer/edit/' + editUser.id, {
          name: formikEdit.values.name,
          company_name: formikEdit.values.company_name,
          email: formikEdit.values.email,
          website: formikEdit.values.website,
          city: formikEdit.values.city,
        });
        if (!response) throw response;
        if (response.data.message === 'Customer has been updated successfully') {
          window.toastMessage({
            open: true,
            variant: 'success',
            text: response.data.message,
          });
        } else {
          window.toastMessage({
            open: true,
            variant: 'error',
            text: response.data.message,
          });
        }
    } catch (err) {
      console.log(err)
    }
  }

  // submit supplier
  const handleSubmitSupplier = async () => {
    try {
        const response = await api.post('/api/user/add', {
          supplier_id: formikSupplier.values.supplierIdr,
          supplier_name: formikSupplier.values.supplier_name,
          address: formikSupplier.values.address,
          city: formikSupplier.values.city,
          country: formikSupplier.values.country,
          state: formikSupplier.values.state,
          zip: formikSupplier.values.zip,
        });
        if (!response) throw response;
        if (response.data.message === 'Supplier has been created successfully') {
          window.toastMessage({
            open: true,
            variant: 'success',
            text: response.data.message,
          });
          setTimeout(() => {
            router.push('/dashboard');
          }, 1000);
        } else {
          window.toastMessage({
            open: true,
            variant: 'error',
            text: response.data.message,
          });
        }
    } catch (err) {
      console.log(err)
    }
  };

  const handleEditSubmitSupplier = async (e) => {
    try {
        const response = await api.put('/api/supplier/edit/' + editSupplier.supplierId, {
          supplier_id: formikEditSupplier.values.supplierIdr,
          supplier_name: formikEditSupplier.values.supplier_name,
          address: formikEditSupplier.values.address,
          city: formikEditSupplier.values.city,
          country: formikEditSupplier.values.country,
          state: formikEditSupplier.values.state,
          zip: formikEditSupplier.values.zip,
        });
        if (!response) throw response;
        if (response.data.message === 'Supplier has been updated successfully') {
          window.toastMessage({
            open: true,
            variant: 'success',
            text: response.data.message,
          });
        } else {
          window.toastMessage({
            open: true,
            variant: 'error',
            text: response.data.message,
          });
        }
    } catch (err) {
      console.log(err)
    }
  }

  // Delete Customer
  const actionDeleteUser = async (e) => {
    try {
        const response = await api.put('/api/customer/delete-user?user_id=' + idUser);

        if (!response) throw response;
        if (response.data.message === 'Customer has been Deleted successfully') {
          window.toastMessage({
            open: true,
            variant: 'success',
            text: response.data.message,
          });
        } else {
          window.toastMessage({
            open: true,
            variant: 'error',
            text: response.data.message,
          });
        }
    } catch (err) {
      console.log(err)
    }
  }

  // Delete Supplier
  const actionDeleteSupplier = async (e) => {
    try {
        const response = await api.put('/api/customer/delete-supplier?user_id=' + idSupplier);

        if (!response) throw response;
        if (response.data.message === 'Supplier has been Deleted successfully') {
          window.toastMessage({
            open: true,
            variant: 'success',
            text: response.data.message,
          });
        } else {
          window.toastMessage({
            open: true,
            variant: 'error',
            text: response.data.message,
          });
        }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData();
    fetchDataSupplier()
    fetchDataOrder();
  }, []);

  useEffect(() => {
    if (editUser) {
      formikEdit.setFieldValue('name', editUser.name)
      formikEdit.setFieldValue('company_name', editUser?.company?.name)
      formikEdit.setFieldValue('email', editUser.email)
      formikEdit.setFieldValue('phone', editUser.phone)
      formikEdit.setFieldValue('website', editUser.website)
      formikEdit.setFieldValue('city', editUser?.address?.city)
    }
  }, [editUser])

  useEffect(() => {
    console.log(editSupplier)
    if (editSupplier) {
      formikEditSupplier.setFieldValue('supplierId', editSupplier.supplierId)
      formikEditSupplier.setFieldValue('supplier_name', editSupplier.supplierName)
      formikEditSupplier.setFieldValue('address', editSupplier.address)
      formikEditSupplier.setFieldValue('city', editSupplier.city)
      formikEditSupplier.setFieldValue('country', editSupplier.country)
      formikEditSupplier.setFieldValue('state', editSupplier.state)
      formikEditSupplier.setFieldValue('zip', editSupplier.zip)
    }
  }, [editSupplier])

  return (
    <>
      <Layout>
        <Content
          formik={formik}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          // customer
          handleClickOpenModalCustomer={handleClickOpenModalCustomer}
          handleCloseModalCustomer={handleCloseModalCustomer}
          handleCloseEditModalCustomer={handleCloseEditModalCustomer}
          users={users}
          total={total}
          pageUser={pageUser}
          setPageUser={setPageUser}
          rowsPerPageUser={rowsPerPageUser}
          setRowsPerPageUser={setRowsPerPageUser}
          TablePaginationActionsUser={TablePaginationActionsUser}
          formikEdit={formikEdit}
          openCustomerModal={openCustomerModal}
          openEditCustomerModal={openEditCustomerModal}
          handleEdit={handleEdit}
          handleChangePageUser={handleChangePageUser}
          handleChangeRowsPerPageUser={handleChangeRowsPerPageUser}
          openDeleteRowNotif={openDeleteRowNotif}
          cancelDeleteRowNotif={cancelDeleteRowNotif}
          actionDeleteUser={actionDeleteUser}
          openConfirmDialog={openConfirmDialog}
          // supplier
          supplier={supplier}
          TablePaginationActionsSupplier={TablePaginationActionsSupplier}
          totalSupplier={totalSupplier}
          pageSupplier={pageSupplier}
          setPageSupplier={setPageSupplier}
          rowsPerPageSupplier={rowsPerPageSupplier}
          setRowsPerPageSupplier={setRowsPerPageSupplier}
          handleChangePageSupplier={handleChangePageSupplier}
          handleChangeRowsPerPageSupplier={handleChangeRowsPerPageSupplier}
          formikSupplier={formikSupplier}
          openSupplierModal={openSupplierModal}
          handleClickOpenModalSupplier={handleClickOpenModalSupplier}
          handleCloseModalSupplier={handleCloseModalSupplier}
          openDeleteRowNotifSupplier={openDeleteRowNotifSupplier}
          cancelDeleteRowNotifSupplier={cancelDeleteRowNotifSupplier}
          actionDeleteSupplier={actionDeleteSupplier}
          openConfirmDialogDeleteSupplier={openConfirmDialogDeleteSupplier}
          formikEditSupplier={formikEditSupplier}
          handleCloseEditModalSupplier={handleCloseEditModalSupplier}
          handleEditSupplier={handleEditSupplier}
          openEditSupplierModal={openEditSupplierModal}
          // order
          order={order}
          TablePaginationActionsOrder={TablePaginationActionsOrder}
          totalOrder={totalOrder}
          pageOrder={pageOrder}
          setPageOrder={setPageOrder}
          rowsPerPageOrder={rowsPerPageOrder}
          setRowsPerPageOrder={setRowsPerPageOrder}
          handleChangePageOrder={handleChangePageOrder}
          handleChangeRowsPerPageOrder={handleChangeRowsPerPageOrder}
        />
      </Layout>
    </>
   );

};

export default Core;