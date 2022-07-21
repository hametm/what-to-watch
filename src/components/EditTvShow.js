import React, { useState, useEffect } from "react";

function EditTvShow(props) {
    const [name, setName] = useState(props.name);
    const [genre, setGenre] = useState(props.genre);
    const [platform, setPlatform] = useState(props.platform);
    const [description, setDescription] = useState(props.description);
    const [length, setLength] = useState(props.length);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handlePlatformChange = (e) => {
        setPlatform(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleLengthChange = (e) => {
        setLength(e.target.value);
    }

    const buttonClick = (e) => {
        e.preventDefault();
        props.onEditClick(name, genre, platform, description, length);
        editTvShow();
    }

    useEffect(() => {
        checkForErrors();
    });

    const checkForErrors = () => {
        const submitButton = document.getElementById("tvShowEdit");
        if (name === "") submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    const editTvShow = () => {
        for (let i = 0; i < props.tvShowList.length; i++) {
            let tvShow = props.tvShowList[i];
            if (tvShow.index === props.index) {
                tvShow.name = name;
                tvShow.genre = genre;
                tvShow.platform = platform;
                tvShow.description = description;
                tvShow.length = length;
            }
        }
    }

    return (
        <form action="">
            <legend>Edit TvShow</legend>
            <label htmlFor="tvShowName">Name</label>
            <input type="text" id="tvShowName" onChange={handleNameChange} value={name} />
            <label htmlFor="tvShowGenre">Genre</label>
            <input type="text" id="tvShowGenre" onChange={handleGenreChange} value={name} />
            <label htmlFor="platform">Streaming platform</label>
            <input type="platform" id="platform" onChange={handlePlatformChange} value={platform} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" onChange={handleDescriptionChange} value={description}  />
            <label htmlFor="length">Length</label>
            <input type="text" id="length" onChange={handleLengthChange} value={length} />
            <input type ="submit" id="tvShowEdit" onClick={buttonClick} />
        </form>
      );
}

export default EditTvShow;