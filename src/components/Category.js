import React, { useState } from "react";
import TvShow from "./TvShow";
import TvShowForm from "./TvShowForm";
import uniqid from "uniqid";

function Category(props) {

    const [showForm, setShowForm] = useState(0); 

    const changeShowForm = (num) => {
        setShowForm(num);
    }    

    const showTvShows = props.tvShowList.map(tvShow => {
        if (tvShow.categoryName === props.name) {
            return (
                <li className="tvShowList" key={uniqid()}>
                    <TvShow 
                        name={tvShow.name} 
                        genre={tvShow.genre} 
                        platform={tvShow.platform} 
                        description = {tvShow.description}
                        length = {tvShow.length}
                        categoryName={tvShow.categoryName}
                        tvShowList={props.tvShowList}
                        index={tvShow.index}
                        removeTvShow={props.removeTvShow}
                    />
                </li>
            );
        }
    });

    const showTvShowForm = () => {
        if (showForm === 1) {
            return (
                <TvShowForm 
                    changeShowForm={changeShowForm} 
                    categoryName={props.name} 
                    addTvShow={props.addTvShow} 
                    tvShowList={props.tvShowList}
                    toggle={props.toggle}
                />
            );
        }
    }

    const toggleForm = () => {
        if (showForm === 1) setShowForm(0);
        else if (showForm === 0) setShowForm(1);
    }

    return (
        <div>
            <div className="addButtonContainer">
                <button className="addButton" onClick={toggleForm}>+</button>
            </div>
            {showTvShowForm()}
            <ul className="tvShowContainer">{showTvShows}</ul>
        </div>
    );
}

export default Category;