import React, { useState } from "react";

import {
    Grid,
    TextField,
    Button,
    IconButton,
    CircularProgress,
    MenuItem,
} from "@mui/material";

import {
    AddPhotoAlternate,
    Close as CloseIcon,
} from "@mui/icons-material";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../../../State/Store";
import { createProduct } from "../../../State/seller/sellerProductSlice";
import { menLevelTwo } from "../../../data/category/level_two/menLevelTwo";
import { womenLevelTwo } from "../../../data/category/level_two/womenLevelTwo";
import { electroniclevelTwo } from "../../../data/category/level_two/electroniclevelTwo";
import { furnitureLevelTwo } from "../../../data/category/level_two/furnitureLevelTwo";
import { menLevelThree } from "../../../data/category/level_three/menLevelThree";
import { womenLevelThree } from "../../../data/category/level_three/womenLevelThree";
import { electroniclevelThree } from "../../../data/category/level_three/electroniclevelThree";
import { furnitureLevelThree } from "../../../data/category/level_three/furnitureLevelThree";
import { colors } from "../../../data/filter/colors";
import { rootCategory } from "../../../data/category/mainCategory";



const productSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    mrpPrice: Yup.number()
        .required("MRP price is required")
        .positive("Price must be greater than 0"),
    sellingPrice: Yup.number()
        .required("Selling price is required")
        .positive("Price must be greater than 0"),
    color: Yup.string().required("Color is required"),
    sizes: Yup.string().required("Size is required"),
    category: Yup.string().required("Category is required"),
    secondCategory: Yup.string().required("Second category is required"),
    thirdCategory: Yup.string().required("Third category is required"),
});

