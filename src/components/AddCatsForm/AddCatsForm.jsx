// import { useState } from "react";
// import db, { collection, addDoc } from "../../utils/Firebase";

const AddCatsForm = () => {

    // const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    // const [description, setDescription] = useState("");
    // const [images, setImages] = useState([]);
    // const [videos, setVideos] = useState([]);

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // };

    // const handleGenderChange = (event) => {
    //     setGender(event.target.value);
    // };

    // const handleDescriptionChange = (event) => {
    //     setDescription(event.target.value);
    // };

    // const handleImageChange = (event) => {
    //     const newImages = [...images, event.target.files[0]];
    //     setImages(newImages);
    // };

    // const handleVideoChange = (event) => {
    //     const newVideos = [...videos, event.target.files[0]];
    //     setVideos(newVideos);
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const newCat = {
    //         name,
    //         gender,
    //         description,
    //         images: [],
    //         videos: [],
    //     };

    //     const catRef = await addDoc(collection(db, "adopted"), newCat);

    //     const storageRef = storage.ref();
    //     const promises = [];

    //     images.forEach((image) => {
    //         const imageRef = storageRef.child(`cats/${catRef.id}/images/${image.name}`);
    //         const uploadTask = imageRef.put(image);
    //         promises.push(uploadTask);
    //         uploadTask.on(
    //             "state_changed",
    //             null,
    //             (error) => console.error(error),
    //             () => {
    //                 uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //                     newCat.images.push(downloadURL);
    //                     if (newCat.images.length === images.length && newCat.videos.length === videos.length) {
    //                         catRef.update(newCat);
    //                     }
    //                 });
    //             }
    //         );
    //     });

        return (
            <div>

            </div>
        )
    }

    export default AddCatsForm