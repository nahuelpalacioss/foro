import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/foro/foroSlice";

export const PostFormPage = () => {

    /* Quitarlo */

    //States

    const [title, setTitle] = useState("");

    const [textArea, setTextArea] = useState("");

    //Dispatch
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Fun

    const onTitleChange = ({target}) => {

        setTitle(target.value);

    };

    const onTextAreaChange = ({target}) => {

        setTextArea(target.value);

    }

    const onHandleSubmit = () => {

        event.preventDefault();

        dispatch(addNewPost({ title, textArea }));

        navigate('/', { replace: true} );

    }

    return (
        
        <div className="container mt-3">
            <form>
                <div className="form-group">
                    <label htmlFor="formControlTitle">Título del post</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="formControlTitle"
                        onChange={ onTitleChange } 
                        value={ title }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formControlTextarea">Contenido del post</label>
                    <textarea 
                        className="form-control" 
                        id="formControlTextarea" 
                        rows="3"
                        onChange={ onTextAreaChange }
                        value={ textArea }
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={ onHandleSubmit }
                >   Submit  </button>
            </form>
        </div>
        
    )

}
