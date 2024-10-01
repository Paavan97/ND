import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Layout from "../Components/Global/Layout";
import Footer from "../Components/Global/Footer";

interface FormValues {
  name: string;
  company: string;
  address: string;
  cityProvince: string;
  country: string;
  phone: string;
  email: string;
  identity: string[];
  products: string[];
  comments: string;
}

const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const productNames = [
    "Snacks",
    "Spices",
    "Edible Oils",
    "Baked Goods",
    "Blended Spices",
    "Pulses & Grains",
    "Beverages",
    "Instant Mixes",
    "Flours",
    "Sauces & Syrups",
    "RTE Foods",
    "Pickles",
    "Condiments",
    "Miscellaneous",
    "Tea & Coffee",
  ];

  const RoleName = ["Importer", "Supermarkets", "Supplier"];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your Name is required"),
    company: Yup.string().required("Your Company Name is required"),
    address: Yup.string(),
    cityProvince: Yup.string(),
    country: Yup.string(),
    phone: Yup.string(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    identity: Yup.array().min(1, "Role is required"),
    products: Yup.array().min(1, "Products are required"),
    comments: Yup.string(),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      company: "",
      address: "",
      cityProvince: "",
      country: "",
      phone: "",
      email: "",
      identity: [],
      products: [],
      comments: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: FormValues) => {
      const formattedValues = {
        ...values,
        identity: values.identity.join(", "),
        products: values.products.join(", "),
      };

      try {
        const response = await emailjs.send(
          "service_1yvgbhp",
          "template_ai6jwhu",
          formattedValues,
          "VechTS5YlLmurwtzw"
        );
        console.log(response);
        toast.success("Email sent successfully!");
        formik.resetForm();
        navigate("/");
      } catch (error) {
        toast.error("Failed to send email. Please try again later.");
      }
    },
  });

  const handleRoleCheck = (role: string) => {
    formik.setFieldValue(
      "identity",
      formik.values.identity.includes(role)
        ? formik.values.identity.filter((item) => item !== role)
        : [...formik.values.identity, role]
    );
  };

  const handleCheckboxChange = (productName: string) => {
    formik.setFieldValue(
      "products",
      formik.values.products.includes(productName)
        ? formik.values.products.filter((item) => item !== productName)
        : [...formik.values.products, productName]
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <ToastContainer />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to bottom, #674422, #FAEADD)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            bgcolor: "#FAEADD",
            height: "30vh",
            display: "flex",
            borderRadius: "0 0 50% 50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" sx={{ color: "#7DAF19" }}>
              Contact Us
            </Typography>
            {/* <Box sx={{ color: "#4C180A", display: "flex" }}>
              <Link className="nav-link" to="/">
                Home
              </Link>
              {" / "}
              <Typography component="span" sx={{ color: "#4C180A" }}>
                Why Us
              </Typography>
            </Box> */}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            ref={formRef}
            style={{ width: "80%", marginTop: "60px" }}
          >
            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{
                backgroundColor: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(3px)",
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Company Name"
                  name="company"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.company && Boolean(formik.errors.company)
                  }
                  helperText={formik.touched.company && formik.errors.company}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="City & Province"
                  name="cityProvince"
                  value={formik.values.cityProvince}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Phone no."
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="#7DAF19">
                  I Am (Identity Who you are)
                </Typography>
                <Grid container spacing={2} justifyContent="start">
                  {RoleName.map((role) => (
                    <Grid item key={role}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="identity"
                            checked={formik.values.identity.includes(role)}
                            onChange={() => handleRoleCheck(role)}
                          />
                        }
                        label={role}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="#7DAF19">
                  Products Interested In:
                </Typography>
                <Grid container spacing={2}>
                  {productNames.map((productName) => (
                    <Grid item xs={12} md={4} key={productName}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="products"
                            checked={formik.values.products.includes(
                              productName
                            )}
                            onChange={() => handleCheckboxChange(productName)}
                          />
                        }
                        label={productName}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Comments"
                  name="comments"
                  value={formik.values.comments}
                  onChange={formik.handleChange}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#7DAF19",
                    "&: hover": {
                      backgroundColor: "#674422",
                    },
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <Footer />
    </Layout>
  );
};

export default ContactUs;