const AddProduct = () => {

    const [uploadImage, setUploadImage] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            images: [],
            title: "",
            description: "",
            mrpPrice: "",
            sellingPrice: "",
            color: "",
            sizes: "",
            category: "",
            category2: "",
            category3: "",
        },

        // validationSchema: productSchema,

        onSubmit: (values) => {
            console.log("Product Form Submitted");
            console.log(values);

            dispatch(
                createProduct({
                    request: values,
                    jwt: localStorage.getItem("jwt"),
                })
            );
        },
    });

    const handleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;

        setUploadImage(true);

        setTimeout(() => {
            const imageUrl = URL.createObjectURL(file);

            formik.setFieldValue("images", [
                ...formik.values.images,
                imageUrl,
            ]);

            setUploadImage(false);
        }, 500);
    };

    const handleRemoveImage = (index: number) => {
        const updatedImages = formik.values.images.filter(
            (_, i) => i !== index
        );

        formik.setFieldValue("images", updatedImages);
    };

    /*
     * SECOND CATEGORY
     */
    const getSecondCategories = () => {

        switch (formik.values.category) {

            case "men":
                return menLevelTwo;

            case "women":
                return womenLevelTwo;

            case "electronics":
                return electroniclevelTwo;

            case "home_furniture":
                return furnitureLevelTwo;

            default:
                return [];
        }
    };

    /*
     * THIRD CATEGORY
     */
    const getThirdCategories = () => {

        switch (formik.values.category) {

            case "men":
                return menLevelThree;

            case "women":
                return womenLevelThree;

            case "electronics":
                return electroniclevelThree;

            case "home_furniture":
                return furnitureLevelThree;

            default:
                return [];
        }
    };

    return (
        <div className="w-full">

            <form
                className="space-y-5 p-4 md:p-6"
                onSubmit={formik.handleSubmit}
            >

                <Grid container spacing={2.5}>

                    {/* Images */}

                    <Grid size={{ xs: 12 }}>

                        <div className="flex flex-wrap gap-3">

                            <label
                                htmlFor="fileInput"
                                className="relative"
                            >

                                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-300 hover:border-primary hover:bg-gray-50 transition">

                                    <AddPhotoAlternate className="text-gray-600" />

                                </span>

                                {uploadImage && (

                                    <div className="absolute inset-0 w-24 h-24 flex justify-center items-center bg-white/70 rounded-md">

                                        <CircularProgress size={25} />

                                    </div>

                                )}

                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                id="fileInput"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                            />

                            <div className="flex flex-wrap gap-3">

                                {formik.values.images.map((image, index) => (

                                    <div
                                        className="relative"
                                        key={index}
                                    >

                                        <img
                                            className="w-24 h-24 object-cover rounded-md border"
                                            src={image}
                                            alt={`productImage-${index + 1}`}
                                        />

                                        <IconButton
                                            onClick={() => handleRemoveImage(index)}
                                            size="small"
                                            color="error"
                                            sx={{
                                                position: "absolute",
                                                top: 2,
                                                right: 2,
                                                backgroundColor: "white",
                                                "&:hover": {
                                                    backgroundColor: "#f5f5f5",
                                                },
                                            }}
                                        >

                                            <CloseIcon
                                                sx={{ fontSize: "1rem" }}
                                            />

                                        </IconButton>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </Grid>

                    {/* Title */}

                    <Grid size={{ xs: 12 }}>

                        <TextField
                            fullWidth
                            id="title"
                            name="title"
                            label="Title *"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.title &&
                                Boolean(formik.errors.title)
                            }
                            helperText={
                                formik.touched.title &&
                                formik.errors.title
                            }
                        />

                    </Grid>

                    {/* Description */}

                    <Grid size={{ xs: 12 }}>

                        <TextField
                            multiline
                            rows={4}
                            fullWidth
                            id="description"
                            name="description"
                            label="Description *"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.description &&
                                Boolean(formik.errors.description)
                            }
                            helperText={
                                formik.touched.description &&
                                formik.errors.description
                            }
                        />

                    </Grid>

                    {/* MRP Price */}

                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                        <TextField
                            fullWidth
                            id="mrpPrice"
                            name="mrpPrice"
                            label="MRP Price *"
                            type="number"
                            value={formik.values.mrpPrice}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.mrpPrice &&
                                Boolean(formik.errors.mrpPrice)
                            }
                            helperText={
                                formik.touched.mrpPrice &&
                                formik.errors.mrpPrice
                            }
                        />

                    </Grid>

                    {/* Selling Price */}

                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                        <TextField
                            fullWidth
                            id="sellingPrice"
                            name="sellingPrice"
                            label="Selling Price *"
                            type="number"
                            value={formik.values.sellingPrice}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.sellingPrice &&
                                Boolean(formik.errors.sellingPrice)
                            }
                            helperText={
                                formik.touched.sellingPrice &&
                                formik.errors.sellingPrice
                            }
                        />

                    </Grid>

                    {/* Color */}

                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                        <TextField
                            select
                            fullWidth
                            id="color"
                            name="color"
                            label="Color *"
                            value={formik.values.color}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.color &&
                                Boolean(formik.errors.color)
                            }
                            helperText={
                                formik.touched.color &&
                                formik.errors.color
                            }
                        >

                            {colors.map((color: any) => (

                                <MenuItem
                                    key={color.name}
                                    value={color.name}
                                >

                                    {color.name}

                                </MenuItem>

                            ))}

                        </TextField>

                    </Grid>

                    {/* Sizes */}

                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                        <TextField
                            select
                            fullWidth
                            id="sizes"
                            name="sizes"
                            label="Sizes *"
                            value={formik.values.sizes}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.sizes &&
                                Boolean(formik.errors.sizes)
                            }
                            helperText={
                                formik.touched.sizes &&
                                formik.errors.sizes
                            }
                        >

                            <MenuItem value="S">S</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                            <MenuItem value="XXL">XXL</MenuItem>

                        </TextField>

                    </Grid>

                    {/* Category */}

                    <Grid size={{ xs: 12, md: 4 }}>

                        <TextField
                            select
                            fullWidth
                            id="category"
                            name="category"
                            label="Category *"
                            value={formik.values.category}
                            onChange={(event) => {

                                formik.handleChange(event);

                                formik.setFieldValue(
                                    "secondCategory",
                                    ""
                                );

                                formik.setFieldValue(
                                    "thirdCategory",
                                    ""
                                );

                            }}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.category &&
                                Boolean(formik.errors.category)
                            }
                            helperText={
                                formik.touched.category &&
                                formik.errors.category
                            }
                        >

                            {rootCategory.map((category: any) => (

                                <MenuItem
                                    key={category.categoryId}
                                    value={category.categoryId}
                                >

                                    {category.name}

                                </MenuItem>

                            ))}

                        </TextField>

                    </Grid>

                    {/* Second Category */}

                    <Grid size={{ xs: 12, md: 4 }}>

                        <TextField
                            select
                            fullWidth
                            id="category2"
                            name="category2"
                            label="Second Category *"
                            value={formik.values.category2}
                            onChange={(event) => {

                                formik.handleChange(event);

                                formik.setFieldValue(
                                    "thirdCategory",
                                    ""
                                );

                            }}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.category2 &&
                                Boolean(formik.errors.category2)
                            }
                            helperText={
                                formik.touched.category2 &&
                                formik.errors.category2
                            }
                        >

                            {getSecondCategories().map((category: any) => (

                                <MenuItem
                                    key={category.categoryId}
                                    value={category.categoryId}
                                >

                                    {category.name}

                                </MenuItem>

                            ))}

                        </TextField>

                    </Grid>

                    {/* Third Category */}

                    <Grid size={{ xs: 12, md: 4 }}>

                        <TextField
                            select
                            fullWidth
                            id="category3"
                            name="category3"
                            label="Third Category *"
                            value={formik.values.category3}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.category3 &&
                                Boolean(formik.errors.category3)
                            }
                            helperText={
                                formik.touched.category3 &&
                                formik.errors.category3
                            }
                        >

                            {getThirdCategories()
                                .filter(
                                    (category: any) =>
                                        category.parentCategoryId ===
                                        formik.values.category2
                                )
                                .map((category: any) => (

                                    <MenuItem
                                        key={category.categoryId}
                                        value={category.categoryId}
                                    >

                                        {category.name}

                                    </MenuItem>

                                ))}

                        </TextField>

                    </Grid>

                    {/* Submit */}

                    <Grid size={{ xs: 12 }}>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                py: 1.5,
                                backgroundColor: "#009879",
                                fontWeight: "bold",
                                "&:hover": {
                                    backgroundColor: "#007f67",
                                },
                            }}
                        >

                            ADD PRODUCT

                        </Button>

                    </Grid>

                </Grid>

            </form>

        </div>
    );
};

export default AddProduct;